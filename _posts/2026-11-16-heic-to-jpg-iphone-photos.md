---
layout: post
title: "HEIC Photos Won't Open? How to Convert iPhone Photos to JPG on Any Device"
description: "Fix iPhone HEIC photos that will not open on Windows, Android, or upload forms by converting them to JPG or changing two camera transfer settings."
category: images
date: 2026-11-16
author: main
related:
  - image-format-comparison
  - resize-photo-signature-exact-kb
  - phone-storage-full-cleanup
has_promo_links: true
published: true
---

When you copy photos from an iPhone to a Windows PC or attach them to an online application form, you often end up with `.heic` files that refuse to open or trigger an *"Unsupported file format"* error. You can convert existing `.heic` photos into standard `.jpg` files in seconds on any device, and change one iPhone setting so future USB transfers automatically arrive as universal JPEGs.

{% include quick-answer.html text="1. **Never rename `.heic` to `.jpg` manually**—that leaves the internal file encoded as HEIC and breaks uploads.
2. **To convert right on an iPhone:** Use the built-in **Files** app (**Quick Actions → Convert Image → JPEG**).
3. **To convert on Windows, Mac, or Android:** Export as JPEG in Preview/Photos, or use an in-browser HEIC-to-JPG converter.
4. **To stop the problem on future PC cable transfers:** On iPhone, set **Settings → Apps → Photos → Transfer to Mac or PC → Automatic**." %}

* TOC
{:toc}

## Why iPhones Save Photos as HEIC Instead of JPG

Starting with iOS 11, Apple switched the default iPhone camera format from JPEG to **HEIC** (*High Efficiency Image Container*), which is the file extension used for the **HEIF** (*High Efficiency Image File Format*) standard.

Apple made this default for two practical reasons:

- **Roughly half the storage space:** A 12 MP or 24 MP photo stored in HEIC typically takes 40% to 50% less storage space on your iPhone than an equivalent-quality JPEG.
- **Better color depth and editing data:** HEIC supports 16-bit color depth, Live Photos bursts, and non-destructive Portrait mode depth maps inside a single container.

The catch is compatibility. While macOS and iPhones read HEIC natively, many Windows installations lack the required codec out of the box, older Android apps struggle with the container, and almost all government, visa, and job portals strictly require `.jpg` or `.png` uploads.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/heic-to-jpg-iphone-photos/heic-vs-jpg-workflow.svg' | relative_url }}" width="760" height="290" alt="Diagram comparing iPhone default HEIC files with converted JPG files for Windows, Android, and web upload portals." loading="lazy">
  <figcaption>Converting HEIC to JPG re-encodes the image data with a standard JPEG header and sRGB color profile that every PC and web portal accepts.</figcaption>
</figure>

## How to Open or Convert HEIC Photos on Windows 10 and Windows 11

If `.heic` files already sit in a folder on your Windows PC, you have two ways to handle them depending on whether you just want to view them or need real `.jpg` files to upload.

### Option A: Install Microsoft's Official Extensions to View and Save As JPG

Windows needs two separate Microsoft Store extensions to decode iPhone HEIC files natively because HEIC images are compressed using the HEVC (H.265) video codec:

1. **Open the Microsoft Store app** on your Windows PC and search for **HEIF Image Extensions** by Microsoft Corporation. Click **Get / Install** (free) (Last checked: November 2026 [VERIFY]).
2. **Search Microsoft Store for "HEVC Video Extensions"** by Microsoft Corporation. Depending on your PC's hardware license, Microsoft Store may charge approximately `$0.99` (or local currency equivalent) for the HEVC codec package (Last checked: November 2026 [VERIFY price]).
3. **Double-click any `.heic` file** once both extensions finish installing. The image will now open inside the Windows **Photos** app.
4. **Press `Ctrl + S` (Save As) inside Windows Photos**, change the **Save as type** dropdown from `.heic` to `.jpg`, and click **Save**. You will see a new, compatible `.jpg` file created alongside the original.

### Option B: Convert Single or Bulk HEIC Files in Your Browser (No Codec Install)

If you are using a work computer without Microsoft Store access, or you have a folder of 20 `.heic` photos that you need as `.jpg` files right away without buying a codec extension, you can [convert HEIC files to JPG in your browser](https://pixelkaro.com/heic-to-jpg) on Windows, Android, Linux, or Chromebook.

{% include disclosure.html site="PixelKaro" %}

## How to Convert HEIC to JPG Directly on an iPhone or iPad (Built-In Files App)

You do not need any third-party iOS app to turn existing iPhone photos into `.jpg` files before emailing or uploading them:

1. **Open the Photos app on your iPhone**, select the photo(s) you want to convert, tap the **Share** icon in the bottom-left corner, and choose **Save to Files** (Last checked: November 2026 [VERIFY]). Pick a folder such as **On My iPhone** and tap **Save**.
2. **Open the built-in Files app** and navigate to the folder where you just saved the photos.
3. **Long-press on a single photo** (or tap the three-dot menu `...` → **Select**, highlight multiple photos, and long-press on the selection).
4. **Tap Quick Actions → Convert Image** from the pop-up menu.
5. **Select JPEG** as the output format and choose **Original** (or **Large** / **Medium** if you also want to reduce file weight). You will immediately see brand-new `.jpg` files appear in the same folder, ready to upload to any website.

{% comment %}OWNER: add your own screenshot of the iOS Files app Quick Actions -> Convert Image -> JPEG menu here{% endcomment %}

## How to Convert Bulk HEIC Photos on a Mac (Finder Quick Action & Preview)

macOS includes a one-click bulk converter right inside Finder:

1. **Select all your `.heic` files in a Finder window** by dragging a selection box or pressing `Cmd + A`.
2. **Right-click (or `Ctrl`-click) the selected files** and point to **Quick Actions → Convert Image** (Last checked: November 2026 [VERIFY]).
3. **Set Format to JPEG** and **Image Size to Actual Size** in the small dialog window that appears.
4. **Click Convert to JPEG.** Finder will generate a `.jpg` copy of every selected photo in the same folder within a few seconds.

## How to Open and Convert HEIC on Android

Most modern Android phones running Android 10 or newer can display `.heic` images inside **Google Photos** or the default Gallery app, but web forms opened in Chrome on Android will still reject the `.heic` file when you try to attach it.

To turn a `.heic` photo into a `.jpg` on Android:

1. **Open the `.heic` image in Google Photos**, tap **Edit**, make a tiny crop adjustment (or tap **Adjust** and leave values at zero), and tap **Save copy**—or use the browser method in Option B above to convert the file cleanly without cropping.
2. **Verify the file extension** in your Android **Files by Google** app under **Downloads** or **Pictures** to confirm the saved copy ends in `.jpg`.

## How to Stop Your iPhone From Sending HEIC Files in the Future

You can configure your iPhone in two different ways depending on whether you want to save iPhone storage or shoot directly in JPEG.

| iPhone Setting Path | Recommended Option | What It Does | Best For |
| :--- | :--- | :--- | :--- |
| **Settings → Apps → Photos → Transfer to Mac or PC** (or **Settings → Photos** on older iOS) | **Automatic** *(Default)* | Keeps photos as space-saving HEIC on the iPhone, but converts them to `.jpg` automatically when copied to a PC via USB cable | Most users—saves iPhone storage while giving you JPGs on Windows |
| **Settings → Apps → Photos → Transfer to Mac or PC** | **Keep Originals** | Copies raw `.heic` files to your PC without converting | Users who edit HEIC natively on macOS or have Windows codecs installed |
| **Settings → Camera → Formats** | **Most Compatible** | Forces the iPhone camera to capture every new photo directly as `.jpg` instead of `.heic` | Users who upload iPhone photos directly to web forms every day |
| **Settings → Camera → Formats** | **High Efficiency** | Captures new photos as `.heic` (uses ~45% less storage) | Users running low on iPhone storage |

{% include callout.html type="tip" title="Why iCloud.com downloads sometimes give you HEIC" text="When you download photos from iCloud.com in a web browser, clicking the Download icon once usually downloads a compatible JPEG, whereas choosing 'Unmodified Original' downloads the raw `.heic` file." %}

## Quality and Color Profile Notes When Converting HEIC to JPG

- **Display P3 vs sRGB color shift:** iPhones capture wide-gamut **Display P3** colors inside HEIC files. A proper converter translates those colors to standard **sRGB** so skin tones do not look washed out on Windows monitors or government portals.
- **JPEG quality level:** Because both HEIC and JPG are lossy formats, exporting at **90% to 95% JPEG quality** preserves all visible sharpness without creating an unnecessarily huge file.
- **Resizing for form limits:** Once your photo is converted to `.jpg`, if you also need to fit strict pixel and kilobyte rules (such as `20 KB to 50 KB`), follow our step-by-step guide to [resize a photo and signature to an exact KB and pixel size]({{ '/guides/resize-photo-signature-exact-kb/' | relative_url }}).

## Common Mistakes to Avoid

- **Changing the filename from `IMG_1024.HEIC` to `IMG_1024.jpg`:** Typing `.jpg` at the end of the filename does not convert the image data. Windows and upload portals read the internal file signature and will reject the file as corrupted.
- **Taking a screenshot of the photo on your phone:** While a screenshot saves as PNG or JPG, it drops the resolution to your screen size and often includes black bars or UI icons.

## If It Still Doesn't Work

- **Windows still says "We can't open this file" after installing HEIF extensions:** iPhone HEIC files require **both** the *HEIF Image Extensions* and the *HEVC Video Extensions* installed on Windows. Restart the Windows Photos app after installing both.
- **USB cable transfer still copies `.heic` even with "Automatic" selected:** Unplug the iPhone, toggle **Transfer to Mac or PC** to **Keep Originals** and back to **Automatic**, then reconnect the cable and unlock the iPhone screen.

## Privacy and Safety Notes

iPhone photos—both in `.heic` and converted `.jpg` format—often contain embedded GPS coordinates showing the exact street address where the photo was taken, along with the date, time, and iPhone model. Explore more guides in [Photos & Images]({{ '/category/images/' | relative_url }}).

## Frequently Asked Questions

### Does converting HEIC to JPG reduce photo quality?
At a 90–95% JPEG quality setting, there is no visible loss of detail to the human eye for everyday viewing, printing, or form uploads. Only extreme pixel-level editing in professional software benefits from keeping the 16-bit HEIC original.

### Does switching my iPhone camera to "Most Compatible" convert my old HEIC photos?
No. Changing **Settings → Camera → Formats** to **Most Compatible** only affects new photos you take from that moment onward. Existing `.heic` photos in your library stay in HEIC until you convert or export them.

### Why did AirDrop or Google Drive give me a `.heic` file?
AirDrop to a Mac and direct uploads to apps like Google Drive or OneDrive often transfer the original unmodified `.heic` file rather than triggering the automatic JPEG conversion used for USB cable imports to Windows.

## Next Step

Open **Settings → Camera → Formats** and **Settings → Apps → Photos** on your iPhone right now to verify whether your phone is set to **Automatic** transfer, and convert any existing `.heic` files before uploading them to an online form.

## Sources

1. [Apple Support — Using HEIF or HEVC media on Apple devices](https://support.apple.com/en-us/116944) [VERIFY SOURCE: confirm Apple Support article ID for HEIF/HEVC media]
2. [Apple Support — Transfer photos and videos from your iPhone or iPad to your Mac or PC](https://support.apple.com/en-us/120267) [VERIFY SOURCE: confirm Apple Support transfer guide URL]
3. [MPEG / ISO/IEC 23008-12 — High Efficiency Image File Format (HEIF) Standard](https://mpeg.chiariglione.org/standards/mpeg-h/image-file-format)
