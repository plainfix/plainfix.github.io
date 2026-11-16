---
layout: post
title: "How to Remove Location and Hidden Data From Photos Before Sharing"
description: "See which sharing apps keep or strip GPS coordinates and EXIF camera data, and learn how to remove hidden location metadata on iPhone, Android, or PC."
category: privacy-ai
date: 2026-11-16
author: main
related:
  - check-if-photo-is-ai-generated
  - check-if-online-tool-uploads-files
  - heic-to-jpg-iphone-photos
has_promo_links: true
published: true
---

Every time you take a photo with your smartphone while location permissions are enabled, the camera quietly writes the exact **GPS latitude, longitude, altitude, compass direction, date, exact second, and phone model** inside the image file's header. If you attach that photo to an email, upload it to a cloud folder, or send it as a "Document" on WhatsApp to a stranger on a classifieds marketplace, the recipient can open a map to the exact apartment or house where you took the shot.

{% include quick-answer.html text="1. **Know when GPS stays attached:** Email attachments, Google Drive/iCloud links, AirDrop, and WhatsApp **'Send as Document'** keep your exact GPS coordinates inside the file.
2. **To strip location when sharing on iPhone or Android:** Tap **Options → Turn OFF Location** at the top of the iOS Share Sheet (or tap **Remove location** in the Android photo share preview).
3. **To strip all hidden metadata on Windows or Mac:** Use **Properties → Details → Remove Properties** on Windows, **Preview → Inspector** on Mac, or an in-browser metadata remover." %}

* TOC
{:toc}

## What EXIF Metadata Is Hiding Inside Your Photos

**EXIF** (*Exchangeable Image File Format*) is a standardized set of metadata tags embedded inside `.jpg`, `.heic`, `.tiff`, and `.webp` files by cameras and smartphones.

While technical fields like shutter speed (`1/120s`), aperture (`f/1.8`), and ISO (`100`) help photographers organize their libraries, several EXIF fields carry sensitive personal information:

- **GPS Latitude, Longitude, and Altitude:** Pinpoints where you were standing within 3 to 10 meters—often revealing your home address, your child's school, or a private workplace.
- **Original Date and Timestamp (`DateTimeOriginal`):** Reveals the exact date and second the photo was captured, even if you rename or upload the file months later.
- **Device Make, Model, and Software Version:** Identifies the exact phone or camera model (for example, `iPhone 16 Pro, iOS 19.1` or `Samsung SM-S928B`) and editing software used.
- **Embedded EXIF Thumbnail:** Some older editing software crops the main image but forgets to update the tiny preview thumbnail stored inside the EXIF header, leaving the uncropped preview embedded inside the file.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/remove-location-metadata-from-photos/photo-exif-sharing-paths.svg' | relative_url }}" width="760" height="290" alt="Comparison diagram showing sharing paths that keep GPS and EXIF metadata versus social apps that strip EXIF on public display." loading="lazy">
  <figcaption>Sending a photo as a 'Document' in chat apps or via email preserves every GPS coordinate inside the file.</figcaption>
</figure>

## Which Sharing Paths Keep GPS Data vs Strip It Automatically

Whether your GPS location reaches the other person depends entirely on **how** you send the file (Last checked: November 2026 [VERIFY per app]):

| Sharing Method / App | Keeps or Strips GPS & EXIF? | Important Detail to Know |
| :--- | :--- | :--- |
| **Email attachments** (Gmail, Outlook, Apple Mail) | **KEEPS ALL EXIF & GPS** | The raw file is delivered untouched to the recipient |
| **WhatsApp / Telegram ("Send as Document")** | **KEEPS ALL EXIF & GPS** | Sending as a document skips image re-encoding and sends the raw file with full GPS tags |
| **Cloud Links** (Google Drive, iCloud, OneDrive, Dropbox) | **KEEPS ALL EXIF & GPS** | Anyone who views the file details or downloads the image can read the map coordinates |
| **AirDrop & Android Quick Share** | **KEEPS BY DEFAULT** | Keeps location unless you tap **Options** in the share sheet and toggle **Location Off** |
| **WhatsApp / Signal (Standard Photo/Gallery mode)** | **STRIPS EXIF** | Re-compresses the image and strips GPS/EXIF tags before delivering to the recipient |
| **Instagram, Facebook, X, Reddit, LinkedIn** | **STRIPS FROM PUBLIC DISPLAY** | Other users downloading the image from the feed do not get EXIF, though the platform itself may read metadata on upload |

## How to Check and Remove Hidden Photo Data on Any Device

### Method 1: View and Strip All EXIF Metadata in Your Browser

Before you upload a product photo to a marketplace, attach an image to a public forum, or email a document snapshot, you can [inspect all hidden EXIF and GPS tags inside a photo](https://pixelkaro.com/view-metadata) to see exactly what coordinates and camera details are stored, and [strip all location and EXIF metadata cleanly](https://pixelkaro.com/remove-metadata) directly in your browser (files are processed locally in your browser and not uploaded to a server, per the site).

{% include disclosure.html site="PixelKaro" %}

### Method 2: iPhone and iPad (Photos App & Share Sheet)

Apple gives you two ways to remove location data without deleting it from your own private photo library:

1. **Strip location for a single share:** Open **Photos**, select the image(s), tap the **Share** icon in the bottom-left corner, and tap **Options** at the very top of the Share Sheet (right next to *"1 Photo Selected"*) (Last checked: November 2026 [VERIFY]). Toggle **Location** to **Off** and tap **Done** before choosing Mail, AirDrop, or Save to Files.
2. **Remove location from the photo in your library:** Open the photo in **Photos**, swipe up on the image (or tap the **`i` Info** button), tap **Adjust** in the bottom-right corner of the map card, and tap **No Location**.

### Method 3: Android (Google Photos & Gallery Share Sheet)

1. **On Android 14 / 15 / 16 system share sheet:** When you select a photo to share, look at the image thumbnail at the top of the share panel—if it shows a badge reading **"Location included,"** tap it and check **Remove location** before choosing the app (Last checked: November 2026 [VERIFY]).
2. **In Google Photos for shared links:** Open **Google Photos → Settings → Sharing** and turn on **Hide location data** so shared albums and links strip location tags.

{% comment %}OWNER: add your own screenshot of the Windows 'Remove Properties and Personal Information' dialog or iOS Share Sheet 'Options -> Location Off' toggle here{% endcomment %}

### Method 4: Windows 10 / 11 and macOS Desktop

- **On Windows 10 and Windows 11:**
  1. Right-click the `.jpg` file in File Explorer and click **Properties**.
  2. Switch to the **Details** tab and scroll down to see **Origin**, **Camera**, and **GPS**.
  3. Click the blue link at the bottom reading **Remove Properties and Personal Information** (Last checked: November 2026 [VERIFY]).
  4. Select **Create a copy with all possible properties removed** and click **OK**. Windows creates a clean copy in the same folder with GPS and camera tags wiped.
- **On macOS (Finder & Preview):**
  1. Open the image in **Preview** and press `Cmd + I` to open the **Inspector**.
  2. Click the **`i` (More Info)** tab → **GPS** tab, and click **Remove Location Info** at the bottom.

## How to Stop Your Phone Camera From Recording Location in the First Place

If you rarely use the map view in your photo gallery and prefer that your phone never writes GPS coordinates into new photos:

- **On iPhone:** Open **Settings → Privacy & Security → Location Services → Camera** and change access to **Never** (Last checked: November 2026 [VERIFY]).
- **On Android:** Open the **Camera** app, tap the **Settings (gear)** icon, and toggle **Save location / Location tags** to **Off**.

{% include callout.html type="tip" title="Converting HEIC to JPG can preserve or strip EXIF" text="When you convert an iPhone .heic photo to .jpg, standard system converters copy the GPS coordinates over into the new .jpg file. Always verify the final .jpg file's Details tab before emailing it." %}

If you are working with iPhone `.heic` files on Windows or Android, see our guide on [how to convert iPhone HEIC photos to JPG]({{ '/guides/heic-to-jpg-iphone-photos/' | relative_url }}), or read how metadata is also used to [check if a photo is AI-generated]({{ '/guides/check-if-photo-is-ai-generated/' | relative_url }}).

## Common Mistakes to Avoid

- **Assuming cropping a photo removes GPS metadata:** Cropping an image in Windows Photos, macOS Preview, or your phone gallery only changes the pixel dimensions—the original GPS coordinates and timestamp remain intact in the header.
- **Using "Send as Document" on WhatsApp for casual photos of your home:** People often use WhatsApp's *Document* option to avoid compression, forgetting that it sends the raw file complete with home GPS coordinates.

## If It Still Doesn't Work

- **Windows "Remove Properties and Personal Information" fails or leaves some fields behind:** Windows Explorer's built-in stripper only works on standard `.jpg` and `.tiff` files (not `.png` or `.webp`) and sometimes skips custom XMP blocks. Use Method 1 or re-export the image without metadata in an editor like GIMP (**File → Export As → uncheck Save Exif data**).
- **You don't see a GPS tab in macOS Preview's Inspector:** If the **GPS** tab is completely absent next to the **EXIF** and **TIFF** tabs in Preview's Inspector (`Cmd + I`), that specific image does not contain embedded GPS coordinates.

## Privacy and Safety Notes

While removing EXIF metadata deletes hidden GPS coordinates and device serial numbers, remember that **visual clues inside the photo itself**—such as a visible house number, apartment complex sign, school uniform badge, or vehicle license plate—can still reveal your location to anyone who looks closely. Browse more privacy checklists in [Privacy, Accounts & AI]({{ '/category/privacy-ai/' | relative_url }}).

## Frequently Asked Questions

### Do PNG files contain EXIF GPS coordinates like JPG files?
Standard screenshots saved as `.png` do not include camera GPS coordinates, though PNG files can still store creation timestamps, color profile names, and software text chunks (`tEXt` / `iTXt` / `eXIf`).

### Does taking a screenshot of a photo remove its EXIF data?
Yes—taking a screenshot creates a brand-new image containing only the pixels on your screen without the original photo's GPS coordinates or camera shutter metadata, though it reduces image resolution to your screen dimensions.

### Does removing EXIF metadata lower the visual quality of a photo?
No. Stripping EXIF metadata only deletes the text header bytes (usually `4 KB` to `60 KB`) without re-compressing or changing a single pixel of the image itself.

## Next Step

Right-click any recent smartphone photo on your computer (`Properties → Details`) or swipe up on a photo on your phone right now to see the exact map pin and device details stored inside it, then practice toggling **Location Off** in your phone's Share Sheet.

## Sources

1. [CIPA / JEITA — Exchangeable Image File Format for Digital Still Cameras (Exif Version 2.32 / 3.0 Standard)](https://www.cipa.jp/std/documents/download_e.html?DC-008-Translation-2023-E)
2. [Apple Support — Control the location information you share on iPhone](https://support.apple.com/guide/iphone/control-the-location-information-you-share-iph6e59767d2/ios) [VERIFY SOURCE: confirm Apple Support photo location sharing URL]
3. [Google Photos Help — Understand and manage your location settings](https://support.google.com/photos/answer/6153599)
