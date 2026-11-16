---
layout: post
title: "How to Copy Text From a Scanned PDF or Image (OCR on Phone and PC)"
description: "Extract editable text from a scanned PDF or image using Google Lens, Google Drive Docs OCR, iPhone Live Text, or Windows Snipping Tool Text Actions."
category: pdf
date: 2026-11-16
author: main
related:
  - scan-documents-phone-to-pdf
  - clean-messy-copied-text
  - ai-chatbot-prompts-for-work
has_promo_links: false
published: true
---

When you try to highlight a sentence inside a scanned PDF or a photo of a printed notice, your cursor either selects the entire page as one big picture or does nothing at all. That happens because the file contains only flat image pixels with no underlying text layer—and you can extract that text into editable words in seconds using the **Optical Character Recognition (OCR)** tools already built into Android, iPhone, Windows 11, macOS, and Google Drive.

{% include quick-answer.html text="1. **For a multi-page scanned PDF (including Hindi and regional scripts):** Upload the PDF to **Google Drive** on a computer, right-click it, and choose **Open with → Google Docs**.
2. **On Android (or Chrome desktop):** Open the image in **Google Photos / Google Lens**, tap **Select text**, and tap **Copy text**.
3. **On iPhone, iPad, or Mac:** Open the photo or PDF in **Photos / Files / Preview**, tap the **Live Text** icon in the bottom-right corner, and drag to copy.
4. **On Windows 11:** Press `Win + Shift + S` to capture the screen in **Snipping Tool**, then click the **Text actions** button to copy all text." %}

* TOC
{:toc}

## Which Built-In OCR Tool Should You Pick?

You do not need to buy expensive desktop OCR software for everyday documents. Pick the tool that matches your file type and language:

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/copy-text-from-scanned-pdf-ocr/ocr-methods-phone-pc.svg' | relative_url }}" width="760" height="285" alt="Two-column decision diagram comparing OCR tools for a single image or screenshot (Google Lens, iOS Live Text, Windows 11 Snipping Tool) versus a multi-page scanned PDF (Google Drive Open with Google Docs)." loading="lazy">
  <figcaption>Use Google Lens, Live Text, or Snipping Tool for single images; use Google Drive's 'Open with Google Docs' for multi-page scanned PDFs.</figcaption>
</figure>

| Tool | Best For | Multi-Page PDF Support? | Hindi & Non-Latin Script Accuracy |
| :--- | :--- | :--- | :--- |
| **Google Drive ("Open with Google Docs")** | Multi-page scanned PDFs, government gazettes, printed notices | **Yes** (up to 2 MB / multi-page PDFs) | **Excellent** (Devanagari/Hindi, Tamil, Bengali, Arabic, 100+ scripts) |
| **Google Lens** (Android, iOS Google App, Chrome Desktop) | Phone photos of pages, receipts, book paragraphs, signboards | Single page / screen view at a time | **Excellent** (plus instant translation) |
| **Apple Live Text** (iOS, iPadOS, macOS Preview/Safari) | Selecting text directly inside photos, screenshots, or camera view | Yes (inside macOS Preview & iOS Files) | Strong on major scripts; verify supported language list on older iOS |
| **Windows 11 Snipping Tool ("Text actions")** | Copying text from any unselectable PDF window, video frame, or image on PC | Screen capture region | Good on printed text; struggles with low-DPI Devanagari ligatures |

## Method 1: Convert a Multi-Page Scanned PDF Using Google Drive & Google Docs

If someone emails you a 4-page scanned PDF circular or contract (in English, Hindi, or another script) and you need all the text in a document editor:

1. **Open [drive.google.com](https://drive.google.com/)** in a desktop web browser and click **`+ New → File upload`** to upload your scanned PDF or image (`.pdf`, `.jpg`, `.png`, `.gif`) (Last checked: November 2026 [VERIFY]).
2. **Right-click the uploaded file inside Google Drive** and select **Open with → Google Docs** (Last checked: November 2026 [VERIFY]).
3. **Wait 5 to 15 seconds** while a new browser tab opens with a Google Docs spinning icon.
4. **Scroll down the new Google Doc:** Google places an image of each original page at the top followed immediately by the **editable, selectable OCR text** underneath it.
5. **Clean up the formatting:** Once copied, if the extracted text has hard line breaks at the end of every line, follow our step-by-step guide on [how to clean messy copied text]({{ '/guides/clean-messy-copied-text/' | relative_url }}).

## Method 2: Copy Text From an Image on Android or Chrome (Google Lens)

### On an Android Phone
1. **Open the photo or screenshot inside the Google Photos app.**
2. **Tap the "Lens" (or "Search") button** at the bottom of the screen (Last checked: November 2026 [VERIFY]).
3. **Tap "Select text"** (or drag your finger directly across the highlighted words on the image) and tap **Copy text**. The text is now in your clipboard, ready to paste into WhatsApp, Notes, or Docs.

### In Google Chrome on Any Computer (Windows, Mac, Linux, Chromebook)
1. **Open the image or scanned PDF page inside a Chrome tab.**
2. **Right-click anywhere on the image** and select **Search image with Google Lens** (Last checked: November 2026 [VERIFY]).
3. **Drag a selection box over the text** (or click **Select all text** in the side panel) and click **Copy**.

{% comment %}OWNER: add your own screenshot of Google Lens 'Select text' or Windows 11 Snipping Tool 'Text actions' extracting text from a scanned notice here{% endcomment %}

## Method 3: Copy Text on iPhone, iPad, and Mac (Built-In Live Text)

Apple's **Live Text** feature treats words inside any photo, screenshot, or paused video frame just like normal webpage text:

1. **Open the photo or scanned PDF** in the **Photos** app, **Files** app, or **macOS Preview**.
2. **Look at the bottom-right corner of the image** for the **Live Text icon** (three horizontal text lines inside a rounded square frame) and tap it (Last checked: November 2026 [VERIFY]).
3. **Tap "Copy All"** in the bottom-left corner, or drag the blue selection handles over the specific paragraph or phone number you need and tap **Copy**.

## Method 4: Copy Text on Windows 11 Using the Built-In Snipping Tool

Windows 11 includes native offline OCR built right into the standard **Snipping Tool** (no Microsoft 365 subscription required):

1. **Open the scanned PDF, image, or video on your screen** and zoom in so the text is large and sharp.
2. **Press `Win + Shift + S`** to take a rectangular screenshot of the paragraph you want to copy, then click the **Snipping Tool notification preview** that pops up in the bottom-right corner of your screen to open the editor window (Last checked: November 2026 [VERIFY]).
3. **Click the "Text actions" button** (an icon with three lines inside a selection frame) on the top toolbar of Snipping Tool.
4. **Click "Copy all text"** (or highlight specific lines with your mouse cursor and press `Ctrl + C`), or click **Quick redact** to black out phone numbers and email addresses before sharing the screenshot.

## How to Get Better OCR Accuracy (Especially on Hindi and Regional Scripts)

Even the best OCR engine will misread characters if the source image is tilted, shadowed, or low-resolution. Follow these four rules before running OCR:

1. **Keep pages strictly horizontal (`0°` rotation):** If a page was scanned sideways (`90°`) or upside down (`180°`), rotate it upright first before uploading to Google Drive or Snipping Tool.
2. **Scan at 300 DPI in bright daylight:** If you are capturing the paper yourself, use a proper document scanner mode rather than a distant camera snapshot—see our guide on [how to scan documents with your phone into one clean PDF]({{ '/guides/scan-documents-phone-to-pdf/' | relative_url }}).
3. **Hindi (Devanagari) and regional script tips:** Devanagari characters hang from a continuous top horizontal bar (*shirorekha*), and conjunct consonants (*samyuktakshar*) plus vowel marks (*matras* like `ि`, `ी`, `ु`, `ू`) get blurred easily on low-resolution scans. For Hindi government circulars or land records, **Google Lens** and **Google Drive ("Open with Google Docs")** produce significantly higher accuracy on *matras* than basic desktop OCR tools.
4. **Mandatory human proofreading check:** Never paste OCR text into an official filing, financial sheet, or contract without checking the **Five Classic OCR Swap Errors**:
   - Number **`0`** swapped with capital letter **`O`** (critical in IFSC codes like `SBIN0001234` and roll numbers).
   - Number **`1`** swapped with capital **`I`** or lowercase **`l`**.
   - Number **`5`** swapped with **`S`**, or **`8`** swapped with **`B`**.
   - **Decimal points (`.`)** mistaken for commas (`,`) or vanished altogether (`Rs 1,450.00` turning into `Rs 145000`).
   - Letters **`rn`** merged into **`m`** (e.g., `modern` turning into `modem`).

{% include callout.html type="warning" title="Always double-check bank IFSC codes, invoice totals, and ID numbers by eye" text="In Indian IFSC codes, the 5th character is always the number zero (`0`), never the letter `O`. Always compare every extracted digit and decimal point against the original scan by eye." %}

## Common Mistakes to Avoid

- **Trying to run Google Drive OCR on a 40-page, 25 MB book scan all at once:** Google Drive's *Open with Google Docs* OCR works best on files **under 2 MB** and a few pages at a time (Last checked: November 2026 [VERIFY]). Split long scanned books into smaller chunks first.
- **Pasting OCR output into an AI chatbot without checking numbers first:** If OCR misread `18,000` as `180,000`, any summary generated by a chatbot will repeat the wrong number. For safe AI workflows, see our guide on [using AI chatbots for everyday work]({{ '/guides/ai-chatbot-prompts-for-work/' | relative_url }}).

## If It Still Doesn't Work

- **"Open with → Google Docs" is missing when you right-click a PDF in Google Drive:** Make sure you are using Google Drive in a **desktop web browser** (or desktop site mode), and that the file is a standard `.pdf`, `.jpg`, or `.png` under Google's file-size threshold.
- **Handwritten notes come out as garbled symbols:** Cursive handwriting with overlapping loops defeats standard print OCR. **Google Lens** handles neat block handwriting best, but messy cursive notes still require human transcription.

## Privacy and Safety Notes

Google Lens and Google Drive OCR process your image on Google's cloud servers, whereas **Apple Live Text** and **Windows 11 Snipping Tool Text Actions** run **offline on your device**. When extracting text from a private medical report, tax notice, or legal contract, prefer your device's built-in offline OCR (Live Text on Mac/iPhone or Snipping Tool on Windows 11). Browse more document workflows in [PDF & Documents]({{ '/category/pdf/' | relative_url }}).

## Frequently Asked Questions

### Why can I select text in some PDFs but not in others?
A "born-digital" PDF exported from Word or Excel contains actual character codes and font instructions, whereas a "scanned" PDF created by a camera or photocopier contains only a flat photograph of the page until OCR is run on it.

### Does Google Docs OCR keep the original tables and columns of my scanned PDF?
Google Docs attempts to preserve bold text and basic paragraphs, but complex multi-column tables and sidebars usually flatten into plain text lines that you will need to re-align.

### Can I copy text from a paused YouTube lecture or webinar video?
Yes! Pause the video at `1080p` quality, then either press `Win + Shift + S` on Windows 11 to use **Snipping Tool → Text actions**, right-click the video frame in Chrome to choose **Search video frame with Google Lens**, or use **Live Text** in Safari on a Mac/iPhone.

## Next Step

Open any screenshot or photo containing printed text on your phone or computer right now, activate **Google Lens**, **Live Text**, or **Snipping Tool (`Win + Shift + S` → Text actions)**, and practice copying a paragraph into your notes.

## Sources

1. [Google Drive Help — Convert PDF and photo files to text (Optical Character Recognition in Google Docs)](https://support.google.com/drive/answer/176692)
2. [Apple Support — Copy and translate text from photos on your iPhone or iPad with Live Text](https://support.apple.com/en-us/102528) [VERIFY SOURCE: confirm Apple Support Live Text article ID]
3. [Microsoft Support — Use Snipping Tool to capture screenshots and extract text (Text Actions)](https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b)
