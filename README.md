# Valdick Portfolio + Agente Val

## Estrutura

```text
valdick-portfolio/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server/
│   ├── server.js
│   └── config/
│       └── agente-val.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 1. Instalar

Tenha Node.js instalado e rode:

```bash
npm install
```

## 2. Configurar a chave

Copie:

```text
.env.example
```

para:

```text
.env
```

Depois coloque sua chave:

```env
OPENAI_API_KEY=sua_chave_aqui
```

Não coloque a chave no `index.html` ou `script.js`.

## 3. Personalizar o Agente Val

Edite:

```text
server/config/agente-val.js
```

Esse é o arquivo principal para você escrever o que quer que o agente saiba e como ele deve responder.

Não coloque esse arquivo dentro de `public/`.

## 4. Rodar

```bash
npm start
```

Abra:

```text
http://localhost:3000
```

## 5. Limites

Por padrão:

- 20 mensagens por janela;
- janela de 1 hora;
- máximo de 500 caracteres por pergunta;
- histórico enviado ao modelo limitado às últimas 8 mensagens.

Para alterar:

```env
LIMIT_MESSAGES=20
LIMIT_WINDOW_MS=3600000
MAX_MESSAGE_LENGTH=500
```

## Importante sobre o limite

O rate limit deste exemplo fica na memória do processo. Ele é adequado para começar com um único servidor.

Se o site crescer e rodar em vários servidores/processos, substitua o `Map` de `server.js` por um armazenamento compartilhado, como Redis.

## Segurança

A chave da API fica somente no backend.

O frontend chama:

```text
POST /api/chat
```

O backend adiciona o prompt privado e chama a API.

Nenhuma proteção de prompt é absoluta: modelos podem ser pressionados por tentativas de prompt injection. Por isso, o controle real do conteúdo privado é feito principalmente pela arquitetura: o arquivo e a chave não são enviados ao navegador.

## Links pessoais

No `public/index.html`, substitua:

- `https://github.com/seu-usuario`
- `https://linkedin.com/in/seu-usuario`
- `mailto:seu@email.com`
- `https://wa.me/55SEUNUMERO`

pelos seus links reais.
