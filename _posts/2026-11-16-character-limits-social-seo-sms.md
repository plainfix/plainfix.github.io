---
layout: post
title: "Character Limits for Social Posts, SEO Titles and SMS (and How to Count Them)"
description: "Reference guide to character and pixel limits for X, LinkedIn, Instagram, YouTube, SEO titles, and GSM-7 vs Unicode SMS segments, plus how to count them."
category: text-data
date: 2026-11-16
author: main
related:
  - clean-messy-copied-text
  - ai-chatbot-prompts-for-work
has_promo_links: false
published: true
---

Nothing ruins a carefully written headline, social post, or customer SMS faster than having the crucial call-to-action cut off with an `...` ellipsis—or discovering that adding a single thumbs-up emoji doubled your company's SMS bill by dropping the segment limit from **160 characters to 70 characters**. Keeping a verified reference table of platform character limits—and understanding how computers count characters, bytes, emojis, and pixel widths—saves you from awkward truncation across every channel.

{% include quick-answer.html text="1. **Spaces and punctuation always count** toward character limits on social media, SMS, and web forms.
2. **SEO Title tags are measured in pixels (`~600 px`), not characters:** Aim for **50–60 characters** so wide letters (`W`, `M`) do not get cut off in Google Search results.
3. **Standard SMS limit:** **160 characters** using plain GSM-7 Latin text, but drops to **70 characters** the moment you include even **one emoji, Hindi/regional character, or curly quote**.
4. **Word/Docs shortcut:** Press **`Ctrl + Shift + C`** (`Cmd + Shift + C` on Mac) in Google Docs or Microsoft Word to view your live character count with and without spaces." %}

* TOC
{:toc}

## Words vs Characters vs Bytes (And Why Emojis Count as 2+ Characters)

Before looking up a platform's number, understand the four different ways software measures text length:

1. **Word Count:** Counts groups of letters separated by spaces (`"step-by-step guide"` counts as 1 or 3 words depending on the editor).
2. **Character Count (With Spaces):** Counts every letter, digit, punctuation mark, space, and line break. **Almost every web form, social app, and SMS gateway enforces Character Count (With Spaces).**
3. **UTF-8 / UTF-16 Byte Length:**
   - A standard English ASCII letter (`A`) takes **1 byte** in UTF-8.
   - An accented European character (`é`) takes **2 bytes** in UTF-8.
   - A Hindi Devanagari character (`क`) takes **3 bytes** in UTF-8.
   - An emoji (`🚀`) takes **4 bytes** in UTF-8 (and **2 UTF-16 code units** in JavaScript's `.length` property).
4. **Emoji Counting Quirks:**
   - On **X (Twitter)**, every emoji—even a multi-person family emoji joined with Zero-Width Joiners (`👩‍👩‍👧‍👦`)—is normalized to count as **exactly 2 characters** (Last checked: November 2026 [VERIFY]).
   - In **JavaScript (`str.length`)** and many basic web forms, a single flag or skin-tone emoji can count as **2 to 7 characters**!

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/character-limits-social-seo-sms/sms-segments-seo-pixel-width.svg' | relative_url }}" width="760" height="290" alt="Diagram comparing GSM-7 160-character SMS vs Unicode 70-character SMS triggered by a single emoji or Hindi character on the left, and Google Search 600px title pixel width on the right." loading="lazy">
  <figcaption>A single emoji switches an SMS from GSM-7 (160 characters) to UCS-2 Unicode (70 characters), while Google Search cuts titles by pixel width (~600 px).</figcaption>
</figure>

## Master Reference Table: Social Media, SEO, and Messaging Limits

Platform limits can change when services update their UI; verify critical campaign copy against the official platform documentation (Last checked: November 2026 [VERIFY every limit]):

| Platform & Field | Maximum Character Limit | Truncation / "See More" Cutoff | Official Source / Technical Note |
| :--- | :--- | :--- | :--- |
| **X (Twitter) — Standard Post** | **280 characters** (up to 25,000 for Premium tiers) [VERIFY] | Full 280 chars shown; URLs always count as **23 chars** (`t.co` wrapper), emojis count as **2 chars** | [X Developer Docs — Counting Characters](https://developer.x.com/en/docs/counting-characters) |
| **X (Twitter) — Bio** | **160 characters** [VERIFY] | Shown in full on profile | X Help Center |
| **LinkedIn — Personal / Page Post** | **3,000 characters** [VERIFY] | Truncates with *"...more"* after roughly **140–210 characters** (3–5 lines) | [LinkedIn Help — Post Character Limits](https://www.linkedin.com/help/linkedin) [VERIFY] |
| **LinkedIn — Profile Headline** | **220 characters** [VERIFY] | First ~60–80 chars visible in search/comment previews | LinkedIn Help |
| **Instagram — Post / Reel Caption** | **2,200 characters** (up to 30 hashtags) [VERIFY] | Truncates in feed after **~125 characters** (first 1–2 lines) | [Instagram Help Center](https://help.instagram.com/) [VERIFY] |
| **Instagram — Profile Bio** | **150 characters** [VERIFY] | Shown in full on profile | Instagram Help Center |
| **YouTube — Video Title** | **100 characters** (hard limit) [VERIFY] | Truncates with `...` around **60–70 characters** on mobile/home feeds | [YouTube Help](https://support.google.com/youtube) [VERIFY] |
| **YouTube — Video Description** | **5,000 bytes** (~5,000 ASCII chars; fewer for Hindi/emojis) [VERIFY] | First **~100–150 characters** visible above the *"Show more"* fold | YouTube Help (Note: enforced in UTF-8 **bytes**, not characters!) |
| ** SEO `<title>` Tag (Google Search)** | No hard HTML limit (cut by **`~600 px`** width) | Usually cuts off around **50–60 characters** depending on letter width | [Google Search Central — Title Links](https://developers.google.com/search/docs/appearance/title-link) |
| **SEO Meta Description** | No hard HTML limit (cut by **`~920–960 px`** desktop / `~680 px` mobile) | Practical sweet spot: **140–160 characters** | [Google Search Central — Snippets](https://developers.google.com/search/docs/appearance/snippet) |
| **SMS (Plain GSM-7 Latin)** | **160 characters** (1 segment) | **153 characters per segment** if message exceeds 160 chars (7 chars used for concatenation header) | 3GPP TS 23.038 / GSM 03.38 Standard |
| **SMS (Unicode / UCS-2 — Emoji or Hindi)** | **70 characters** (1 segment) | **67 characters per segment** if message exceeds 70 chars | 3GPP TS 23.038 Standard |

## Why SEO Title Tags Are Cut by Pixel Width (`~600 px`), Not a Fixed Character Count

Many SEO plugins show a green progress bar that turns red at exactly 60 characters. In reality, **Google Search does not count characters when truncating title links**—it measures the **rendered pixel width** of the text in Google's search-results font ( roughly **`600 pixels`** wide on desktop):

- **Wide characters take up far more pixel budget:** A capital **`W`**, **`M`**, or **`G`** is nearly three times wider in pixels than a lowercase **`i`**, **`l`**, or **`t`**.
- **ALL CAPS titles get cut off early:** A 52-character title written in `ALL CAPS` can easily exceed `600 px` and get cut off with `...`, while a 64-character title in normal Title Case with narrow letters fits completely.
- **Practical rule:** Keep important keywords in the first **50–55 characters**, avoid `ALL CAPS`, and keep meta descriptions between **140 and 160 characters** so the complete sentence appears on both desktop and mobile snippets.

## How SMS Character Limits Work: The 160 vs 70 Character Trap

If you send transactional or appointment SMS messages (or write DLT templates in India), understanding the **GSM-7 vs UCS-2 (Unicode)** switch saves real money:

1. **Standard GSM-7 Alphabet (160 characters per SMS):** As long as your text uses only basic English letters (`A–Z`, `a–z`), digits (`0–9`), and standard straight punctuation, each character takes **7 bits**, fitting **160 characters** into a single 140-byte SMS frame. (Note: 9 special characters in the GSM-7 extended table—`**`^`, `{`, `}`, `\`, `[`, `]`, `~`, `|`, `€`**—count as **2 characters** each because they use an escape prefix!)
2. **The Unicode (UCS-2) Switch (70 characters per SMS):** The moment your message contains **even a single character outside the GSM-7 table**—such as:
   - One emoji (`😊` or `✅`),
   - Any Hindi, Tamil, Telugu, Bengali, or Arabic word,
   - Or even a single **curly apostrophe (`’`) or curly quote (`“ ”`)** copied from Microsoft Word—
   the entire SMS switches to **16-bit UCS-2 encoding**, immediately cutting the limit from **160 characters down to 70 characters**!
3. **Multi-part concatenated SMS (`153` vs `67` chars):** When a message exceeds 160 GSM-7 characters (or 70 Unicode characters), the carrier splits it into multiple billed SMS segments and reserves 6 bytes (`7` GSM characters or `3` Unicode characters) in every segment for a *User Data Header (UDH)* so the recipient's phone can stitch the parts back together. Thus, a **161-character GSM message is billed as 2 SMS segments** (`153 + 8`), and a **145-character message with one emoji is billed as 3 SMS segments** (`67 + 67 + 11`)!

{% comment %}OWNER: add your own screenshot of the Google Docs or Microsoft Word 'Word Count' dialog (Ctrl+Shift+C) showing Characters and Characters excluding spaces here{% endcomment %}

## How to Count Characters in Microsoft Word, Google Docs, and Spreadsheets

### 1. Google Docs (Live Counter On Screen)
1. **Open your document in Google Docs** and highlight the paragraph or headline you want to measure (if nothing is highlighted, it counts the whole document).
2. **Press `Ctrl + Shift + C` on Windows/Chromebook (or `Cmd + Shift + C` on a Mac)**, or click **Tools → Word count** (Last checked: November 2026 [VERIFY]).
3. **Check the box labeled "Display word count while typing."** A persistent pill appears in the bottom-left corner of your screen; click its arrow to switch the live display to **Characters** (including spaces).

### 2. Microsoft Word
1. **Highlight your text** and look at the **Words** indicator on the bottom-left status bar.
2. **Click the word count number on the status bar** (or press `Ctrl + Shift + G` on Windows, `Cmd + Shift + G` on Mac) to open the **Word Count** box showing **Characters (no spaces)** and **Characters (with spaces)**.

### 3. Excel and Google Sheets (`=LEN()` vs `=LENB()`)
- **`=LEN(A2)`:** Returns the exact number of characters (including spaces and hidden trailing spaces) in cell `A2`.
- **`=LEN(TRIM(A2))`:** Counts characters after stripping accidental leading, trailing, and double spaces.

{% include callout.html type="tip" title="Clean invisible characters before checking a strict character limit" text="If a web form says your 150-character bio is 158 characters long, your copied text probably contains hidden carriage returns, double spaces, or zero-width spaces. Paste it as plain text (`Ctrl + Shift + V`) and trim extra spaces first." %}

To strip hidden characters, double spaces, and curly quotes before pasting into an SMS gateway or social bio, see our guide on [how to clean messy copied text]({{ '/guides/clean-messy-copied-text/' | relative_url }}), or use structured length constraints in [AI chatbot prompts for everyday work]({{ '/guides/ai-chatbot-prompts-for-work/' | relative_url }}).

## Common Mistakes to Avoid

- **Copying SMS templates from Microsoft Word or Google Docs with "Smart Quotes" turned on:** A single curly apostrophe in `Don’t miss out` (instead of straight ASCII `'`) silently flips a 140-character English SMS from 1 GSM-7 segment into **3 Unicode SMS segments**, tripling the cost.
- **Confusing YouTube's 5,000-byte description limit with 5,000 characters:** In Hindi or other Devanagari scripts, each character uses **3 bytes** in UTF-8—so a Hindi YouTube description hits the `5,000-byte` ceiling around **1,600–1,800 characters**, not 5,000!

## If It Still Doesn't Work

- **An online form rejects your text as "too long" even though Word says it is under the limit:** Check how the form counts line breaks (`Enter` key presses). In HTTP form submissions, a single line break is often transmitted as two characters (`\r\n` — Carriage Return + Line Feed).
- **Your LinkedIn or Instagram post hides the link behind "...more":** Put your core hook and link (if applicable) in the **first 120 characters** on a single line before adding line breaks, because multiple empty line breaks trigger the *"See more"* fold even on short posts.

## Privacy and Safety Notes

When checking the character length of confidential legal notices, unreleased press statements, or customer SMS templates containing personal names, use the built-in offline counter in Microsoft Word (`Ctrl + Shift + G`), Google Docs (`Ctrl + Shift + C`), or Excel (`=LEN()`) rather than pasting private text into unknown ad-heavy web counters. Browse more reference guides in [Text, Data & Developer Basics]({{ '/category/text-data/' | relative_url }}).

## Frequently Asked Questions

### Do spaces count as characters on X (Twitter), LinkedIn, Instagram, and SMS?
Yes. Every space (` `) between words counts as **1 full character** on every social platform, web form, SEO meta tag, and SMS gateway.

### How many characters does a URL take in an X (Twitter) post?
Regardless of whether your link is 15 characters or 180 characters long, X automatically wraps every `http://` or `https://` link in its `t.co` shortener, counting the entire URL as **23 characters** (Last checked: November 2026 [VERIFY]).

### What is the ideal length for a blog post SEO title and meta description?
Keep your `<title>` tag around **50 to 60 characters** (under `~600 pixels`) so it displays completely without an ellipsis, and write a unique **140 to 160 character** meta description that summarizes the exact solution on the page.

## Next Step

Press **`Ctrl + Shift + C`** (`Cmd + Shift + C` on Mac) inside your current Google Doc or **`Ctrl + Shift + G`** in Word right now to turn on the live on-screen character counter, and check any SMS templates for curly quotes or emojis before sending.

## Sources

1. [Google Search Central — Control your title links in search results](https://developers.google.com/search/docs/appearance/title-link)
2. [Google Search Central — Control your snippets in search results (Meta descriptions)](https://developers.google.com/search/docs/appearance/snippet)
3. [X Developer Platform — Counting Characters in Posts (UTF-8, URLs, and Emojis)](https://developer.x.com/en/docs/counting-characters)
4. [3GPP TS 23.038 — Alphabets and language-specific information (GSM 7-bit default alphabet and UCS-2 SMS segmentation)](https://www.3gpp.org/DynaReport/23038.htm)
