/* =========================================================
   LeapCode · Portfólio — comportamento
   ========================================================= */
(() => {
  const $ = (s) => document.querySelector(s);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

  const legacy = $("#legacy");
  const modern = $("#modern");
  let started = false;

  /* ---------------------------------------------
     1) Boot do "sistema legado"
     --------------------------------------------- */
  const BOOT = [
    "> Verificando memória .......... 640K OK",
    "> Carregando drivers de criatividade .. OK",
    "> Montando /faculdade/design ... 6 projetos",
    "> Status do sistema: LEGADO",
    "> Recomendação: modernizar."
  ];

  async function boot() {
    const el = $("#boot");
    for (const line of BOOT) {
      if (started) return;
      for (const ch of line) {
        if (started) return;
        el.textContent += ch;
        await sleep(14);
      }
      el.textContent += "\n";
      await sleep(160);
    }
    $("#crtMain").classList.add("on");
    await sleep(500);
    $("#startWin").classList.add("on");
    $("#startBtn").focus({ preventScroll: true });
  }

  /* ---------------------------------------------
     2) Transição: download → pulo do sapo → CRT desliga
     --------------------------------------------- */
  async function start() {
    if (started) return;
    started = true;
    $("#boot").textContent = BOOT.join("\n") + "\n";
    $("#crtMain").classList.add("on");
    $("#startWin").hidden = true;

    const dl = $("#dlWin");
    dl.hidden = false;
    requestAnimationFrame(() => dl.classList.add("on"));

    const fill = $("#dlFill"), pct = $("#dlPct"), note = $("#dlNote"), txt = $("#dlText");
    const files = ["grid_12colunas.sys", "hierarquia.dll", "contraste.cfg", "chakra_petch.ttf", "sapo.png"];
    for (let p = 0; p <= 99; p += Math.ceil(Math.random() * 4)) {
      const v = Math.min(p, 99);
      fill.style.width = v + "%";
      pct.textContent = v;
      txt.textContent = "Baixando " + files[Math.min(files.length - 1, Math.floor(v / 20))] + "...";
      await sleep(28);
    }
    fill.style.width = "99%"; pct.textContent = "99";
    note.textContent = "(todo download trava no 99%...)";
    await sleep(1100);
    fill.style.width = "100%"; pct.textContent = "100";
    txt.textContent = "Modernização concluída!";
    note.textContent = "preparando o salto...";
    await sleep(600);

    // o sapo pula pra fora do monitor
    const crtFrog = $("#crtFrog").getBoundingClientRect();
    const jf = $("#jumpFrog");
    jf.style.left = crtFrog.left + crtFrog.width / 2 + "px";
    jf.style.top = crtFrog.top + crtFrog.height / 2 + "px";
    jf.style.width = crtFrog.width + "px";
    $("#crtFrog").style.visibility = "hidden";
    document.body.classList.add("is-leaping");
    await sleep(450);

    // monitor CRT desligando
    legacy.classList.add("is-off");
    await sleep(700);
    goModern();
  }

  function goModern() {
    started = true;
    modern.hidden = false;
    document.body.classList.remove("is-legacy", "is-leaping");
    legacy.classList.add("is-gone");
    setTimeout(() => { legacy.hidden = true; }, reduce ? 0 : 800);
    if (!location.hash) history.replaceState(null, "", "#topo");
    initReveal();
    const h = location.hash.match(/^#projeto\/(.+)$/);
    if (h) openProject(h[1]);
  }

  $("#startBtn").addEventListener("click", start);
  $("#skipBtn").addEventListener("click", goModern);
  document.addEventListener("keydown", (e) => {
    if (!started && (e.key === "Enter" || e.key === " ") && $("#startWin").classList.contains("on")) {
      e.preventDefault(); start();
    }
  });
  $("#legacyBtn").addEventListener("click", () => {
    history.replaceState(null, "", location.pathname);
    location.reload();
  });

  /* ---------------------------------------------
     3) Modo moderno: grid de projetos
     --------------------------------------------- */
  const grid = $("#grid");
  PROJETOS.forEach((p, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "card reveal " + (p.span || "third");
    b.innerHTML = `
      <div class="card-thumb"><img src="${p.capa}" alt="${p.titulo}" /></div>
      <div class="card-info">
        <p class="comment">/* ${String(i + 1).padStart(2, "0")} · ${p.tag} */</p>
        <h3>${p.titulo}</h3>
        <p>${p.resumo}</p>
        <span class="card-more">abrir projeto →</span>
      </div>`;
    b.addEventListener("click", () => {
      history.replaceState(null, "", "#projeto/" + p.id);
      openProject(p.id);
    });
    grid.appendChild(b);
  });

  $("#apps").innerHTML = APLICACOES
    .map(([t, d]) => `<div class="app reveal"><h3>${t}</h3><p>${d}</p></div>`)
    .join("");

  /* ---------------------------------------------
     4) Detalhe do projeto
     --------------------------------------------- */
  const dlg = $("#proj");
  function openProject(id) {
    const p = PROJETOS.find((x) => x.id === id);
    if (!p) return;
    $("#projTag").textContent = "// " + p.tag;
    const gal = p.galeria
      .map((src, i) => `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${p.titulo}, imagem ${i + 1}" loading="lazy" /></a>`)
      .join("");
    $("#projBody").innerHTML = `
      <h2 id="projTitle">${p.titulo}</h2>
      <p class="lead">${p.resumo}</p>

      <div class="proj-block">
        <p class="comment">/* produto final */</p>
        <div class="gallery ${p.galeria.length === 1 ? "single" : ""}">${gal}</div>
      </div>

      <div class="proj-block">
        <p class="comment">/* explicação da atividade */</p>
        <p class="lead" style="max-width:70ch;color:var(--text)">${p.explicacao}</p>
      </div>

      <div class="proj-block">
        <p class="comment">/* desenvolvimento · processo criativo */</p>
        <div class="kneller">${p.kneller.map(([t, d]) => `<div><h4>${t}</h4><p>${d}</p></div>`).join("")}</div>
      </div>

      <div class="proj-block">
        <p class="comment">/* justificativa do design */</p>
        <ul class="just">${p.justificativa.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join("")}</ul>
      </div>

      <div class="proj-pdf"><a class="btn" href="${p.pdf}" target="_blank" rel="noopener">Abrir PDF original</a></div>`;
    $("#projBody").scrollTop = 0;
    if (!dlg.open) dlg.showModal();
  }
  function closeProject() {
    dlg.close();
  }
  dlg.addEventListener("close", () => {
    if (location.hash.startsWith("#projeto/")) history.replaceState(null, "", "#projetos");
  });
  $("#projClose").addEventListener("click", closeProject);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeProject(); });

  /* ---------------------------------------------
     5) Entradas suaves no scroll
     --------------------------------------------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const t = en.target;
          t.classList.add("in");
          io.unobserve(t);
          // depois de entrar, devolve as transições normais (hover dos cards)
          setTimeout(() => { t.classList.remove("reveal", "in"); t.style.transitionDelay = ""; }, 1000);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((e, i) => { e.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(e); });
  }

  /* ---------------------------------------------
     Início: link direto (#algo) pula a intro
     --------------------------------------------- */
  if (location.hash && location.hash !== "#") goModern();
  else boot();
})();
