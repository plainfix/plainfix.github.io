---
layout: post
title: "Using AI Chatbots for Everyday Work: Prompts That Work and What Never to Paste"
description: "Write clearer AI chatbot prompts using a 5-part formula, apply five everyday work templates, verify facts, and learn what private data never to paste."
category: privacy-ai
date: 2026-11-16
author: main
related:
  - check-if-online-tool-uploads-files
  - check-if-photo-is-ai-generated
  - copy-text-from-scanned-pdf-ocr
has_promo_links: false
published: true
---

Typing a vague three-word request like *"rewrite this email"* or *"summarize these notes"* into an AI chatbot usually returns generic, robotic paragraphs that take longer to edit than writing from scratch. You can get crisp, usable output on the first try by giving the model five concrete inputs—**Context, Task, Format, Constraints, and an Example**—while keeping confidential client data, ID numbers, and passwords strictly out of the chat box.

{% include quick-answer.html text="1. **Use the 5-part prompt formula:** State **Context** (audience/role), **Task** (exact action), **Format** (table, bullets, JSON), **Constraints** (length, tone, 'use only provided text'), and **1 Example**.
2. **Ground the model in your own text:** Paste anonymized reference notes and instruct: *'Answer using ONLY the facts below; if a number is missing, write [MISSING].'*
3. **Never paste sensitive secrets:** Replace real names, Aadhaar/PAN/SSN numbers, bank details, and API keys with placeholders like `[CLIENT_A]` before pressing Enter.
4. **Turn off model training in Settings** if you use a personal chatbot account for work drafts." %}

* TOC
{:toc}

## The 5-Part Prompt Pattern That Eliminates Generic AI Output

Large language models predict the next word based on the instructions in your prompt. When you leave out who the reader is or what shape the output should take, the model defaults to verbose, corporate clichés.

Include these five building blocks in your prompt:

1. **Context:** Who is the message or document for, and what is the background situation? (*"I am a project coordinator writing to a vendor whose shipment is 4 days late."*)
2. **Task:** A clear action verb (*"Rewrite this draft," "Extract all action items," "Convert these notes into a comparison table"*).
3. **Format:** How the response should be structured (*"A 3-sentence email," "A Markdown table with 4 columns," "A numbered checklist"*).
4. **Constraints:** What to avoid and what boundaries to obey (*"Under 120 words, polite but firm tone, no exclamation marks, use only the facts provided below"*).
5. **Example (One-Shot):** One sample row or sentence showing the exact style you want.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/ai-chatbot-prompts-for-work/ai-prompt-formula-redaction.svg' | relative_url }}" width="760" height="290" alt="Diagram showing the 5 building blocks of a work prompt (Context, Task, Format, Constraints, Example) on the left and the list of sensitive items never to paste on the right." loading="lazy">
  <figcaption>Replacing real names and account numbers with placeholders like [CLIENT_A] lets you draft safely without leaking private records.</figcaption>
</figure>

## Five Copy-and-Paste Workflows for Everyday Work

### Workflow 1: Rewrite a Rough Draft Email Without Sounding Like a Robot
{% raw %}
```text
Context: I am replying to a client ([CLIENT_NAME]) who asked to add two extra features without changing Friday's deadline.
Task: Rewrite my rough notes below into a clear, polite email explaining our two options (keep Friday's launch with the original scope, or move launch to next Wednesday to include both new features).
Format: Short subject line + 2 short paragraphs + 2 bullet points for the options.
Constraints: Maximum 130 words. Plain, direct English. Do not use phrases like "I hope this email finds you well."
Rough notes: [PASTE ANONYMIZED NOTES]
```
{% endraw %}

### Workflow 2: Summarize Long Meeting Notes Into Action Items Only
{% raw %}
```text
Context: Below are raw notes from our weekly product operations call.
Task: Extract every decision made and every action item assigned.
Format: Two sections: "1. Decisions Locked" (bullet list) and "2. Action Items" (a Markdown table with columns: Owner, Task, Deadline, Open Questions).
Constraints: Use ONLY facts explicitly stated in the notes below. If an owner or deadline was not mentioned, write "Unassigned" or "No date stated"—never guess.
Notes: [PASTE ANONYMIZED MEETING NOTES]
```
{% endraw %}

### Workflow 3: Convert Unstructured Text Into a Clean Comparison Table
{% raw %}
```text
Context: I have messy specifications for three office printers copied from vendor brochures.
Task: Organize the specifications into a single side-by-side comparison table.
Format: Markdown table with columns: Model, Print Speed (ppm), Duplex Support, Toner Yield, Warranty.
Constraints: Keep units consistent. If a specification is missing from the text for a model, write "Not listed."
Text: [PASTE BROCHURE TEXT]
```
{% endraw %}

### Workflow 4: Turn a Complex Policy Document Into a Step-by-Step Checklist
{% raw %}
```text
Context: Our team needs to follow the attached expense reimbursement policy when submitting travel receipts.
Task: Turn the policy text below into a practical pre-submission checklist for employees.
Format: Numbered checklist grouped into "Before You Travel" and "When Submitting Receipts."
Constraints: Start each item with an action verb. Include exact rupee/dollar limits and deadline days mentioned in the text.
Policy text: [PASTE POLICY TEXT]
```
{% endraw %}

### Workflow 5: Explain a Technical Error or Concept in Plain Language
{% raw %}
```text
Context: I need to explain why our website's DNS update takes up to 24 hours to propagate to a non-technical store owner.
Task: Explain DNS caching and TTL in plain, everyday terms.
Format: One 3-sentence explanation + one practical analogy + what the store owner should expect over the next 24 hours.
Constraints: No unexplained acronyms. Friendly, calm tone.
```
{% endraw %}

If you are asking an AI chatbot to generate structured JSON data and the output fails to parse, follow our guide on [how to fix invalid JSON errors (including AI output)]({{ '/guides/fix-invalid-json-errors/' | relative_url }}).

## How to Catch and Prevent AI Hallucinations

AI chatbots do not "look up" truths inside a database by default—they predict plausible-sounding words. That means a model will confidently invent legal case citations, spreadsheet formulas, historical dates, or URLs if you ask an open-ended question:

1. **Use "Closed-Book" prompts whenever accuracy matters:** Instead of asking the chatbot *"What are the current baggage rules for Airline X?"*, paste the official baggage text from the airline's website into your prompt and write: *"Answer using ONLY the pasted text below. Do not use outside knowledge."*
2. **Tell the model it is allowed to say "I don't know":** Adding the sentence *"If the answer is not in the provided text, reply 'Not stated in the source text' instead of guessing"* dramatically reduces fabricated details.
3. **Verify every number, formula, URL, and citation by hand:** Never send an AI-drafted legal clause, tax calculation, medical summary, or external link to a client without checking the primary source yourself.

## What You Should NEVER Paste Into an AI Chatbot

On free consumer accounts, prompts and uploaded files may be retained in chat history logs and—unless you opt out—reviewed by human trainers or used to train future models. Never paste any of the following into a chatbot:

| Category | Specific Items Never to Paste | Safe Workaround |
| :--- | :--- | :--- |
| **Credentials & Secrets** | Passwords, one-time passcodes (OTPs), `.env` files, private SSH keys, live API bearer tokens, database connection strings | Replace the secret value with `"YOUR_API_KEY_HERE"` before pasting code |
| **Government & Tax IDs** | Aadhaar numbers, PAN numbers, Passport numbers, Social Security Numbers, driving license scans | Redact or replace with `XXXX-XXXX-1234` |
| **Financial & Medical Records** | Full bank account statements, credit card numbers, patient medical charts, employee salary rosters | Test formulas on 3 rows of fake sample numbers (`100`, `250`, `400`) instead of real payroll sheets |
| **Confidential Client / Employer Data** | Unreleased financial results, customer email lists, NDA-protected contracts, proprietary source code | Anonymize entities as `[COMPANY_A]` and `[VENDOR_B]`, or use an approved enterprise workspace with zero-data-retention |

{% comment %}OWNER: add your own screenshot of the Data Controls / Model Training opt-out toggle in ChatGPT, Claude, or Gemini settings here{% endcomment %}

## How to Turn Off Model Training in ChatGPT, Gemini, and Claude

Before using a personal chatbot account for everyday work writing, check its privacy and data-training controls (Last checked: November 2026 [VERIFY per service]):

- **ChatGPT (OpenAI):** Click your profile icon → **Settings → Data Controls** → toggle **Off** *"Improve the model for everyone"* (or use **Temporary Chat** for one-off sessions that are not saved to history) (Last checked: November 2026 [VERIFY]).
- **Google Gemini:** Open **Gemini Apps Activity** (`myactivity.google.com/product/gemini`) to manage whether your chats are saved and used to improve Google AI services (Last checked: November 2026 [VERIFY]).
- **Claude (Anthropic):** Check **Settings → Privacy** to verify data-retention and model-training preferences (Last checked: November 2026 [VERIFY]).

## Common Mistakes to Avoid

- **Pasting a 10-page document and just typing "Fix this":** Always state what "fixed" means—whether you want spelling corrected only, length cut by 50%, or broken PDF line breaks removed.
- **Accepting the very first response without a follow-up constraint:** Treat the first output as a rough draft and reply with specific adjustments (*"Cut paragraph 2 in half and remove the bullet points"*).

## If It Still Doesn't Work

- **The chatbot ignores your constraints in a very long conversation:** After 20–30 back-and-forth messages in the same thread, earlier instructions get diluted in the context window. Start a **New Chat** with a fresh, clean 5-part prompt.
- **The chatbot invents fake data when filling a table:** Add the explicit instruction: *"Do not invent sample rows. Only extract rows that exist in my pasted input."*

## Privacy and Safety Notes

Remember that browser extensions claiming to add "AI sidebars" to your email or browser often read the entire DOM of every webpage you visit—including your bank and work intranet. Stick to official first-party web interfaces (`chatgpt.com`, `gemini.google.com`, `claude.ai`) and see our guide on [how to check if an online tool uploads your files]({{ '/guides/check-if-online-tool-uploads-files/' | relative_url }}) or [how to spot AI-generated photos]({{ '/guides/check-if-photo-is-ai-generated/' | relative_url }}). Browse more guides in [Privacy, Accounts & AI]({{ '/category/privacy-ai/' | relative_url }}).

## Frequently Asked Questions

### If I delete a conversation from my chat history, is it immediately erased from the AI company's servers?
Deleting a chat removes it from your visible sidebar immediately, and on most consumer services schedules it for deletion from backend systems within 30 days (unless retained for security/legal compliance). However, if model training was turned **On** when you sent the prompt, past training snapshots cannot be "un-learned" easily—so opt out of training *before* you paste work drafts.

### Why does an AI chatbot give a wrong answer to simple math or character counting?
Language models process text as sub-word **tokens** (chunks of 3–4 letters) rather than counting individual characters or running a calculator by default. For exact math or character counts, ask the model to run code/Python or use a dedicated spreadsheet or character counter.

### Is it safe to paste my resume into an AI chatbot for feedback?
Yes, as long as you delete your **home street address, phone number, email address, and reference contact details** from the top of the resume before pasting the work-experience bullets.

## Next Step

Open your preferred AI chatbot's **Settings → Data Controls / Privacy** menu right now to review your training opt-out setting, and save the **5-Part Prompt Formula** (`Context, Task, Format, Constraints, Example`) in your notes for your next email or summary task.

## Sources

1. [OpenAI Help Center — Data Controls FAQ (How to turn off model training)](https://help.openai.com/en/articles/7730893-data-controls-faq)
2. [Google Gemini Help — Gemini Apps Privacy Hub & Activity Controls](https://support.google.com/gemini/answer/13594961)
3. [NIST — Artificial Intelligence Risk Management Framework (AI RMF 1.0 & Generative AI Profile)](https://www.nist.gov/itl/ai-risk-management-framework)
4. [CERT-In / OWASP — Top 10 for Large Language Model Applications (Sensitive Information Disclosure)](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
