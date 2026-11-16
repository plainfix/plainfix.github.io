---
layout: post
title: "QR Code Scams: How to Check a QR Code Before You Scan or Pay"
description: "Spot fake QR codes and quishing traps on parking meters, parcels, and payment stands by previewing the full URL and checking key red flags first."
category: online-safety
date: 2026-11-16
author: main
related:
  - digital-arrest-upi-scam-calls
  - qr-code-for-shop-business
  - check-fake-shopping-website
has_promo_links: true
published: true
---

A QR code is nothing more than machine-readable text—usually a web link or a payment request—that you cannot read with the naked eye before pointing your camera at it. Scammers exploit that blind spot in **quishing** (*QR code phishing*) attacks, but you can stop every QR trap by inspecting the physical code for sticker overlays, previewing the decoded URL before opening it, and never entering a payment PIN to "receive" money.

{% include quick-answer.html text="1. **Inspect the physical surface:** Run your finger over public QR codes (parking meters, café tables, shop stands) to check for a pasted sticker over the real code.
2. **Read the full URL preview first:** Never use a scanner app that opens web links automatically. Check the exact domain name before the first single slash (`/`).
3. **Never scan a QR code to receive money:** Scanning a UPI or payment QR code and entering your PIN **only sends money out** of your account.
4. **If a QR code opens a login page or downloads an `.apk` file:** Close the tab immediately and do not type any password or OTP." %}

* TOC
{:toc}

## Where QR Code Scams (Quishing) Happen Most Often

Because email security filters have become better at blocking suspicious clickable links in text, scammers increasingly hide phishing links inside QR images where automated filters are less likely to catch them:

- **Stickers pasted over real public QR codes:** Scammers place counterfeit vinyl or paper stickers over legitimate QR codes on street parking meters, EV charging stations, restaurant table menus, and shop payment standees.
- **"Scan to Receive Money" marketplace scams:** A buyer contacting you about a second-hand item on classified sites or WhatsApp sends a QR code and claims, *"Scan this code and enter your UPI PIN to receive the advance payment."*
- **Fake missed-delivery notes and mystery parcels:** A card slipped under your door or stuck to an unexpected package asks you to scan a QR code to "reschedule delivery" or "claim a gift voucher," leading to a credential-harvesting page.
- **Emails and PDF attachments pretending to be IT or HR:** Corporate phishing emails attach a PDF claiming your Microsoft 365, Google Workspace, or bank security settings expired and instruct you to scan the QR code with your phone (moving you off your protected work computer onto your personal mobile network).

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/check-qr-code-before-scanning/qr-code-safety-checks.svg' | relative_url }}" width="760" height="300" alt="Four-part diagram showing physical surface check, decoded domain check, never scan to receive money rule, and closing password or APK prompts." loading="lazy">
  <figcaption>Pause for five seconds between pointing your camera at a QR code and tapping the link preview.</figcaption>
</figure>

## Step-by-Step: How to Preview a QR Code Safely Without Opening the Link

You should always see the exact text or destination URL inside a QR code **before** your browser loads the webpage.

### Method 1: Use Your Built-In Phone Camera (iPhone & Android)

1. **Open the default Camera app** on your iPhone or Android phone (do not use random third-party scanner apps that contain ads or auto-redirect).
2. **Point the camera at the QR code from a safe distance** without tapping the screen yet. You will see a small pill or banner appear on screen showing the domain name (Last checked: November 2026 [VERIFY]).
3. **On iPhone:** Tap the small **QR code action button** on the right side of the yellow banner (or long-press the banner) to choose **Copy Link** instead of opening Safari, then paste the URL into the Notes app to read the entire address.
4. **On Android (Google Camera / Google Lens):** Tap the lens preview icon and read the full URL string before tapping **Open website**.

{% comment %}OWNER: add your own screenshot of a phone camera QR preview banner showing the domain URL before opening here{% endcomment %}

### Method 2: Inspect a QR Image or Screenshot Before Opening Any Link

When someone sends you a QR code inside a WhatsApp chat, an email attachment, or a PDF—or when your phone camera only shows a truncated `bit.ly` preview—you can [inspect a QR code image or scan it with your camera](https://qrizeo.com/qr-code-scanner) in your browser. It displays the decoded text and full URL first, never auto-opens links, and flags suspicious link patterns so you can examine the destination safely.

{% include disclosure.html site="QRizeo" %}

## Six Red Flags to Check in the Decoded QR Content

Once you see the decoded text or URL from a QR code, check it against this table before tapping anything:

| What You See in the QR Code | Why It Is Dangerous | What You Should Do |
| :--- | :--- | :--- |
| **Shortened URLs (`bit.ly`, `tinyurl`, `t.co`, `cutt.ly`)** on a parking meter, bank notice, or utility bill | Legitimate banks, government portals, and payment networks use their own official domains, not public link shorteners that hide the destination | Do **not** open the link; type the organization's official web address manually in your browser |
| **Look-alike domains (`pay-parking-city.com`, `mybank-kyc-update.in`, `micros0ft-auth.net`)** | Scammers register cheap domains with hyphens or swapped letters to mimic real portals | Read the domain name immediately to the left of the first single slash (`/`) |
| **`upi://pay?pa=...&am=5000` sent by someone claiming to PAY you** | A `upi://pay` URI is a payment **request** that deducts money from the scanner's bank account | Close the screen immediately; you never scan a QR code or enter a PIN to receive money |
| **Direct download link ending in `.apk`, `.exe`, or `.zip`** | Installs malware or SMS-stealing spyware outside the official app store | Cancel the download immediately and never enable *Install unknown apps* |
| **Page asks for your email password, banking login, or CVV** after scanning a café menu or Wi-Fi code | A restaurant menu or public Wi-Fi QR code never needs your Google, Apple, or bank login | Close the browser tab at once |
| **Physical sticker pasted crookedly over an existing sign** | Classic physical overlay attack in public spaces | Alert the shopkeeper or parking attendant and do not scan |

{% include callout.html type="danger" title="Golden Rule for UPI and Payment QR Codes" text="To RECEIVE money in UPI or any banking app, you never need to scan a QR code and you never enter your UPI PIN. If a caller or buyer asks you to scan a QR code to 'receive a refund' or 'verify your account,' it is 100% a scam." %}

## What to Do Immediately If You Already Scanned a Malicious QR Code

Simply pointing your camera at a QR code and seeing the preview banner does **not** hack your phone. Risk starts only if you opened the webpage and typed credentials, approved a payment, or installed a file:

1. **If you opened the link but did not type anything or download a file:** Close the browser tab and clear your browser history/cache for that site. No further action is required.
2. **If you entered an email, Microsoft, Google, or social media password:** Immediately open a trusted browser on another device, go directly to the official service, **change your password**, and open **Security → Your devices / Active sessions** to sign out of all other sessions.
3. **If the QR code downloaded and installed an `.apk` app on Android:** Turn on **Airplane Mode** immediately to cut off the attacker's remote connection, uninstall the app from **Settings → Apps**, and change your banking and email passwords from a separate clean device.
4. **If you approved a fraudulent UPI transaction or entered card details (India):** Call your bank's 24×7 fraud helpline immediately to block your card or UPI ID, call the official National Cyber Crime Helpline at **1930**, and file a report at **[cybercrime.gov.in](https://cybercrime.gov.in/)** within the first hour. For a full first-hour response plan, see our guide on [digital arrest and UPI scam calls in India]({{ '/guides/digital-arrest-upi-scam-calls/' | relative_url }}).

*Note: This guide provides general security information, not legal or financial advice. Always use official government portals and your bank's verified helpline for active fraud reports.*

## Practical QR Safety Tips for Shop Owners and Businesses

If your shop, clinic, or café displays a printed QR code for customer payments, Wi-Fi, or Google reviews:

- **Laminate or frame your payment QR inside a clear acrylic stand** and place it within sight of the cashier rather than unattended outside the entrance.
- **Inspect your printed QR code every morning** before opening the shop—run your fingers over the surface to confirm nobody placed a counterfeit sticker over your code overnight, and do a 5-second test scan to verify that your registered merchant name still appears.
- **Use a voice soundbox for payment confirmation** so staff hear instant audio confirmation when funds arrive in your real merchant account rather than relying on fake payment screenshots shown by scammers.

## Common Mistakes to Avoid

- **Installing free "QR Scanner" apps from ads:** Both iPhone (iOS) and Android have built-in QR scanners inside their native Camera apps. Many free third-party scanner apps immediately open malicious URLs without showing a preview first.
- **Trusting a QR code just because the website has an `https://` padlock:** An HTTPS padlock only means the connection between your phone and that website is encrypted—scammers obtain free HTTPS certificates for fake websites in minutes.

## If It Still Doesn't Work

- **Your iPhone Camera does not show a preview when pointing at a QR code:** Open **Settings → Camera** and make sure **Scan QR Codes** is toggled **On** (Last checked: November 2026 [VERIFY]).
- **Your Android Camera does not recognize QR codes:** Open your Camera app's **Settings** gear icon and enable **Scan QR codes** or **Google Lens suggestions**, or tap the **Lens** icon next to the search bar in the Google app.

## Privacy and Safety Notes

Some marketing QR codes include unique tracking parameters in the URL that log your approximate location, device type, and scan time as soon as the webpage loads. Previewing the URL before opening it lets you strip tracking parameters or avoid opening untrusted marketing links altogether. Read more practical security walkthroughs in our [Online Safety & Scams category]({{ '/category/online-safety/' | relative_url }}).

## Frequently Asked Questions

### Can my phone get hacked just by pointing the camera at a QR code?
No. Pointing your camera at a QR code only decodes the text string inside the squares. Harm happens only if you tap the link and enter passwords/payment details on a phishing site, or if you allow your phone to download and install a malicious app.

### How can I tell if a UPI QR code belongs to the real shop?
When you scan a UPI QR code in any UPI app (such as BHIM, Google Pay, PhonePe, or Paytm), the app fetches the **registered banking name** of the recipient before asking for an amount or PIN. Always ask the shopkeeper to confirm the registered name shown on your screen before paying.

### Why are scammers putting QR codes inside PDF email attachments?
Automated email filters scan the body text of emails for known phishing links. By hiding the link inside a QR code image inside a PDF attachment, scammers try to bypass corporate email scanners and trick you into opening the link on your personal phone.

## Next Step

Open your phone's **Camera Settings** right now to confirm that built-in QR scanning is enabled, delete any third-party ad-supported QR scanner apps you no longer need, and make it a habit to read the full domain name before tapping any QR link banner.

## Sources

1. [FTC Consumer Advice — How to protect yourself from unexpected QR code scams](https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information)
2. [NCSC (UK National Cyber Security Centre) — QR codes: What to look out for](https://www.ncsc.gov.uk/) [VERIFY SOURCE: confirm exact NCSC QR code guidance URL]
3. [NPCI (National Payments Corporation of India) — UPI Safety and Awareness Guidelines](https://www.npci.org.in/what-we-do/upi/upi-safety-shield) [VERIFY SOURCE: confirm NPCI UPI safety shield URL]
4. [National Cyber Crime Reporting Portal (India) — cybercrime.gov.in](https://cybercrime.gov.in/)
