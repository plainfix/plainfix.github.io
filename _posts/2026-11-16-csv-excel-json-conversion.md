---
layout: post
title: "CSV, Excel or JSON? How to Convert Data Without Losing Leading Zeros or Dates"
description: "Convert between CSV, Excel, and JSON without losing leading zeros on PIN codes, turning ID numbers into scientific notation, or corrupting dates."
category: text-data
date: 2026-11-16
author: main
related:
  - fix-invalid-json-errors
  - clean-messy-copied-text
has_promo_links: true
published: true
---

Double-clicking a `.csv` file so it opens directly in Microsoft Excel is one of the fastest ways to silently corrupt a dataset: postal codes like `011001` lose their leading zero (`11001`), 16-digit tracking or card numbers turn into `9.87654E+15` with the last digit zeroed out forever, and sizes like `10-12` turn into `12-Oct`. You can prevent every one of these silent data losses by choosing the right format for your task, importing CSV columns as explicit **Text**, saving in **UTF-8**, and flattening nested JSON cleanly.

{% include quick-answer.html text="1. **Never double-click a `.csv` file to open it in Excel and press `Ctrl + S`:** Double-clicking triggers automatic type guessing that permanently destroys leading zeros and 16+ digit numbers on save.
2. **Use Excel's 'Data → From Text/CSV' importer instead:** Set ID, phone, and postal-code columns to **Text** before loading.
3. **For Hindi, Tamil, Arabic, or accented names:** Always export and import using **CSV UTF-8 (Comma delimited)** so non-English scripts do not turn into `???` or `à¤...` mojibake.
4. **When moving between spreadsheets and APIs:** Convert CSV or Excel sheets directly to typed JSON so string IDs stay wrapped in quotes." %}

* TOC
{:toc}

## CSV vs Excel (`.xlsx`) vs JSON: When Each Format Fits Best

Before converting a file, understand what each format can and cannot store on disk:

| Feature | CSV (`.csv` — RFC 4180) | Excel Workbook (`.xlsx`) | JSON (`.json` — RFC 8259) |
| :--- | :--- | :--- | :--- |
| **Structure** | Flat 2D plain-text rows and columns | Multi-sheet binary/XML workbook with formulas and styling | Hierarchical nested key-value objects and arrays |
| **Data Type Enforcement** | **None** (everything is raw text separated by commas) | **Cell-level** (Number, Text, Date, Currency, Formula) | **Strict** (`"string"`, `number`, `boolean`, `null`, `[]`, `{}`) |
| **Leading Zeros (`"011001"`)** | Safe on disk until opened in Excel | Safe only if cell format is set to **Text (`@`)** | Safe when wrapped in quotes (`"011001"`) |
| **16+ Digit IDs / Tracking Numbers** | Safe on disk as text | **Truncates precision past 15 digits** unless stored as Text | Safe when stored as a quoted string |
| **Best Use Case** | Bulk database imports/exports, simple flat tables | Financial modeling, pivot tables, human review | Web APIs, app configs, nested product/user records |

## The Three Silent Ways Excel Corrupts CSV Data

When you double-click a `.csv` file in File Explorer or Finder, Excel parses every cell using its "General" auto-detection rule before showing you the sheet:

1. **Leading zeros disappear (`00482` → `482`):** Because pure numbers have no leading zeros in arithmetic, Excel strips leading zeros from PIN/ZIP codes, employee IDs, bank branch codes, and STD phone prefixes.
2. **16+ digit numbers turn into scientific notation (`1.23457E+15`) and lose their final digits:** Excel stores numbers using IEEE 754 floating-point math, which holds a maximum of **15 significant digits**. If you open a CSV containing 16-digit credit card numbers, 18-digit order IDs, or AWB tracking numbers, Excel permanently replaces the 16th, 17th, and 18th digits with `0` (`9876543210123456` becomes `9876543210123450`).
3. **Codes and ratios turn into calendar dates (`10-12` → `12-Oct`):** Shirt sizes (`10-12`), scorelines (`3-1`), and gene names (`MARCH1`, `SEPT2`) are silently converted into date serial numbers.

**The golden rule:** As long as you **close Excel without clicking Save**, your original `.csv` file on disk is still unharmed!

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/csv-excel-json-conversion/csv-excel-leading-zeros-fix.svg' | relative_url }}" width="760" height="295" alt="Three-panel diagram showing intact raw CSV values on disk, how double-clicking in Excel drops leading zeros and corrupts 16-digit IDs, and how importing as Text or converting to JSON preserves exact strings." loading="lazy">
  <figcaption>Never press Ctrl + S after double-clicking a CSV in Excel—use Data -> From Text/CSV instead.</figcaption>
</figure>

## Step-by-Step: How to Open a CSV in Excel or Google Sheets Without Losing Zeros

### Method 1: Microsoft Excel (Windows and Mac)

1. **Open a blank workbook in Excel** (do not double-click the `.csv` file).
2. **Click the "Data" tab on the top ribbon and click "From Text/CSV"** in the top-left corner (Last checked: November 2026 [VERIFY]). Select your `.csv` file and click **Import**.
3. **Set File Origin to `65001 : Unicode (UTF-8)`** in the preview window so Hindi, regional scripts, and currency symbols render cleanly.
4. **Click "Transform Data" at the bottom** (or in newer Excel 365 versions, go to **File → Options → Data → Automatic Data Conversion** and uncheck *Remove leading zeros* and *Convert continuous letters and numbers to a date*) (Last checked: November 2026 [VERIFY]).
5. **In the Power Query preview:** Select your Postal Code, Phone, or Order ID column header, change **Data Type** from *Whole Number* to **Text**, and click **Close & Load**. Every leading zero and 18-digit ID will appear intact.

### Method 2: Google Sheets

1. **Open a blank sheet in Google Sheets** and click **File → Import → Upload**.
2. **Select your `.csv` file.**
3. **In the Import file dialog, uncheck "Convert text to numbers, dates, and formulas"** (Last checked: November 2026 [VERIFY]) and click **Import data**. Google Sheets will import every cell verbatim without stripping a single zero.

{% comment %}OWNER: add your own screenshot of Excel's 'From Text/CSV' UTF-8 and Data Type dialog or Google Sheets' uncheck 'Convert text to numbers' option here{% endcomment %}

## Step-by-Step: Convert Between CSV, Excel, and JSON Safely

### Method 1: Convert CSV or Excel to JSON in Your Browser

When you are moving spreadsheet rows into a web app, database seed file, or API payload—and want to make sure string IDs, leading zeros, and empty cells convert cleanly without writing a custom script—you can [convert CSV files directly to structured JSON](https://snipferry.com/json/csv-to-json) or [convert Excel (.xlsx) sheets to JSON](https://snipferry.com/json/excel-to-json) in your browser.

{% include disclosure.html site="SnipFerry" %}

If the JSON file you are working with has syntax mistakes before conversion, first check our guide on how to [find and fix invalid JSON errors]({{ '/guides/fix-invalid-json-errors/' | relative_url }}).

### Method 2: Convert Using Python's Built-In `csv` and `json` Modules

If you prefer a command-line script, treating all CSV columns as strings in Python guarantees that leading zeros and 18-digit IDs are never altered:

{% raw %}
```python
import csv
import json

with open("customers.csv", mode="r", encoding="utf-8-sig", newline="") as f:
    reader = csv.DictReader(f)
    rows = list(reader)

with open("customers.json", mode="w", encoding="utf-8") as out:
    json.dump(rows, out, ensure_ascii=False, indent=2)
```
{% endraw %}

Notice `encoding="utf-8-sig"` on input (which strips any hidden Excel UTF-8 Byte Order Mark) and `ensure_ascii=False` on output (which preserves Hindi, Tamil, Bengali, and accented characters as readable text rather than `\u0939` escape codes).

## How to Fix UTF-8 Encoding Issues (Hindi & Non-English Scripts Turning Into `???`)

If you export a spreadsheet containing Hindi names (`आशा शर्मा`), rupee symbols (`₹`), or European accents (`é`, `ü`) to CSV and reopen it to find `???` or `à¤†à¤¶à¤¾`:

- **When saving from Excel:** In the **Save As** dropdown, always choose **`CSV UTF-8 (Comma delimited) (*.csv)`**—never choose the legacy *`CSV (Macintosh)`* or *`CSV (MS-DOS)`* options, which only support 1980s single-byte characters.
- **Why locale changes CSV delimiters (Comma vs Semicolon):** In countries where the comma is used as a decimal separator (`12,50` instead of `12.50`, such as Germany, France, or Brazil), Excel exports "CSV" files separated by **semicolons (`;`)** instead of commas (`,`). Always check whether your file uses `,`, `;`, or `\t` (tab) in the import preview.

## How to Flatten Nested JSON Into a Flat Spreadsheet Table

Because JSON is hierarchical (an order object can contain a nested `address` object and an array of `items`), whereas CSV and Excel are flat 2D grids, nested JSON keys are flattened using **dot notation** (`address.city`, `address.pincode`):

{% raw %}
```json
{
  "order_id": "ORD-0094",
  "customer": {
    "name": "Meera",
    "pincode": "011001"
  }
}
```
{% endraw %}

Flattens cleanly into three spreadsheet columns: `order_id`, `customer.name`, and `customer.pincode`.

{% include callout.html type="tip" title="Always use ISO 8601 (`YYYY-MM-DD`) for dates in CSV and JSON" text="Writing a date as `04/05/2026` is ambiguous: US software reads it as April 5, while Indian and UK software reads it as May 4. Formatting all dates as `2026-05-04` (ISO 8601) eliminates day/month swapping across every spreadsheet and database." %}

## Common Mistakes to Avoid

- **Formatting a cell as "000000" in Excel and thinking the CSV is fixed:** Applying a custom number display format (`000000`) in Excel makes `11001` *look* like `011001` on screen, but if you save as `.xlsx` or convert to JSON without changing the underlying data type to **Text**, the number is still `11001`.
- **Unquoted commas inside CSV text fields:** Under **RFC 4180**, if an address field contains a comma (`"Flat 4B, MG Road"`), the entire field must be wrapped in double quotes (`"`). Otherwise, the comma splits the address across two separate columns. If your pasted text has stray line breaks inside cells, see our guide on [how to clean messy copied text]({{ '/guides/clean-messy-copied-text/' | relative_url }}).

## If It Still Doesn't Work

- **You already saved the CSV in Excel and lost the leading zeros on 6-digit Indian PIN codes or 5-digit US ZIP codes:** You can reconstruct fixed-length postal codes using an Excel formula in a new column: `=TEXT(A2, "000000")` (for 6 digits) or `=TEXT(A2, "00000")` (for 5 digits), then copy and **Paste Values** before exporting. (However, 16+ digit numbers truncated to `0` at the end cannot be recovered by a formula—you must re-download the original CSV.)

## Privacy and Safety Notes

Customer CSV exports and Excel workbooks frequently contain personally identifiable information (PII)—names, phone numbers, email addresses, and street addresses. Before sharing a sample file for debugging, delete real customer rows and leave only 3–5 anonymized dummy rows. Explore more data workflows in [Text, Data & Developer Basics]({{ '/category/text-data/' | relative_url }}).

## Frequently Asked Questions

### How can I check if my `.csv` file on disk still has its leading zeros without Excel ruining it?
Right-click the `.csv` file and choose **Open with → Notepad** (Windows) or **TextEdit** (Mac). Because a plain-text editor never auto-converts numbers, you will see the exact raw characters stored in the file.

### What is the maximum number of rows an Excel `.xlsx` file vs a `.csv` file can hold?
An Excel `.xlsx` worksheet has a hard limit of **1,048,576 rows** and **16,384 columns**. A `.csv` plain-text file has **no row limit** on disk, though opening a 2-million-row CSV inside Excel will cut off everything past row `1,048,576`.

### Why does Excel put a strange `ï»¿` at the start of my first column header?
Those three characters (`ï»¿`) are the UTF-8 **Byte Order Mark (BOM)** rendered by an older program that assumed the file was encoded in Windows-1252. Re-importing the file with **File Origin** set to `65001 : Unicode (UTF-8)` removes it.

## Next Step

Next time you download a `.csv` report containing phone numbers, postal codes, or order IDs, resist double-clicking it—open a blank sheet in Excel (`Data → From Text/CSV`) or Google Sheets (`File → Import` with auto-conversion unchecked) so every zero and digit stays intact.

## Sources

1. [IETF RFC 4180 — Common Format and MIME Type for Comma-Separated Values (CSV) Files](https://datatracker.ietf.org/doc/html/rfc4180)
2. [Microsoft Support — Keeping leading zeros and large numbers in Excel](https://support.microsoft.com/en-us/office/keeping-leading-zeros-and-large-numbers-1bf7b935-36e1-4985-842f-5dfa51f85fe7)
3. [IETF RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://datatracker.ietf.org/doc/html/rfc8259)
