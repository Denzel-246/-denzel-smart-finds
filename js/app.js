/* =========================================================================
   DENZEL SMART FINDS — APP.JS
   Shared rendering + interaction logic. Reads content from data.js and
   injects it into whichever containers exist on the current page.
   Nothing here needs editing to update content — see js/data.js instead.
   ========================================================================= */

(function () {
  "use strict";

  const BADGE_LABEL = {
    editorial: "Editorial",
    research: "Product Research",
    tested: "Personally Tested",
  };

  function badgeHTML(type) {
    const t = BADGE_LABEL[type] ? type : "editorial";
    return `<span class="badge badge-${t}">${BADGE_LABEL[t]}</span>`;
  }

  function formatDate(iso) {
    try {
      return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return iso;
    }
  }

  function categoryName(slug) {
    const cat = (window.CATEGORIES || []).find((c) => c.id === slug);
    return cat ? cat.name : slug;
  }

  /* -------------------------------------------------------------------
     Path helper — figures out how deep the current page is nested so
     links/images built by JS still resolve correctly from /categories/
     or /articles/.
  ------------------------------------------------------------------- */
  function rootPath() {
    const el = document.querySelector("[data-root]");
    return el ? el.getAttribute("data-root") : "";
  }

  /* -------------------------------------------------------------------
     NAV TOGGLE (mobile)
  ------------------------------------------------------------------- */
  function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* -------------------------------------------------------------------
     FOOTER YEAR
  ------------------------------------------------------------------- */
  function injectYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* -------------------------------------------------------------------
     CATEGORY TILES  (homepage)
  ------------------------------------------------------------------- */
  function renderCategoryTiles(containerId) {
    const el = document.getElementById(containerId);
    if (!el || !window.CATEGORIES) return;
    const root = rootPath();
    el.innerHTML = window.CATEGORIES
      .map(
        (cat) => `
      <a class="category-card" href="${root}categories/${cat.slug}.html">
        <div class="category-icon" aria-hidden="true">${cat.name.charAt(0)}</div>
        <h3>${cat.name}</h3>
        <p>${cat.blurb}</p>
      </a>`
      )
      .join("");
  }

  /* -------------------------------------------------------------------
     ARTICLE CARDS
     opts: { limit, categoryFilter }
  ------------------------------------------------------------------- */
  function renderArticleCards(containerId, opts) {
    opts = opts || {};
    const el = document.getElementById(containerId);
    if (!el || !window.ARTICLES) return;
    const root = rootPath();
    let list = window.ARTICLES.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
    if (opts.categoryFilter) {
      list = list.filter((a) => a.category === opts.categoryFilter);
    }
    if (opts.limit) list = list.slice(0, opts.limit);

    if (!list.length) {
      el.innerHTML = `<p class="small-note">No articles in this category yet — check back soon.</p>`;
      return;
    }

    el.innerHTML = list
      .map(
        (a) => `
      <article class="article-card" data-type="${a.type}">
        <div class="article-thumb">Article Image</div>
        <div class="article-body">
          <div class="article-meta">
            ${badgeHTML(a.type)}
            <span>${formatDate(a.date)}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <a class="article-link" href="${root}${a.url}">Read the guide &rarr;</a>
        </div>
      </article>`
      )
      .join("");
  }

  /* -------------------------------------------------------------------
     PRODUCT CARDS
     opts: { categoryFilter, limit }
  ------------------------------------------------------------------- */
  function renderProductCards(containerId, opts) {
    opts = opts || {};
    const el = document.getElementById(containerId);
    if (!el || !window.PRODUCTS) return;
    let list = window.PRODUCTS.slice();
    if (opts.categoryFilter) {
      list = list.filter((p) => p.category === opts.categoryFilter);
    }
    if (opts.limit) list = list.slice(0, opts.limit);

    if (!list.length) {
      el.innerHTML = `<p class="small-note">No products listed in this category yet.</p>`;
      return;
    }

    el.innerHTML = list
      .map(
        (p) => `
      <div class="product-card" data-category="${p.category}">
        <div class="product-image">${p.image}</div>
        <div class="product-body">
          <span class="product-category">${categoryName(p.category)}</span>
          <h3>${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <ul class="product-features">
            ${p.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>
          <div class="product-footer">
            <span class="product-price">${p.price}</span>
            <span class="product-rating">${p.rating === "RATING_PLACEHOLDER" ? "Rating pending" : "★ " + p.rating}</span>
          </div>
        </div>
        <a class="btn btn-primary btn-block" style="margin:0 20px 18px; width:calc(100% - 40px);"
           href="${p.amazonUrl}" target="_blank" rel="nofollow sponsored noopener">
           View Product
        </a>
        <p class="product-disclosure">As an Amazon Associate we may earn from qualifying purchases.</p>
      </div>`
      )
      .join("");
  }

  /* -------------------------------------------------------------------
     CATEGORY FILTER BAR (category pages) — filters the product grid
  ------------------------------------------------------------------- */
  function initFilterBar(barId, gridId) {
    const bar = document.getElementById(barId);
    const grid = document.getElementById(gridId);
    if (!bar || !grid) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.getAttribute("data-filter");
      grid.querySelectorAll(".product-card").forEach((card) => {
        card.style.display =
          filter === "all" || card.getAttribute("data-category") === filter ? "" : "none";
      });
    });
  }

  function initTypeFilterBar(barId, gridId, cardSelector) {
    const bar = document.getElementById(barId);
    const grid = document.getElementById(gridId);
    if (!bar || !grid) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.getAttribute("data-filter");
      grid.querySelectorAll(cardSelector).forEach((card) => {
        card.style.display =
          filter === "all" || card.getAttribute("data-type") === filter ? "" : "none";
      });
    });
  }

  /* -------------------------------------------------------------------
     NEWSLETTER FORM (front-end only — no backend connected yet)
  ------------------------------------------------------------------- */
  function initNewsletterForm() {
    document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const note = form.querySelector("[data-newsletter-note]");
        if (note) {
          note.textContent =
            "Thanks — this form isn't connected to an email service yet. See /admin for setup instructions.";
        }
      });
    });
  }

  /* -------------------------------------------------------------------
     CONTACT FORM (front-end only — no backend connected yet)
  ------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.getElementById("contact-form-note");
      if (note) {
        note.textContent =
          "This form is a front-end layout only. Connect a form service (see /admin) so submissions actually reach your inbox.";
      }
    });
  }

  function initSocialLinks() {
    if (!window.SITE) return;
    const map = {
      "social-tiktok": SITE.social.tiktok,
      "social-youtube": SITE.social.youtube,
      "social-instagram": SITE.social.instagram,
      "social-facebook": SITE.social.facebook,
    };
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const url = map[id];
      if (!url || url.indexOf("PLACEHOLDER") !== -1) {
        el.setAttribute("href", "#");
        el.setAttribute("aria-disabled", "true");
        el.style.opacity = "0.4";
        el.addEventListener("click", (e) => e.preventDefault());
      } else {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavToggle();
    injectYear();
    initNewsletterForm();
    initContactForm();
    initSocialLinks();
    document.querySelectorAll("[data-active-nav]").forEach((el) => {
      el.setAttribute("aria-current", "page");
    });
  });

  /* Expose helpers used by individual pages */
  window.DSF = {
    renderCategoryTiles,
    renderArticleCards,
    renderProductCards,
    initFilterBar,
    initTypeFilterBar,
    badgeHTML,
    formatDate,
    categoryName,
    rootPath,
  };
})();
