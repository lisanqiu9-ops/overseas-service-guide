const articles = window.GUIDE_ARTICLES || [];

const groupNames = {
  account: "账号注册",
  region: "地区与商店",
  subscription: "订阅与支付"
};

const statusNames = {
  available: "可用",
  draft: "待完善"
};

const riskNames = {
  "低": "低风险",
  "中": "中风险",
  "高": "高风险"
};

const state = {
  query: "",
  filter: "all"
};

const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const cardGrid = document.querySelector("#card-grid");
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");

function isMatchFilter(article) {
  if (state.filter === "all") return true;
  if (state.filter === "available" || state.filter === "draft") return article.status === state.filter;
  return article.group === state.filter;
}

function isMatchQuery(article) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;

  const text = [
    article.title,
    article.description,
    article.summary,
    article.category,
    article.status,
    article.difficulty,
    article.riskLevel,
    article.updatedAt,
    ...(article.targetUsers || []),
    ...(article.notices || []).map((notice) => notice.text),
    ...(article.steps || []).flatMap((step) => [
      step.title,
      step.description,
      step.imageCaption,
      ...(step.tips || [])
    ])
  ].join(" ").toLowerCase();

  return text.includes(query);
}

function getFilteredArticles() {
  return articles.filter((article) => isMatchFilter(article) && isMatchQuery(article));
}

function imageAttrs(src, fallback) {
  const safeFallback = fallback || "assets/placeholder.svg";
  return `src="${src || safeFallback}" data-fallback="${safeFallback}" onerror="handleImageError(this)"`;
}

window.handleImageError = function handleImageError(img) {
  const fallback = img.dataset.fallback;
  if (fallback && img.src.indexOf(encodeURI(fallback)) === -1) {
    img.src = fallback;
    img.dataset.fallback = "assets/placeholder.svg";
    return;
  }

  const visual = img.closest(".step-visual");
  if (visual) visual.classList.add("is-missing");
  img.src = "assets/placeholder.svg";
};

function renderHome() {
  const filtered = getFilteredArticles();
  resultCount.textContent = `${filtered.length} 篇`;

  if (!filtered.length) {
    cardGrid.innerHTML = `<div class="empty-state">没有找到匹配教程。</div>`;
    return;
  }

  cardGrid.innerHTML = filtered.map((article) => `
    <a class="guide-card" href="#/article/${article.id}">
      <div class="card-cover">
        <img ${imageAttrs(article.cover, article.coverFallback)} alt="${article.title}">
      </div>
      <div class="card-body">
        <div class="meta-row">
          <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
          <span class="badge">${article.difficulty}</span>
          <span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>
        </div>
        <h2>${article.title}</h2>
        <p>${article.description || article.summary}</p>
        <div class="card-foot">
          <span>${article.category} · ${article.updatedAt}</span>
          <b>查看详情</b>
        </div>
      </div>
    </a>
  `).join("");
}

function renderNotice(notice) {
  return `<div class="notice ${notice.type || "info"}">${notice.text}</div>`;
}

function renderStep(step) {
  const hasImage = step.image || step.imageFallback;
  return `
    <section class="step-card ${hasImage ? "" : "text-only"}" id="${step.id}">
      <div class="step-copy">
        <div class="step-head">
          <span>${step.number}</span>
          <div>
            <h2>${step.title}</h2>
            <p>${step.description}</p>
          </div>
        </div>
        ${step.tips?.length ? `
          <div class="tip-box">
            <strong>提示</strong>
            <ul>${step.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
          </div>
        ` : ""}
      </div>
      ${hasImage ? `
        <figure class="step-visual">
          <img ${imageAttrs(step.image, step.imageFallback)} alt="${step.imageAlt || step.title}">
          <div>
            <figcaption>${step.imageCaption || step.imageAlt || step.title}</figcaption>
          </div>
        </figure>
      ` : ""}
    </section>
  `;
}

function renderFollowUps(followUps) {
  if (!followUps) return "";
  return `
    <section class="follow-up-box">
      <h2>${followUps.title}</h2>
      <p>${followUps.description}</p>
      <div class="follow-up-list">
        ${followUps.items.map((item, index) => `
          <div class="follow-up-item">
            <span>${index + 1}</span>
            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              ${item.tip ? `<small>${item.tip}</small>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDetail(article) {
  detailView.innerHTML = `
    <a class="back-button" href="#/">返回首页</a>
    <div class="article-shell">
      <header class="tutorial-hero">
        <div class="tutorial-intro">
          <div class="meta-row">
            <span class="badge ${article.status}">${statusNames[article.status] || article.status}</span>
            <span class="badge">${article.category}</span>
            <span class="badge">${article.difficulty}</span>
            <span class="badge risk-${article.riskLevel}">${riskNames[article.riskLevel] || article.riskLevel}</span>
          </div>
          <h1>${article.title}</h1>
          <p>${article.description}</p>
          <div class="info-grid">
            <div class="info-item"><span>更新时间</span><b>${article.updatedAt}</b></div>
            <div class="info-item"><span>预计耗时</span><b>${article.duration || "-"}</b></div>
            <div class="info-item"><span>步骤数量</span><b>${article.steps?.length || 0} 步</b></div>
          </div>
        </div>
      </header>

      <div class="article-content">
        ${article.targetUsers?.length ? `
          <section class="plain-section">
            <h2>适用人群</h2>
            <ul>${article.targetUsers.map((user) => `<li>${user}</li>`).join("")}</ul>
          </section>
        ` : ""}

        ${article.notices?.length ? `
          <section class="notice-stack">
            ${article.notices.map(renderNotice).join("")}
          </section>
        ` : ""}

        ${article.steps?.length ? `
          <nav class="toc">
            ${article.steps.map((step) => `<button type="button" class="toc-link" data-step-id="${step.id}">${step.number} ${step.title}</button>`).join("")}
          </nav>
          <section class="steps-section">
            ${article.steps.map(renderStep).join("")}
          </section>
        ` : `<div class="empty-state">这篇教程还在整理中。</div>`}

        ${renderFollowUps(article.followUps)}
      </div>
    </div>
  `;
}

function route() {
  const hash = decodeURIComponent(window.location.hash || "#/");
  const match = hash.match(/^#\/article\/(.+)$/);

  if (match) {
    const article = articles.find((item) => item.id === match[1]);
    if (article) {
      homeView.hidden = true;
      detailView.hidden = false;
      renderDetail(article);
      window.scrollTo(0, 0);
      return;
    }
  }

  homeView.hidden = false;
  detailView.hidden = true;
  renderHome();
  window.scrollTo(0, 0);
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderHome();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderHome();
});

detailView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-step-id]");
  if (!button) return;

  const target = detailView.querySelector(`#${button.dataset.stepId}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

window.addEventListener("hashchange", route);

route();
