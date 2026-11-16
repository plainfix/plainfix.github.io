---
layout: post
title: "Invalid JSON? How to Find and Fix the Most Common Errors (Including AI Output)"
description: "Learn how to diagnose and fix invalid JSON syntax errors—including trailing commas, single quotes, unescaped characters, and cut-off AI output."
category: text-data
date: 2026-11-16
author: main
related:
  - csv-excel-json-conversion
  - unix-timestamp-explained
  - ai-chatbot-prompts-for-work
has_promo_links: true
published: true
---

Whether you are editing a configuration file, inspecting an API payload, or copying structured output from an AI chatbot, a single misplaced comma or quote will stop a JSON parser cold with a cryptic `SyntaxError: Unexpected token` message. Because the official JSON specification (**RFC 8259**) is much stricter than everyday JavaScript object syntax, you can fix 99% of broken JSON files in seconds once you know what each error message actually means.

{% include quick-answer.html text="1. **Check the line and character position** in the error message—the real mistake is usually on that exact line or at the end of the line immediately **above** it.
2. **Enforce strict RFC 8259 rules:** Every key and string must use **double quotes** (`\"`), **no trailing commas** are allowed after the last item, and **no comments** (`//` or `/* */`) are permitted.
3. **Strip Markdown fences from AI output:** Delete leading ```` ```json ```` and trailing ```` ``` ```` lines before parsing.
4. **Test locally with `JSON.parse()`** in your browser console (`F12`) or use a JSON validator and repair tool." %}

* TOC
{:toc}

## The Six Non-Negotiable Rules of Valid JSON (RFC 8259)

Many developers and non-technical users write JSON the same way they write JavaScript objects or Python dictionaries. Standard JSON parsers reject those files immediately because **IETF RFC 8259** enforces six strict rules:

1. **All object keys must be wrapped in double quotes (`"key"`):** Unquoted keys (`{ name: "Asha" }`) or single-quoted keys (`{ 'name': 'Asha' }`) are invalid.
2. **All string values must use double quotes (`"value"`):** Single quotes (`'value'`) and backticks (`` `value` ``) are syntax errors.
3. **No trailing commas:** A comma after the final property in an object or the final item in an array is illegal.
4. **No comments of any kind:** Standard JSON does not support `// single-line` or `/* multi-line */` comments.
5. **Only six data types are allowed:** Objects (`{}`), Arrays (`[]`), Strings (`""`), Numbers (`42`, `3.14`), Booleans (`true`, `false` in lowercase), and `null` (in lowercase). Values like `undefined`, `NaN`, `Infinity`, or Python's `True`/`False`/`None` are invalid.
6. **UTF-8 encoding without a Byte Order Mark (BOM):** Control characters inside strings (such as literal newlines or tabs) must be escaped (`\n`, `\t`), and parsers must not receive a leading UTF-8 BOM character (`U+FEFF`).

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/fix-invalid-json-errors/json-syntax-errors-comparison.svg' | relative_url }}" width="760" height="295" alt="Comparison diagram showing invalid JSON with Markdown fences, comments, single quotes, and trailing commas on the left versus valid RFC 8259 JSON on the right." loading="lazy">
  <figcaption>Removing comments, switching single quotes to double quotes, and deleting trailing commas resolves the vast majority of JSON syntax errors.</figcaption>
</figure>

## How to Read `Unexpected token` Error Messages Like a Pro

When a browser, Node.js script, Python `json.loads()` call, or configuration loader rejects your JSON, the error message tells you both **what** surprised the parser and **where** it stopped:

{% raw %}
```text
SyntaxError: Unexpected token } in JSON at position 84 (line 5 column 1)
```
{% endraw %}

Follow this 3-step method to locate the bug immediately:

1. **Look at the token named in the error (`Unexpected token }`), then look one token backward.** If the parser says `Unexpected token }` or `Unexpected token ]`, it was expecting another key or value—which almost always means you left a **trailing comma** at the end of the previous line.
2. **If the error says `Unexpected token '` or `Unexpected token a..z`:** You used a **single quote** instead of a double quote, left an **object key unquoted**, or wrote `True`/`None`/`undefined` instead of lowercase `true`/`null`.
3. **If the error says `Unexpected end of JSON input` (or `Unterminated string`):** The file was cut off before all opening `{` braces, `[` brackets, or `"` quotes were closed—a very common issue when copying truncated output from AI chatbots.

## Reference Table: Most Common JSON Errors and Exact Fixes

| Error Message / Symptom | Broken JSON Example | Valid RFC 8259 Fix |
| :--- | :--- | :--- |
| **Trailing comma** (`Unexpected token }` or `Expected property name`) | `{"id": 1, "ok": true,}` | `{"id": 1, "ok": true}` |
| **Single quotes** (`Unexpected token '`) | `{'name': 'Rohan'}` | `{"name": "Rohan"}` |
| **Unquoted keys** (`Expected double-quoted property name`) | `{id: 101, active: true}` | `{"id": 101, "active": true}` |
| **Comments inside JSON** (`Unexpected token /`) | `{"port": 8080 // default}` | `{"port": 8080}` |
| **Unescaped double quote inside string** (`Expected ',' or '}'`) | `{"note": "Click "Save" now"}` | `{"note": "Click \"Save\" now"}` |
| **Literal line break inside a string** (`Bad control character`) | Multi-line paragraph inside `"..."` | Replace literal line breaks with `\n` |
| **`NaN`, `Infinity`, or `undefined`** (`Unexpected token N` or `u`) | `{"ratio": NaN, "extra": undefined}` | `{"ratio": null}` |
| **Leading zeros on numbers** (`Unexpected number`) | `{"pin": 011001}` | `"011001"` (store zip/PIN codes as strings) |
| **UTF-8 BOM at position 0** (`Unexpected token ﻿ at position 0`) | Saved in old Windows Notepad as "UTF-8 with BOM" | Re-save the file with encoding set to **UTF-8 (no BOM)** |

## Why AI Chatbot JSON Output Often Fails (And How to Fix It)

When you ask an AI chatbot to generate a JSON array or API payload, its response frequently breaks strict JSON parsers for three specific reasons:

1. **Markdown code fences (` ```json ... ``` `) and conversational filler:** Models often wrap the JSON in backtick code fences or add *"Here is your requested JSON:"* above the opening `{`. Always strip everything before the first `{` or `[` and everything after the final `}` or `]`.
2. **Truncated output at the token limit:** If a large JSON response hits the chatbot's output token limit mid-stream, it stops at `"description": "Step-by-step` without closing the string, object, or array.
3. **Unescaped quotes or inline comments:** Chatbots occasionally insert `// note: replace this` comments or unescaped quotation marks inside long text fields.

## Step-by-Step: How to Validate and Repair Invalid JSON

### Method 1: Check Using Your Browser's Built-In Developer Console (Zero Tools Needed)

Every modern desktop browser (Chrome, Edge, Firefox, Safari) has a built-in RFC 8259 JSON parser you can use offline in ten seconds:

1. **Open any browser tab and press `F12`** (or `Ctrl + Shift + I` on Windows/Linux, `Cmd + Option + I` on Mac) to open Developer Tools, then click the **Console** tab (Last checked: November 2026 [VERIFY]).
2. **Type `JSON.parse()` and pass your JSON inside backticks** (or validate a file in VS Code by saving it with a `.json` extension so red squiggly underlines appear under syntax mistakes):

{% raw %}
```javascript
// Test a JSON string directly in the browser Console:
JSON.parse(`{"user": "Sebi", "roles": ["editor", "admin"]}`);
```
{% endraw %}

3. **Press `Enter`.** If the JSON is valid, the console prints the expandable object tree. If it is invalid, the console prints the exact `SyntaxError` with the character index where parsing failed.

{% comment %}OWNER: add your own screenshot of browser DevTools Console or VS Code showing a JSON SyntaxError and its repaired output here{% endcomment %}

### Method 2: Automatically Repair Broken or AI-Generated JSON in Your Browser

Fixing one trailing comma by hand is easy, but manually cleaning a 400-line JSON payload full of single quotes, inline comments, unquoted keys, and cut-off AI brackets is tedious. You can [automatically repair broken JSON and AI output](https://snipferry.com/json/repair) to fix trailing commas, quotes, comments, and missing closing brackets, or use the [JSON syntax validator and formatter](https://snipferry.com/json/validator) to highlight exact line-and-column errors and pretty-print minified payloads.

{% include disclosure.html site="SnipFerry" %}

### Method 3: Command-Line Validation With Python or `jq`

If you work in a terminal on macOS, Linux, or Windows PowerShell, Python's built-in `json.tool` module validates and pretty-prints any JSON file without installing extra packages:

{% raw %}
```bash
# Validate a file and print the exact line/column if invalid:
python3 -m json.tool config.json > /dev/null

# Pretty-print a minified JSON file with 2-space indentation:
python3 -m json.tool --indent 2 raw.json formatted.json
```
{% endraw %}

{% include callout.html type="tip" title="Need comments in a config file? Check if the tool supports JSONC" text="VS Code settings.json and TypeScript tsconfig.json use 'JSON with Comments' (JSONC), which allows // comments and trailing commas. Standard APIs, databases, and JSON.parse() do not support JSONC—only pure RFC 8259 JSON." %}

## Common Mistakes to Avoid

- **Storing Windows file paths with single backslashes (`"C:\Users\name"`):** In JSON, a single backslash (`\`) is an escape character (`\n`, `\t`, `\"`). A literal backslash in a file path or regular expression must be doubled (`"C:\\Users\\name"`), or replaced with forward slashes (`"C:/Users/name"`).
- **Copying "smart/curly quotes" (`“` and `”`) from Word or Google Docs:** Editing JSON inside a word processor replaces straight ASCII quotes (`"`) with typographical curly quotes (`“ ”`), which breaks every JSON parser. Always edit JSON in a plain-text code editor.

## If It Still Doesn't Work

- **The JSON looks 100% valid on screen, but `JSON.parse()` fails at `position 0`:** Your file almost certainly starts with an invisible **UTF-8 Byte Order Mark (BOM)** or a zero-width space (`\u200B`) copied from a web page. Delete the character immediately before the opening `{` and re-type `{` in a plain-text editor.
- **Large 18-digit ID numbers change their last digits after parsing:** JavaScript's `Number.MAX_SAFE_INTEGER` is `9007199254740991` (16 digits). Any integer larger than that loses precision in `JSON.parse()` unless it is wrapped in double quotes as a string (`"id": "987654321012345678"`).

## Privacy and Safety Notes

API payloads, database exports, and configuration files (`config.json`, `credentials.json`, `.env` dumps) often contain live API keys, bearer tokens, customer email addresses, or session secrets. Always redact secret keys and personal data before pasting JSON into any external tool or AI chatbot. Explore more developer and data guides in [Text, Data & Developer Basics]({{ '/category/text-data/' | relative_url }}).

## Frequently Asked Questions

### Why does JSON forbid trailing commas when JavaScript and Python allow them?
JSON was designed by Douglas Crockford and standardized in RFC 8259 as a minimal, language-independent data-interchange format so that a parser can be written in just a few dozen lines of code in C, Java, Python, or Go without ambiguity.

### Can a valid JSON file start with an array `[...]` instead of an object `{...}`?
Yes. Under **RFC 8259**, a valid JSON text can have an object (`{}`), an array (`[]`), or even a single primitive value at its root, although virtually all REST APIs use a root object or root array.

### How do I put a multi-line string inside a JSON value?
JSON strings cannot contain raw line breaks (`Enter` key presses). Replace each line break with the two-character escape sequence `\n` inside your double-quoted string.

## Next Step

Take the broken JSON payload that triggered your error, inspect the exact line and column reported by the parser (plus the end of the line directly above it), and verify that it parses cleanly with `JSON.parse()` before deploying or saving.

## Sources

1. [IETF RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://datatracker.ietf.org/doc/html/rfc8259)
2. [MDN Web Docs — JSON.parse() Reference and Common SyntaxError Causes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
3. [MDN Web Docs — Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
