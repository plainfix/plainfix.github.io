---
layout: post
title: "Google Storage Full? What's Really Using Your 15 GB and How to Free It"
description: "Find what is filling your shared 15 GB Google storage across Gmail, Drive, and Photos, and clear gigabytes fast using search filters and storage manager."
category: everyday-tech
date: 2026-11-16
author: main
related:
  - phone-storage-full-cleanup
  - compress-pdf-under-size-limit
  - heic-to-jpg-iphone-photos
has_promo_links: false
published: true
---

Seeing a red *"Account storage is full"* banner inside Gmail when you barely have any emails left is confusing until you realize that Google shares a single free **15 GB** quota across **Google Photos**, **Google Drive**, and **Gmail** combined. You can reclaim several gigabytes in under 15 minutes without paying for a subscription by sorting Google Drive by file weight, removing auto-backed-up phone videos from Google Photos, using Gmail size search operators, and emptying all three separate Trash bins.

{% include quick-answer.html text="1. **Check the real culprit first:** Open `one.google.com/storage` to see the exact GB breakdown across **Photos**, **Drive**, and **Gmail**.
2. **Clear large Photos videos:** Delete unwanted screen recordings and large videos in **Google Photos → Storage**, then empty the Photos Trash.
3. **Sort Drive by file weight:** Visit `drive.google.com/drive/quota` to delete multi-hundred-megabyte files from biggest to smallest.
4. **Search Gmail by size:** Type `larger:10M` in the Gmail search bar, delete bulky old attachments, and empty **Trash** in Photos, Drive, and Gmail." %}

* TOC
{:toc}

## Why Your 15 GB Fills Up Even When Gmail Looks Clean

Every free personal Google Account includes **15 GB of cloud storage**, and that pool is shared across three services plus device backups (Last checked: November 2026 [VERIFY what counts]):

- **Google Photos:** Every photo and video backed up from your Android phone or iPhone since June 2021 counts toward your 15 GB. Five minutes of 4K phone video can easily consume `1.5 GB` to `2 GB`—the same space as 15,000 plain-text emails.
- **Google Drive:** Uploaded PDFs, ZIP archives, video recordings, WhatsApp chat backups (on Android) (Last checked: November 2026 [VERIFY]), and Google Docs/Sheets/Slides edits count toward your 15 GB.
- **Gmail:** Every email message and attachment across your **Inbox**, **Sent**, **Archive (All Mail)**, **Spam**, and **Trash** folders counts toward the same 15 GB pool.

<figure class="article-diagram">
  <img src="{{ '/assets/images/articles/google-storage-full-fix/google-15gb-shared-storage.svg' | relative_url }}" width="760" height="290" alt="Diagram showing the single 15 GB Google storage pool split across Google Photos, Google Drive, and Gmail plus the three separate Trash folders." loading="lazy">
  <figcaption>Deleting 500 text emails frees a few megabytes; deleting five unwanted phone videos in Google Photos often frees several gigabytes.</figcaption>
</figure>

## What Happens When Your Google Account Exceeds 15 GB

Going over your 15 GB quota does not immediately delete your account, but it triggers painful restrictions (Last checked: November 2026 [VERIFY]):

1. **Gmail stops sending and receiving emails:** Incoming emails sent to your address are bounced back to the sender with a *"mailbox is full"* error, meaning you can miss bank statements, flight tickets, or verification codes.
2. **Google Photos stops backing up new photos and videos** from your phone.
3. **Google Drive blocks new file uploads** and prevents you from creating or editing Google Docs, Sheets, or Slides.
4. **Long-term over-quota policy:** If your account remains over its storage limit or inactive for two years (24 months), Google may delete your content across Gmail, Drive, and Photos after sending advance warning notices (Last checked: November 2026 [VERIFY]).

## Step 1: Audit Your Exact Usage in Google One Storage Manager

Before deleting files at random, see which of the three services is actually using your gigabytes:

1. **Open [one.google.com/storage](https://one.google.com/storage)** in your browser while signed in to your Google Account (or tap your profile picture in Gmail/Photos and tap **Storage**).
2. **Look at the colored bar** under your total GB count. You will immediately see how many gigabytes belong to **Google Photos**, **Google Drive**, and **Gmail** (Last checked: November 2026 [VERIFY]).
3. **Scroll down to "Clean up space"** to review items sitting in Trash/Spam alongside categorized lists of **Large photos & videos** and **Large Drive files**.

{% comment %}OWNER: add your own screenshot of the Google One Storage breakdown bar and Clean Up Space cards here{% endcomment %}

## Step 2: Free Up Gigabytes in Google Photos (Usually the Biggest Culprit)

If Google Photos is using 8 GB to 14 GB of your space, start with videos and blurry captures rather than scrolling through years of photos one by one:

1. **Open [photos.google.com/quotamanagement](https://photos.google.com/quotamanagement)** on a computer, or open the **Google Photos app → tap your Profile icon → Account storage → Manage storage** on your phone (Last checked: November 2026 [VERIFY]).
2. **Click "Large photos and videos."** Google lists your heaviest videos in descending order of size. Download any video you want to keep to your computer or external drive first, then select the cloud copies you do not need and click the **Move to trash** icon.
3. **Review "Screenshots," "Blurry photos," and "Other apps"** on the same Manage Storage screen to bulk-delete accidental pocket photos and old WhatsApp forwards that were automatically backed up.
4. **Use "Convert existing photos & videos to Storage saver" (if available on Desktop):** At `photos.google.com/settings`, look for **Recover storage / Convert existing photos and videos to Storage saver** (Last checked: November 2026 [VERIFY]). This compresses existing Original-quality backups down to standard high quality (`16 MP` for photos and `1080p` for videos) without deleting any memories.
5. **Empty the Google Photos Trash immediately:** Open **Library / Collections → Trash → Empty trash**. Until you empty the Trash, deleted videos still count against your 15 GB for up to 60 days.

{% include callout.html type="warning" title="Deleting in the Google Photos app deletes from your phone too" text="If Backup & Sync is turned ON in the Google Photos mobile app, moving a photo to Trash inside the Google Photos app removes it from both the cloud AND your phone's local gallery. If you want to keep the video on your phone or PC, copy it to a separate local folder or turn off Backup on your phone before deleting it at photos.google.com in a web browser." %}

## Step 3: Find and Delete Heavy Gmail Attachments Using Search Operators

Deleting thousands of 5 KB text newsletters barely moves the storage needle. Instead, use Gmail's search operators to find the 20 or 30 emails that hold 15 MB PDF or ZIP attachments:

| Gmail Search Query to Paste | What It Finds | Best Way to Use It |
| :--- | :--- | :--- |
| `larger:10M` | Every email in your account (Inbox, Sent, and Archive) larger than 10 MB | Start here; download any attachment you still need, then delete the email |
| `larger:5M older_than:2y` | Emails over 5 MB that are more than 2 years old | Clears old project drafts, expired brochures, and old attachments safely |
| `filename:mp4 OR filename:mov OR filename:zip` | Emails containing video or ZIP archive attachments | Quickly spots heavy media attachments sent years ago |
| `category:promotions older_than:1y` | Marketing and promotional emails older than 1 year | Select all → **Select all conversations that match this search** → Delete |
| `from:me larger:5M` | Large emails you sent yourself or others (stored in your **Sent** folder) | People often forget that **Sent** attachments also consume quota |

After deleting large emails, **open the left sidebar in Gmail → click More → Trash → click "Empty Trash now,"** and also open **Spam → "Delete all spam messages now."**

## Step 4: Sort Google Drive From Largest File to Smallest

1. **Open [drive.google.com/drive/quota](https://drive.google.com/drive/quota)** in a web browser (or click **Storage** at the bottom of the left menu in Google Drive) (Last checked: November 2026 [VERIFY]).
2. **Verify the list is sorted by "Storage used" (largest at the top).** You will see every file across all your Drive folders ranked purely by megabytes and gigabytes.
3. **Select old video recordings, ISO files, or duplicate backups** you no longer need in the cloud and click the **Trash** icon. If you need to keep a large PDF in Drive for reference, you can first [compress the PDF under 1 MB or 500 KB]({{ '/guides/compress-pdf-under-size-limit/' | relative_url }}) and upload the smaller copy.
4. **Check the "Backups" tab at the top of the Storage view:** Old Android phones you no longer own or oversized WhatsApp chat backups (including gigabytes of forwarded WhatsApp videos) often sit here silently.
5. **Click "Trash" in the left menu of Google Drive and click "Empty trash"** in the top-right corner. You will see your available storage update within a few minutes.

## Common Mistakes to Avoid

- **Forgetting to empty all three Trash bins:** Google Photos, Google Drive, and Gmail each have their **own separate Trash folder**. Moving a 2 GB video to Trash does not free a single byte until you click **Empty trash** inside that specific app.
- **Deleting shared files that belong to someone else:** Files shared *with* you on Google Drive only count against the **owner's** storage quota, not yours—deleting them will not reduce your own storage usage.
- **Backing up WhatsApp media folders to Google Photos:** In the Google Photos Android app (**Settings → Backup → Back up device folders**), uncheck `WhatsApp Images` and `WhatsApp Video` so daily group-chat forwards do not eat your 15 GB.

## If It Still Doesn't Work

- **You emptied all three Trash folders, but Gmail still says 100% full:** Google's storage counter can take anywhere from **5 minutes to 24 hours** to recalculate after a large bulk deletion. Refresh `one.google.com/storage` after 15 minutes and sign out and back in if the red banner persists.
- **Google Drive shows storage used, but `drive.google.com/drive/quota` looks empty:** Type `is:unorganized owner:me` in the Google Drive search bar to reveal "orphaned" files whose parent folder was deleted but that you still own.

## Privacy and Safety Notes

When downloading old Gmail attachments or Drive files to your computer before deleting them from the cloud, store sensitive tax, banking, or ID documents in an encrypted folder rather than leaving them in a shared **Downloads** folder. Browse more storage and device guides in [Phone, Google & Internet Fixes]({{ '/category/everyday-tech/' | relative_url }}).

## Frequently Asked Questions

### Why did my WhatsApp backup suddenly start counting toward my 15 GB Google storage?
Google and WhatsApp updated their Android backup policy so that WhatsApp chat and media backups stored in Google Drive now count against your personal 15 GB Google Account storage quota (Last checked: November 2026 [VERIFY]). Turning off **"Include videos"** inside **WhatsApp → Settings → Chats → Chat backup** usually cuts backup size by 70–80%.

### Can I delete an attachment from an email in Gmail without deleting the email text?
Gmail does not have a built-in button to strip an attachment while keeping the original message thread intact. To keep the text, forward the email to yourself, manually remove the attached file before hitting Send, and then delete the original heavy email and empty Gmail Trash.

### Do Google Docs, Sheets, and Slides count toward the 15 GB limit?
Yes. Native Google Docs, Sheets, Slides, Forms, and Drawings created or edited after June 2021 count toward your 15 GB quota, though most text-only Docs and Sheets weigh only a few hundred kilobytes each unless they contain embedded high-resolution images.

## Next Step

Open **[one.google.com/storage](https://one.google.com/storage)** right now to see which service is using the bulk of your 15 GB, then run the `larger:10M` search in Gmail and empty the Trash folders in Photos, Drive, and Gmail.

## Sources

1. [Google One Help — How your Google storage works](https://support.google.com/googleone/answer/9312312)
2. [Google Drive Help — Manage files in your Google Drive storage](https://support.google.com/drive/answer/6374270)
3. [Gmail Help — Search operators you can use with Gmail](https://support.google.com/mail/answer/7190)
4. [WhatsApp Help Center — About Google Account backups on Android](https://faq.whatsapp.com/490592613091019) [VERIFY SOURCE: confirm WhatsApp Google Account backup help URL]
