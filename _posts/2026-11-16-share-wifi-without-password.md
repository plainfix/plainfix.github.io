---
layout: post
title: "How to Share Your Wi-Fi Without Telling the Password"
description: "Share your home or office Wi-Fi without reading out the password using built-in Android and iPhone features or a printable Wi-Fi QR code card."
category: everyday-tech
date: 2026-11-16
author: main
related:
  - qr-code-for-shop-business
  - check-qr-code-before-scanning
  - mbps-vs-mbs-internet-speed
has_promo_links: true
published: true
---

Reading out a 16-character router password full of uppercase letters, symbols, and numbers to every guest who visits your home or office is slow and error-prone. You can connect visitors in two seconds without speaking the password aloud by using the built-in Wi-Fi QR screen on Android, Apple's proximity password sharing or Passwords app QR code on iPhone, or a printed guest Wi-Fi QR card.

{% include quick-answer.html text="1. **Android to any phone:** Open **Settings → Network & internet → Internet → tap the gear icon next to your Wi-Fi → Share**, verify with your fingerprint/PIN, and let your guest scan the on-screen QR code.
2. **iPhone to iPhone/Mac:** Unlock your connected iPhone and hold it near the guest's Apple device when they tap your Wi-Fi network, or show the QR code inside the iOS **Passwords** app.
3. **For guests on all devices (or a café/office wall):** Generate and print a standard `WIFI:T:WPA;...` QR code card—ideally linked to your router's **Guest Network** rather than your main private network." %}

* TOC
{:toc}

## Method 1: Share Wi-Fi From an Android Phone Using the Built-In QR Screen

Every phone running Android 10 or newer can generate a scannable Wi-Fi QR code directly from its network settings—and both Android phones and iPhones can scan that screen with their regular Camera app:

1. **Open the Settings app on your Android phone** while connected to the Wi-Fi network you want to share.
2. **Tap Network & internet → Internet** (on Samsung Galaxy phones, tap **Connections → Wi-Fi**) (Last checked: November 2026 [VERIFY]).
3. **Tap the gear icon (Settings) next to your currently connected Wi-Fi network name.** You will see the network details screen with a **Share** (or **QR code**) button.
4. **Tap Share and confirm your fingerprint, face unlock, or screen PIN.** A large black-and-white QR code will appear on your screen.
5. **Ask your guest to open their phone's built-in Camera app** and point it at your screen. A **"Join Network"** prompt will appear on their phone; when they tap it, their device connects immediately without typing a single character.

{% include callout.html type="note" title="Android shows the password text underneath the QR code" text="On many Android phones, the plain-text Wi-Fi password is displayed in small font right below the on-screen QR code. If you do not want the guest to read the password text, cover the bottom line with your thumb while they scan, or use a separate Guest Wi-Fi network." %}

## Method 2: Share Wi-Fi From an iPhone or iPad (Proximity Share & Built-In QR Code)

Apple provides two built-in ways to share Wi-Fi depending on whether your guest is using an Apple device or an Android/Windows device.

### Option A: iPhone-to-iPhone / iPad / Mac Proximity Sharing

For automatic pop-up sharing between two Apple devices, three requirements must be met (Last checked: November 2026 [VERIFY]):

1. **Ensure both devices have Wi-Fi and Bluetooth turned on** (and Personal Hotspot turned off).
2. **Save each other's email or phone number in Contacts**, and make sure you are signed in to iCloud on your device.
3. **Unlock your connected iPhone and hold it within 30 cm of the guest's iPhone.** Ask the guest to go to **Settings → Wi-Fi** and tap your network name.
4. **Tap "Share Password" on the card that pops up** on the bottom half of your iPhone screen, then tap **Done**. The guest's password field fills in invisibly and connects.

### Option B: Show a Scannable QR Code in the Apple Passwords App (iOS 18 and Newer)

If your guest is using an Android phone or is not in your Contacts, modern iPhones can also display a scannable QR code natively:

1. **Open the built-in Passwords app on your iPhone** and unlock it with Face ID or Touch ID (Last checked: November 2026 [VERIFY]).
2. **Tap the "Wi-Fi" category card** and select the Wi-Fi network you want to share.
3. **Tap "Show Network QR Code."** Your iPhone displays a clean QR code on screen without showing the password characters—any Android phone or iPhone can scan it with its camera to join.

{% comment %}OWNER: add your own screenshot of the Android Wi-Fi Share QR screen or iOS Passwords app Network QR Code screen here{% endcomment %}

## Method 3: Create a Printable Wi-Fi QR Card for Your Home, Office, or Homestay

When you host frequent visitors, clients, or homestay guests, unlocking your phone every time someone arrives gets tedious. You can create a printed Wi-Fi card that works on every phone.

### How the Standard Wi-Fi QR Format Works Under the Hood

Wi-Fi QR codes are not proprietary links—they use a simple, universal plain-text schema originally standardized by the ZXing project and recognized natively by iOS and Android cameras:

```text
WIFI:T:WPA;S:MyNetworkName;P:MyPassword123;H:false;;
```

- `T:` defines the authentication type (`WPA` covers both WPA2 and WPA3; `WEP` is legacy; `nopass` is for open networks).
- `S:` holds the exact, case-sensitive network name (**SSID**).
- `P:` holds the network password. Special characters inside the SSID or password (`\`, `;`, `,`, `:`, `"`) must be escaped with a leading backslash (`\`).
- `H:` indicates whether the network SSID is hidden (`true` or `false`).

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/share-wifi-without-password/wifi-qr-code-format.svg' | relative_url }}" width="760" height="285" alt="Diagram explaining the WIFI:T:WPA;S:NetworkName;P:Password;H:false;; QR code format and its three fields." loading="lazy">
  <figcaption>Because iOS and Android cameras parse this WIFI: string locally, scanning a Wi-Fi QR code never opens a web browser.</figcaption>
</figure>

To generate a clean, ready-to-print code without manually escaping special characters in the `WIFI:` string, you can [create a printable Wi-Fi QR code in PNG or SVG format](https://qrizeo.com/wifi-qr-code-generator) by entering your SSID, password, and WPA/WEP/open encryption type.

{% include disclosure.html site="QRizeo" %}

## Important Security Reality: A Wi-Fi QR Code Stores the Password in Plain Text

Many people assume a Wi-Fi QR code encrypts the password so nobody can ever see the characters. **That is a misconception.**

- Anyone who scans a Wi-Fi QR code using a generic text-reading QR scanner—or looks at their own phone's **Saved Networks → View Password** menu after connecting—can read the exact plain-text password stored inside `P:...;`.
- Furthermore, because a Wi-Fi QR code is **static**, the SSID and password are baked directly into the black-and-white squares. **If you change your Wi-Fi password on the router, your old printed QR code stops working immediately** and you must generate and print a new one.

## Why You Should Always Use a "Guest Network" for Shared Wi-Fi

Instead of sharing your primary home or office Wi-Fi network—where your work laptop, smart TV, NAS drive, and wireless printer live—turn on your router's **Guest Network** feature:

| Feature | Main Home / Office Wi-Fi | Dedicated Guest Wi-Fi Network |
| :--- | :--- | :--- |
| **Internet Access** | Full access | Full access (can optionally cap bandwidth) |
| **Access to Local Devices (Printers, PCs, Smart TVs)** | Visible to everyone on the same network | **Blocked** via Client/AP Isolation |
| **Password Rotation** | Changing the password disconnects all your smart home devices | You can change the guest password anytime without touching your own devices |
| **Best Sharing Method** | Family & personal devices only | Ideal for on-screen and printed Wi-Fi QR codes |

## Common Mistakes to Avoid

- **Typing the wrong uppercase or lowercase letter in the SSID (`S:`):** Wi-Fi network names are strictly case-sensitive (`Home_5G` is treated as a completely different network from `home_5g`).
- **Selecting `WEP` instead of `WPA/WPA2`:** Almost every modern router uses WPA2 or WPA3, which uses the `T:WPA` tag in a QR code. Choosing `WEP` causes phones to fail to connect.
- **Scanning untrusted "Free Wi-Fi" QR stickers in public places:** Before scanning a public QR code, make sure the camera preview says **"Join Network"** rather than opening a suspicious website URL. See our guide on how to [check a QR code before you scan or pay]({{ '/guides/check-qr-code-before-scanning/' | relative_url }}).

## If It Still Doesn't Work

- **Apple proximity sharing pop-up never appears:** Lock and unlock both iPhones, make sure both users have each other's Apple Account email address saved in the **Contacts** app, and toggle Bluetooth off and back on. If it still fails, use the QR code inside the iOS **Passwords** app instead.
- **Guest scans the QR code, taps "Join," and gets "Unable to join network":** Check whether your router has **MAC Address Filtering** enabled, or whether the QR code is for a **5 GHz-only** band while the guest is standing too far from the router.

## Privacy and Safety Notes

When guests connect to your internet connection, their traffic goes out through your public IP address. Enabling **Guest Network** with **Client Isolation** in your router's admin panel keeps your personal computers and files isolated from visitor phones. Find more connectivity guides in [Phone, Google & Internet Fixes]({{ '/category/everyday-tech/' | relative_url }}).

## Frequently Asked Questions

### Can a guest see my Wi-Fi password after connecting via a QR code?
Yes. Once a phone connects to a Wi-Fi network, both Android (**Saved networks → Share**) and iOS (**Settings → Wi-Fi → tap `i` → Password**) allow the device owner to view the saved password using their own fingerprint or Face ID. That is why sharing a **Guest Network** is the safest practice.

### Do I need an internet connection to scan a Wi-Fi QR code?
No. A Wi-Fi QR code encodes the network name and password directly inside the squares (`WIFI:T:WPA;S:...;P:...;;`). Your phone's camera reads those credentials offline and hands them directly to your Wi-Fi chip.

### Will my printed Wi-Fi QR code still work if I change my router password?
No. Because the password is written directly into the QR pattern, changing your router's Wi-Fi password invalidates the old code. You will need to create and print a fresh QR code with the new password.

## Next Step

Log in to your Wi-Fi router's app or web panel right now to enable the **Guest Network** with its own separate password, then use your phone's built-in QR screen or a printed QR card exclusively for that guest network.

## Sources

1. [Google Android Help — Connect to Wi-Fi networks on your Android device (Share via QR)](https://support.google.com/android/answer/9075847)
2. [Apple Support — Share your Wi-Fi password from your iPhone or iPad](https://support.apple.com/en-us/102635) [VERIFY SOURCE: confirm Apple Support article ID for Wi-Fi password sharing]
3. [ZXing Project Wiki — Barcode Contents (WIFI: Network config specification)](https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11)
