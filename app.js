/**
 * app.js — DOM renderer + Supabase CMS + i18n (ID / EN / JP).
 * Tidak memerlukan framework, projects.js, i18n.js, atau locales.json.
 */
import { config } from "./config.js";

const LANGUAGES = ["id", "en", "ja"];

const DICTIONARY = {
  id: {
    "site.title": "Portofolio — Muhammad Jazil Ammaar",
    "site.description": "Portofolio Muhammad Jazil Ammaar: desain visual, produksi video, dan pengembangan web.",
    "a11y.skip": "Lewati ke konten utama",
    "nav.aria": "Navigasi utama",
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.skills": "Keahlian",
    "nav.language": "Pilih bahasa",
    "hero.eyebrow": "Portofolio · Desain · Kode · Cerita",
    "hero.primary": "Lihat Proyek",
    "hero.secondary": "Tentang Saya",
    "hero.interaction": "Coba Interaksi",
    "hero.interactionMessage": "Interaksi JavaScript berfungsi. Tombol ini sudah terhubung ke sistem portofolio.",
    "about.eyebrow": "Sedikit tentang saya",
    "about.title": "Menggabungkan desain, cerita, dan teknologi.",
    "projects.eyebrow": "Karya pilihan",
    "projects.title": "Proyek",
    "projects.intro": "Pilihan karya dari pengembangan web, produksi film, identitas visual, dan desain kemasan.",
    "projects.filterAria": "Filter kategori proyek",
    "projects.all": "Semua",
    "projects.empty": "Belum ada proyek dalam kategori ini.",
    "projects.view": "Lihat proyek",
    "projects.details": "Baca detail proyek",
    "projects.technologies": "Teknologi dan proses",
    "skills.eyebrow": "Yang saya kerjakan",
    "skills.title": "Keahlian",
    "skills.intro": "Kumpulan keterampilan yang saya gunakan dalam proses desain dan produksi digital.",
    "footer.contact": "Kontak dan tautan",
    "footer.copyright": "Portofolio pribadi. Dibangun dengan HTML, CSS, dan JavaScript.",
    "category.web": "Pengembangan Web",
    "category.film": "Produksi Film / Sinematografi",
    "category.identity": "Identitas Visual",
    "category.packaging": "Desain Grafis / Kemasan",
    "category.other": "Proyek CMS"
  },
  en: {
    "site.title": "Portfolio — Muhammad Jazil Ammaar",
    "site.description": "The portfolio of Muhammad Jazil Ammaar: visual design, video production, and web development.",
    "a11y.skip": "Skip to main content",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.language": "Choose language",
    "hero.eyebrow": "Portfolio · Design · Code · Story",
    "hero.primary": "View Projects",
    "hero.secondary": "About Me",
    "hero.interaction": "Test Interaction",
    "hero.interactionMessage": "JavaScript interaction works. This button is connected to the portfolio interface.",
    "about.eyebrow": "A little about me",
    "about.title": "Bringing design, stories, and technology together.",
    "projects.eyebrow": "Selected work",
    "projects.title": "Projects",
    "projects.intro": "Selected work across web development, film production, visual identity, and packaging design.",
    "projects.filterAria": "Filter projects by category",
    "projects.all": "All",
    "projects.empty": "There are no projects in this category yet.",
    "projects.view": "View project",
    "projects.details": "Read project details",
    "projects.technologies": "Tools and process",
    "skills.eyebrow": "What I do",
    "skills.title": "Skills",
    "skills.intro": "A collection of skills used throughout my design and digital production workflow.",
    "footer.contact": "Contact and links",
    "footer.copyright": "Personal portfolio. Built with HTML, CSS, and JavaScript.",
    "category.web": "Web Development",
    "category.film": "Film Production / Cinematography",
    "category.identity": "Visual Identity",
    "category.packaging": "Graphic Design / Packaging",
    "category.other": "CMS Project"
  },
  ja: {
    "site.title": "ポートフォリオ — Muhammad Jazil Ammaar",
    "site.description": "Muhammad Jazil Ammaarのポートフォリオ。ビジュアルデザイン、映像制作、ウェブ開発。",
    "a11y.skip": "メインコンテンツへ移動",
    "nav.aria": "メインナビゲーション",
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル",
    "nav.language": "言語を選択",
    "hero.eyebrow": "ポートフォリオ · デザイン · コード · ストーリー",
    "hero.primary": "作品を見る",
    "hero.secondary": "自己紹介",
    "hero.interaction": "操作を試す",
    "hero.interactionMessage": "JavaScriptの操作は正常に動作しています。このボタンはポートフォリオに接続されています。",
    "about.eyebrow": "自己紹介",
    "about.title": "デザイン、物語、テクノロジーをつなぐ。",
    "projects.eyebrow": "主な制作実績",
    "projects.title": "プロジェクト",
    "projects.intro": "ウェブ開発、映像制作、ビジュアルアイデンティティ、パッケージデザインの作品です。",
    "projects.filterAria": "カテゴリーで作品を絞り込む",
    "projects.all": "すべて",
    "projects.empty": "このカテゴリーにはまだ作品がありません。",
    "projects.view": "プロジェクトを見る",
    "projects.details": "プロジェクトの詳細を見る",
    "projects.technologies": "使用ツールと制作工程",
    "skills.eyebrow": "取り組んでいること",
    "skills.title": "スキル",
    "skills.intro": "デザインとデジタル制作で活用しているスキルです。",
    "footer.contact": "連絡先とリンク",
    "footer.copyright": "個人ポートフォリオ。HTML、CSS、JavaScriptで構築。",
    "category.web": "ウェブ開発",
    "category.film": "映像制作 / 撮影",
    "category.identity": "ビジュアルアイデンティティ",
    "category.packaging": "グラフィック / パッケージデザイン",
    "category.other": "CMSプロジェクト"
  }
};

const state = {
  language: "id",
  activeCategory: "all",
  projects: []
};

const DOM = {
  nav: document.querySelector("#site-navigation"),
  hero: document.querySelector("#hero-section"),
  about: document.querySelector("#about-section"),
  portfolio: document.querySelector("#portfolio-gallery"),
  skills: document.querySelector("#skills-section"),
  footer: document.querySelector("#site-footer"),
  metaDescription: document.querySelector("#meta-description")
};

const hasRequiredDOM = () =>
  Object.values(DOM).every((element) => element !== null);

function t(key) {
  return DICTIONARY[state.language]?.[key] ??
    DICTIONARY.id[key] ??
    key;
}

function localize(value, language = state.language) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  return value[language] ?? value.id ?? value.en ?? value.ja ?? "";
}

function normalizedLocalizedObject(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return { id: value.id ?? "", en: value.en ?? "", ja: value.ja ?? "" };
  }
  if (typeof value === "string") return { id: value, en: value, ja: value };
  return { id: "", en: "", ja: "" };
}

function mergeLocalized(baseValue, remoteValue) {
  const base = normalizedLocalizedObject(baseValue);
  const remote = normalizedLocalizedObject(remoteValue);
  for (const language of LANGUAGES) {
    const candidate = remote[language];
    if (typeof candidate === "string" && candidate.trim()) {
      base[language] = candidate;
    }
  }
  return base;
}

function safeWebUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value.trim(), document.baseURI);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return url.href;
  } catch {
    return "";
  }
}

function safeSocialUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  if (/^mailto:/i.test(value.trim())) return value.trim();
  return safeWebUrl(value);
}

function el(tag, className = "", text = null) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== null && text !== undefined) element.textContent = String(text);
  return element;
}

function anchor(href, text, className = "") {
  const element = el("a", className, text);
  element.href = href;
  return element;
}

function addListItem(list, child) {
  const item = el("li");
  item.append(child);
  list.append(item);
  return item;
}

function setLanguage(language) {
  if (!LANGUAGES.includes(language)) return;
  const restoreLanguageFocus = document.activeElement?.id === "language-select";
  state.language = language;

  try {
    localStorage.setItem("site-language", language);
  } catch {
    // Bahasa tetap berjalan untuk sesi ini bila penyimpanan diblokir.
  }

  document.documentElement.lang = language;
  renderAll();
  applyTranslations(document);

  // renderAll() mengganti elemen select; kembalikan fokus keyboard ke kontrol baru.
  if (restoreLanguageFocus) {
    document.querySelector("#language-select")?.focus({ preventScroll: true });
  }
}

function readSavedLanguage() {
  try {
    const stored = localStorage.getItem("site-language");
    return LANGUAGES.includes(stored) ? stored : "id";
  } catch {
    return "id";
  }
}

/**
 * Mendukung data-i18n untuk teks serta atribut placeholder/title/alt/aria-label.
 * Semua teks CMS tetap dimasukkan melalui textContent, bukan HTML mentah.
 */
function applyTranslations(root = document) {
  const textNodes = [];
  if (root.nodeType === Node.ELEMENT_NODE && root.hasAttribute("data-i18n")) {
    textNodes.push(root);
  }
  if (root.querySelectorAll) {
    textNodes.push(...root.querySelectorAll("[data-i18n]"));
  }

  for (const node of textNodes) {
    const translated = t(node.getAttribute("data-i18n"));
    if (translated !== null && translated !== undefined) {
      node.textContent = translated;
    }
  }

  const attributes = {
    "data-i18n-placeholder": "placeholder",
    "data-i18n-title": "title",
    "data-i18n-aria-label": "aria-label",
    "data-i18n-alt": "alt"
  };

  for (const [dataAttribute, targetAttribute] of Object.entries(attributes)) {
    const nodes = [];
    if (root.nodeType === Node.ELEMENT_NODE && root.hasAttribute(dataAttribute)) {
      nodes.push(root);
    }
    if (root.querySelectorAll) nodes.push(...root.querySelectorAll(`[${dataAttribute}]`));

    for (const node of nodes) {
      const translated = t(node.getAttribute(dataAttribute));
      if (translated !== null && translated !== undefined) {
        node.setAttribute(targetAttribute, translated);
      }
    }
  }
}

function categoryTranslationKey(category) {
  const normalized = String(category ?? "").trim().toLowerCase();
  if (normalized === "web development") return "category.web";
  if (normalized.includes("film production") || normalized.includes("cinematography") ||
      normalized.includes("video production")) return "category.film";
  if (normalized === "visual identity") return "category.identity";
  if (normalized.includes("packaging") || normalized.includes("graphic design")) {
    return "category.packaging";
  }
  return "";
}

function categoryLabel(category) {
  const key = categoryTranslationKey(category);
  return key ? t(key) : (category || t("category.other"));
}

function renderNavigation() {
  const header = el("header", "site-header");
  const inner = el("div", "container site-header__inner");
  const brand = anchor("#hero-section", "Jazil.", "site-brand");
  brand.setAttribute("aria-label", config.profile.name);

  const nav = el("div", "site-nav");
  const list = el("ul");
  list.setAttribute("role", "list");

  const items = [
    ["#hero-section", "nav.home"],
    ["#about-section", "nav.about"],
    ["#portfolio-gallery", "nav.projects"],
    ["#skills-section", "nav.skills"]
  ];

  for (const [href, key] of items) {
    const link = anchor(href, t(key));
    link.dataset.i18n = key;
    addListItem(list, link);
  }

  nav.append(list);

  const tools = el("div", "nav-tools");
  const select = el("select", "language-select");
  select.id = "language-select";
  select.setAttribute("aria-label", t("nav.language"));
  select.dataset.i18nAriaLabel = "nav.language";

  const options = [
    ["id", "Indonesia"],
    ["en", "English"],
    ["ja", "日本語"]
  ];
  for (const [value, label] of options) {
    const option = el("option", "", label);
    option.value = value;
    select.append(option);
  }
  select.value = state.language;
  tools.append(select);
  nav.append(tools);

  inner.append(brand, nav);
  header.append(inner);
  DOM.nav.setAttribute("aria-label", t("nav.aria"));
  DOM.nav.replaceChildren(header);
}

function renderHero() {
  DOM.hero.className = "hero";
  const container = el("div", "container");
  const content = el("div", "hero__content");

  content.append(el("p", "hero__eyebrow", t("hero.eyebrow")));
  const title = el("h1", "hero__title", config.profile.name);
  title.id = "hero-title";
  content.append(title);
  content.append(el("p", "hero__role", localize(config.profile.role)));
  content.append(el("p", "hero__lead", localize(config.profile.tagline)));

  const actions = el("div", "hero__actions");
  const projectsButton = anchor("#portfolio-gallery", t("hero.primary"), "button button--primary");
  const aboutButton = anchor("#about-section", t("hero.secondary"), "button button--ghost");
  const interactionButton = el("button", "button button--ghost", t("hero.interaction"));
  interactionButton.type = "button";
  interactionButton.dataset.action = "show-demo-message";
  actions.append(projectsButton, aboutButton, interactionButton);
  content.append(actions);
  container.append(content);
  DOM.hero.replaceChildren(container);
}

function renderAbout() {
  DOM.about.className = "section section--bordered";
  const container = el("div", "container about-layout");
  const headingGroup = el("div", "section__heading");
  headingGroup.append(
    el("p", "section__eyebrow", t("about.eyebrow")),
    el("h2", "", t("about.title"))
  );
  headingGroup.querySelector("h2").id = "about-heading";

  const copy = el("div", "about-copy");
  const paragraphs = Array.isArray(config.biography?.paragraphs)
    ? config.biography.paragraphs
    : [];

  for (const paragraph of paragraphs) {
    const value = localize(paragraph);
    if (value) copy.append(el("p", "", value));
  }

  container.append(headingGroup, copy);
  DOM.about.replaceChildren(container);
}

function renderProjectFilters() {
  const filters = el("div", "filter-bar");
  filters.id = "project-filters";
  filters.setAttribute("role", "group");
  filters.setAttribute("aria-label", t("projects.filterAria"));

  const categories = [...new Set(
    state.projects
      .map((project) => project.category || t("category.other"))
      .filter(Boolean)
  )];

  const allButton = el("button", "chip", t("projects.all"));
  allButton.type = "button";
  allButton.dataset.category = "all";
  allButton.setAttribute("aria-pressed", String(state.activeCategory === "all"));
  filters.append(allButton);

  for (const category of categories) {
    const button = el("button", "chip", categoryLabel(category));
    button.type = "button";
    button.dataset.category = category;
    button.setAttribute("aria-pressed", String(state.activeCategory === category));
    filters.append(button);
  }
  return filters;
}

function renderProjectCard(project) {
  const item = el("li");
  const card = el("article", "project-card");
  const titleText = localize(project.title) || project.slug || "Project";
  const imageUrl = safeWebUrl(project.imageUrl);

  if (imageUrl) {
    const media = el("div", "project-card__media");
    const image = el("img");
    image.src = imageUrl;
    image.alt = titleText;
    image.width = 800;
    image.height = 500;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      media.hidden = true;
    }, { once: true });
    media.append(image);
    card.append(media);
  }

  const body = el("div", "project-card__body");
  body.append(el("span", "project-card__category", categoryLabel(project.category)));

  const heading = el("h3", "project-card__title");
  const projectUrl = safeWebUrl(project.projectUrl);
  if (projectUrl) {
    const titleLink = anchor(projectUrl, titleText, "project-card__link");
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    heading.append(titleLink);
  } else {
    heading.textContent = titleText;
  }
  body.append(heading);

  const description = localize(project.description);
  const paragraphs = (Array.isArray(description)
    ? description
    : String(description ?? "").split(/\n\s*\n/))
    .filter((paragraph) => typeof paragraph === "string" && paragraph.trim());

  if (paragraphs.length) {
    const details = el("details", "project-card__details");
    const summary = el("summary", "", t("projects.details"));
    const detailContent = el("div", "project-card__details-content");
    details.append(summary);

    for (const paragraph of paragraphs) {
      detailContent.append(el("p", "project-card__summary", paragraph.trim()));
    }

    details.append(detailContent);
    body.append(details);
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies.filter((technology) =>
        typeof technology === "string" && technology.trim()
      )
    : [];

  const footer = el("div", "project-card__footer");
  if (technologies.length) {
    const technologyLabel = el("p", "visually-hidden", t("projects.technologies"));
    const tagList = el("ul", "tag-list");
    tagList.setAttribute("role", "list");
    for (const technology of technologies) {
      addListItem(tagList, el("span", "tag", technology));
    }
    footer.append(technologyLabel, tagList);
  }

  if (projectUrl) {
    const actions = el("div", "project-card__actions");
    const viewLink = anchor(projectUrl, `${t("projects.view")} ↗`, "button button--ghost");
    viewLink.target = "_blank";
    viewLink.rel = "noopener noreferrer";
    actions.append(viewLink);
    footer.append(actions);
  }

  if (footer.childNodes.length) body.append(footer);
  card.append(body);
  item.append(card);
  return item;
}

function renderProjects() {
  DOM.portfolio.className = "section section--bordered";
  const container = el("div", "container");
  const sectionHeader = el("div", "section__header");
  const titleGroup = el("div");
  titleGroup.append(
    el("p", "section__eyebrow", t("projects.eyebrow")),
    el("h2", "", t("projects.title")),
    el("p", "section__intro", t("projects.intro"))
  );
  titleGroup.querySelector("h2").id = "projects-heading";
  sectionHeader.append(titleGroup);

  const filters = renderProjectFilters();
  const grid = el("ul", "project-grid");
  grid.id = "projects-grid";
  grid.setAttribute("role", "list");
  grid.setAttribute("aria-live", "polite");
  grid.setAttribute("aria-busy", "false");

  const filteredProjects = state.activeCategory === "all"
    ? state.projects
    : state.projects.filter((project) => project.category === state.activeCategory);

  if (!filteredProjects.length) {
    const item = el("li");
    const emptyState = el("div", "state", t("projects.empty"));
    emptyState.setAttribute("role", "status");
    item.append(emptyState);
    grid.append(item);
  } else {
    for (const project of filteredProjects) {
      grid.append(renderProjectCard(project));
    }
  }

  container.append(sectionHeader, filters, grid);
  DOM.portfolio.replaceChildren(container);
}

function renderSkills() {
  DOM.skills.className = "section section--bordered";
  const container = el("div", "container");
  const header = el("div", "section__header");
  const titleGroup = el("div");
  titleGroup.append(
    el("p", "section__eyebrow", t("skills.eyebrow")),
    el("h2", "", t("skills.title")),
    el("p", "section__intro", t("skills.intro"))
  );
  titleGroup.querySelector("h2").id = "skills-heading";
  header.append(titleGroup);

  const grid = el("div", "skills-grid");
  for (const skill of Array.isArray(config.skills) ? config.skills : []) {
    const card = el("article", "skill-card");
    card.append(el("h3", "", localize(skill.title)));
    card.append(el("p", "", localize(skill.description)));

    const list = el("ul", "tag-list");
    list.setAttribute("role", "list");
    for (const item of Array.isArray(skill.items) ? skill.items : []) {
      addListItem(list, el("span", "tag", item));
    }
    card.append(list);
    grid.append(card);
  }

  container.append(header, grid);
  DOM.skills.replaceChildren(container);
}

function renderFooter() {
  DOM.footer.className = "site-footer";
  const container = el("div", "container footer__inner");
  const left = el("div", "footer__copy");
  left.append(
    el("p", "", `${t("footer.copyright")} © ${new Date().getFullYear()}.`),
    el("p", "", config.profile.name)
  );

  const socialSection = el("div", "footer__contact");
  socialSection.append(el("p", "section__eyebrow", t("footer.contact")));
  const socials = el("div", "footer__socials");
  for (const social of Array.isArray(config.socials) ? config.socials : []) {
    const href = safeSocialUrl(social.url);
    if (!href) continue;
    const link = anchor(href, social.platform);
    if (!href.toLowerCase().startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    socials.append(link);
  }

  if (socials.childNodes.length) socialSection.append(socials);
  container.append(left, socialSection);
  DOM.footer.replaceChildren(container);
}

function renderAll() {
  document.title = t("site.title");
  if (DOM.metaDescription) {
    DOM.metaDescription.content = t("site.description");
  }

  renderNavigation();
  renderHero();
  renderAbout();
  renderProjects();
  renderSkills();
  renderFooter();
}

/* --------------------------------------------------------------------------
 * Supabase CMS — REST API, normalisasi data, merge berdasar slug.
 * Data lokal selalu dipertahankan jika CMS kosong atau gagal diakses.
 * -------------------------------------------------------------------------- */
function normalizeSortOrder(value, fallback) {
  if (value === null || value === undefined ||
      (typeof value === "string" && !value.trim())) {
    return fallback;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function normalizeLocalProject(project, index) {
  const slug = String(project.slug ?? project.id ?? `local-project-${index + 1}`).trim();
  return {
    ...project,
    id: String(project.id ?? slug),
    slug,
    title: normalizedLocalizedObject(project.title),
    description: project.description && typeof project.description === "object" &&
      !Array.isArray(project.description)
      ? { ...project.description }
      : normalizedLocalizedObject(project.description),
    category: String(project.category ?? "Web Development"),
    technologies: Array.isArray(project.technologies) ? project.technologies : [],
    imageUrl: typeof project.imageUrl === "string" ? project.imageUrl : "",
    projectUrl: typeof project.projectUrl === "string" ? project.projectUrl : "",
    sortOrder: normalizeSortOrder(project.sortOrder, index + 1)
  };
}

function normalizeRemoteProject(row) {
  return {
    id: String(row.id ?? row.slug),
    slug: String(row.slug ?? "").trim(),
    title: {
      id: row.title_id ?? "",
      en: row.title_en ?? "",
      ja: row.title_ja ?? ""
    },
    category: typeof row.category === "string" && row.category.trim()
      ? row.category.trim()
      : "",
    description: {
      id: row.description_id ?? "",
      en: row.description_en ?? "",
      ja: row.description_ja ?? ""
    },
    technologies: Array.isArray(row.technologies) ? row.technologies : [],
    imageUrl: typeof row.image_url === "string" ? row.image_url : "",
    projectUrl: typeof row.project_url === "string" ? row.project_url : "",
    sortOrder: normalizeSortOrder(row.sort_order, 9999)
  };
}

function mergeProjects(localProjects, remoteProjects) {
  const merged = new Map();

  localProjects.forEach((project, index) => {
    const normalized = normalizeLocalProject(project, index);
    const key = normalized.slug.toLowerCase();
    if (key) merged.set(key, normalized);
  });

  for (const remoteRaw of remoteProjects) {
    if (!remoteRaw || typeof remoteRaw.slug !== "string" || !remoteRaw.slug.trim()) continue;

    const remote = normalizeRemoteProject(remoteRaw);
    const key = remote.slug.toLowerCase();
    const local = merged.get(key);

    if (!local) {
      const hasAnyTitle = LANGUAGES.some((language) =>
        typeof remote.title[language] === "string" && remote.title[language].trim()
      );
      if (!hasAnyTitle) continue;
      merged.set(key, {
        ...remote,
        category: remote.category || "Web Development"
      });
      continue;
    }

    merged.set(key, {
      ...local,
      title: mergeLocalized(local.title, remote.title),
      description: mergeLocalized(local.description, remote.description),
      category: remote.category || local.category,
      imageUrl: remote.imageUrl || local.imageUrl,
      projectUrl: remote.projectUrl || local.projectUrl,
      technologies: remote.technologies.length ? remote.technologies : local.technologies,
      sortOrder: Number.isFinite(Number(remote.sortOrder)) && remote.sortOrder !== 9999
        ? remote.sortOrder
        : local.sortOrder
    });
  }

  return [...merged.values()].sort((a, b) => a.sortOrder - b.sortOrder);
}

function getSupabaseEndpoint() {
  const rawUrl = String(config.supabaseUrl ?? "").trim();
  const apiKey = String(config.supabasePublishableKey ?? "").trim();
  const table = String(config.supabaseTable ?? "projects").trim();

  if (!rawUrl || !apiKey || !table) return null;

  let baseUrl;
  try {
    const parsed = new URL(rawUrl);
    const isLocalHttp = parsed.protocol === "http:" &&
      ["localhost", "127.0.0.1"].includes(parsed.hostname);
    if (parsed.protocol !== "https:" && !isLocalHttp) return null;
    baseUrl = parsed.href.replace(/\/+$/, "");
  } catch {
    return null;
  }

  const endpoint = new URL(`${baseUrl}/rest/v1/${encodeURIComponent(table)}`);
  endpoint.searchParams.set(
    "select",
    "id,slug,title_id,title_en,title_ja,description_id,description_en,description_ja,category,technologies,image_url,project_url,sort_order,published"
  );
  endpoint.searchParams.set("published", "eq.true");
  endpoint.searchParams.set("order", "sort_order.asc");

  return { url: endpoint.href, apiKey };
}

async function fetchCmsProjects() {
  const endpoint = getSupabaseEndpoint();
  if (!endpoint) return [];

  const controller = new AbortController();
  const timeout = Math.max(1000, Number(config.requestTimeoutMs) || 8000);
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(endpoint.url, {
      method: "GET",
      headers: {
        apikey: endpoint.apiKey,
        Accept: "application/json"
      },
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`Supabase mengembalikan HTTP ${response.status}.`);
    }

    const rows = await response.json();
    if (!Array.isArray(rows)) {
      throw new TypeError("Format respons CMS bukan array.");
    }
    return rows.filter((row) => row && typeof row.slug === "string" && row.slug.trim());
  } finally {
    clearTimeout(timeoutId);
  }
}

async function loadAndMergeProjects(localProjects = []) {
  const local = Array.isArray(localProjects) ? localProjects : [];
  const endpoint = getSupabaseEndpoint();

  // Tidak ada request jaringan pada mode lokal tanpa konfigurasi Supabase.
  if (!endpoint) return mergeProjects(local, []);

  try {
    const remote = await fetchCmsProjects();
    return mergeProjects(local, remote);
  } catch (error) {
    console.warn("CMS gagal dimuat; data lokal tetap digunakan.", error);
    return mergeProjects(local, []);
  }
}

/* --------------------------------------------------------------------------
 * Event delegation — satu listener tetap aktif meskipun konten di-render ulang.
 * -------------------------------------------------------------------------- */
function bindEvents() {
  DOM.hero.addEventListener("click", (event) => {
    const target = event.target instanceof Element
      ? event.target.closest("button[data-action='show-demo-message']")
      : null;
    if (!target || !DOM.hero.contains(target)) return;
    window.alert(t("hero.interactionMessage"));
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLSelectElement && target.id === "language-select") {
      setLanguage(target.value);
    }
  });

  DOM.portfolio.addEventListener("click", (event) => {
    const target = event.target instanceof Element
      ? event.target.closest("button[data-category]")
      : null;
    if (!target || !DOM.portfolio.contains(target)) return;

    const category = target.dataset.category;
    if (!category || category === state.activeCategory) return;

    state.activeCategory = category;
    renderProjects();
    applyTranslations(DOM.portfolio);
  });

  DOM.nav.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest(".site-nav a[href^='#']") : null;
    if (!link || !DOM.nav.contains(link)) return;

    const destination = document.querySelector(link.getAttribute("href"));
    if (destination) {
      for (const item of DOM.nav.querySelectorAll(".site-nav a")) {
        item.removeAttribute("aria-current");
      }
      link.setAttribute("aria-current", "page");
    }
  });
}

async function init() {
  if (!hasRequiredDOM()) {
    throw new Error("Struktur DOM utama tidak lengkap. Periksa ID pada index.html.");
  }

  state.language = readSavedLanguage();
  bindEvents();

  // Tampilkan data lokal terlebih dahulu agar halaman tidak kosong saat CMS lambat.
  const localProjects = Array.isArray(config.projects) ? config.projects : [];
  state.projects = mergeProjects(localProjects, []);
  renderAll();
  applyTranslations(document);

  // Jika CMS dikonfigurasi, perbarui galeri setelah data remote tersedia.
  if (getSupabaseEndpoint()) {
    void loadAndMergeProjects(localProjects)
      .then((projects) => {
        if (JSON.stringify(projects) === JSON.stringify(state.projects)) return;
        state.projects = projects;
        renderProjects();
        applyTranslations(DOM.portfolio);
      })
      .catch((error) => {
        console.warn("CMS gagal dimuat; data lokal tetap digunakan.", error);
      });
  }
}

init().catch((error) => {
  console.error("Portofolio gagal diinisialisasi.", error);
  const fallback = el("div", "container state state--error");
  fallback.setAttribute("role", "alert");
  fallback.append(
    el("p", "state__title", "Portofolio tidak dapat dimuat"),
    el("p", "", "Periksa console browser dan pastikan file config.js serta app.js tersedia.")
  );
  for (const container of [DOM.hero, DOM.about, DOM.portfolio, DOM.skills]) {
    if (container) container.replaceChildren();
  }
  if (DOM.portfolio) DOM.portfolio.append(fallback);
});
