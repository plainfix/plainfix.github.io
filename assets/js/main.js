(function () {
  "use strict";
  var btn = document.getElementById("menu-toggle"), nav = document.getElementById("primary-nav-panel");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var o = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(o));
      nav.classList.toggle("is-open", o);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        btn.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        btn.focus();
      }
    });
  }
  var toc = document.getElementById("markdown-toc"), mWrap = document.getElementById("toc-mobile-container");
  var mNav = document.getElementById("toc-mobile-nav"), mDet = document.getElementById("toc-details");
  var sBox = document.getElementById("toc-sticky"), dNav = document.getElementById("toc-desktop-nav");
  function stripIds(el) {
    el.removeAttribute("id");
    var n = el.querySelectorAll("[id]");
    for (var i = 0; i < n.length; i++) n[i].removeAttribute("id");
    return el;
  }
  if (toc && toc.children.length > 0) {
    if (mWrap && mNav) {
      mNav.appendChild(stripIds(toc.cloneNode(true)));
      mWrap.hidden = false;
      if (mDet) {
        mNav.addEventListener("click", function (e) { if (e.target && e.target.tagName === "A") mDet.open = false; });
        mDet.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && mDet.open) { mDet.open = false; var s = mDet.querySelector("summary"); if (s) s.focus(); }
        });
      }
    }
    if (sBox && dNav) { dNav.appendChild(stripIds(toc.cloneNode(true))); sBox.hidden = false; }
    toc.hidden = true;
  }
  var tbls = document.querySelectorAll(".prose table");
  for (var t = 0; t < tbls.length; t++) {
    var tb = tbls[t];
    if (!tb.parentElement || !tb.parentElement.classList.contains("table-scroll")) {
      var w = document.createElement("div");
      w.className = "table-scroll";
      w.setAttribute("tabindex", "0");
      w.setAttribute("role", "region");
      w.setAttribute("aria-label", "Scrollable table");
      tb.parentNode.insertBefore(w, tb);
      w.appendChild(tb);
    }
  }
})();
