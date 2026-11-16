---
layout: post
title: "Passkeys Explained: How to Set Them Up and What Happens If You Lose Your Phone"
description: "Understand how passkeys replace passwords with cryptographic key pairs, how to set them up on Google and Apple devices, and how account recovery works."
category: privacy-ai
date: 2026-11-16
author: main
related:
  - check-email-password-leak
  - ai-chatbot-prompts-for-work
has_promo_links: false
published: true
---

Passwords fail for two simple reasons: humans reuse them across dozens of sites, and scammers can trick people into typing both their password and an SMS one-time passcode into a convincing fake website. **Passkeys** solve both problems at once by replacing memorised text with a cryptographic key pair unlocked by your phone or laptop's fingerprint, face scan, or screen PIN—and if you lose your phone, your passkeys stay safely backed up in your encrypted cloud keychain rather than disappearing forever.

{% include quick-answer.html text="1. **How a passkey works:** Your device creates a two-part cryptographic key. The website gets only the lock (**Public Key**); your phone keeps the key (**Private Key**), and your fingerprint or face scan never leaves your device.
2. **Why it is safer and faster:** A passkey is mathematically bound to the real website domain, so it refuses to work on a fake phishing page.
3. **Where it is backed up:** Passkeys sync end-to-end encrypted across your devices via **Google Password Manager**, **Apple iCloud Keychain**, or a third-party password manager.
4. **If you lose your phone:** Sign in to your new phone with your Google or Apple account (or use a second logged-in laptop/recovery key) and all your passkeys restore automatically." %}

* TOC
{:toc}

## How Passkeys Work in Plain Words (The Key-Pair Concept)

When you create a traditional password, both you and the website store the same secret string. If hackers breach the website's database or trick you with a look-alike login page, they get your secret.

A **passkey** (built on the open **FIDO2 / WebAuthn** standard developed by the FIDO Alliance and W3C) never sends a shared secret across the internet. Instead, when you click **"Create a passkey,"** your phone or computer generates two mathematically linked keys:

1. **The Public Key (stored on the website's server):** Think of this as a padlock. Even if hackers steal the website's entire database of public keys, a public key cannot be used to sign in.
2. **The Private Key (stored safely on your device):** Think of this as the physical key that opens that padlock. It stays inside your device's encrypted credential manager.

When you sign in, the website sends a random one-time mathematical challenge. You unlock your phone with Face ID, Touch ID, Windows Hello, or your screen PIN; your device uses its **Private Key** to sign that challenge locally and sends back only the signed proof. **Your fingerprint or face scan never leaves your phone.**

Better still, passkeys are **faster and more reliable** than passwords: according to the **FIDO Alliance Passkey Index (October 2026)**, sign-in success rates reach **93% with passkeys** compared with **78% for passwords and traditional MFA** such as SMS OTPs ([FIDO Alliance](https://fidoalliance.org/)).

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/passkeys-explained-setup/passkey-public-private-key-flow.svg' | relative_url }}" width="760" height="290" alt="Diagram showing your phone or laptop holding the Private Key unlocked locally by Face ID or fingerprint, sending only a signed proof to the website server holding the Public Key." loading="lazy">
  <figcaption>Because your browser checks the exact domain name before unlocking a passkey, a fake phishing website cannot trick a passkey into signing in.</figcaption>
</figure>

## Synced Passkeys vs Device-Bound Passkeys

Not all passkeys live on a single piece of hardware. Most everyday users rely on **synced passkeys**:

| Passkey Ecosystem | How It Syncs Across Your Devices | How Encryption Works |
| :--- | :--- | :--- |
| **Google Password Manager** (Android & Chrome) | Syncs across Android phones and Chrome browsers signed in to your Google Account | End-to-end encrypted using your Android screen lock PIN/pattern or Google Password Manager PIN |
| **Apple iCloud Keychain / Passwords App** (iPhone, iPad, Mac) | Syncs across Apple devices signed in to the same Apple Account | End-to-end encrypted in iCloud Keychain; requires 2FA and device passcode |
| **Cross-Platform Password Managers** (1Password, Bitwarden, Dashlane) | Works across Windows, macOS, Linux, Android, and iOS simultaneously | Encrypted inside your password manager vault |
| **Hardware Security Keys** (YubiKey, Titan Key) | **Device-bound** (does not sync to the cloud) | Private key stays permanently inside the physical USB/NFC key |

## Step-by-Step: How to Set Up a Passkey on Google and GitHub / Amazon

### 1. Set Up a Passkey on Your Google Account

1. **Open [myaccount.google.com/signinoptions/passkeys](https://myaccount.google.com/signinoptions/passkeys)** in Chrome, Safari, or Edge on your phone or computer (or go to **Manage your Google Account → Security → How you sign in to Google → Passkeys and security keys**) (Last checked: November 2026 [VERIFY menus]).
2. **Verify your identity** when prompted, then click **Create a passkey**.
3. **Confirm with your device's screen lock** (fingerprint, Face ID, Touch ID, Windows Hello, or PIN). You will see a confirmation message that your passkey is now active and **"Skip password when possible"** is enabled for your account.

### 2. Set Up a Passkey on Amazon (or GitHub / WhatsApp / PayPal)

1. **On Amazon:** Open **Account → Login & Security** in the Amazon app or website, locate the **Passkey** row, and tap **Set up / Edit → Set up passkey** (Last checked: November 2026 [VERIFY menus]). Confirm with your phone's biometric prompt.
2. **On GitHub (for developers):** Open **Settings → Password and authentication → Passkeys** and click **Add a passkey** (Last checked: November 2026 [VERIFY menus]).
3. **Signing in on a different computer (Cross-Device QR Sign-In):** If you sit down at a Windows PC when your passkey is stored on your iPhone (or vice versa), choose **Sign in with a passkey on another device**. The computer screen displays a one-time Bluetooth/FIDO QR code; scan it with your phone's camera and approve with your fingerprint to sign in on the PC without typing a password.

{% comment %}OWNER: add your own screenshot of the Google Account Passkeys setup screen or browser passkey prompt here{% endcomment %}

## What Happens If You Lose Your Phone (Or It Breaks)?

The number-one fear stopping people from enabling passkeys is: *"If my phone is stolen or drops in water, am I locked out of my accounts forever?"*

Here is what actually happens when your phone is lost or stolen:

1. **The thief cannot use your passkeys without your face, fingerprint, or screen lock PIN:** Even if someone steals your phone, every passkey prompt requires unlocking the device first.
2. **Your passkeys are NOT trapped inside that one broken phone:** Because Google Password Manager and Apple iCloud Keychain sync passkeys in the cloud with end-to-end encryption, buying a replacement phone and signing in to your Google or Apple account—then entering your **previous phone's screen lock PIN/passcode** once—restores all your synced passkeys to the new phone.
3. **You can sign in immediately from a backup device:** If you also have a laptop, iPad, or old tablet signed in to your Google/Apple account (or a cross-platform password manager), you can log in from that second device right away and revoke the lost phone under **Manage Devices**.
4. **Account recovery fallback still exists:** Most websites keep your password, authenticator app, or backup recovery codes active alongside your passkey so you can verify your identity while replacing a lost device.

{% include callout.html type="tip" title="Always keep at least two recovery paths for your root account" text="Your Google Account or Apple Account holds your synced passkeys. Make sure you have a recovery phone number, a secondary recovery email address, or a printed set of one-time 8-digit Backup Codes stored safely at home so you can always get back into your primary cloud account." %}

## When You Should Still Keep a Strong Password

While passkeys are the gold standard for everyday web logins, you still need a strong, unique password or PIN in three places:

1. **Your device screen lock PIN / passcode:** A weak `1234` phone PIN weakens every passkey stored on that phone. Use at least a 6-digit non-obvious PIN or alphanumeric passcode.
2. **Your primary Google, Apple, or Password Manager master account:** Keep a strong master password and 2-step verification on the vault that syncs your passkeys.
3. **Legacy websites that have not added passkey support yet:** Use your password manager to generate unique 16-character passwords for older sites.

## Common Mistakes to Avoid

- **Creating a passkey on a public or shared computer:** Never click *"Create a passkey"* on a library, hotel, or internet-cafe PC, because that registers the public PC as a trusted key for your account. Instead, choose *"Use a phone or tablet"* to scan the temporary QR code without saving anything on the shared PC.
- **Forgetting your old phone's screen lock PIN:** Google Password Manager uses your Android screen lock PIN to decrypt your cloud-synced passkeys on a new phone. Never set a screen lock PIN you might forget.

## If It Still Doesn't Work

- **Cross-device QR sign-in gets stuck on "Connecting to your phone":** Cross-device passkey login uses **Bluetooth** purely as a proximity check to verify that your phone is physically sitting next to the computer (so a remote scammer cannot trick you into scanning their login QR code from another city). Turn **Bluetooth ON** on both your phone and your laptop and try again.
- **Browser asks for a USB security key instead of your phone's passkey:** Click **"Use a different device"** or **"More choices"** in the browser pop-up to select your phone, Windows Hello, or iCloud Keychain.

## Privacy and Safety Notes

Contrary to a common myth, websites **never** receive your fingerprint, face scan, or screen PIN when you use a passkey. Your biometric check happens 100% locally inside your device's secure hardware chip (Secure Enclave or Titan M2), and the website receives only a cryptographic signature. Browse more account protection guides in [Privacy, Accounts & AI]({{ '/category/privacy-ai/' | relative_url }}).

## Frequently Asked Questions

### Can a website track me across other websites using my passkey?
No. Your device generates a **brand-new, unique key pair for every single website domain**. The passkey created for `google.com` shares zero cryptographic identifiers with the passkey created for `amazon.com`.

### If I use an Android phone and a MacBook, how do I share passkeys between them?
You can either sign in on the MacBook by scanning the on-screen Bluetooth QR code with your Android phone, use Google Chrome on macOS synced to Google Password Manager, or store your passkeys in a cross-platform password manager app that runs on both Android and macOS.

### Does creating a passkey automatically delete my old password?
On most services (including Google, Amazon, and GitHub), creating a passkey makes the passkey your default sign-in method while keeping your old password active in the background as a fallback unless you explicitly enable a "passwordless-only" setting.

## Next Step

Open **[myaccount.google.com/signinoptions/passkeys](https://myaccount.google.com/signinoptions/passkeys)** on your primary phone right now, create your Google Account passkey, and verify that your recovery email and backup device are up to date under **Security**.

## Sources

1. [FIDO Alliance — Passkey Index (October 2026) & What Are Passkeys?](https://fidoalliance.org/passkeys/)
2. [W3C Recommendation — Web Authentication: An API for accessing Public Key Credentials (WebAuthn Level 2/3)](https://www.w3.org/TR/webauthn-2/)
3. [Google Account Help — Sign in with a passkey instead of a password](https://support.google.com/accounts/answer/13548313)
4. [Apple Support — Use passkeys to sign in to apps and websites on iPhone](https://support.apple.com/en-us/102195) [VERIFY SOURCE: confirm Apple Support passkeys article URL]
