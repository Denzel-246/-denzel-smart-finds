/* =========================================================================
   DENZEL SMART FINDS — SEARCH.JS
   A small, fully client-side search over articles, products, and
   categories. No backend, no external service, no build step.
   ========================================================================= */

(function () {
  "use strict";

  function buildIndex() {
    const items = [];
    (window.ARTICLES || []).forEach((a) => {
      items.push({
        type: "Guide",
        title: a.title,
        text: (a.title + " " + a.excerpt).toLowerCase(),
        url: a.url,
      });
    });
    (window.PRODUCTS || []).forEach((p) => {
      items.push({
        type: "Product",
        title: p.name,
        text: (p.name + " " + p.description).toLowerCase(),
        url: null, // products live on category pages, not their own page
        category: p.category,
      });
    });
    (window.CATEGORIES || []).forEach((c) => {
      items.push({
        type: "Category",
        title: c.name,
        text: (c.name + " " + c.blurb).toLowerCase(),
        url: "categories/" + c.slug + ".html",
      });
    });
    return items;
  }

  function search(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return [];
    const index = buildIndex();
    return index
      .filter((item) => item.text.includes(q))
      .slice(0, 8)
      .map((item) => {
        if (item.type === "Product" && !item.url) {
          item.url = "categories/" + item.category + ".html";
        }
        return item;
      });
  }

  /* -------------------------------------------------------------------
     Header typeahead dropdown
  ------------------------------------------------------------------- */
  function initHeaderSearch() {
    const input = document.getElementById("header-search-input");
    const panel = document.getElementById("search-results-panel");
    if (!input || !panel) return;
    const root = window.DSF ? window.DSF.rootPath() : "";

    function render(results, query) {
      if (!query) {
        panel.classList.remove("open");
        panel.innerHTML = "";
        return;
      }
      if (!results.length) {
        panel.innerHTML = `<div class="no-results">No results for "${query}". Try a category name like "tech" or "students".</div>`;
        panel.classList.add("open");
        return;
      }
      panel.innerHTML = results
        .map(
          (r) => `
        <a href="${root}${r.url}">
          <span class="result-type">${r.type}</span><br>
          ${r.title}
        </a>`
        )
        .join("");
      panel.classList.add("open");
    }

    input.addEventListener("input", () => {
      render(search(input.value), input.value.trim());
    });
    input.addEventListener("focus", () => {
      if (input.value.trim()) render(search(input.value), input.value.trim());
    });
    document.addEventListener("click", (e) => {
      if (!panel.contains(e.target) && e.target !== input) {
        panel.classList.remove("open");
      }
    });
    input.closest("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      window.location.href = root + "search.html?q=" + encodeURIComponent(q);
    });
  }

  /* -------------------------------------------------------------------
     Full results page (search.html)
  ------------------------------------------------------------------- */
  function initSearchPage() {
    const container = document.getElementById("search-page-results");
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    const heading = document.getElementById("search-page-heading");
    const input = document.getElementById("search-page-input");
    if (input) input.value = q;
    if (heading) {
      heading.textContent = q ? `Search results for "${q}"` : "Search Denzel Smart Finds";
    }
    const results = search(q);
    if (!q) {
      container.innerHTML = `<p class="small-note">Type a keyword above — try "laptop", "productivity", or "students".</p>`;
      return;
    }
    if (!results.length) {
      container.innerHTML = `<p class="small-note">No results for "${q}". Try a broader term or browse a category from the menu.</p>`;
      return;
    }
    container.innerHTML = results
      .map(
        (r) => `
      <div class="search-result-row">
        <span class="result-type">${r.type}</span>
        <div><a href="${r.url}">${r.title}</a></div>
      </div>`
      )
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderSearch();
    initSearchPage();
  });

  window.DSFSearch = { search };
})();
