---
layout: post
title: "How to Sign a PDF Without Printing: E-Signature vs Digital Signature"
description: "Learn the difference between a visual e-signature and a certificate-based digital signature (DSC or Aadhaar eSign), and sign PDFs on PC, Mac, or phone."
category: pdf
date: 2026-11-16
author: main
related:
  - remove-password-from-own-pdf
  - scan-documents-phone-to-pdf
has_promo_links: false
published: true
---

Printing a PDF contract just to sign it with a pen and scan it back into your phone wastes paper and degrades crisp digital text into a blurry image. Before you sign a PDF on your computer or phone, you need to answer one critical question first: does the recipient simply need a **visual electronic signature (e-signature)**—which you can add for free in 30 seconds in Adobe Acrobat Reader, macOS Preview, or iPhone Markup—or do they require a **certificate-based cryptographic Digital Signature (such as a USB DSC token or Aadhaar eSign)**?

*Note: This guide provides general technical and workflow information, not legal advice. Laws governing electronic and digital signatures vary by jurisdiction and document category.*

{% include quick-answer.html text="1. **Know which type is required:** Everyday job offer letters, NDAs, freelance contracts, invoices, and HR forms accept a **simple visual e-signature** (drawn or placed image). Statutory government filings (MCA21 company filings, GST/Income Tax returns, e-Tenders) require a **certificate-based Digital Signature (DSC or Aadhaar eSign)**.
2. **To add a free visual signature on Windows or Mac:** Use **Adobe Acrobat Reader (Fill & Sign)** or **macOS Preview (Tools → Annotate → Signature)**.
3. **To sign on iPhone or Android:** Use **iOS Files → Markup (`+` → Add Signature)** or the free **Adobe Acrobat Reader** mobile app." %}

* TOC
{:toc}

## Simple E-Signature vs Certificate-Based Digital Signature: What Is the Difference?

People often use the phrases *"electronic signature"* and *"digital signature"* interchangeably in casual conversation, but in PDF software and Indian/international law (such as the Indian Information Technology Act, 2000, US ESIGN Act, and EU eIDAS), they work very differently:

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/sign-pdf-without-printing/esignature-vs-digital-signature.svg' | relative_url }}" width="760" height="295" alt="Side-by-side comparison diagram of a Simple Visual E-Signature versus a Certificate-Based Cryptographic Digital Signature (DSC or Aadhaar eSign)." loading="lazy">
  <figcaption>A visual e-signature places your ink signature on the page; a cryptographic digital signature embeds a tamper-evident PKI certificate inside the PDF.</figcaption>
</figure>

| Feature | Simple Visual E-Signature | Certificate-Based Digital Signature (DSC / Aadhaar eSign) |
| :--- | :--- | :--- |
| **How It Works Technically** | Places a vector drawing or clean image of your handwritten signature onto the PDF page | Uses Public Key Infrastructure (**PKI**) to compute a cryptographic hash of the PDF and sign it with a Certifying Authority certificate |
| **Tamper Detection** | None by itself (flatten via *Save as PDF* so the image cannot be dragged around) | **Tamper-evident:** Changing a single comma in the PDF after signing invalidates the signature badge in Adobe Acrobat |
| **How You Create It** | Draw on trackpad/touchscreen, snap a camera photo of your signature on white paper, or upload a signature image | Hardware **USB DSC Token** (Class 3 issued by a licensed CA) or **Aadhaar eSign** (OTP/biometric via an ESP) (Last checked: Nov 2026 [VERIFY]) |
| **Where It Is Accepted** | Job offer letters, NDAs, vendor invoices, rent renewals, school permission forms, internal approvals | **MCA21** (ROC filings), **Income Tax / GST** filings (where required), **e-Procurement / Government Tenders**, EPFO employer approvals |
| **Where It Is Usually NOT Accepted** | Statutory government portals that validate `.pfx`/DSC tokens, or physical-execution documents (wills, real-estate sale deeds, negotiable instruments) | Documents that require physical wet-ink notarization or stamp paper registration in person |

## Method 1: Sign a PDF for Free in Adobe Acrobat Reader (Windows & Mac)

The free **Adobe Acrobat Reader** desktop app includes a built-in **Fill & Sign** tool that requires no paid subscription:

1. **Open your PDF in Adobe Acrobat Reader** on Windows or macOS. (If the PDF is locked with an open password, first [remove the password from the PDF you own]({{ '/guides/remove-password-from-own-pdf/' | relative_url }}) so signing tools are not blocked.)
2. **Click "Fill & Sign" (or the fountain-pen "Sign yourself" icon)** in the toolbar on the left or top (Last checked: November 2026 [VERIFY]).
3. **Click "Add Signature."** A dialog opens with three tabs:
   - **Type:** Types your name in a script font (least personal; some offices prefer a real handwritten stroke).
   - **Draw:** Lets you sign using your mouse, stylus, or touchscreen.
   - **Image:** Lets you select a clean photo of your handwritten signature on white paper—Acrobat automatically removes the white paper background and converts the ink to crisp black.
4. **Click Apply**, drag the signature onto the dotted signature line on the PDF page, and use the corner handle to resize it so it fits neatly.
5. **Click File → Save As** and save the signed PDF under a new name (such as `offer-letter-signed.pdf`).

{% comment %}OWNER: add your own screenshot of Adobe Acrobat Reader Fill & Sign or macOS Preview Signature capture dialog here{% endcomment %}

## Method 2: Sign a PDF on a Mac Using Built-In Preview (Camera & Trackpad)

macOS **Preview** has one of the best built-in signature tools on any operating system: you can sign on a real piece of white paper, hold it up to your MacBook's webcam, and Preview traces the exact pen curves into a vector signature:

1. **Open the PDF in Preview** and click the **Show Markup Toolbar** icon (the marker tip inside a circle) at the top of the window (Last checked: November 2026 [VERIFY]).
2. **Click the "Sign" icon** (or go to **Tools → Annotate → Signature → Manage Signatures → Create Signature**).
3. **Pick one of the three capture methods:**
   - **Camera (Best quality):** Sign your name with a black or blue pen on a clean white sheet of paper and hold it up to your Mac's camera so the signature rests on the blue guide line on screen. Preview automatically captures and vectorizes the ink.
   - **Trackpad:** Click to start and sign with your finger on the MacBook trackpad, then press any key when finished.
   - **iPhone or iPad:** Select your nearby iPhone/iPad and sign with your finger or Apple Pencil on the mobile screen that pops up.
4. **Click Done**, click your saved signature in the dropdown to drop it onto the PDF page, position it on the line, and press `Cmd + S` to save.

## Method 3: Sign a PDF on iPhone or Android Without Printing

### On iPhone or iPad (Built-In Files App Markup)
1. **Open the PDF inside the iOS Files app** (or tap an email attachment in Apple Mail).
2. **Tap the Markup (pen tip) icon** at the bottom of the screen (Last checked: November 2026 [VERIFY]).
3. **Tap the `+` button in the bottom-right corner and select "Add Signature."**
4. **Sign with your finger** on the horizontal pad, tap **Done**, drag the blue corner handles to place your signature on the line, and tap **Done** to save.

### On Android
1. **Open the free Adobe Acrobat Reader app** (or **Microsoft 365 / Office** app) on your Android phone.
2. **Tap Edit / Fill & Sign → tap the fountain-pen Sign icon → Create Signature.**
3. **Draw your signature on the rotated screen** (or tap **Image** to pick a photo of your signature on paper), tap **Done**, and tap the spot on the PDF page where it belongs.

## How to Apply a Certificate-Based Digital Signature (USB DSC Token or Aadhaar eSign)

When a government portal, tender website, or corporate compliance system specifically asks for a **Digital Signature Certificate (DSC)** or **Aadhaar eSign**:

1. **Using a Class 3 USB DSC Token on Windows:**
   - Plug your USB cryptographic token (such as ePass2003, Watchdata ProxKey, or mToken issued by a licensed Certifying Authority under the Controller of Certifying Authorities) into your Windows PC and ensure its driver utility is installed.
   - In **Adobe Acrobat Reader**, open **All Tools → Use a certificate → Digitally Sign** (Last checked: November 2026 [VERIFY]).
   - Drag a rectangle where the signature stamp should appear, select your certificate from the list, click **Continue → Sign**, save the new PDF, and enter your **USB Token User PIN** when prompted.
   - The saved PDF now carries a cryptographic signature box showing your legal name, timestamp, and a green checkmark when validated.
2. **Using Aadhaar eSign (India):**
   - Many banks, brokers, and e-stamping platforms integrate **Aadhaar eSign** (an online electronic signature service licensed by the CCA). You upload or review the PDF on the provider's portal, enter your 12-digit Aadhaar number or Virtual ID, and authenticate with the UIDAI OTP sent to your Aadhaar-linked mobile number.

{% include callout.html type="tip" title="Flatten a visual signature so nobody can drag it off the page" text="When you place a visual signature image in Preview or a basic editor, it sometimes sits as a movable annotation layer. Before emailing the signed PDF back, open it in Chrome/Edge or Preview and use **Print → Save as PDF** (or Save as Flattened PDF) so the signature is baked into the page." %}

## Common Mistakes to Avoid

- **Flattening a cryptographically signed DSC or Aadhaar eSign PDF via "Print to PDF":** While *Print to PDF* is great for locking a **visual** signature image in place, never run *Print to PDF* on a **certificate-signed (DSC/eSign)** PDF! Printing a certificate-signed PDF strips its internal cryptographic PKI data and turns the green "Signature Valid" badge into a lifeless picture.
- **Photographing a signature on lined notebook paper:** Blue horizontal notebook lines stay behind your signature and look messy on a formal contract. Always sign on plain unlined white paper. If you do need to scan a physical signed page, follow our guide on [how to scan documents with your phone into one clean PDF]({{ '/guides/scan-documents-phone-to-pdf/' | relative_url }}).

## If It Still Doesn't Work

- **The "Sign" or "Fill & Sign" button is grayed out in Adobe Acrobat Reader:** The sender saved the PDF with security restrictions or as an interactive XFA form that blocks annotation. Save an unlocked copy (if you are authorized to sign it) or open it in Preview/Chrome to place a visual signature.
- **A recipient says your DSC signature shows a yellow question mark ("Signature validity is unknown"):** That is normal the first time someone opens a DSC-signed PDF in Acrobat Reader on a new PC. The recipient simply right-clicks the signature box → **Show Signature Properties → Show Signer's Certificate → Trust tab → Add to Trusted Certificates**.

## Privacy and Safety Notes

Both macOS Preview and Adobe Acrobat Reader save your created signature inside your user profile on that computer for convenience. If you ever use a shared or office computer to sign a PDF, remember to open the **Manage Signatures** menu and click the **Delete (`-` or Trash)** icon next to your signature before logging out so nobody else on that PC can stamp your signature onto another document. Browse more PDF guides in [PDF & Documents]({{ '/category/pdf/' | relative_url }}).

## Frequently Asked Questions

### Is a PDF signed without printing legally valid for a job offer or NDA?
In most countries (including under the Indian Information Technology Act, the US ESIGN/UETA acts, and EU eIDAS), standard commercial agreements, job offer letters, and NDAs do not require wet ink on paper unless a specific statute excludes them (such as wills, power of attorney, or real-estate conveyances).

### Can I sign a PDF on Windows without installing any new software at all?
Yes. Open the PDF in **Microsoft Edge** (built into Windows 10 and 11), click the **Draw** pen icon on the top PDF toolbar, sign using your mouse or touchscreen, and click the **Save** icon.

### Why did the MCA or e-Tender portal reject my PDF signed with Acrobat "Fill & Sign"?
Government portals like MCA21 and GeM/NIC e-Procurement inspect the PDF for a cryptographic **Class 3 Digital Signature Certificate (DSC)** issued by a licensed Certifying Authority—not a visual drawing placed with *Fill & Sign*. Use the **Use a certificate → Digitally Sign** tool with your USB DSC token instead.

## Next Step

Open a test PDF in **Adobe Acrobat Reader** (Windows) or **Preview** (Mac) right now and capture a clean signature using a white sheet of paper and your camera so it is ready to drop onto your next document in two clicks.

## Sources

1. [Adobe Help Center — Sign PDFs in Adobe Acrobat Reader (Fill & Sign vs Certificate Signatures)](https://helpx.adobe.com/reader/using/sign-pdfs.html)
2. [Apple Support — Fill out and sign PDF forms in Preview on Mac](https://support.apple.com/guide/preview/fill-out-and-sign-pdf-forms-prvw35725/mac)
3. [Controller of Certifying Authorities (CCA, Ministry of Electronics & IT, Government of India) — Digital Signature & eSign Guidelines](https://cca.gov.in/) [VERIFY SOURCE: confirm CCA eSign overview page]
