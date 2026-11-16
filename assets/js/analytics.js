(function () {
  "use strict";
  // GA4 setup kept in a local file so the Content-Security-Policy never needs 'unsafe-inline'.
  var s = document.currentScript, id = s && s.getAttribute("data-ga-id");
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);
})();
