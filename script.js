const roles = ["Full Stack Developer", "Educador na Microlins", "Criador de conteúdo"];
const el = document.getElementById("roleLine");
let ri = 0, ci = 0, deleting = false;

function tick() {
  const word = roles[ri];
  el.textContent = "";
  el.append(document.createTextNode(word.slice(0, ci)));
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.style.height = "1em";
  el.appendChild(cursor);

  if (!deleting && ci < word.length) { ci++; setTimeout(tick, 55); }
  else if (!deleting) { deleting = true; setTimeout(tick, 1400); }
  else if (ci > 0) { ci--; setTimeout(tick, 30); }
  else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 200); }
}
tick();

function openPage(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("page-" + id).style.display = "block";
  window.scrollTo(0, 0);
}
function goHome() {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById("home").style.display = "";
  window.scrollTo(0, 0);
}
function toggleFabMenu() {
  document.getElementById("fabMenu").classList.toggle("open");
  document.querySelector(".fab").classList.toggle("active");
}
function openModal(id) {
  document.getElementById("fabMenu").classList.remove("open");
  document.querySelector(".fab").classList.remove("active");
  document.getElementById("modal-" + id).classList.add("open");
  if (id === "term") setTimeout(() => document.getElementById("termInput")?.focus(), 60);
}
function closeModal(id) {
  document.getElementById("modal-" + id).classList.remove("open");
}

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
});

function enviarFormulario(e) {
  e.preventDefault();
  const nome = document.getElementById("cf-nome").value;
  const email = document.getElementById("cf-email").value;
  const msg = document.getElementById("cf-msg").value;
  const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\n${msg}`);
  window.location.href = "mailto:seu@email.com?subject=Contato pelo site&body=" + corpo;
  return false;
}

/* =========================
   TERMINAL INTERATIVO
   ========================= */
function escaparHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function executarComando() {
  const input = document.getElementById("termInput");
  const cmd = input.value.trim();
  input.value = "";
  const out = document.getElementById("termOutput");
  if (!cmd) return;

  const linha = document.createElement("div");
  linha.innerHTML = '<span class="p">$</span> ' + escaparHTML(cmd);
  out.appendChild(linha);

  const resp = document.createElement("div");
  resp.className = "c";

  switch (cmd.toLowerCase()) {
    case "help":
      resp.textContent = "comandos: whoami, sobre, skills, projetos, contato, github, resumo, him, clear";
      break;
    case "whoami":
      resp.textContent = "valdick_rodrigues — full stack developer & educador na microlins";
      break;
    case "sobre":
      resp.textContent = "full stack dev + educador na microlins, formado em desenvolvimento web pela escola virtual (fundação bradesco)";
      break;
    case "skills":
      resp.textContent = "python, html/css/js, sql, power bi, linux (bash), redes e automação";
      break;
    case "projetos":
      resp.textContent = "micromundo, netcheck, workshop de ia, chega pra cá, churrascaria do thur";
      break;
    case "contato":
      resp.textContent = "instagram: @valdickkkk";
      break;
    case "github":
      resp.textContent = "configure o link real do github no index.html";
      break;
    case "resumo":
      resp.textContent = "portfólio do valdick: desenvolvimento, educação, projetos de tecnologia e skills.";
      break;
    case "him":
      resp.textContent = "boa parte do código foi desenvolvida com ajuda de IA; as ideias, conteúdo, curadoria e ajustes finais são do Valdick.";
      break;
    case "clear":
    case "cls":
      out.innerHTML = "";
      return;
    default:
      resp.textContent = "comando não encontrado. digite 'help'.";
  }

  out.appendChild(resp);
  out.scrollTop = out.scrollHeight;
}
