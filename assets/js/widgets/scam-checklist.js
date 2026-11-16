(function () {
  "use strict";
  var mount = document.getElementById("scam-checklist-widget");
  if (!mount) return;

  var flags = [
    "Caller claims to be Police, CBI, Customs, Narcotics, TRAI, or a Judge on a WhatsApp or Skype video call.",
    "Caller uses the phrase \"digital arrest\" or orders you to stay on the call and not speak to anyone.",
    "Caller says a parcel, SIM card, or bank account in your Aadhaar name was linked to a crime.",
    "Caller demands a money transfer to a \"Reserve Bank / Government verification account\" to clear your name.",
    "Someone asks you to enter your UPI PIN or approve a Collect Request to RECEIVE money.",
    "Caller asks you to install AnyDesk, TeamViewer, RustDesk, or an APK file sent on WhatsApp."
  ];

  var html = "";
  for (var i = 0; i < flags.length; i++) {
    html += '<label class="checklist-item"><input type="checkbox" class="scam-flag-check"> <span>' + flags[i] + "</span></label>";
  }

  mount.innerHTML =
    '<section class="widget-box" aria-labelledby="scam-check-title">' +
    '<h3 id="scam-check-title" class="widget-title">Interactive Red-Flag Checker</h3>' +
    "<p>Tick any item that matches the call or message you received:</p>" +
    "<div>" + html + "</div>" +
    '<div class="widget-result" id="scam-check-output" aria-live="polite">' +
    "<p><strong>0 red flags selected.</strong> Select any statement above to check the risk level.</p></div></section>";

  var boxes = mount.querySelectorAll(".scam-flag-check");
  var out = document.getElementById("scam-check-output");

  function upd() {
    var n = 0;
    for (var j = 0; j < boxes.length; j++) if (boxes[j].checked) n++;
    out.innerHTML = n === 0
      ? "<p><strong>0 red flags selected.</strong> Select any statement above to check the risk level.</p>"
      : "<p><strong>High Scam Alert (" + n + (n === 1 ? " red flag" : " red flags") + " matched):</strong> Indian law has NO process called \"digital arrest,\" and you never enter a UPI PIN to receive money.</p>" +
        "<p><strong>First-hour action:</strong> Disconnect immediately, do not transfer money, call <strong>1930</strong>, and report at <strong>cybercrime.gov.in</strong>.</p>";
  }
  for (var k = 0; k < boxes.length; k++) boxes[k].addEventListener("change", upd);
})();
