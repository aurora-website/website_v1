---
title: Troubleshooting
description: Troubleshooting for Aurora Apps.
lang: en-GB
sidebarDepth: 2
---

# Troubleshooting

![Troubleshooting](/assets/undraw_troubleshooting.svg)

## <img class="headerLogo" :src="$withBase('/icons/aurora_store.png')"> Aurora Store

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

#### Login Problems

-   **"BadRequest"** → I have a Huawei device and I can't log in!

    Chances are that you have a device running Android that was originally shipped without Google support. To the best of our knowledge, this includes:

    -   Huawei Mate 30 series
    -   Huawei Mate 40 Series
    -   Huawei P40 series
    -   Huawei P Smart S
    -   Huawei Mate Xs
    -   Huawei Y5p, Y6p, Y7p, Y8p
    -   Huawei Nova 7i, 7 SE
    -   Huawei Matepad T8, Pro 5g

    Simply spoofing to another device configuration with the same architecture (e.g. arm64-v8a, armeabi-v7a, armeabi) should help solve this problem.

-   **"Timeout"** → I can't login because of internet connection.

    When network connection is either blocked or network speed is too slow (Aurora Store waits only for 20 sec for an authentication request).

-   **"Oops! You have been rate-limited!"** → I clicked on Anonymous button too many times!

    You are rate-limited after trying to sign in anonymously after 20 concurrent retries.

    Our current rate looks like this:

    | Requests/time (r/t) | Rate-limited | Banned |
    | :-----------------: | :----------: | :----: |
    |      > 20 r/m       |     yes      |   no   |
    |      > 50 r/m       |      no      |  yes   |

#### Installation fails without warning after downloading.

Bundled apps (split apks) can't be installed on OEM ROMs, i.e. MIUI, Oppo, due to shameless mods like (VirusCheck, Tracker Stats, etc.).

Pick **one** of these workarounds:

1. Turn off vendor optimizations (like MIUI Optimizations, NOT battery optimizations).
2. Use the Aurora Services installation method.
3. Use the root installation method.

::: c-warning
You may not be able to disable MIUI Optimzations through developer options anymore after MIUI 12 because MIUI is just being MIUI.
:::

#### "Getting Metadata - Downloads failed, could not fetch files"

-   **Check that you have a strong Wi-Fi or mobile data connection**

    First, make sure you have a strong internet connection. It’s best if you can connect to a Wi-Fi network. If you don’t have access to Wi-Fi, make sure you have a strong mobile data connection. Then try your download again.

    Get more help with connection problems on Android devices.

-   **Clear the cache & data of the Aurora Store**

    This gives the app a fresh start and can help fix issues.

    1. Open your device's Settings app <SettingsIcon />.
    2. Tap **Apps & notifications** → **See all apps**.
    3. Scroll down and tap Aurora Store <BasketIcon />.
    4. Tap **Storage** → **Clear Cache**.
    5. Next, tap **Clear data**.
    6. Re-open the Aurora Store & try your download again.

-   **Restart your device**

    If you still can’t download after you clear the cache & data of Aurora Store, restart your device.

    1. Press and hold the **Power** button until the menu pops up.
    2. Tap **Power off** or **Restart** if that is an option.
    3. If needed, press and hold the **Power** button until your device turns on again.

#### "java.io.FileNotFoundException"

The logs say "open failed", which implies that the installer was not able to read the files.

So problem is either with installer (mostly using incompatible Aurora Services) or with something with storage access permission. Try clearing app cache & data or using other installation methods and if those give the same result, consult us on Telegram or open an issue on Gitlab.

#### "Installation failed"

If your installation method is set to **Root** and your **Android version 11+ (R+)**, then you may experience problems with installing apps. A quick 'fix', that works every now and then, is to force clear all downloads in the downloads page within Aurora Store and try installing it again. Hope you win the gamble!

#### Why do I have two Aurora Store apps after installing the new builds?

This might be due to the fact that you have older versions of Aurora Store installed instead of version 3, which is a completely new rewrite that comes with a new package name. You can uninstall the older one or keep it if you want.

#### Not working whatsoever.

Check if you are using the latest Stable build or Nightly builds. For some reason some people have reported issues while installing older versions of Aurora Store from third-party sources like Softonic and Uptodown.

Please download all latest AuroraOSS apps from any of the below mentioned sources only:

1. F-Droid: [https://f-droid.org/en/packages/com.aurora.store/](https://f-droid.org/en/packages/com.aurora.store/)
2. AuroraOSS Website: [https://auroraoss.com/download/](https://auroraoss.com/download/)
3. Official Telegram Channel: [@AuroraOfficial](https://t.me/AuroraOfficial)
4. GitLab: [https://gitlab.com/AuroraOSS/AuroraStore/-/releases](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

If you still can't figure out why, consult us on our Telegram Group chat or open an issue on Gitlab if you must.
