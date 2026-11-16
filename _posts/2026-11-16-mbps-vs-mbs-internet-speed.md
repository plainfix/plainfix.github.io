---
layout: post
title: "Mbps vs MB/s: How to Understand Internet Speed and Download Times"
description: "Understand the difference between megabits (Mbps) and megabytes (MB/s), calculate real file download times, and fix slow Wi-Fi speed test results."
category: everyday-tech
date: 2026-11-16
author: main
related:
  - google-storage-full-fix
  - share-wifi-without-password
has_promo_links: false
widget: download-time
published: true
---

When you pay your broadband provider for a **100 Mbps** internet plan, seeing a file download in Chrome or Steam top out at **11.5 MB/s** often makes it look like your provider is delivering only one-tenth of your promised speed. In reality, your connection is working at full speed: internet service providers measure connection speed in **megabits per second (`Mbps`, lowercase `b`)**, while computers and browsers measure file sizes in **megabytes per second (`MB/s`, uppercase `B`)**—and because there are **8 bits in 1 byte**, you must divide your `Mbps` speed by `8` to find your maximum `MB/s` download rate.

{% include quick-answer.html text="1. **The Divide-by-8 Rule:** `1 Byte = 8 bits`. To convert your internet plan's **Mbps** into real file download speed (**MB/s**), divide by **8** (`100 Mbps ÷ 8 = 12.5 MB/s` theoretical maximum).
2. **Real-world protocol overhead:** Because TCP/IP headers, Wi-Fi framing, and TLS encryption take ~10–15% overhead, a healthy **100 Mbps** connection downloads files at roughly **10.5 to 11.5 MB/s**.
3. **Download time formula:** `Time (seconds) = File Size in MB ÷ (Speed in Mbps ÷ 8)`." %}

* TOC
{:toc}

## Interactive Download Time & Speed Calculator

Use the calculator below to convert between `Mbps`, `Gbps`, and `MB/s` and estimate both theoretical and realistic (~85% efficiency) download times for any file size:

<div id="download-time-widget"></div>

## Bits (`b`) vs Bytes (`B`): Why Two Different Units Exist

Networking hardware—routers, fiber-optic modems, Ethernet cables, and 5G towers—transmits data one binary signal (**1 bit**, a single `0` or `1`) at a time, so engineers have measured network link capacity in **bits per second (`bps`, `Kbps`, `Mbps`, `Gbps`)** since the earliest days of telecommunications.

Operating systems and storage drives (Windows Explorer, macOS Finder, Android, iOS, Chrome, and game launchers) organize files in groups of **8 bits = 1 Byte (`B`, `KB`, `MB`, `GB`, `TB`)** because a single byte is the basic unit needed to store one ASCII character of text.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/mbps-vs-mbs-internet-speed/mbps-to-mbs-divide-by-8.svg' | relative_url }}" width="760" height="285" alt="Diagram showing 100 Mbps divided by 8 equals 12.5 MB/s because 8 bits equal 1 Byte." loading="lazy">
  <figcaption>Always look at the letter 'b': lowercase 'b' (Mbps) means megabits; uppercase 'B' (MB/s) means megabytes.</figcaption>
</figure>

## The Download Time Formula With Worked Examples

To calculate how long a file will take to download by hand:

1. **Convert your file size into Megabytes (`MB`):** Multiply Gigabytes (`GB`) by `1,024` (for example, `5 GB × 1,024 = 5,120 MB`).
2. **Convert your internet speed from `Mbps` into `MB/s`:** Divide `Mbps` by `8`.
3. **Divide File Size (`MB`) by Speed (`MB/s`):** Multiply the result by `~1.15` to account for real-world network overhead.

### Worked Example 1: Downloading a 2 GB Movie on a 40 Mbps Connection
- **File size in MB:** `2 GB × 1,024 = 2,048 MB`
- **Theoretical speed in MB/s:** `40 Mbps ÷ 8 = 5 MB/s`
- **Theoretical minimum time:** `2,048 MB ÷ 5 MB/s = 409.6 seconds` (**6 minutes 50 seconds**)
- **Realistic time (~85% efficiency, ~4.25 MB/s):** `2,048 ÷ 4.25 = 482 seconds` (**~8 minutes**)

### Worked Example 2: Downloading a 60 GB Game Update on a 300 Mbps Fiber Plan
- **File size in MB:** `60 GB × 1,024 = 61,440 MB`
- **Theoretical speed in MB/s:** `300 Mbps ÷ 8 = 37.5 MB/s`
- **Theoretical minimum time:** `61,440 MB ÷ 37.5 MB/s = 1,638 seconds` (**27 minutes 18 seconds**)
- **Realistic time (~85% efficiency, ~31.8 MB/s):** **~32 minutes**

## Reference Table: Common Broadband Plans Converted to MB/s and Download Times

| ISP Plan Speed (`Mbps`) | Theoretical Max (`MB/s`) | Typical Real-World Speed (`MB/s`) | Time for **1 GB** File | Time for **10 GB** File | Time for **50 GB** Game |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **10 Mbps** | `1.25 MB/s` | `~1.05 MB/s` | ~16 mins | ~2 hrs 42 mins | ~13 hrs 30 mins |
| **30 Mbps** | `3.75 MB/s` | `~3.20 MB/s` | ~5 mins 20 secs | ~53 mins | ~4 hrs 26 mins |
| **50 Mbps** | `6.25 MB/s` | `~5.30 MB/s` | ~3 mins 15 secs | ~32 mins | ~2 hrs 40 mins |
| **100 Mbps** | `12.50 MB/s` | `~10.60 MB/s` | ~1 min 36 secs | ~16 mins | ~1 hr 20 mins |
| **300 Mbps** | `37.50 MB/s` | `~31.80 MB/s` | ~32 secs | ~5 mins 20 secs | ~26 mins 50 secs |
| **1 Gbps (`1000 Mbps`)** | `125.00 MB/s` | `~106.00 MB/s` | ~10 secs | ~1 min 36 secs | ~8 mins |

{% comment %}OWNER: add your own screenshot of a browser download bar showing MB/s alongside a speed test showing Mbps here{% endcomment %}

## Why Your Real Download Speed Is Often Lower Than Your Plan

Even after dividing by 8, you may sometimes see a `100 Mbps` connection downloading at only `3 MB/s` instead of `11 MB/s`. Five technical bottlenecks explain why:

1. **TCP/IP and Wi-Fi frame overhead (~10%–15%):** Every packet sent across the internet carries source/destination IP addresses, TCP checksums, TLS encryption headers, and Wi-Fi acknowledgment frames. Those control bytes count toward line speed (`Mbps`) but not toward your saved file bytes (`MB/s`).
2. **2.4 GHz vs 5 GHz / 6 GHz Wi-Fi bands:**
   - **2.4 GHz Wi-Fi** travels well through thick concrete walls, but its real-world speed usually caps out around **`35 Mbps to 60 Mbps` (`4–7 MB/s`)** due to narrow channels and interference from neighboring routers and Bluetooth devices.
   - **5 GHz (and 6 GHz) Wi-Fi** delivers **`200 Mbps to 900+ Mbps`**, but drops off faster when separated by two or three walls.
3. **The remote website's server cap:** If you pay for a `300 Mbps` fiber line (`37.5 MB/s`), but the university or government website hosting a PDF limits each visitor to `2 MB/s` to protect its server, your download will run at `2 MB/s`.
4. **100 Mbps Fast Ethernet ports or old Cat5 cables:** Cheaper routers or older Ethernet cables (`Cat5` instead of `Cat5e` / `Cat6`) physically max out at `100 Mbps` (`~94 Mbps` real throughput) even on a `300 Mbps` fiber plan.
5. **Other devices sharing your household bandwidth:** A 4K TV stream uses `15–25 Mbps`, and a cloud photo backup can saturate your upload channel. When guests visit, see our guide on [how to share your Wi-Fi without telling the password]({{ '/guides/share-wifi-without-password/' | relative_url }}).

## How to Read an Internet Speed Test Properly (Ping, Jitter, Download, Upload)

When you run a speed test, don't look only at the big Download number—for video calls and gaming, the other three metrics matter more:

- **Download Speed (`Mbps`):** How fast data travels from the internet to your device. Anything over **25–50 Mbps** per person easily handles 4K streaming and everyday browsing; higher speeds mainly shorten multi-gigabyte file downloads.
- **Upload Speed (`Mbps`):** How fast your device sends data out (sending attachments, backing up to Google Drive, or transmitting your webcam video on Zoom/Meet). Fiber connections are usually **symmetrical** (e.g., `100 Mbps` down / `100 Mbps` up), whereas older cable/DSL lines have much slower upload speeds.
- **Ping / Latency (`ms` — milliseconds):** The round-trip reaction time between your device and the server. **Under `30 ms`** feels instantaneous; **`30–80 ms`** is fine for video calls; **over `150 ms`** causes noticeable lag on voice/video calls and online games.
- **Jitter (`ms`):** How much your ping fluctuates from one millisecond to the next. Keep jitter **under `10–15 ms`** so voice calls do not sound robotic or choppy.

{% include callout.html type="tip" title="How to test whether the slowdown is your ISP or your Wi-Fi room distance" text="Stand 1 meter away from your router while connected to the 5 GHz Wi-Fi band (or plug a laptop directly into the router with a Cat6 Ethernet cable) and run a speed test. If speed is fast next to the router but slow in your bedroom, your ISP line is fine—you simply have a Wi-Fi dead zone." %}

## Common Mistakes to Avoid

- **Hiding your Wi-Fi router behind a television or inside a closed wooden cabinet:** TV screens contain large metal heat-sink shields that block 5 GHz radio waves. Place your router out in the open at chest or shelf height.
- **Running a speed test while a cloud backup or game update is running in the background:** A speed test measures only the *leftover* bandwidth currently unused by other apps on your network.

## If It Still Doesn't Work

- **Your 200 Mbps plan never exceeds 94 Mbps even right next to the router:** Check the short Ethernet cable connecting your fiber ONT (modem) to your Wi-Fi router. If that cable is damaged or connected to a `10/100 Mbps` port instead of a `1000 Mbps (Gigabit)` WAN port, your entire house is capped at `94 Mbps`.
- **Browser downloads are slow, but speed tests show 200 Mbps:** The bottleneck is the specific server hosting the file you are downloading, not your home internet connection.

## Privacy and Safety Notes

Many third-party speed-test websites load dozens of ad-tracking scripts and log your public IP address and approximate location. Using lightweight, ad-free tests (such as Cloudflare's `speed.cloudflare.com` or M-Lab's built-in test on Google Search) measures your connection cleanly without heavy ad trackers. Browse more network guides in [Phone, Google & Internet Fixes]({{ '/category/everyday-tech/' | relative_url }}).

## Frequently Asked Questions

### Is 100 Mbps fast enough for working from home and 4K streaming?
Yes. A single 4K Ultra HD video stream requires about `15 to 25 Mbps`, and an HD Zoom or Google Meet video call requires about `3 to 4 Mbps` up and down. A real `100 Mbps` fiber connection comfortably supports 3 to 4 people working and streaming simultaneously.

### What is the difference between `MB/s` and `MiB/s`?
In networking and decimal storage, `1 MB = 1,000,000 bytes`, while in binary operating-system notation, `1 MiB (Mebibyte) = 1,048,576 bytes` (`1,024 × 1,024`). The difference is roughly 4.8%, which is another small reason Windows download readouts look slightly lower than simple decimal division.

### Why does my speed test show fast Download speed, but WhatsApp calls and Zoom still freeze?
Video calls only need `3–5 Mbps` of speed, but they require **low Ping (`< 50 ms`), low Jitter (`< 15 ms`), and zero Packet Loss**. Switching from a weak 2.4 GHz signal to 5 GHz or moving closer to the router fixes video-call freezing even when raw Mbps looks high.

## Next Step

Scroll up to the **Download Time & Speed Calculator** on this page, enter your current broadband plan in `Mbps`, and compare its `MB/s` figure against your next browser download while connected to your router's **5 GHz** Wi-Fi band.

## Sources

1. [IEEE 802.11 — Wireless LAN Medium Access Control (MAC) and Physical Layer (PHY) Specifications](https://standards.ieee.org/standard/802_11-2020.html)
2. [IEC / NIST — Binary Prefixes and Units of Information (Bits, Bytes, KB/KiB, MB/MiB)](https://physics.nist.gov/cuu/Units/binary.html)
3. [Measurement Lab (M-Lab) — How Internet Speed Tests Measure Throughput and Latency](https://www.measurementlab.net/tests/ndt/)
