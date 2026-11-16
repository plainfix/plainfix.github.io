---
layout: post
title: "Fake APK Files on WhatsApp: Why \"Wedding Card\" and \"KYC Update\" Apps Are Dangerous"
description: "Learn how fake Wedding Card, Traffic Challan, and Bank KYC APK files sent on WhatsApp steal SMS OTPs on Android, and how to remove them safely."
category: online-safety
date: 2026-11-16
author: main
related:
  - digital-arrest-upi-scam-calls
  - check-email-password-leak
  - check-if-online-tool-uploads-files
has_promo_links: false
published: true
---

A real wedding invitation, electricity bill, traffic challan receipt, or bank notice is always a document or image (`.pdf` or `.jpg`)—**never an `.apk` file**. When a message on WhatsApp or Telegram attaches a file ending in `.apk` (such as `Wedding_Invitation.apk` or `SBI_KYC_Update.apk`), tapping it installs an Android application outside the Google Play Store that is specifically designed to read your incoming SMS one-time passcodes (OTPs) and hijack your phone.

*Note: This guide provides general security and technical cleanup information, not legal or financial advice. If money has been stolen from your bank account, call your bank and the official **1930** cybercrime helpline immediately.*

{% include quick-answer.html text="1. **Spot the `.apk` label immediately:** In WhatsApp, check the tiny file format tag in the bottom-left corner of the attachment box—if it says **`APK`**, never download or open it.
2. **Even if a friend sent it, do not tap it:** Once malware infects one person's WhatsApp, it automatically forwards the same `Wedding_Card.apk` file to all their contacts and family groups.
3. **If you already installed it:** Turn on **Airplane Mode** immediately so the attacker cannot receive your OTPs over the internet, reboot into **Safe Mode**, uninstall the app, and call your bank and **1930**." %}

* TOC
{:toc}

## Why `.apk` Files Sent in Chat Apps Are So Dangerous

An **APK** (*Android Package Kit*) is not a picture, video, or PDF document—it is the raw installation file for an Android program, equivalent to an `.exe` installer on Windows.

Apps listed on the official **Google Play Store** go through automated malware scanning, developer identity verification, and strict limits on which apps are allowed to read your text messages. By sending an `.apk` file directly inside a WhatsApp chat ("sideloading"), scammers bypass store review and trick you into manually granting dangerous system permissions.

## Four Common Lures Scammers Use to Disguise Malicious APK Files

Scammers name the `.apk` file after something urgent or socially awkward to ignore, and often add a fake `.pdf.apk` double extension so a quick glance only sees `.pdf`:

| Scam Lure Theme | Typical Fake Filename on WhatsApp | The Social Engineering Trick |
| :--- | :--- | :--- |
| **Digital Wedding / Event Invitations** | `Wedding_Invitation_Card.apk` or `Shadi_Card_2026.apk` | Sent from a hacked acquaintance's WhatsApp number with a message like *"You and your family are cordially invited, open card for venue"* |
| **Traffic Challan / e-Parivahan Notice** | `mParivahan_Challan_Receipt.apk` or `RTO_Fine.apk` | Claims your vehicle was caught on a speed camera and tells you to open the file to view the photo proof |
| **Bank PAN / KYC / Reward Points Expiry** | `HDFC_KYC_Update.apk`, `SBI_YONO_Reward.apk`, `PM_Kisan.apk` | Threatens that your bank account will be blocked tonight unless you update PAN/KYC inside the attached app |
| **Electricity / Gas Bill Disconnection** | `Electricity_Bill_Receipt.apk` | Follows a fake call from an "electricity officer" asking you to pay Rs 10 inside their custom app to prevent power cutoff |

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/fake-apk-files-whatsapp/whatsapp-fake-apk-cleanup.svg' | relative_url }}" width="760" height="295" alt="Diagram comparing common malicious WhatsApp APK filenames on the left with the 5-step emergency cleanup sequence on the right." loading="lazy">
  <figcaption>A genuine PDF shows a red or gray 'PDF' badge in WhatsApp—any attachment showing 'APK' is an executable program.</figcaption>
</figure>

## What Happens Behind the Scenes: The Three Permissions Malware Abuses

Once a victim taps `Install` on a fraudulent APK and clicks `"Allow"` on the pop-up prompts, the malware immediately targets three sensitive Android permissions:

1. **`READ_SMS` and `RECEIVE_SMS` (SMS & OTP Interception):** Every incoming text message—including bank login OTPs, net-banking beneficiary confirmation codes, and UPI registration SMS messages—is silently read and forwarded in real time to the scammer's command server or Telegram bot.
2. **Notification Listener / Call Forwarding (`*21*...#`):** Some APK trojans dial USSD call/SMS forwarding codes or read notification banners from banking and email apps.
3. **Android Accessibility Service & Device Admin:** If granted **Accessibility** control, the malicious app can tap buttons on your screen automatically, hide its own icon from your app drawer, prevent you from clicking the normal *Uninstall* button, and forward the same `.apk` file to all your WhatsApp groups.

{% comment %}OWNER: add your own screenshot of Android's 'Install unknown apps' toggle set to 'Not allowed' for WhatsApp and Google Play Protect enabled here{% endcomment %}

## How Built-In Android Protections Block Malicious APKs (Keep These Enabled)

Modern Android versions (Android 13, 14, 15, and 16) include two strong barriers that stop sideloaded APK malware as long as you do not manually override them:

1. **"Install unknown apps" is set to Not Allowed by default:** Open **Settings → Security & privacy → More security & privacy → Install unknown apps** (or **Settings → Apps → Special app access → Install unknown apps**) (Last checked: November 2026 [VERIFY]). Make sure **WhatsApp**, **Telegram**, **Chrome**, and **Files** are all set to **Not allowed**.
2. **Google Play Protect real-time scanning:** Open the **Google Play Store app → tap your Profile icon → Play Protect → tap the Settings gear icon** and ensure both **Scan apps with Play Protect** and **Improve harmful app detection** are turned **ON** (Last checked: November 2026 [VERIFY]). In India and several other regions, Google Play Protect also automatically blocks sideloaded apps that request sensitive SMS, Notification, or Accessibility permissions during installation.
3. **Android Restricted Settings for sideloaded apps:** On Android 13 and newer, the operating system greys out Accessibility and Notification access for sideloaded APKs unless a user digs into hidden app menus to unblock them—never follow a caller's instructions to bypass Android's *"Restricted setting"* warning.

{% include callout.html type="danger" title="Never turn off Google Play Protect on a caller's advice" text="Scammers posing as bank KYC or electricity staff will tell you on the phone: 'Google Play Protect is showing a technical warning—tap Install Anyway or turn off Play Protect for two minutes.' That warning is your last line of defense. Hang up immediately." %}

## Emergency Step-by-Step Cleanup If You Already Installed a Fake APK

If you or a family member accidentally tapped and installed a suspicious `.apk` file, act in this exact order:

1. **Turn on Airplane Mode (and turn off Wi-Fi) immediately:** Swipe down your quick settings shade and tap **Airplane Mode** (or pull out your physical SIM tray). Cutting off internet and mobile data immediately stops the malware from sending your incoming SMS OTPs to the attacker's server.
2. **Uninstall the malicious app from Settings → Apps:**
   - Open **Settings → Apps → See all apps** and look at the **Recently opened** list or scroll to the very bottom of your alphabetical app list (many trojans have a blank name and a transparent icon so they hide at the bottom).
   - If the app blocks you from tapping **Uninstall**, **reboot your phone into Android Safe Mode** (press and hold the physical Power button, then **long-press the on-screen "Power off" or "Restart" icon** until *"Reboot to safe mode"* appears and tap **OK**). In Safe Mode, all third-party apps are frozen so you can uninstall the fake APK cleanly.
3. **Check Device Admin and Accessibility permissions:**
   - Open **Settings → Security & privacy → More security & privacy → Device admin apps** (Last checked: November 2026 [VERIFY]) and revoke admin status from any unrecognized app before uninstalling.
   - Open **Settings → Accessibility** and ensure no unknown downloaded service is turned on.
4. **Delete the `.apk` file from your phone storage and WhatsApp chat:** Open **Files by Google → Downloads** (and `Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents`), delete the `.apk` installer file, and delete the message for everyone if your WhatsApp forwarded it to groups.
5. **Check for unauthorized Call Forwarding:** Once your SIM is back on, open your Phone dialer and dial **`*#21#`** (Last checked: November 2026 [VERIFY]). If it shows calls or SMS are being forwarded to an unknown number, dial **`##002#`** immediately to erase all call forwarding rules.
6. **Change your passwords and alert your bank from a SEPARATE clean device:** Using another phone or laptop, change your Google Account and email passwords, check **WhatsApp → Linked devices** to log out any unknown web sessions, and call your bank's official fraud helpline plus **1930** (or file at **[cybercrime.gov.in](https://cybercrime.gov.in/)**) if any financial details or OTPs were exposed. For the full first-hour banking checklist, read our guide on [digital arrest and UPI scam calls in India]({{ '/guides/digital-arrest-upi-scam-calls/' | relative_url }}).

## Common Mistakes to Avoid

- **Looking only at the filename and ignoring the `.apk` badge:** A scammer can name a file `Invitation_Card.pdf.apk`. WhatsApp always displays the **real file extension (`APK`)** in capital letters at the bottom of the attachment bubble.
- **Opening the file just to see who the wedding card is from:** Unlike a PDF, opening an `.apk` launches the Android package installer. If a friend appears to send you an `.apk`, call them on a regular voice call to warn them that their WhatsApp account or phone has been compromised.

## If It Still Doesn't Work

- **You uninstalled the suspicious app, but your phone still acts sluggish or shows pop-ups:** Some droppers install a second hidden background package. Back up only your personal photos and contacts, then perform a full **Factory Data Reset** (**Settings → System → Reset options → Erase all data**) rather than risking hidden banking spyware.
- **Your WhatsApp account was hijacked to send the APK to your contacts:** Open WhatsApp, verify your phone number again, enable **Settings → Account → Two-step verification** (6-digit PIN), and check **Linked devices** to remove any unauthorized browser sessions.

## Privacy and Safety Notes

To stop malicious files from downloading onto your phone storage automatically while you sleep, open **WhatsApp → Settings → Storage and data** and uncheck **Documents** under both **When using mobile data** and **When connected on Wi-Fi**. Browse more mobile protection guides in [Online Safety & Scams]({{ '/category/online-safety/' | relative_url }}).

## Frequently Asked Questions

### Can an `.apk` file infect an iPhone (iOS)?
No. `.apk` files are executable packages built exclusively for the Android operating system and cannot run on iOS. However, iPhone users should still never click phishing links inside fake KYC or challan messages.

### Does downloading an `.apk` in WhatsApp infect my phone if I did not tap "Install"?
Simply downloading the `.apk` file into your WhatsApp folder without tapping it and completing the Android installation prompt does **not** run the app. Delete the message from the chat and delete the file from your **Downloads** folder.

### How can I tell a real PDF wedding card or challan from a fake one?
In WhatsApp, a real PDF displays a document badge reading **`PDF`** along with the page count (for example, `2 pages • PDF`). A real Traffic Challan can always be verified independently by typing your vehicle number directly on the official government portal (**[echallan.parivahan.gov.in](https://echallan.parivahan.gov.in/)**) rather than opening WhatsApp files.

## Next Step

Open **WhatsApp → Settings → Storage and data** right now and turn **Off** automatic download for **Documents** on both Mobile Data and Wi-Fi, then check **Android Settings → Install unknown apps** to confirm WhatsApp is set to **Not allowed**.

## Sources

1. [Google Android Help — Protect your device from harmful apps with Google Play Protect](https://support.google.com/android/answer/2812853)
2. [CERT-In (Indian Computer Emergency Response Team) — Advisory on Android Malware and Malicious APK Lures](https://www.cert-in.org.in/) [VERIFY SOURCE: confirm specific CERT-In Android APK advisory reference]
3. [National Cyber Crime Reporting Portal (Ministry of Home Affairs, Government of India) — cybercrime.gov.in](https://cybercrime.gov.in/)
4. [Ministry of Road Transport and Highways (Government of India) — Official eChallan Parivahan Portal](https://echallan.parivahan.gov.in/)
