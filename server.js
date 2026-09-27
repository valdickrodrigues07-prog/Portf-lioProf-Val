require("dotenv").config();

const express = require("express");
const path = require("path");
const crypto = require("crypto");
const OpenAI = require("openai");
const agenteVal = require("./config/agente-val");

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.OPENAI_API_KEY) {
  console.error("ERRO: defina OPENAI_API_KEY no arquivo .env");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.set("trust proxy", 1);
app.use(express.json({ limit: "20kb" }));

/*
  Identificação anônima.
  O cookie não guarda dados pessoais; ele só identifica o navegador
  para o rate limit.
*/
app.use((req, res, next) => {
  let id = req.get("x-visitor-id");

  if (!id || !/^[a-f0-9-]{20,80}$/i.test(id)) {
    id = crypto.randomUUID();
  }

  res.setHeader("X-Visitor-ID", id);
  req.visitorId = id;
  next();
});

/*
  Rate limit em memória.
  Para um único servidor é suficiente como ponto de partida.
  Em produção com vários servidores, troque por Redis/serviço equivalente.
*/
const usage = new Map();

const LIMIT_MESSAGES = Number(process.env.LIMIT_MESSAGES || 20);
const WINDOW_MS = Number(process.env.LIMIT_WINDOW_MS || 60 * 60 * 1000);
const MAX_MESSAGE_LENGTH = Number(process.env.MAX_MESSAGE_LENGTH || 500);
const MAX_HISTORY = 8;

function getKey(req) {
  const ip = (req.ip || "unknown").replace(/^::ffff:/, "");
  return `${req.visitorId}:${ip}`;
}

function checkRateLimit(req) {
  const now = Date.now();
  const key = getKey(req);
  let item = usage.get(key);

  if (!item || now - item.startedAt >= WINDOW_MS) {
    item = { startedAt: now, count: 0 };
  }

  if (item.count >= LIMIT_MESSAGES) {
    usage.set(key, item);
    return {
      allowed: false,
      retryAfter: Math.ceil((WINDOW_MS - (now - item.startedAt)) / 1000)
    };
  }

  item.count += 1;
  usage.set(key, item);

  return {
    allowed: true,
    remaining: LIMIT_MESSAGES - item.count
  };
}

/* Limpa registros antigos para o Map não crescer indefinidamente. */
setInterval(() => {
  const now = Date.now();

  for (const [key, item] of usage.entries()) {
    if (now - item.startedAt >= WINDOW_MS) {
      usage.delete(key);
    }
  }
}, 10 * 60 * 1000).unref();

app.post("/api/chat", async (req, res) => {
  try {
    const message = typeof req.body?.message === "string"
      ? req.body.message.trim()
      : "";

    if (!message) {
      return res.status(400).json({
        error: "Digite uma pergunta."
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `A pergunta deve ter no máximo ${MAX_MESSAGE_LENGTH} caracteres.`
      });
    }

    const rate = checkRateLimit(req);

    if (!rate.allowed) {
      res.setHeader("Retry-After", rate.retryAfter);
      return res.status(429).json({
        error: `Limite atingido. Tente novamente em aproximadamente ${Math.ceil(rate.retryAfter / 60)} minuto(s).`
      });
    }

    const history = Array.isArray(req.body?.history)
      ? req.body.history
          .filter(item =>
            item &&
            (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string"
          )
          .slice(-MAX_HISTORY)
      : [];

    const input = [
      ...history,
      { role: "user", content: message }
    ];

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      instructions: agenteVal,
      input,
      max_output_tokens: 220
    });

    const reply = response.output_text?.trim();

    if (!reply) {
      return res.status(502).json({
        error: "A IA não retornou uma resposta válida."
      });
    }

    res.setHeader("X-RateLimit-Remaining", String(rate.remaining));

    return res.json({
      reply
    });
  } catch (error) {
    console.error("Erro no Agente Val:", error);

    return res.status(500).json({
      error: "O Agente Val encontrou um erro temporário. Tente novamente."
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Valdick Portfolio rodando em http://localhost:${PORT}`);
});
