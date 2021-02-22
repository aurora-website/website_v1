---
title: Frequently Asked Questions
description: Need help with something? Most of your issues can probably be solved from this page.
lang: de
sidebarDepth: 2
---

# Frequently Asked Questions <messages-icon size="38px" color="#b071e3" />

## <img class="headerLogo" :src="$withBase('/icons/aurora_store.png')"> Aurora Store

### Troubleshooting

#### Failed to Build API

If due to some reason the primary token dispenser has gone DOWN/OFFLINE & you are unable to login, then please enable the secondary token dispenser URL for the time being.​

**Steps:**

1. Go to Settings → Networks → Enable custom tokenizer​​.
2. Enter the secondary token dispenser server URL:​ http://www.auroraoss.in:8080​
3. Now try logging back in as Anonymous​

::: guide Note
This does not apply to anyone using their own Google account.
:::

::: c-warning
http://www.auroraoss.in:8080​ has been disabled. All users are requested to use the main server, i.e. turn the custom tokenizer **OFF**, if not already doing so. For more information, please head to our support chat on [Telegram](https://t.me/aurorasupport)
:::

#### Installing/updating Google Chrome or Google/Android System WebView responds with "Incompatible app"!

If you are using Android 10+ (Q and above), both of these apps are not easy to install/update. Basically, Google messed things up and gave Android users more work to do.

> Chrome is no longer used as a WebView implementation in Q+. We've moved to a new model for sharing common code between Chrome and WebView (called "Trichrome") which gives the same benefits of reduced download and install size while having fewer weird special cases and bugs.
>
> ~ Source: [androidpolice.com](https://www.androidpolice.com/2019/10/24/android-10-no-longer-uses-chrome-app-to-render-pages-inside-apps/)

The trichrome library is split into 4 variants, just like Google Chrome: Stable, Beta, Dev, Canary.

To install Chrome and WebView variants, follow the steps below:

1. Firstly, download the trichrome library apk variant according to the Chrome/WebView version you have/to the one you want to update to.
2. Install the apk onto your device.
3. Try updating your Chrome/WebView with Aurora Store again.

You can download the stable Trichrome library from apkmirror [here](https://www.apkmirror.com/apk/google-inc/trichrome-library/#variants).

Read more about Trichrome on the Chromium Shared Libraries [documentation](https://chromium.googlesource.com/chromium/src.git/+/master/docs/android_native_libraries.md).

#### My exported device info won't work in spoofing!

Most likely the platforms property in the export file is missing. This sometimes happens while exporting on some devices. The only way to fix this is to manually input a new line with the content below:

```java
Platforms = arm64-v8a, armeabi-v7a, armeabi
```

Remember to check what architecture your device supports! You can easily check it with either of these apps: [CPU-Z](https://play.google.com/store/apps/details?id=com.cpuid.cpu_z&hl=en&gl=US), [DevCheck](https://play.google.com/store/apps/details?id=flar2.devcheck&hl=en&gl=US), [Castro](https://play.google.com/store/apps/details?id=com.itemstudio.castro&hl=en&gl=US) or just search for your device on [GSMArena](https://www.gsmarena.com/). DO NOT just copy-paste the line above and blame us if it doesn't work, even if it might.

#### I have a Huawei device and I can't log in!

Chances are that you have a device running Android that was originally shipped without Google support. To the best of our knowledge, this includes:

-   Huawei Mate 30 series
-   Huawei Mate 40 Series
-   Huawei P40 series
-   Huawei P Smart S
-   Huawei Mate Xs
-   Huawei Y5p, Y6p, Y7p, Y8p
-   Huawei Nova 7i, 7 SE
-   Huawei Matepad T8, Pro 5g

Simply spoofing to another device configuration should help solve this problem.

#### Installation fails without warning post downloads.

Bundled apps can't be installed on OEM ROMs due to shameless mods like (VirusCheck, Tracker Stats, etc.).

Pick **one** of these workarounds:

1. Turn off vendor optimizations (like MIUI Optimizations)
2. Enable "Enforce Native Installer" from Aurora Store Settings → Installations.
3. Use root installation method

#### Problems with downloading apps

This problem may be due to your download path. Sometimes Android has issues with allowing read/write permissions for apps when external storage gets involved and this can affect Aurora Store as well. To fix this, you can toggle "Download apps in internal storage" in Settings → Downloads.

#### Updates tab doesn't show apps but searching the app shows update.

\[Will write once info is confirmed\]

#### Unable to export device info.

\[Will write once info is confirmed\]

#### Why do I have two _Aurora Store_ apps after installing the new builds?

This might be due to the fact that you have older versions of Aurora Store installed instead of version 3, which is a completely new rewrite that comes with a new package name. You can uninstall the older one or keep it if you want.

#### The categories tab shows "No apps blacklisted".

This is a bug in `v.3.2.9` that has been noted. For some people it works, for some it doesn't.

#### Not working whatsoever.

Check if you are using the latest Stable build `v.3.2.9` or Nightly builds. For some reason some people have reported issues while installing `v.2.0.5` from third-party sources like Softonic and Uptodown.

Please download all latest AuroraOSS apps from any of the below mentioned sources only:

1. F-Droid: [https://f-droid.org/en/packages/com.aurora.store/](https://f-droid.org/en/packages/com.aurora.store/)
2. AuroraOSS Website: [https://auroraoss.com/downloads.php](https://auroraoss.com/downloads.php)
3. Official Telegram Channel: [@AuroraOfficial](https://t.me/AuroraOfficial)
4. GitLab: [https://gitlab.com/AuroraOSS/AuroraStore/-/releases](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

### FAQs

#### Why the name "Aurora" Store?

Initially, Aurora Store was named Galaxy Store. Some people thought we were trying to clickbait by using Samsung's "Galaxy" likeness \(False, btw\). Because of this we have decided to drop the Galaxy name in place of Aurora.

#### What is the difference between Aurora Store and Google's Play store?

Unlike Google's Play Store, Aurora Store doesn't track your downloads or the apps you use. We respect your privacy. Aurora is also unaffected by Google marking your device as _uncertified_ or lacking of necessary Google apps. Play Protect is not present, as this is a Play Store feature.

#### Is Aurora Store a fork of YalpStore?

Technically, no. Aurora Store v3 is written from scratch, but it does share some code from YalpStore.

#### Do I need Google Play Services to use Aurora Store?

No. Aurora Store was built to access the Google Play store without any kind of Google services. It doesn't matter if you use it with or without Google Play Services/MicroG.

#### What is the FakeStore?

Some poorly-designed apps detect if Google Play is missing and punish the user by misbehaving. The FakeStore is a stub that disguises itself as the Play store: FakeStore shares the same package name as the Play store `com.android.vending`. This prevents some apps from crashing.

#### Is it safe to use Aurora store?

Aurora Store is fully open-source and verified by F-Droid. If you're asking about the safety of the apps in the store, those are the exact same ones the Play Store would load and display. A lot of dangerous stuff seems to sneak past Google though, so as a rule of thumb, don't download anything which you're unsure about.

#### What data does Aurora Store send to Google?

Aurora Store does its best to send the least amount of information possible.

To provide basic functionalities, the following is sent:

-   a list of package names of your installed apps \(for fetching updates\). You can select apps to be blacklisted in order to avoid sending package info to Google.
-   your search queries and your downloads for obvious reasons.

For anonymous logins, following data is sent to Aurora Dispenser Server:

-   a GET request to obtain a authentication token. This token is generated server side so no user data is leaked. All the requests are made to Google from the Dispenser Server's IP.
-   AuroraOSS follows a strict policy of no-logging, so no data is stored on the Dispenser Server.

::: guide Tip 👀
For more info read​ [Anonymous Logins](/guides/anonymous-logins).
:::

#### Do I need to use my own Google account to log in?

Nope. Aurora Store can log you in with a dummy account that is stored in the token dispenser so that nothing gets linked to your own account.

#### What is the token dispenser?

The token dispenser is a server which provides login credentials to Aurora Store for Anonymous Logins. You can check the current status of the token dispenser servers [here](/guides/server-status/) or by using `/status` in the Telegram group.

::: danger EDIT PAGE
edit link server status when complete page
:::

::: guide Update
The `/status` and `/nightly` commands are disabled for now as we are working our way towards v4. The status page is also partly down, as we are making changes to the server rate limiting on the main server. The secondary server `auroraoss.in:8080` will still be monitored as before without change.
:::

If you would like to create and host your own token dispenser server, check out the source code [here](https://github.com/whyorean/AuroraDispenser).

#### Why would I use my own account? Is it safe?

The main reason would be having the possibility to download apps purchased by yourself or to access your wishlist. Other reasons for using your own account could be having beta updates available, as this isn't possible for dummy accounts, or to reduce the possibility of having issues with Aurora Store when using dummy accounts.

However, you may want to be careful as **Google retains full rights to block any account under their** [**Google Play Terms of Service §4**](https://play.google.com/intl/en-us_us/about/play-terms/index.html), because using Aurora Store clearly violates their terms of services. Being banned means that the very Google account you used to sign in with will be blocked forever. It might be worth using a dummy account for that reason.

If you do happen to get your Google account banned, you can try appealing, which may or may not work. If they reject your appeal then there's nothing much you can do about that account. You can try your luck by filling out their form [here](https://support.google.com/accounts/contact/disabled2).

#### How do I purchase paid apps without using the Play Store app?

Purchase the apps from the [Google Play website](https://play.google.com/store), then log in using your own account in Aurora Store to download and install them.

#### Can Aurora store verify licenses?

That, unfortunately, is something tied to Play Store and probably always will be. If you don't want to install the Play Store (it can work with microG), all you can do is pester the Devs to remove the verification or at least offer alternative means of verification. In-app purchases (IAPs) are similarly tied to Play Store and you will not be able to make or restore IAPs without having it installed.

#### Can I use Aurora store to get paid apps for free?

No.

#### What is the F-Droid filter?

Since F-Droid signs APKs with its own keys, the Play store variants of apps cannot be installed over them. The F-Droid filter excludes all the apps it finds with FDroid signatures on your device to prevent such conflicts.

#### What is the spoofing feature?

Spoofing allows you to pretend to be any other device at any other location in the world in order to download geo-restricted apps. You can use your own custom device configs by dropping the .properties file in the Downloads directory (Settings → Downloads → Download Path).

#### How does Aurora Store install apps?

Aurora Store can install apps in 3 ways:

-   **Manual** - Whenever an app is downloaded, it will open the manual installation screen. This doesn't require root or system permissions.
-   **Session** - This has the same effect as if you were to install Aurora Services as a system application. This method (can use, but) does not require root, however you will need an unlocked bootloader with a custom recovery like TWRP installed.
-   **Root** - By giving Aurora Store root access (latest Magisk recommended), it will automatically install apps in the background as soon as they are downloaded.

For v3 and under:

-   **Aurora Services** - By installing Aurora Services as a system app, Aurora Store can automatically install apps upon download completion in the background.

#### How do I use Aurora Services?

1. Install Aurora Services (preferably to the system).
2. Open Aurora Services and follow the initial set-up instructions
3. Open Aurora Services settings and choose Aurora Services it as an install method.

You don't need to give Aurora Store system or root permissions; Aurora Services handles all install and uninstall requests in the background, which is why it has to be installed as a system app. Get Aurora Services [here](https://gitlab.com/AuroraOSS/AuroraServices/-/releases).

#### How to give Aurora Services system permissions?

Aurora Services will NOT work if it is not installed as a system app.

1. If you have Magisk installed then simply download the zip file from [GitLab](https://gitlab.com/AuroraOSS/AuroraServices/-/releases) and flash via Magisk. If magisk is not installed then you can either install the 'magisk-unity' zip file via TWRP (root access is not needed) or manually push `AuroraServices.apk` to `/system/priv-app` and `permissions_com.aurora.services.xml` to `/system/etc/permissions/` (This needs root access!).
2. Grant the required permissions & whitelist Aurora Store in the services app.
3. Set installation method in the Aurora Store settings to Aurora Services (Settings → Installations → Installation method → Aurora Services).

::: warning Warning
Aurora Services is deprecated since the release of Aurora Store version 4. However, it is still usable with Aurora Store v3.
:::

#### Can Aurora Download and install Split or Bundled APKs?

Yes, it can install both with or without root.

#### Why are the versions on F-Droid and XDA labs outdated? When will they be updated?

Aurora Store is still in a development phase right now; Only infrequent, stable builds will be uploaded there. F-Droid's review & build process is also quite lengthy. You can always grab the latest tests builds either from the [Telegram Group](https://t.me/AuroraSupport) or from [AuroraOSS](https://auroraoss.com/AuroraStore/Nightly/).

#### "Please add support for F-Droid/Amazon/Yada repositories!"

No, this is a Play Store client only. Different clients for different services (^\_~)

#### Does Aurora supports downgrading app versions?

Yes, it supports app version downgrading to some extent. To download older versions, open the page of the desired app, from the three-dot-menu on the top right side, tap on `Manual download`. On the next screen put a valid last octet value of version you want & hit download.

> Example: if the current installed app version is `v.3.1.550` & you want `v.3.1.445`, then on version page just put `445` i.e last octet value of version.

Keep in mind that downloading arbitrary versions of apps is not supported by the Google Play Store. Your success depends on a lucky guess of the version code. Even if you guess right and you get the download to start, you still might get an incompatible APK.

#### Why do some apps show updates in Aurora Store (Anonymous mode) but not in the Play Store (or vice-versa)?

Aurora Store's anonymous mode works by connecting to an random dummy account stored in the token dispenser server. These dummy accounts are created by volunteers from different countries and some by the developer himself. Thus, every account has different locale settings by default according to the location where it was first created.

So next comes the Google Play Update roll-out mechanism. Google doesn't push app updates in one single attempt to all countries users. It's similar to staged updates & needs a lot of server syncing which takes time. Some apps are also blacklisted or restricted in specific countries and for specific devices \(geolocked & device-restricted\).

So while using Anonymous mode user are randomly connected to an Dummy account with different account locales which atlast alters the list of app updates accordingly. Additionally spoof settings can also be able to alter the apps updates list.

#### How can I report a bug or suggest something?

You can open issues on GitLab [here](https://gitlab.com/AuroraOSS/AuroraStore/issues), or you can do so by joining our [Telegram Support Group](https://t.me/AuroraSupport). Use `/bug` or `/suggestion` at the start of your message. If urgent, you can tag [@whyorean](https://t.me/whyorean).

#### How do I join/contribute to Aurora Store?

For code and UI improvements, do a Merge Request. These will not be looked as often, but if it's something major then we will consider merging.

For feature requests, open an issue with [Feature Request] at the start of your title. If in consideration there will be a 'Feature Request' label on your issue.

::: danger EDIT PAGE
add this page to contribution page
:::

### Spoofing

## <img class="headerLogo" :src="$withBase('/icons/aurora_droid.png')"> Aurora Droid

### FAQs

#### What is Aurora Droid?

Aurora Droid is an unofficial, FOSS client to F-Droid and F-Droid compatible repositories with an elegant design. Not only does Aurora Store download, update, and search for apps like the Official F-Droid client, it also empowers the user with new features.

#### How can I report a bug or suggest something?

You can do it here, on this Aurora’s official Telegram Group OR on Gitlab. In telegram group just remember to use `/bug` and `/suggestion` in start of your message. Optionally you can tag [@whyorean](https://t.me/whyorean).

#### Why does this even need the camera permissions?

Many repositories provide a QR code for their links and AuroraDroid can scan them directly. If you don't want to use this feature, you don't need to give it permissions. You can always add links manually.

#### Why is there WhatsApp / Skype / some miscellaneous proprietary app in the apps list? This is blasphemy!

Why do you think? Many repos (including Haagch and IzzyonDroid) are known to include proprietary/non-free applications. All of them are disabled at start, so it's on you for enabling them without knowing them.

#### How does Aurora Droid install apps?

Aurora Droid can currently install apps in 4 ways:

-   **Manual** - Whenever an app is downloaded, it will open the manual installation screen. This doesn't require root or system permissions.

-   **Root** (Recommended) - By giving Aurora Store root or system permissions, it will automatically install apps in the background as soon as they are downloaded.

-   **Session** - This has the same effect as if you were to install Aurora Services as a system application. This method (can use, but) does not require root, however you will need an unlocked bootloader with a custom recovery like TWRP installed.

-   **Aurora Services** - By installing Aurora Services as system app, Aurora Store can automatically install app upon download completion in background. Use #services for more info in group.

Facing app installation issues? Check out the `#install_solution` note in our group chat.

#### How to add an new Repository in Aurora Droid ?

To add new repository, use "Repositories" button given in left side menu. Choose "add new repository", after that type name of repo in 1st section, then paste repository URL in 2nd section & repository fingerprint (if available) in last section.

For Example:

Repo Name: F-Droid

Repo URL: https://f-droid.org/repo

Repo Fingerprint (Optional): 43238D512C1E5EB2D6569F4A3AFBF5523418B82E0A3ED1552770ABB9A9C9CCAB

::: danger EDIT PAGE
maybe move above to user guide page? also instead of text example add screenshot
:::

## App Warden

### How does it work?

Warden has a static curated list of known trackers (Exodus Privacy) , each app's dex file is read to retrieve the class names, these class names are then matched with the signatures of known trackers & loggers to find them.

A list of currently known trackers & loggers can be found here & here

Loggers in the context of Warden means all utilities which are used to log user activity on an app or logcat in general. Not all loggers are evil. But few logging tools like ACRA, xLog are very powerful tools that can send user data to devs without user's consent. So do read the app's Privacy Policy, beforehand.

### What features are there?

#### Manual App management:

User can manage their installed apps using apps tab on main screen. Non-rooted user can manually check tracker/logger for each installed app on device.

Devices which has ROOT access can also perform some advance actions by pressing # icon on app page. Advance actions includes: Hide, Uninstall, Disable, Suspend, Clear data.

Also ROOTED users can manually disable app components of their own choice. Currently Warden uses su pm to manage the components.

Note: By default only user installed apps are shown in app list, to preview system apps enable "include system apps" from settings.

#### Trackers search function (No Root required):

Warden provides direct access to Exodus privacy scanned app Database. Use the search function on main home screen & just paste the "package name" (e.g.: com.whatsapp for whatsapp & com.google.android.youtube for YouTube) of the app in search bar & hit search button.

If No results are found try to submit app manually for analysis on exodus web portal. Submit app HERE. After 2-3 minutes from submission time results will be reflected in warden, if its successfully scanned by Exodus.

Note: Please Keep in mind that Not all apps can be scanned by online static analysis. Paid apps & other apps which are geographically restricted cannot be scanned by Exodus Privacy.

#### Monitor app usage (No Root Required):

Warden also monitors & preview app usage stats of device in graphs. Like which app used recently & for how long time. This data surely helps you to think once about your app usage time 😉

Note: "App usage access" permission is required to read & generate usage data.

#### Stats for tracker & loggers (No Root required):

Warden also shows the stats like the current amount of trackers & loggers present on device by scanning all installed apps. This feature only preview data/graphs when user scanned all apps using "Scan Now" button on maim screen.

#### Warden LAB {Experimental}

Currently it consists of two features i.e **De-bloater** & **Nuke it!**. These features are experimental, but it will surely improve with time.

#### De-bloater (Requires Root):

Warden provides a profile based de-bloater where a profile is created in a specific json file format.

You need to place this profile/your custom profile at InternalStorage/Warden/Profiles to make them appear in app.

Get Debloat scripts made by AuroraOSS from HERE

You can also improve current De-bloat scripts by making PR on gitlab OR submit your own new one with same format in AuroraOSS group.

Note: Default action for De-bloating is 'disable' app, you can configure it to 'uninstall' or 'hide' from settings. Debloat function is currently experimental, it will surely improve in future releases.

#### Nuke it! (Requires Root):

Nuke it! is another experimental feature that scans all apps on the device and disables all know tracker components for installed apps automatically. It also gives an option to export components names per-app basis.

Components here means: Activities, Services, Providers & Receivers of installed apps.

You can Revert back the Nuke it effect by toggling De-Nuke button from same section. All apps components will be restored to its original state after De-Nuking.

## Aurora Wallpapers

_Wow, such empty_ 🐶
