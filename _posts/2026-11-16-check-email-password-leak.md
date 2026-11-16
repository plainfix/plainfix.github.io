---
layout: post
title: "Has Your Email or Password Been Leaked? How to Check and What to Do Next"
description: "Check if your email or password appeared in a data breach using Have I Been Pwned and built-in password checkups, then secure your accounts in order."
category: online-safety
date: 2026-11-16
author: main
related:
  - passkeys-explained-setup
  - check-fake-shopping-website
  - fake-apk-files-whatsapp
has_promo_links: false
published: true
---

Finding out that your email address or password appeared in a data breach does not automatically mean a hacker is inside your inbox right now—it usually means a third-party app, forum, airline, or store you signed up for years ago had its customer database stolen. You can check whether your email and saved passwords have been exposed in two minutes using trusted breach monitors, and lock down your accounts in a strict four-step priority order so attackers cannot use "credential stuffing" against you.

*Note: This guide provides general cybersecurity and account-protection information, not legal or financial advice.*

{% include quick-answer.html text="1. **Check your email address:** Search your email on **Have I Been Pwned (`haveibeenpwned.com`)** to see which specific companies leaked your address and what data types were exposed.
2. **Check your saved passwords:** Run **Google Password Checkup (`passwords.google.com/checkup`)** or Apple's **Passwords → Security** audit to spot compromised and reused passwords.
3. **Fix in priority order:** Secure your **primary email account first**, replace any **reused passwords** on banking and shopping sites second, enable **passkeys or 2FA** third, and **sign out of all other sessions** fourth." %}

* TOC
{:toc}

## What a Data Breach Notification Actually Means

When a website you used in 2019 or 2024 suffers a security breach, attackers copy its user table—typically containing email addresses, usernames, phone numbers, and hashed (or occasionally plain-text) passwords—and dump that list onto underground forums.

Automated bots then take those leaked email-and-password pairs and test them across hundreds of other websites (Gmail, Amazon, Netflix, banks, and social networks) in an attack called **credential stuffing**.

- **If you used a unique password on that breached site that you never used anywhere else:** Changing the password on that single site resolves the password risk.
- **If you reused that same password on your email, shopping, or bank accounts:** Every account sharing that password is at immediate risk until you change it.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/check-email-password-leak/breach-recovery-priority-order.svg' | relative_url }}" width="760" height="285" alt="Four-step priority diagram: Priority 1 Primary Email, Priority 2 Reused Passwords, Priority 3 Passkeys and 2FA, Priority 4 Revoke Sessions." loading="lazy">
  <figcaption>Always lock down your primary email account before changing passwords on other websites, because your email inbox receives every password-reset link.</figcaption>
</figure>

## Step 1: Check If Your Email or Passwords Were Exposed

Never type your current password into random "dark web scanner" websites you find in search ads. Stick strictly to recognized, audited security tools:

### Method A: Check Have I Been Pwned (Created by Troy Hunt)

1. **Open [haveibeenpwned.com](https://haveibeenpwned.com/)** in your browser.
2. **Type your email address and click "pwned?".** Do **not** type your password on the main email search bar.
3. **Scroll down to read the list of breached services.** For each breach, look at the bold **Compromised data** line (for example, *Email addresses, Passwords, Phone numbers*). This tells you exactly which company leaked the record, what year it happened, and whether passwords were included.
4. **Optional Pwned Passwords check:** If you use the `haveibeenpwned.com/Passwords` page, your browser uses **k-Anonymity** (sending only the first 5 characters of a SHA-1 cryptographic hash) so your full password never leaves your browser in plain text.

### Method B: Run Built-In Password Checkups (Google, Apple, Firefox/Edge)

Modern operating systems and browsers automatically compare your saved logins against known breach databases using privacy-preserving encryption:

1. **Google Password Manager & Dark Web Report:**
   - Open **[passwords.google.com/checkup](https://passwords.google.com/checkup)** (or open Chrome → **Settings → Autofill and passwords → Google Password Manager → Checkup**) (Last checked: November 2026 [VERIFY current Google features]).
   - Review the **Compromised passwords** and **Reused passwords** lists.
   - You can also check **Manage your Google Account → Security → Dark web report** (`myaccount.google.com/dark-web-report`) to see if your name, email, or phone number was found in monitored breach datasets (Last checked: November 2026 [VERIFY current Google features]).
2. **Apple iPhone / iPad / Mac (Passwords App):**
   - Open the built-in **Passwords** app (or **Settings → Passwords → Security Recommendations** on older iOS) (Last checked: November 2026 [VERIFY]).
   - Tap the **Security** card to view accounts flagged as *Appeared in a data leak* or *Reused password*.

{% comment %}OWNER: add your own screenshot of the Google Password Checkup or Apple Passwords Security Recommendations summary screen here{% endcomment %}

## Step 2: Fix Compromised Accounts in Exact Priority Order

When Password Checkup flags 25 old accounts, trying to fix a defunct 2016 gaming forum before securing your Gmail and bank login is backwards. Follow this exact five-step order:

### 1. Secure Your Primary Email Account First
Your main email inbox is the skeleton key to your digital life—anyone with access to your email can click *"Forgot Password"* on almost every other website you use.
- Change your primary email password to a strong, unique passphrase or enable a passkey.
- **Crucial hidden check:** Open your email settings (**Gmail Settings → See all settings → Forwarding and POP/IMAP** or **Filters and Blocked Addresses**) and verify that an attacker did not add a secret rule forwarding your bank or reset emails to an external address.

### 2. Replace Reused Passwords on High-Value Accounts
Go through the **Compromised** and **Reused** lists in your password manager and replace passwords in this order:
1. Banking, UPI, brokerage, and tax portals.
2. Secondary email accounts and cloud storage (Google Drive, iCloud, OneDrive, Dropbox).
3. E-commerce accounts that store saved cards or addresses (Amazon, Flipkart, PayPal).
4. Social media and messaging accounts.

### 3. Enable Passkeys or 2-Step Verification (2FA)
Even if a future breach exposes a password, **2-Step Verification** or a **passkey** stops automated credential-stuffing bots from signing in. Where supported, upgrade your primary accounts to passkeys—follow our step-by-step guide on [how passkeys work and how to set them up]({{ '/guides/passkeys-explained-setup/' | relative_url }}).

### 4. Sign Out of All Other Active Sessions
Changing a password does not always kick out a device that already has an active session cookie:
- **On Google:** Visit `myaccount.google.com/device-activity`, click any unrecognized session, and click **Sign out**.
- **On Microsoft / Apple / Instagram / WhatsApp:** Open **Security → Where you're logged in / Linked devices** and remove any browser or phone you do not recognize.

### 5. Verify Your Account Recovery Phone and Email
Make sure the recovery phone number and recovery email listed inside your primary accounts still belong to you (and are not an old SIM card number you deactivated years ago).

## What Exposed Data Types Mean for Your Risk Level

| Data Exposed in the Breach | What Attackers Can Do With It | What You Need to Do |
| :--- | :--- | :--- |
| **Email address only** | Send targeted spam or phishing emails pretending to be that company | No password change needed unless you reused passwords; watch for phishing emails |
| **Email + Hashed/Plain Password** | Automated "credential stuffing" login attempts on your email, bank, and shopping accounts | Immediately change your password on that site AND on every other site where you used the same password |
| **Phone number + Name** | Targeted WhatsApp scams, fake courier/KYC calls, or SMS phishing | Enable **Silence Unknown Callers** on WhatsApp and never install `.apk` files or share OTPs |
| **Last 4 digits of card + Billing address** | Impersonation calls claiming to be from your bank's fraud department | Never share CVV or OTPs over the phone; call the number on the back of your card to verify |

{% include callout.html type="danger" title="Beware of the 'We Recorded You via Your Webcam' Extortion Email" text="A very common scam email pastes one of your old leaked passwords from a 2018 breach into the subject line and claims a hacker installed spyware on your camera and will release videos unless you send Bitcoin. This is 100% a bluff generated by automated scripts using old breach lists. Change any account still using that old password, delete the email, and never pay." %}

## Common Mistakes to Avoid

- **Changing `Summer2024!` to `Summer2026!`:** Credential-stuffing scripts automatically test number-and-year variations of leaked passwords. Use your browser or password manager to generate completely random 16-character passwords for every site.
- **Clicking the "Reset Password" button inside an unexpected breach warning email:** Phishing emails frequently fake data-breach alerts to steal your current password. Always open a new browser tab and type the service's official web address manually. If someone sends a suspicious `.apk` "security update" on WhatsApp, see our guide on [fake APK files on WhatsApp]({{ '/guides/fake-apk-files-whatsapp/' | relative_url }}).

## If It Still Doesn't Work

- **A breached website no longer exists or its "Delete Account" page is broken:** If you already used a unique password on that defunct website—or you have now changed that password on every active website you still care about—the dead account cannot be used to compromise your active accounts.
- **Someone already changed the recovery email on your hacked account:** Use the platform's official **Account Recovery** workflow from a device and home Wi-Fi network you previously used to sign in, as automated recovery checks recognize familiar device tokens and IP ranges.

## Privacy and Safety Notes

Because your email address and phone number cannot be easily changed every time a company suffers a breach, assume your email address is public knowledge and rely on **unique passwords per site + passkeys/2FA** so an exposed email address gives attackers zero access. Browse more account safety guides in [Online Safety & Scams]({{ '/category/online-safety/' | relative_url }}).

## Frequently Asked Questions

### Is it safe to type my email address into `haveibeenpwned.com`?
Yes. *Have I Been Pwned* is a widely trusted security resource created by security researcher Troy Hunt and used by government cybersecurity agencies and password managers worldwide. Searching an email address does not store or expose your private inbox.

### How did my password leak if I never shared it with anyone?
You did not have to do anything wrong—when an online store, mobile game, or discussion forum you created an account on years ago gets hacked, its entire user table is copied from the company's server.

### Should I delete old accounts I no longer use?
Yes. When Password Checkup reminds you of 30 old shopping or forum accounts you no longer use, logging in to delete the account (or changing its email/password to random gibberish before abandoning it) reduces your future breach footprint.

## Next Step

Open **[passwords.google.com/checkup](https://passwords.google.com/checkup)** (or the **Passwords → Security** tab on your iPhone/Mac) right now, check the **Compromised passwords** count, and replace any reused passwords on your primary email and financial accounts today.

## Sources

1. [Have I Been Pwned — Official Breach Search & Pwned Passwords Service](https://haveibeenpwned.com/)
2. [Google Account Help — Check the strength and security of your saved passwords](https://support.google.com/accounts/answer/9457609)
3. [Apple Support — Find and change compromised passwords on iPhone](https://support.apple.com/guide/iphone/change-weak-or-compromised-passwords-iphd5d8daf56/ios) [VERIFY SOURCE: confirm Apple Support compromised passwords URL]
4. [NIST Special Publication 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html)
