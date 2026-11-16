---
layout: post
title: "How to Check If a Shopping Website Is Fake Before You Pay"
description: "Check domain age, WHOIS records, payment methods, contact details, and product photos to spot a fake online shopping website before you lose money."
category: online-safety
date: 2026-11-16
author: main
related:
  - check-qr-code-before-scanning
  - digital-arrest-upi-scam-calls
  - check-email-password-leak
has_promo_links: false
published: true
---

During festival sales and clearance seasons, thousands of slick-looking online stores pop up on Instagram, Facebook, YouTube, and search ads offering branded sneakers, kitchen appliances, or silk sarees at 75% to 90% off. Because anyone can spin up a professional store template with an `https://` padlock in an afternoon, you should run a **60-second check on the domain's registration age, checkout payment options, product photos, and physical contact details** before entering a card number or approving a UPI transfer.

*Note: This guide provides general consumer safety and technical awareness information, not legal or financial advice. If you have lost money to an online fraud, contact your bank and official government reporting portals immediately.*

{% include quick-answer.html text="1. **Check the domain creation date on `lookup.icann.org`:** If a website claims 'Trusted since 2016' but its domain was registered 18 days ago, walk away.
2. **Test the checkout screen:** Fake stores often disable Credit Cards and Cash on Delivery (or add fake errors) to force an irreversible UPI transfer to a personal UPI ID.
3. **Run a reverse image search on the product photo:** Most ad-scam stores steal product videos and photos from real independent designers or overseas marketplaces.
4. **Never trust the `https://` padlock alone:** A padlock only means traffic is encrypted—scammers get free SSL certificates in minutes." %}

* TOC
{:toc}

## Why the HTTPS Padlock Does Not Mean a Store Is Legitimate

For years, well-meaning advice told shoppers to *"look for `https://` and the padlock icon in the browser bar before buying."* Today, that rule is obsolete as a trust check.

Certificate authorities issue free domain-validated HTTPS certificates automatically to anyone who controls a domain name—including a scammer who registered `brand-mega-clearance-sale.shop` ten minutes ago. **HTTPS only protects data in transit between your browser and the website; it says nothing about who runs the website.**

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/check-fake-shopping-website/fake-shopping-site-red-flags.svg' | relative_url }}" width="760" height="295" alt="Four-part diagram showing domain age lookup, HTTPS padlock myth, UPI-only checkout red flag, and reverse image search on product photos." loading="lazy">
  <figcaption>Checking domain age and testing what happens on the checkout screen exposes throwaway scam stores in less than a minute.</figcaption>
</figure>

## Step-by-Step: The 6-Point Pre-Payment Check

### 1. Check the Domain Registration Age (WHOIS / ICANN Lookup)

Scam stores rarely survive longer than a few weeks before complaints get their ad accounts shut down, so they constantly register brand-new domain names:

1. **Copy the store's main domain name** from your browser address bar (for example, `trendy-footwear-india.store`).
2. **Open the official [ICANN Registration Data Lookup Tool (`lookup.icann.org`)](https://lookup.icann.org/)** in a new tab (Last checked: November 2026 [VERIFY]).
3. **Paste the domain name and click Lookup.** Scroll down to the **Dates** section and read the **Created** date.
4. **Evaluate the result:** If the website's "About Us" page boasts of 50,000 happy customers over five years, yet the ICANN record shows the domain was **created 12 days ago** and expires in one year, close the site immediately.

{% comment %}OWNER: add your own screenshot of an ICANN WHOIS lookup showing the 'Created' date of a domain here{% endcomment %}

### 2. Inspect the Checkout Payment Methods (The UPI-Only Trap)

Even if a fake store pastes Visa, Mastercard, RuPay, and "Cash on Delivery Available" badges across its homepage footer, see what happens when you click through to the final payment step (using a dummy name and address):

- **UPI transfer to an unverified personal ID or QR code:** Legitimate e-commerce stores process payments through regulated merchant payment gateways (such as Razorpay, PayU, Cashfree, Stripe, or CCAvenue) where the registered company name appears. Scam stores frequently show a static QR code or route directly to a personal UPI handle (`randomname982@okaxis`) because personal UPI transfers cannot be reversed with a credit card chargeback. If a site shows a payment QR, review our guide on how to [check a QR code before you scan or pay]({{ '/guides/check-qr-code-before-scanning/' | relative_url }}).
- **"Cash on Delivery unavailable for your PIN code":** Many scam sites advertise COD on the product page, then claim COD is "temporarily unavailable at your PIN code—pay online for extra Rs 100 discount" on every single PIN code in the country.

### 3. Reverse-Search the Product Photos and Videos

Social media ad scams on Instagram Reels, Facebook, and YouTube Shorts work by downloading real product videos from genuine artisans, D2C brands, or overseas creators and slapping a `"Flat 80% Off Today — Rs 399 Only"` banner on top:

1. **Take a screenshot or long-press the product photo** and choose **Search image with Google Lens**.
2. **Compare the prices and brand names** across the search results. If the exact same hand-embroidered dress or smartwatch photo sells for `Rs 4,500` (`$55`) on the original designer's verified website and `Rs 499` (`$6`) on the unknown ad store, you will either receive a worthless rag of cloth or nothing at all.

### 4. Verify the Physical Address, GST/Registration Info, and Return Policy

Open the store's **Contact Us**, **Shipping Policy**, and **Terms of Service** pages and look for these telltale copy-paste errors:

| Trust Element | Real E-Commerce Business | Fake / Throwaway Scam Store |
| :--- | :--- | :--- |
| **Contact Information** | Complete street address, registered company name, working support email on the store's own domain, and verifiable GSTIN / business registration | Only a web form or a free `@gmail.com` address; street address is either missing or points to an empty highway or random residential block on Google Maps |
| **Policy Pages** | Specific return window, courier partner names, and clear refund workflow | Contains leftover template placeholders like `[INSERT STORE NAME]` or mentions laws of a completely different country |
| **Pricing Structure** | Discounts vary realistically by product (`10%–40%`) | Every single item across the entire catalog is priced at the exact same number (e.g., everything is `Rs 499` or `$19.99`) |
| **Customer Reviews** | Mix of 3-, 4-, and 5-star reviews over months with varied buyer photos | 100% 5-star reviews all dated the same week, or star icons that are static images you cannot click |

## What to Do Immediately If You Already Paid a Fake Website

If you realized a store is fraudulent right after completing a payment or placing a Cash on Delivery order:

1. **If you paid by Credit Card:** Call your card issuer's dispute desk immediately and file a **Chargeback for Fraud / Non-Delivery of Merchandise**, and ask to block and replace the card number so the scam site cannot bill recurring charges.
2. **If you paid by UPI, Debit Card, or Net Banking (India):** Call the official **National Cyber Crime Helpline at 1930** immediately and file an online financial fraud complaint at **[cybercrime.gov.in](https://cybercrime.gov.in/)** with the transaction UTR number and screenshots of the website URL and ad. Also notify your bank's fraud desk and file a consumer grievance on the **[National Consumer Helpline (`consumerhelpline.gov.in` / 1915)](https://consumerhelpline.gov.in/)** (Last checked: November 2026 [VERIFY]). For the full first-hour banking checklist, see our guide on [digital arrest and UPI scam calls in India]({{ '/guides/digital-arrest-upi-scam-calls/' | relative_url }}).
3. **If you placed a Cash on Delivery (COD) order on a suspicious ad store:** When the courier delivery agent arrives, **refuse the parcel and do not pay**. Once you hand over cash or UPI to a delivery agent for a sealed packet, the courier partner cannot refund you on the spot if the box contains old newspaper or a cheap substitute.
4. **If you created an account with your usual password on the fake store:** Scammers harvest email-and-password pairs entered during checkout to break into your real email and shopping accounts. Change that password immediately if you used it anywhere else.

{% include callout.html type="warning" title="Beware of the 'Fake Refund Call' a few days later" text="After you order from a fake shopping site, the same scammers often call you 3 days later pretending to be from the courier company or consumer court, saying 'Your order failed—scan this QR code or enter your UPI PIN to receive your refund.' Never enter a UPI PIN to receive a refund." %}

## Common Mistakes to Avoid

- **Trusting Instagram or Facebook ad comments:** Scam store operators run automated bots that post *"Received mine yesterday, amazing quality!"* in the comments while automatically hiding or deleting every comment containing the words *"scam," "fake,"* or *"fraud."*
- **Assuming Google Search Shopping ads are always vetted:** Fraudsters occasionally buy short-lived search ads using typosquatted domains (`amaz0n-deals.shop` or `flipkart-bigsale.top`). Always read the exact domain in the address bar.

## If It Still Doesn't Work

- **`lookup.icann.org` says "Redacted for Privacy" under the owner's name:** Most domain registrars redact the owner's personal name for GDPR privacy—that is normal even for real businesses. Focus on the **Created Date** (which is never redacted) rather than the registrant name.
- **You want to check if an Indian GST number printed in a store footer is real:** Copy the 15-character GSTIN and verify it on the official government portal at **[services.gst.gov.in → Search Taxpayer](https://services.gst.gov.in/services/searchtp)** to see if the registered legal business name and status match the website.

## Privacy and Safety Notes

When shopping on unfamiliar independent websites, never allow your browser to save your card's CVV or use your primary password. Using a credit card (with a low online transaction limit set inside your banking app) gives you stronger dispute and chargeback protection than direct bank-account debit methods. Browse more practical protection checklists in [Online Safety & Scams]({{ '/category/online-safety/' | relative_url }}).

## Frequently Asked Questions

### Does a `.com` or `.in` domain guarantee a shopping website is real?
No. Anyone can register a `.com`, `.in`, `.co.in`, `.shop`, or `.store` domain for a few dollars or hundred rupees. Always check how long the domain has existed and verify the business details independently.

### Why do fake stores sometimes deliver a Rs 50 handkerchief instead of nothing at all?
By shipping a worthless low-weight item in a real courier packet, scammers generate a valid courier tracking number showing `"Delivered"` so they can delay payment-gateway disputes before shutting down the website.

### How can I report a fake shopping ad on Instagram or Google?
Tap the three-dot menu (`...`) in the top corner of the sponsored post or ad, select **Report Ad → Scam or misleading**, and also report the fraudulent domain to **[Google Safe Browsing Report Phishing Page](https://safebrowsing.google.com/safebrowsing/report_phish/)**.

## Next Step

Before you buy from any unfamiliar store you discovered through a social media ad, paste its web address into **[lookup.icann.org](https://lookup.icann.org/)** right now and verify that the domain was not created within the last few weeks.

## Sources

1. [ICANN — Registration Data Lookup Tool (Official WHOIS / RDAP Lookup)](https://lookup.icann.org/)
2. [FTC Consumer Advice — How to Spot and Avoid Online Shopping Scams](https://consumer.ftc.gov/articles/what-know-about-online-shopping)
3. [National Consumer Helpline (Department of Consumer Affairs, Government of India) — consumerhelpline.gov.in](https://consumerhelpline.gov.in/)
4. [National Cyber Crime Reporting Portal (India) — cybercrime.gov.in](https://cybercrime.gov.in/)
