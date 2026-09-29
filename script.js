/* =========================
   TRADUÇÕES (PT-BR / EN)
   ========================= */
const i18nText = {
  "nav.sobre":            { pt: "sobre",                         en: "about" },
  "nav.formacao":         { pt: "formação",                      en: "education" },
  "nav.trabalhos":        { pt: "trabalhos",                     en: "work" },
  "nav.skills":           { pt: "skills",                        en: "skills" },
  "nav.contato":          { pt: "contato",                       en: "contact" },

  "hero.kicker":          { pt: "// desenvolvimento, dados e educação", en: "// development, data & education" },
  "hero.btn_trabalhos":   { pt: "Ver trabalhos",                 en: "See my work" },
  "hero.term_status":     { pt: "ensinando na Microlins e programando à noite", en: "teaching at Microlins and coding at night" },

  "sobre.eyebrow":        { pt: "sobre",                         en: "about" },
  "sobre.title":          { pt: "Entre a sala de aula e o terminal", en: "Between the classroom and the terminal" },
  "sobre.text1":          { pt: `Sou desenvolvedor full stack e também atuo na área pedagógica da Microlins, onde ajudo
    pessoas a desenvolverem comunicação, organização e habilidades de tecnologia.
    Minha formação em desenvolvimento web foi feita pela Escola Virtual da Fundação Bradesco,
    e continuo estudando Python, HTML/CSS/JS, SQL (Básico), Excel, Pacote Oficce e Linux na prática.`,
                             en: `I'm a full stack developer who also works in the pedagogical side of Microlins, helping
    people build communication, organization and technology skills.
    My web development training came from Fundação Bradesco's Escola Virtual,
    and I keep studying Python, HTML/CSS/JS, SQL, Power BI and Linux hands-on.` },
  "sobre.text2":          { pt: `Boa parte dos meus problemas eu resolvo dentro de um terminal Linux — de configuração de
    rede a automação — e essa mesma curiosidade me leva a criar conteúdo e projetos de tecnologia.`,
                             en: `I solve most of my problems inside a Linux terminal — from network configuration
    to automation — and that same curiosity is what drives me to create content and tech projects.` },

  "formacao.eyebrow":     { pt: "formação",                      en: "education" },
  "formacao.title":       { pt: "De onde vim, pra onde vou",     en: "Where I've been, where I'm going" },
  "formacao.t1_l1":       { pt: "Desenvolvimento Web — Escola Virtual (Fundação Bradesco), concluído", en: "Web Development — Escola Virtual (Fundação Bradesco), completed" },
  "formacao.t1_l2":       { pt: "Lógica de programação, Python e administração Linux — estudo contínuo, na prática", en: "Programming logic, Python and Linux administration — ongoing, hands-on study" },
  "formacao.t2_l1":       { pt: "Inglês Intermediário (Microlins), cursando [2 Anos] ", en: "Intermediate English (Microlins), in progress [2 years] " },
  "formacao.t2_l2":       { pt: "Conversação, escrita e escuta — estudo contínuo ", en: "Speaking, writing and listening — ongoing study " },

  "trabalhos.eyebrow":    { pt: "trabalhos",                     en: "work" },
  "trabalhos.title":      { pt: "O que já coloquei no ar",       en: "What I've already shipped" },
  "trabalhos.featured_mark": { pt: "projeto autoral",            en: "original project" },
  "trabalhos.proj1_desc": { pt: "Restaurante nordestino fictício, criado em grupo no workshop de IA: site com cardápio, promoções e identidade visual.",
                             en: "Fictional Northeastern-Brazilian restaurant, built as a group project in an AI workshop: site with menu, promotions and visual identity." },
  "trabalhos.proj1_tag":  { pt: "web",                           en: "web" },
  "trabalhos.proj2_title":{ pt: " Desenvolvimento Linux",        en: " Linux Development" },
  "trabalhos.proj2_desc": { pt: "Buscando entender linux,reviver maquinas e atémesmo muscando liberdade e entendendo a arte do sistema.",
                             en: "Learning Linux, reviving old machines, and chasing freedom while understanding the art of the system." },
  "trabalhos.proj2_tag":  { pt: "branding",                      en: "branding" },
  "trabalhos.proj3_title":{ pt: " Desenvolvimento em Hardware",  en: " Hardware Development" },
  "trabalhos.proj3_desc": { pt: "Arrumando notebooks e computadores por todo canto deste são paulo,em busca de aprender como a arquitetura da computação funciona na prática.",
                             en: "Fixing laptops and computers all over São Paulo, learning how computer architecture works in practice." },
  "trabalhos.proj3_tag":  { pt: "educação",                      en: "education" },

  "skills.eyebrow":       { pt: "skills",                        en: "skills" },
  "skills.title":         { pt: "Ferramentas que uso de verdade", en: "Tools I actually use" },
  "skills.montagem":      { pt: "Montagem e Manutençãode Computadores", en: "Computer Assembly & Repair" },
  "skills.excel":         { pt: "Excel Avançado",                en: "Advanced Excel" },
  "skills.redes":         { pt: "Redes & automação",             en: "Networking & automation" },
  "skills.identidade":    { pt: "Identidade visual",             en: "Visual identity" },
  "skills.educacao":      { pt: "Educação técnica",              en: "Technical education" },

  "contato.eyebrow":      { pt: "contato",                       en: "contact" },
  "contato.prompt":       { pt: "$ contato --iniciar",           en: "$ contact --start" },
  "contato.title":        { pt: "Bora trocar uma ideia?",        en: "Let's talk?" },
  "contato.text":         { pt: "Chama no Instagram ou usa um dos canais abaixo.", en: "Ping me on Instagram or use one of the channels below." },
  "contato.email":        { pt: "E-mail",                        en: "Email" },

  "fab.form":              { pt: "Formulário",                   en: "Form" },

  "form.titulo":           { pt: "Manda uma mensagem",           en: "Send a message" },
  "form.nome":              { pt: "Nome",                        en: "Name" },
  "form.email":             { pt: "Seu e-mail",                  en: "Your email" },
  "form.mensagem":          { pt: "Mensagem",                    en: "Message" },
  "form.enviar":            { pt: "Enviar",                      en: "Send" },

  "term.boasvindas":       { pt: 'Bem-vindo. Digite <span class="p">help</span> pra ver os comandos.',
                              en: 'Welcome. Type <span class="p">help</span> to see the commands.' }
};

const rolesPT = ["Full Stack Developer", "Educador na Microlins", "Criador de conteúdo"];
const rolesEN = ["Full Stack Developer", "Microlins Educator", "Content Creator"];
let roles = rolesPT;

let currentLang = "pt";
try {
  const saved = localStorage.getItem("site-lang");
  if (saved === "pt" || saved === "en") currentLang = saved;
} catch (e) { /* localStorage indisponível, segue com pt */ }

function aplicarIdioma(lang) {
  currentLang = lang === "en" ? "en" : "pt";
  document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const chave = el.getAttribute("data-i18n");
    const par = i18nText[chave];
    if (par && par[currentLang] !== undefined) {
      el.innerHTML = par[currentLang];
    }
  });

  roles = currentLang === "en" ? rolesEN : rolesPT;
  ri = 0; ci = 0; deleting = false;

  try { localStorage.setItem("site-lang", currentLang); } catch (e) { /* segue sem salvar */ }
}

/* =========================
   EFEITO DE DIGITAÇÃO (ROLE LINE)
   ========================= */
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

aplicarIdioma(currentLang);
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
  window.location.href = "mailto:Valprograming07@outlook.com?subject=Contato pelo site&body=" + corpo;
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

/* respostas dos comandos, em português e inglês */
const termResponses = {
  help:      { pt: "comandos: whoami, sobre, skills, projetos, curriculo, contato, github, resumo, him, idioma, clear, --version",
               en: "commands: whoami, sobre, skills, projetos, curriculo, contato, github, resumo, him, idioma, clear, --version" },
  whoami:    { pt: "valdick_rodrigues — full stack developer & educador na microlins",
               en: "valdick_rodrigues — full stack developer & educator at microlins" },
  sobre:     { pt: "full stack dev + educador na microlins, formado em desenvolvimento web pela escola virtual (fundação bradesco)",
               en: "full stack dev + educator at microlins, web development graduate from escola virtual (fundação bradesco)" },
  skills:    { pt: "python, html/css/js, hardware, excel avançado com vba, linux (bash), redes e automação",
               en: "python, html/css/js, hardware, advanced excel with vba, linux (bash), networking and automation" },
  projetos:  { pt: "ainda não tem nada aqui rsrs",
               en: "nothing here yet lol" },
  contato:   { pt: "instagram: @valdickkkk",
               en: "instagram: @valdickkkk" },
  "--version": { pt: "última atualização: 29/09/2026",
               en: "last updated: 09/29/2026" },
  github:    { pt: "valdickrodrigues07-prog",
               en: "valdickrodrigues07-prog" },
  curriculo: { pt: "abrindo currículo...",
               en: "opening résumé..." },
  resumo:    { pt: "portfólio do valdick: desenvolvimento, educação, projetos de tecnologia e skills.",
               en: "valdick's portfolio: development, education, tech projects and skills." },
  him:       { pt: "boa parte do código foi desenvolvida com ajuda de IA; as ideias, conteúdo, curadoria e ajustes finais são do Valdick.",
               en: "most of the code was built with AI assistance; the ideas, content, curation and final touches are Valdick's." },
  naoencontrado: { pt: "comando não encontrado. digite 'help'.",
               en: "command not found. type 'help'." },
  idiomaAjuda: { pt: "uso: idioma [pt|en] — sem argumento, alterna entre português e inglês.",
               en: "usage: idioma [pt|en] — with no argument, toggles between portuguese and english." },
  idiomaPT:  { pt: "idioma alterado para português.",
               en: "language switched to portuguese." },
  idiomaEN:  { pt: "idioma alterado para inglês.",
               en: "language switched to english." }
};

function executarComando() {
  const input = document.getElementById("termInput");
  const cmdBruto = input.value.trim();
  input.value = "";
  const out = document.getElementById("termOutput");
  if (!cmdBruto) return;

  const linha = document.createElement("div");
  linha.innerHTML = '<span class="p">$</span> ' + escaparHTML(cmdBruto);
  out.appendChild(linha);

  const partes = cmdBruto.toLowerCase().split(/\s+/);
  const cmd = partes[0];
  const arg = partes[1];

  const resp = document.createElement("div");
  resp.className = "c";

  if (cmd === "clear" || cmd === "cls") {
    out.innerHTML = "";
    return;
  }

  if (cmd === "idioma" || cmd === "language" || cmd === "lang") {
    if (arg === "pt" || arg === "en") {
      aplicarIdioma(arg);
      resp.textContent = termResponses[arg === "en" ? "idiomaEN" : "idiomaPT"][currentLang];
    } else if (!arg) {
      aplicarIdioma(currentLang === "pt" ? "en" : "pt");
      resp.textContent = termResponses[currentLang === "en" ? "idiomaEN" : "idiomaPT"][currentLang];
    } else {
      resp.textContent = termResponses.idiomaAjuda[currentLang];
    }
  } else if (termResponses[cmd]) {
    resp.textContent = termResponses[cmd][currentLang];
    if (cmd === "curriculo") {
      window.open("https://1drv.ms/b/c/CD638E64F907256B/IQAi3Va710WdToUFpz8K_gMEAbYlO6AVjpH3BBFPPFR1FkY?e=t7btsN");
    }
  } else {
    resp.textContent = termResponses.naoencontrado[currentLang];
  }

  out.appendChild(resp);
  out.scrollTop = out.scrollHeight;
}
