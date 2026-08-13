(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const languageToggle = document.querySelector("[data-language-toggle]");

  const translations = {
    en: {
      skip: "Skip to content",
      navLabel: "Primary navigation",
      openNav: "Open navigation",
      closeNav: "Close navigation",
      navAbout: "About",
      navWork: "Work",
      navApproach: "Approach",
      navContact: "Contact",
      lightTheme: "Switch to light theme",
      darkTheme: "Switch to dark theme",
      heroEyebrow: "AI research × engineering",
      heroLead: "Building intelligence",
      heroAccent: "that holds up.",
      heroDescription: "I’m Samarone, an electrical engineer and M.Sc. researcher at COPPE/UFRJ. I design reliable machine-learning systems for complex, real-world engineering data.",
      viewWork: "View selected work",
      connect: "Connect on LinkedIn",
      heroMetaLabel: "Professional summary",
      heroMetaOne: "M.Sc. research",
      heroMetaTwo: "Computational intelligence",
      heroMetaThree: "Brazil",
      snapshotLabel: "Research snapshot",
      portraitAlt: "Portrait of Samarone Fialho Lima",
      researchStatus: "Researching reliable AI for offshore systems",
      metricModels: "architectures benchmarked",
      metricWindows: "3W windows evaluated",
      scrollLabel: "Scroll to about section",
      scroll: "Explore",
      aboutIndex: "About",
      aboutTitle: "Engineering judgment,<br />research rigor.",
      aboutIntro: "My work sits where artificial intelligence meets high-consequence engineering: noisy sensors, temporal dependence, incomplete observations, and claims that must survive scrutiny.",
      githubProfile: "Explore my GitHub profile",
      focusOneTitle: "Time-series intelligence",
      focusOneText: "Forecasting, fault classification, and anomaly detection for multivariate industrial signals.",
      focusTwoTitle: "Trustworthy evaluation",
      focusTwoText: "Leakage-aware splits, statistical testing, audit trails, and precise boundaries around what results support.",
      focusThreeTitle: "Reproducible ML systems",
      focusThreeText: "Config-driven pipelines, experiment tracking, automated validation, and repeatable research workflows.",
      focusFourTitle: "Applied computer vision",
      focusFourText: "Detection, segmentation, tracking, evaluation, and fixture-first pipelines that keep heavy systems testable.",
      workIndex: "Selected work",
      workTitle: "Research built<br />to be inspected.",
      workIntro: "A selection of open projects spanning offshore intelligence, scientific ML infrastructure, and computer vision.",
      projectOneLabel: "Open offshore-dl on GitHub",
      projectTwoLabel: "Open OffshorePulse-BR on GitHub",
      projectThreeLabel: "Open Video Segmentation Lab on GitHub",
      projectFourLabel: "Open CPE720 on GitHub",
      tasks: "monitoring tasks",
      flagship: "Flagship research",
      projectOneText: "A rigorous benchmark of deep learning, neural operators, state-space models, tree ensembles, and time-series foundation models for forecasting, fault classification, and anomaly detection.",
      projectTwoKicker: "Data engineering · Offshore analytics",
      projectTwoText: "A reproducible Brazilian offshore benchmark that turns production, geospatial, and metocean sources into validated, leakage-safe analytical artifacts.",
      projectThreeKicker: "Computer vision · ML systems",
      projectThreeText: "A fixture-first lab for the full detect → prompt → propagate → track → evaluate → serve workflow, with explicit validation and release boundaries.",
      projectFourKicker: "Scientific computing · Signals",
      projectFourText: "Reproducible signal-compression experiments and notebooks for COPPE/UFRJ, including Kernel PCA explorations.",
      approachIndex: "Approach",
      approachTitle: "Good models are only part of the system.",
      approachIntro: "I treat research code, evaluation design, and claim discipline as first-class engineering work—not supporting details.",
      principleOneTitle: "Evidence before claims",
      principleOneText: "Match every conclusion to the experiment, split, metric, and uncertainty that actually support it.",
      principleTwoTitle: "Reproducibility by design",
      principleTwoText: "Build deterministic, config-driven workflows with traceable artifacts instead of relying on hidden notebook state.",
      principleThreeTitle: "Domain context matters",
      principleThreeText: "Treat sensor behavior, temporal dynamics, and physical plausibility as part of the modeling problem.",
      toolkitLabel: "Working toolkit",
      toolsLabel: "Technologies",
      contactIndex: "Contact",
      contactKicker: "Research collaboration · Applied AI · Engineering systems",
      contactTitle: "Have a complex data problem?",
      contactText: "I’m always interested in rigorous, useful work at the intersection of AI and engineering.",
      startConversation: "Start a conversation",
      footerText: "Built with care, evidence, and plain HTML.",
      backTop: "Back to top"
    },
    pt: {
      skip: "Pular para o conteúdo",
      navLabel: "Navegação principal",
      openNav: "Abrir navegação",
      closeNav: "Fechar navegação",
      navAbout: "Sobre",
      navWork: "Projetos",
      navApproach: "Abordagem",
      navContact: "Contato",
      lightTheme: "Mudar para o tema claro",
      darkTheme: "Mudar para o tema escuro",
      heroEyebrow: "Pesquisa em IA × engenharia",
      heroLead: "Construindo inteligência",
      heroAccent: "que resiste ao escrutínio.",
      heroDescription: "Sou Samarone, engenheiro eletricista e pesquisador de mestrado na COPPE/UFRJ. Desenvolvo sistemas confiáveis de aprendizado de máquina para dados complexos de engenharia do mundo real.",
      viewWork: "Ver projetos selecionados",
      connect: "Conectar no LinkedIn",
      heroMetaLabel: "Resumo profissional",
      heroMetaOne: "Pesquisa de mestrado",
      heroMetaTwo: "Inteligência computacional",
      heroMetaThree: "Brasil",
      snapshotLabel: "Panorama da pesquisa",
      portraitAlt: "Retrato de Samarone Fialho Lima",
      researchStatus: "Pesquisa em IA confiável para sistemas offshore",
      metricModels: "arquiteturas avaliadas",
      metricWindows: "janelas do 3W avaliadas",
      scrollLabel: "Ir para a seção sobre",
      scroll: "Explorar",
      aboutIndex: "Sobre",
      aboutTitle: "Julgamento de engenharia,<br />rigor científico.",
      aboutIntro: "Meu trabalho está na interseção entre inteligência artificial e engenharia de alta responsabilidade: sensores ruidosos, dependência temporal, observações incompletas e afirmações que precisam resistir ao escrutínio.",
      githubProfile: "Explorar meu perfil no GitHub",
      focusOneTitle: "Inteligência em séries temporais",
      focusOneText: "Previsão, classificação de falhas e detecção de anomalias em sinais industriais multivariados.",
      focusTwoTitle: "Avaliação confiável",
      focusTwoText: "Divisões sem vazamento, testes estatísticos, trilhas de auditoria e limites precisos para a interpretação dos resultados.",
      focusThreeTitle: "Sistemas de ML reprodutíveis",
      focusThreeText: "Pipelines orientados a configuração, rastreamento de experimentos, validação automatizada e fluxos de pesquisa repetíveis.",
      focusFourTitle: "Visão computacional aplicada",
      focusFourText: "Detecção, segmentação, rastreamento, avaliação e pipelines fixture-first que mantêm sistemas pesados testáveis.",
      workIndex: "Projetos selecionados",
      workTitle: "Pesquisa feita<br />para ser inspecionada.",
      workIntro: "Uma seleção de projetos abertos em inteligência offshore, infraestrutura científica de ML e visão computacional.",
      projectOneLabel: "Abrir offshore-dl no GitHub",
      projectTwoLabel: "Abrir OffshorePulse-BR no GitHub",
      projectThreeLabel: "Abrir Video Segmentation Lab no GitHub",
      projectFourLabel: "Abrir CPE720 no GitHub",
      tasks: "tarefas de monitoramento",
      flagship: "Pesquisa principal",
      projectOneText: "Um benchmark rigoroso de deep learning, operadores neurais, modelos de espaço de estados, ensembles de árvores e modelos fundacionais de séries temporais para previsão, classificação de falhas e detecção de anomalias.",
      projectTwoKicker: "Engenharia de dados · Análise offshore",
      projectTwoText: "Um benchmark reprodutível do offshore brasileiro que transforma fontes de produção, geoespaciais e meteoceanográficas em artefatos analíticos validados e protegidos contra vazamento.",
      projectThreeKicker: "Visão computacional · Sistemas de ML",
      projectThreeText: "Um laboratório fixture-first para o fluxo detectar → gerar prompts → propagar → rastrear → avaliar → servir, com limites explícitos de validação e publicação.",
      projectFourKicker: "Computação científica · Sinais",
      projectFourText: "Experimentos e notebooks reprodutíveis de compactação de sinais para a COPPE/UFRJ, incluindo explorações com Kernel PCA.",
      approachIndex: "Abordagem",
      approachTitle: "Bons modelos são apenas parte do sistema.",
      approachIntro: "Trato o código de pesquisa, o desenho da avaliação e a disciplina das conclusões como trabalho de engenharia de primeira classe — não como detalhes de apoio.",
      principleOneTitle: "Evidência antes de afirmações",
      principleOneText: "Vincular cada conclusão ao experimento, à divisão dos dados, à métrica e à incerteza que de fato a sustentam.",
      principleTwoTitle: "Reprodutibilidade desde o projeto",
      principleTwoText: "Construir fluxos determinísticos, orientados a configuração e com artefatos rastreáveis, sem depender do estado oculto de notebooks.",
      principleThreeTitle: "O contexto do domínio importa",
      principleThreeText: "Tratar o comportamento dos sensores, a dinâmica temporal e a plausibilidade física como partes do problema de modelagem.",
      toolkitLabel: "Ferramentas de trabalho",
      toolsLabel: "Tecnologias",
      contactIndex: "Contato",
      contactKicker: "Colaboração em pesquisa · IA aplicada · Sistemas de engenharia",
      contactTitle: "Tem um problema de dados complexo?",
      contactText: "Tenho interesse em trabalhos rigorosos e úteis na interseção entre inteligência artificial e engenharia.",
      startConversation: "Iniciar uma conversa",
      footerText: "Construído com cuidado, evidências e HTML puro.",
      backTop: "Voltar ao topo"
    }
  };

  const safeStorage = {
    get(key) {
      try { return window.localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch { /* no-op */ }
    }
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    safeStorage.set("portfolio-theme", theme);
    const label = translations[root.lang || "en"][theme === "dark" ? "lightTheme" : "darkTheme"];
    themeToggle?.setAttribute("aria-label", label);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#08111f" : "#f2f4ef");
  };

  const setLanguage = (language) => {
    const locale = translations[language] ? language : "en";
    const copy = translations[locale];
    root.lang = locale === "pt" ? "pt-BR" : "en";
    root.dataset.language = locale;
    safeStorage.set("portfolio-language", locale);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.innerHTML = copy[key];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (copy[key]) element.setAttribute("aria-label", copy[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (copy[key]) element.setAttribute("alt", copy[key]);
    });

    const options = languageToggle?.querySelectorAll("span:not(.toggle-divider)") || [];
    options.forEach((option) => {
      option.setAttribute("aria-current", option.textContent?.toLowerCase() === locale ? "true" : "false");
    });
    languageToggle?.setAttribute("aria-label", locale === "en" ? "Mudar idioma para português" : "Change language to English");
    setTheme(root.dataset.theme || "dark");
  };

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!menuToggle || !navPanel) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[root.dataset.language || "en"].openNav);
    navPanel.classList.remove("is-open");
    body.classList.remove("menu-open");
    if (restoreFocus) menuToggle.focus();
  };

  const openMenu = () => {
    if (!menuToggle || !navPanel) return;
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", translations[root.dataset.language || "en"].closeNav);
    navPanel.classList.add("is-open");
    body.classList.add("menu-open");
    navPanel.querySelector("a")?.focus();
  };

  const storedTheme = safeStorage.get("portfolio-theme");
  const systemPrefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  setTheme(storedTheme || (systemPrefersLight ? "light" : "dark"));
  setLanguage(safeStorage.get("portfolio-language") || "en");
  root.classList.add("js-ready");

  themeToggle?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  languageToggle?.addEventListener("click", () => setLanguage(root.dataset.language === "en" ? "pt" : "en"));
  menuToggle?.addEventListener("click", () => menuToggle.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu());
  navLinks.forEach((link) => link.addEventListener("click", () => closeMenu()));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
      closeMenu({ restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 832) closeMenu();
  });

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const revealElements = [...document.querySelectorAll("[data-reveal]")];
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { threshold: 0.35, rootMargin: "-20% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
