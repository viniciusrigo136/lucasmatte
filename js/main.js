/* Lucas Matte Arquitetura — interações da landing page */
(function () {
  // TODO: número do WhatsApp com DDI + DDD, apenas dígitos (ex.: 5511999999999)
  const WHATSAPP = "5500000000000";
  const waLink = (text) =>
    "https://wa.me/" + WHATSAPP + (text ? "?text=" + encodeURIComponent(text) : "");

  // Header muda de estilo ao rolar
  const header = document.querySelector(".header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const setNav = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  toggle.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setNav(false)));

  // Fallback visual para imagens ainda não adicionadas em assets/img
  document.querySelectorAll(".photo img").forEach((img) => {
    const mark = () => {
      const box = img.parentElement;
      box.classList.add("is-missing");
      box.dataset.label = "Imagem: " + img.getAttribute("src").split("/").pop();
    };
    if (img.complete && img.naturalWidth === 0) mark();
    else img.addEventListener("error", mark);
  });

  // Animação de entrada + contadores
  const animateCount = (el) => {
    const target = +el.dataset.count;
    const start = performance.now();
    const dur = 1600;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          e.target.querySelectorAll("[data-count]").forEach(animateCount);
          io.unobserve(e.target);
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  // Links de WhatsApp
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = waLink("Olá, Lucas! Vim pelo site e gostaria de falar sobre um projeto.");
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Formulário -> mensagem pronta no WhatsApp
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((input) => {
      const bad = !input.value.trim();
      input.closest(".field").classList.toggle("has-error", bad);
      if (bad) ok = false;
    });
    if (!ok) return;

    const d = Object.fromEntries(new FormData(form));
    const msg =
      `Olá, Lucas! Vim pelo site.\n\n` +
      `*Nome:* ${d.nome}\n` +
      `*WhatsApp:* ${d.telefone}\n` +
      `*Tipo de projeto:* ${d.tipo}\n` +
      (d.mensagem ? `*Sobre o projeto:* ${d.mensagem}` : "");
    window.open(waLink(msg), "_blank", "noopener");
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
