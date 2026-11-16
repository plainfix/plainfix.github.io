---
layout: post
title: "Unix Timestamps Explained: Why Dates Show 1970 and How to Convert Them"
description: "Learn what a Unix epoch timestamp is, why software bugs show January 1, 1970, and how to convert 10- and 13-digit timestamps in Excel and JavaScript."
category: text-data
date: 2026-11-16
author: main
related:
  - fix-invalid-json-errors
  - csv-excel-json-conversion
has_promo_links: true
published: true
---

If you have ever seen a phone message, bank log, or order receipt mysteriously dated **January 1, 1970** (or **December 31, 1969**), or opened an API export where every date looks like `1794830400`, you are looking at a **Unix timestamp**. Computers store time as a single integer counting elapsed seconds (or milliseconds) since midnight UTC on January 1, 1970—and once you know whether a number has **10 digits (seconds)** or **13 digits (milliseconds)**, you can convert it in Excel, Google Sheets, JavaScript, or your browser in seconds.

{% include quick-answer.html text="1. **What a Unix timestamp is:** The total number of seconds elapsed since **1970-01-01 00:00:00 UTC** (the Unix Epoch).
2. **Count the digits first:** A **10-digit** number (e.g. `1794830400`) is in **seconds**; a **13-digit** number (e.g. `1794830400000`) is in **milliseconds**.
3. **Why 1970 appears in bugs:** When a timestamp value is `0`/`null`, or when a 10-digit seconds value is accidentally passed to a function expecting milliseconds, the date lands on **Jan 1, 1970**.
4. **Excel / Sheets formula (10-digit seconds in cell `A1`):** `=A1/86400+DATE(1970,1,1)`." %}

* TOC
{:toc}

## What Is the Unix Epoch (And Why Software Bugs Show Jan 1, 1970)?

When early Unix engineers at Bell Labs designed a simple way for computers to measure time without worrying about leap years, month lengths, or daylight saving time zones, they picked an arbitrary starting zero point called the **Unix Epoch**:

```text
00:00:00 UTC on 1 January 1970 (Unix Timestamp = 0)
```

Every second that ticks by adds `1` to that integer (`1` day = `86,400` seconds).

That explains why **January 1, 1970** (or **December 31, 1969** if your local time zone is west of UTC, such as US Eastern or Pacific Time) shows up whenever a software bug occurs:

1. **A missing or `0` database value:** When an app reads an empty timestamp column that defaults to `0`, `0` seconds after the epoch is literally `1970-01-01 00:00:00 UTC`.
2. **Passing seconds into a milliseconds function (`1970-01-21` bug):** If a backend API returns a 10-digit timestamp in **seconds** (`1,794,830,400`), and a frontend developer passes it directly into JavaScript's `new Date(1794830400)` without multiplying by `1,000`, JavaScript treats it as `1,794,830` seconds (~20.7 days) after January 1, 1970—displaying **January 21, 1970**!

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/unix-timestamp-explained/unix-epoch-1970-timeline.svg' | relative_url }}" width="760" height="285" alt="Diagram comparing Epoch Zero (1970-01-01 UTC), 10-digit seconds vs 13-digit milliseconds, and the 32-bit Year 2038 integer limit." loading="lazy">
  <figcaption>Always count the digits first: 10 digits means seconds; 13 digits means milliseconds.</figcaption>
</figure>

## 10 Digits (Seconds) vs 13 Digits (Milliseconds) vs 16/19 Digits

Different programming languages and databases default to different precision units:

| Digit Count (Current Era) | Time Unit | Example Value (`2026-11-16 12:00:00 UTC`) | Common Systems That Use It |
| :--- | :--- | :--- | :--- |
| **10 digits** | **Seconds (`s`)** | `1794830400` | Unix/Linux `date +%s`, Python `time.time()`, PHP, MySQL `UNIX_TIMESTAMP()`, Stripe & JWT `exp` tokens |
| **13 digits** | **Milliseconds (`ms`)** | `1794830400000` | JavaScript `Date.now()`, Java `System.currentTimeMillis()`, Elasticsearch, MongoDB |
| **16 digits** | **Microseconds (`µs`)** | `1794830400000000` | PostgreSQL internal timestamps, high-frequency trading logs, Chromium trace files |
| **19 digits** | **Nanoseconds (`ns`)** | `1794830400000000000` | Go `time.Now().UnixNano()`, InfluxDB, Linux kernel telemetry |

## Step-by-Step: How to Convert Unix Timestamps in Excel, Sheets, Browser, and Code

### Method 1: Convert in Excel or Google Sheets (Formulas for Seconds & Milliseconds)

Spreadsheets store dates as the number of **days** since January 1, 1900, while Unix timestamps store **seconds** since January 1, 1970. Because `1 day = 24 × 60 × 60 = 86,400 seconds`, you simply divide by `86400` and add `DATE(1970,1,1)`:

1. **For a 10-digit timestamp (in seconds) in cell `A2` (outputs UTC time):**
   ```text
   =A2/86400+DATE(1970,1,1)
   ```
2. **For a 13-digit timestamp (in milliseconds) in cell `A2` (outputs UTC time):**
   ```text
   =A2/86400000+DATE(1970,1,1)
   ```
3. **To convert UTC to Indian Standard Time (`IST = UTC + 5:30`):** Add `TIME(5,30,0)` to the formula:
   ```text
   =A2/86400+DATE(1970,1,1)+TIME(5,30,0)
   ```
4. **Format the cell as a Date/Time:** When you first press `Enter`, Excel may display a decimal number like `46342.5`. Select the cell, press `Ctrl + 1` (*Format Cells*), choose **Custom**, and enter `yyyy-mm-dd hh:mm:ss` (Last checked: November 2026 [VERIFY]).

{% comment %}OWNER: add your own screenshot of an Excel or Google Sheets cell converting a 10-digit Unix timestamp with =A2/86400+DATE(1970,1,1) here{% endcomment %}

### Method 2: Convert Timestamps Instantly in Your Browser (UTC & Local Time)

When you are debugging a JSON API response or server log and want to see both the **UTC (`Z`)** time, your **local timezone** equivalent, and the **ISO 8601** string without setting up spreadsheet formulas, you can [convert Unix timestamps in seconds or milliseconds to human-readable dates](https://snipferry.com/text/timestamp-converter) (and convert human dates back to epoch timestamps) directly in your browser.

{% include disclosure.html site="SnipFerry" %}

### Method 3: Convert in JavaScript (Browser Console or Node.js)

Remember that JavaScript's `Date` object operates in **milliseconds** (`13 digits`):

{% raw %}
```javascript
// 1. Get the current Unix timestamp in seconds (10 digits):
const nowSeconds = Math.floor(Date.now() / 1000);

// 2. Convert a 10-digit seconds timestamp to an ISO 8601 string:
const tsSeconds = 1794830400;
const dateObj = new Date(tsSeconds * 1000);
console.log(dateObj.toISOString()); // "2026-11-16T12:00:00.000Z"
console.log(dateObj.toLocaleString()); // Local timezone display

// 3. Convert a human ISO date string back to 10-digit seconds:
const parsedSeconds = Math.floor(new Date("2026-11-16T12:00:00Z").getTime() / 1000);
```
{% endraw %}

If you are inspecting timestamps inside a broken API payload or spreadsheet export, see our guides on [how to fix invalid JSON errors]({{ '/guides/fix-invalid-json-errors/' | relative_url }}) and [how to convert CSV, Excel, and JSON without losing data]({{ '/guides/csv-excel-json-conversion/' | relative_url }}).

## UTC vs Local Time and Why ISO 8601 (`2026-11-16T12:00:00Z`) Matters

A common misconception is that a Unix timestamp changes depending on what country you are in. **A Unix timestamp is always in UTC (Coordinated Universal Time).**

At the exact same instant in time, the Unix timestamp is `1794830400` in Mumbai, London, Tokyo, and New York. Time zones only come into play when you **format** that integer into a human-readable clock string:

- **UTC (`+00:00`):** `2026-11-16T12:00:00Z` (the trailing `Z` stands for *Zulu / Zero UTC offset* in **ISO 8601**).
- **India (`IST, +05:30`):** `2026-11-16T17:30:00+05:30`.
- **US Eastern (`EST, -05:00`):** `2026-11-16T07:00:00-05:00`.

## What Is the Year 2038 Problem (`Y2K38`)?

Older 32-bit operating systems, embedded routers, and legacy database columns (`INT` in older SQL schemas) store the Unix timestamp as a **signed 32-bit integer**.

The largest positive number a signed 32-bit integer can hold is **`2^31 - 1 = 2,147,483,647`**. Adding `2,147,483,647` seconds to January 1, 1970 reaches:

```text
03:14:07 UTC on Tuesday, 19 January 2038
```

One second later, a signed 32-bit integer overflows to `-2,147,483,648`, wrapping the clock backward to **December 13, 1901**. Modern 64-bit operating systems, programming languages, and databases solve this completely by storing timestamps as **64-bit integers (`BIGINT`)**, which will not overflow for roughly 292 billion years.

{% include callout.html type="tip" title="Checking JWT token expiration (`exp` and `iat`)" text="JSON Web Tokens (JWTs) used for web authentication always store their `iat` (Issued At) and `exp` (Expiration Time) claims as 10-digit Unix timestamps in seconds. If your authentication token is rejected early, check that your server's NTP clock is synced to UTC." %}

## Common Mistakes to Avoid

- **Subtracting or adding local timezone offsets before saving a Unix timestamp:** Never add `19800` seconds (`5.5 hours` for IST) to a Unix timestamp before saving it in a database. Always store pure UTC epoch seconds and apply the user's timezone only when displaying the date in the UI.
- **Using a 32-bit `INT` column for 30-year mortgage or passport expiry dates:** Even today, a 15-year or 20-year expiry date calculated in 2026 exceeds **January 19, 2038**! Always use 64-bit integers (`BIGINT`) or native `TIMESTAMPTZ` columns.

## If It Still Doesn't Work

- **Excel displays `#####` after entering the timestamp conversion formula:** Either the column is too narrow to show the full date-time string (double-click the right edge of the column header to widen it), or you passed a **13-digit millisecond** timestamp into the **10-digit seconds** formula (`86400` instead of `86400000`), producing a date past the year 9999.
- **Dates before 1970 (such as dates of birth in 1965):** Dates prior to `1970-01-01 00:00:00 UTC` are represented as **negative Unix timestamps** (for example, `-157766400`). Standard JavaScript `new Date()` and the Excel formula above handle negative timestamps cleanly.

## Privacy and Safety Notes

Server logs, authentication tokens (JWTs), and database exports often include Unix timestamps right next to session IDs, user IDs, or IP addresses. When converting a timestamp from a JWT or log line, paste only the numeric timestamp (`1794830400`) rather than the entire secret bearer token. Browse more developer references in [Text, Data & Developer Basics]({{ '/category/text-data/' | relative_url }}).

## Frequently Asked Questions

### Why does my phone sometimes show December 31, 1969 instead of January 1, 1970?
A timestamp of `0` equals `January 1, 1970 at 00:00:00 UTC`. If your device's timezone is west of Greenwich (such as `UTC-5` in New York or `UTC-8` in California), subtracting 5 or 8 hours from midnight on January 1, 1970 displays **December 31, 1969**.

### Do Unix timestamps count leap seconds?
No. Under the **POSIX.1 standard**, every Unix day is defined as containing exactly `86,400` seconds (`24 × 60 × 60`), ignoring occasional astronomical leap seconds so date math stays predictable.

### How do I get the current Unix timestamp in my terminal on Mac or Linux?
Open Terminal and run `date +%s` to print the current 10-digit Unix timestamp in seconds.

## Next Step

Check the timestamp values in your project or spreadsheet right now: count whether they have **10 digits** (seconds) or **13 digits** (milliseconds), and make sure any database column storing future dates past 2038 uses a 64-bit integer or native timestamp type.

## Sources

1. [The Open Group / IEEE Std 1003.1 (POSIX.1) — Base Definitions: Seconds Since the Epoch](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)
2. [MDN Web Docs — JavaScript Date.now() and Unix Epoch Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
3. [IETF RFC 3339 — Date and Time on the Internet: Timestamps (ISO 8601 Profile)](https://datatracker.ietf.org/doc/html/rfc3339)
