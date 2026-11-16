---
layout: post
title: "How to Remove the Password From a PDF You Own (Bank Statements, e-Aadhaar, Payslips)"
description: "Stop typing the same password every time you open your own bank statement, e-Aadhaar, or payslip PDF by saving an unlocked copy on your phone or computer."
category: pdf
date: 2026-11-16
author: main
related:
  - compress-pdf-under-size-limit
  - sign-pdf-without-printing
  - check-if-online-tool-uploads-files
has_promo_links: true
published: true
---

Monthly bank statements, credit card bills, salary slips, and e-Aadhaar letters arrive as password-protected PDFs so your financial and identity details stay encrypted in transit. Once the file is safely on your own personal computer or phone—or when a loan, visa, or tax portal rejects your upload because it cannot read an encrypted PDF—you can enter your known password **one final time** and save an unprotected copy that opens immediately.

*Note: This guide provides general technical information, not legal advice. Only remove passwords from PDF documents that you lawfully own or are explicitly authorized to open and submit.*

{% include quick-answer.html text="1. **You must know the current open password first:** Removing a PDF password requires entering the valid password once to decrypt the file.
2. **Check the sender's email for the password formula:** Most banks use a combination of the first 4 letters of your name + `DDMM` of your date of birth, while e-Aadhaar uses the first 4 CAPITAL letters of your name + `YYYY` birth year.
3. **On Desktop (Chrome, Edge, or macOS Preview):** Open the PDF with your password, press `Ctrl + P` (`Cmd + P`), and choose **Save as PDF**.
4. **In your browser (any device):** Use a PDF unlock tool to enter your password and download a clean, unencrypted copy." %}

* TOC
{:toc}

## Why Bank Statements, Payslips, and ID Documents Come Password-Protected

When a bank, broker, payroll provider, or government portal sends a document over regular email, that attachment may pass through several mail servers and sit in a cloud inbox for years. Adding a **Document Open Password** (also called a *User Password* using AES-128 or AES-256 encryption) ensures that if someone glimpses your email inbox, they still cannot open the PDF without knowing your personal identifier formula.

However, keeping that password on the file causes two everyday headaches:

- **Upload portals reject encrypted PDFs:** Automated loan, visa, income tax, and KYC verification systems cannot type your password when inspecting your uploaded bank statement, so they immediately fail with *"Encrypted or corrupted PDF."*
- **Repeated typing on mobile:** Typing an 8-character uppercase-and-digits password every time you check a statement on your phone gets frustrating fast.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/remove-password-from-own-pdf/unlock-own-pdf-workflow.svg' | relative_url }}" width="760" height="280" alt="Three-step diagram showing an encrypted PDF on the left, entering your known password once in the middle, and saving an unlocked PDF copy on the right." loading="lazy">
  <figcaption>Decrypting a PDF you own requires entering your known password once, then exporting a new file without encryption.</figcaption>
</figure>

## Where to Find the Password Format for Your Protected PDF

If you forgot the password combination for your own statement or ID card, do not guess randomly:

1. **Read the body of the email that delivered the PDF:** Banks and mutual fund registrars always print the exact password rule (with an example) inside the email text right above the attachment—check whether it specifies **UPPERCASE** or **lowercase** letters and whether your birth date includes the year (`DDMM` vs `DDMMYYYY`).
2. **Official e-Aadhaar PDF password format (India):** According to UIDAI, a downloaded e-Aadhaar PDF password is **8 characters long**: the **first 4 letters of your name in CAPITAL letters** (exactly as printed on your Aadhaar) followed by your **4-digit Year of Birth (`YYYY`)** without spaces (for example, `SEBI1995`) (Last checked: November 2026 [VERIFY]).
3. **Pan Card (e-PAN) and Income Tax intimations:** Typically use your full date of birth in `DDMMYYYY` format without slashes or hyphens (check the instruction line on the download page or email) (Last checked: November 2026 [VERIFY]).

| Document Type | Typical Password Pattern (Check Your Email/Portal First) | Example (Name: Riya Sharma, DOB: 05 Aug 1994) |
| :--- | :--- | :--- |
| **e-Aadhaar (UIDAI)** | First 4 CAPITAL letters of name + `YYYY` birth year (Last checked: Nov 2026 [VERIFY]) | `RIYA1994` |
| **Many Bank / Card Statements** | First 4 letters of name (case varies by bank) + `DDMM` | `RIYA0508` or `riya0508` |
| **Customer-ID Bank Statements** | Customer ID / CRN number, or First 4 letters + Last 4 digits of account/card | Check the exact rule in your bank's statement email |
| **Salary Slips / Tax Forms** | Employee ID or PAN number (in lowercase or uppercase) + `DDMMYYYY` | Check payroll email instructions |

## Method 1: Remove the Password Using Chrome or Microsoft Edge (Windows, Mac, Linux)

Any computer with Google Chrome or Microsoft Edge can save an unlocked copy of a protected PDF in about 15 seconds using the built-in **Save as PDF** printer:

1. **Drag and drop your password-protected PDF into a Chrome or Microsoft Edge tab** (or right-click the file and choose **Open with → Google Chrome**).
2. **Type your document password** into the prompt that appears and press `Enter`. You will see all pages of your statement or ID document open clearly on screen.
3. **Press `Ctrl + P` on Windows/Linux (or `Cmd + P` on a Mac)** to open the Print dialog (Last checked: November 2026 [VERIFY]).
4. **Change the "Destination" (or "Printer") dropdown to "Save as PDF"** (avoid choosing *Microsoft Print to PDF* if *Save as PDF* is available, as Chrome's native *Save as PDF* keeps text sharper and files smaller).
5. **Click Save**, choose a clear filename such as `bank-statement-oct-unlocked.pdf`, and save it to your folder. When you double-click the new file, it will open immediately with zero password prompts.

{% comment %}OWNER: add your own screenshot of Chrome's Print -> Destination: Save as PDF dialog removing the password from a sample PDF here{% endcomment %}

## Method 2: Remove a PDF Password Directly in Your Browser (Phone or PC)

On many Android phones and iPhones, mobile print-to-PDF menus either hide the "Save as PDF" button or change the page margins of a bank statement. When you want to strip the password cleanly while keeping the exact original PDF layout, fonts, and page dimensions intact, you can [unlock your password-protected PDF in your browser](https://pixelkaro.com/unlock-pdf) by selecting the file, entering your open password once, and saving the unlocked copy.

{% include disclosure.html site="PixelKaro" %}

## Method 3: macOS Preview and iPhone / Android Built-In Options

### On macOS (Preview)
1. **Double-click the PDF to open it in Preview** and enter your password.
2. **Click File → Export** from the top menu bar (Last checked: November 2026 [VERIFY]).
3. **Click the "Permissions" button** if shown, ensure **Require Password to Open Document** is **unchecked**, and click **Save** under a new filename.

### On iPhone / iPad (Files App)
1. **Open the protected PDF inside the iOS Files app** and enter your password so the document displays on screen.
2. **Tap the Share icon** in the bottom-left corner, scroll down and tap **Print**.
3. **Tap the Share icon again at the top of the Print Options screen** and choose **Save to Files**. The newly saved copy will open without asking for a password.

{% include callout.html type="warning" title="Important note when unlocking e-Aadhaar via Print-to-PDF" text="When you use 'Print → Save as PDF' on an e-Aadhaar file, the resulting PDF is a flattened visual copy—the cryptographic digital signature badge (the green checkmark validated in Adobe Acrobat) is not preserved by virtual printers. If an authority requires cryptographic signature validation rather than a visual print/upload copy, submit the original file along with the password or verify their specific upload instructions." %}

## Common Mistakes to Avoid

- **Confusing an "Open Password" with an "Owner / Permissions Password":** An Open Password prevents viewing the file without the password; a Permissions Password allows opening the file but restricts printing or editing. Both require authorization from the document owner.
- **Deleting the original signed PDF immediately:** Keep the original password-protected PDF in your archive folder in case an institution specifically asks for the unmodified encrypted original.
- **Uploading an oversized unlocked PDF:** Sometimes printing a PDF to a virtual printer increases its file weight. If your unlocked bank statement is now too large for a loan portal, follow our guide to [compress a PDF under 1 MB, 500 KB, or 200 KB]({{ '/guides/compress-pdf-under-size-limit/' | relative_url }}).

## If It Still Doesn't Work

- **Your name has only 3 letters (e.g., "Ali" or "Raj") and the 4-letter password rule fails:** Check the sender's email closely—some banks pad 3-letter names with a space or `0`, while UIDAI e-Aadhaar uses the first 4 characters of your name field as printed on the card (including initials or spaces if present; verify on your enrolment slip) (Last checked: November 2026 [VERIFY]).
- **The Print button is grayed out after opening the PDF:** The sender applied both an Open Password and a **Print Restriction** flag. Use Method 2 with your valid password to save an unlocked copy without printing.

## Privacy and Safety Notes

Once you remove the password from a bank statement, tax return, or e-Aadhaar PDF, **anyone with access to that file can open it without a password**. Store unlocked copies only on your personal password-protected computer or phone, never leave them in the **Downloads** folder of a shared or public PC, and avoid emailing unencrypted ID documents over public networks. Read more document security tips in [PDF & Documents]({{ '/category/pdf/' | relative_url }}).

## Frequently Asked Questions

### Can I remove the password from a PDF if I do not know the password?
No. Modern PDFs use strong AES-128 or AES-256 encryption. Without the valid open password (which you can find in the sender's email instructions or re-generate from your bank/portal), the encrypted data cannot be read or unlocked.

### Why do loan and visa portals ask for an "unprotected PDF" of my bank statement?
Automated document-processing software on banking and visa portals extracts text and transaction tables programmatically. Because the software does not know your personal DOB/name password, it rejects password-locked files during upload.

### Does removing the password change the numbers or text inside my bank statement?
No. Unlocking a PDF with your valid password simply saves the exact same pages without the encryption wrapper so the document opens directly.

## Next Step

Open your protected PDF using your known password, save an unlocked copy with a clear filename like `statement-unlocked.pdf`, and test-open the new file once to confirm the password prompt is gone before uploading it to your portal.

## Sources

1. [UIDAI (Unique Identification Authority of India) — How to Open Validated e-Aadhaar PDF and Password Format](https://uidai.gov.in/en/contact-support/have-any-question/280-faqs/aadhaar-online-services/e-aadhaar.html) [VERIFY SOURCE: confirm exact UIDAI e-Aadhaar FAQ URL]
2. [Apple Support — Password-protect a PDF in Preview on Mac](https://support.apple.com/guide/preview/password-protect-a-pdf-prvw5870/mac)
3. [Adobe Help Center — Securing PDFs with passwords and permissions](https://helpx.adobe.com/acrobat/using/securing-pdfs-passwords.html)
