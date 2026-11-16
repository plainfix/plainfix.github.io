(function () {
  "use strict";
  var m = document.getElementById("download-time-widget");
  if (!m) return;
  m.innerHTML =
    '<section class="widget-box" aria-labelledby="dl-calc-title"><h3 id="dl-calc-title" class="widget-title">Download Time &amp; Speed Calculator</h3>' +
    '<div class="widget-grid"><div class="widget-field"><label for="dl-file-size">File Size</label><div class="widget-input-group">' +
    '<input type="number" id="dl-file-size" class="widget-input" value="4.5" min="0.01" step="any" aria-label="File size">' +
    '<select id="dl-file-unit" class="widget-select" aria-label="File unit"><option value="MB">MB</option><option value="GB" selected>GB</option><option value="TB">TB</option></select></div></div>' +
    '<div class="widget-field"><label for="dl-speed-val">Internet Speed</label><div class="widget-input-group">' +
    '<input type="number" id="dl-speed-val" class="widget-input" value="100" min="0.1" step="any" aria-label="Speed">' +
    '<select id="dl-speed-unit" class="widget-select" aria-label="Speed unit"><option value="Mbps" selected>Mbps</option><option value="Gbps">Gbps</option><option value="MBps">MB/s</option></select></div></div></div>' +
    '<div class="widget-result" id="dl-calc-output" aria-live="polite"></div></section>';
  var sIn = document.getElementById("dl-file-size"), sUn = document.getElementById("dl-file-unit");
  var vIn = document.getElementById("dl-speed-val"), vUn = document.getElementById("dl-speed-unit"), out = document.getElementById("dl-calc-output");
  function fmt(s) {
    if (!isFinite(s) || s <= 0) return "Under 1 sec";
    if (s < 1) return s.toFixed(2) + " secs";
    var r = Math.round(s), h = Math.floor(r / 3600), mn = Math.floor((r % 3600) / 60), sc = r % 60, p = [];
    if (h) p.push(h + " hr" + (h > 1 ? "s" : ""));
    if (mn) p.push(mn + " min" + (mn > 1 ? "s" : ""));
    if (sc || !p.length) p.push(sc + " sec" + (sc !== 1 ? "s" : ""));
    return p.join(" ");
  }
  function calc() {
    var sz = parseFloat(sIn.value), sp = parseFloat(vIn.value);
    if (isNaN(sz) || sz <= 0 || isNaN(sp) || sp <= 0) { out.textContent = "Enter valid size and speed."; return; }
    var mb = sz * (sUn.value === "GB" ? 1024 : sUn.value === "TB" ? 1048576 : 1);
    var mbps = vUn.value === "Gbps" ? sp * 1000 : vUn.value === "MBps" ? sp * 8 : sp, MBs = mbps / 8, t = mb / MBs;
    out.innerHTML = "<p><strong>Speed:</strong> " + mbps.toFixed(1) + " Mbps = <strong>" + MBs.toFixed(2) + " MB/s</strong></p>" +
      "<p><strong>Ideal:</strong> " + fmt(t) + " &middot; <strong>Real-world (~85%):</strong> " + fmt(t / 0.85) + "</p>";
  }
  sIn.addEventListener("input", calc); sUn.addEventListener("change", calc); vIn.addEventListener("input", calc); vUn.addEventListener("change", calc);
  calc();
})();
