(function () {
  "use strict";
  var idx = null, pend = null, url = document.body.getAttribute("data-search-url") || "/search.json";
  function load() {
    if (idx) return Promise.resolve(idx);
    if (!pend) pend = fetch(url).then(function (r) { return r.ok ? r.json() : []; }).then(function (d) { return (idx = Array.isArray(d) ? d : []); }).catch(function () { return (idx = []); });
    return pend;
  }
  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function match(posts, q, cat) {
    var terms = (q || "").trim().toLowerCase().split(/\s+/).filter(Boolean), c = (cat || "").trim().toLowerCase(), out = [];
    for (var i = 0; i < posts.length; i++) {
      var p = posts[i];
      if (c && (p.category || "").toLowerCase() !== c) continue;
      if (!terms.length) { out.push({ p: p, s: 1 }); continue; }
      var t = (p.title || "").toLowerCase(), d = (p.description || "").toLowerCase(), k = (p.category_name || p.category || "").toLowerCase(), s = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var w = terms[j], ht = t.indexOf(w) > -1, hd = d.indexOf(w) > -1, hk = k.indexOf(w) > -1;
        if (!ht && !hd && !hk) { ok = false; break; }
        s += (ht ? 3 : 0) + (hd ? 1 : 0) + (hk ? 1 : 0);
      }
      if (ok) out.push({ p: p, s: s });
    }
    return out.sort(function (a, b) { return b.s - a.s; }).map(function (x) { return x.p; });
  }
  var hIn = document.getElementById("header-search-input"), hDrop = document.getElementById("header-search-results"), cur = -1;
  function closeDrop() { if (hDrop && hIn) { hDrop.hidden = true; hIn.setAttribute("aria-expanded", "false"); cur = -1; } }
  function showDrop(list, q) {
    if (!hDrop || !hIn || !q || q.trim().length < 2) { closeDrop(); return; }
    var top = list.slice(0, 6);
    hDrop.innerHTML = !top.length
      ? '<div class="search-dropdown-item"><span class="search-dropdown-meta">No matches. Press Enter to search.</span></div>'
      : top.map(function (it) { return '<a class="search-dropdown-item" role="option" href="' + esc(it.url) + '"><span class="search-dropdown-title">' + esc(it.title) + '</span><span class="search-dropdown-meta">' + esc(it.category_name || it.category) + ' &middot; ' + esc(it.date) + '</span></a>'; }).join("");
    hDrop.hidden = false; hIn.setAttribute("aria-expanded", "true"); cur = -1;
  }
  if (hIn && hDrop) {
    hIn.addEventListener("focus", function () { load().then(function (p) { if (hIn.value.trim().length >= 2) showDrop(match(p, hIn.value, ""), hIn.value); }); });
    hIn.addEventListener("input", function () { var v = hIn.value; if (v.trim().length < 2) closeDrop(); else load().then(function (p) { showDrop(match(p, v, ""), v); }); });
    hIn.addEventListener("keydown", function (e) {
      var opts = hDrop.querySelectorAll("a.search-dropdown-item");
      if (e.key === "Escape") { closeDrop(); return; }
      if (!opts.length || hDrop.hidden) return;
      if (e.key === "ArrowDown") { e.preventDefault(); cur = (cur + 1) % opts.length; }
      else if (e.key === "ArrowUp") { e.preventDefault(); cur = cur <= 0 ? opts.length - 1 : cur - 1; }
      else if (e.key === "Enter" && cur >= 0 && opts[cur]) { e.preventDefault(); window.location.href = opts[cur].getAttribute("href"); return; }
      else return;
      for (var i = 0; i < opts.length; i++) opts[i].classList.toggle("is-active", i === cur);
    });
    document.addEventListener("click", function (e) { if (!hIn.contains(e.target) && !hDrop.contains(e.target)) closeDrop(); });
  }
  var pIn = document.getElementById("search-page-input"), pCat = document.getElementById("search-page-category"), pRes = document.getElementById("search-page-results"), pStat = document.getElementById("search-page-status");
  function renderPage(posts) {
    if (!pRes || !pStat) return;
    var q = pIn ? pIn.value : "", c = pCat ? pCat.value : "", list = match(posts, q, c);
    if (!posts.length) { pStat.textContent = "No guides indexed yet."; pRes.innerHTML = ""; return; }
    pStat.textContent = (!q.trim() && !c) ? "Showing all " + list.length + " guides." : list.length + (list.length === 1 ? " guide" : " guides") + " found.";
    pRes.innerHTML = !list.length
      ? '<div class="empty-state"><p>No guides matched. Try fewer words.</p></div>'
      : list.map(function (p) { return '<article class="article-card"><div class="article-card-top"><span class="category-chip">' + esc(p.category_name || p.category) + '</span><span class="article-card-meta">' + esc(p.date) + '</span></div><h2 class="article-card-title"><a href="' + esc(p.url) + '">' + esc(p.title) + '</a></h2><p class="article-card-desc">' + esc(p.description) + '</p></article>'; }).join("");
  }
  if (pIn && pRes) {
    var sp = new URLSearchParams(window.location.search), iq = sp.get("q") || "", ic = sp.get("cat") || "";
    if (iq) pIn.value = iq;
    if (pCat && ic) pCat.value = ic;
    if (hIn && iq) hIn.value = iq;
    load().then(function (p) { renderPage(p); pIn.addEventListener("input", function () { renderPage(p); }); if (pCat) pCat.addEventListener("change", function () { renderPage(p); }); });
  }
})();
