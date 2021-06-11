---
title: Android Apps
description: Want to know more about android apps and how they get installed? This page might solve that curiosity of yours!
lang: en-GB
meta:
  - property: og:title
    content: Android Apps
  - property: og:description
    content: Want to know more about android apps and how they get installed? This page might solve that curiosity of yours!
  - property: og:image
    content: /assets/undraw_android.png
  - property: og:image:alt
    content: Android Banner Image
  - property: og:url
    content: /guides/system-app
  - property: og:locale
    content: en-GB
  - property: twitter:card
    content: summary_large_image
sidebar: true
---

# Android App Types

As we all know, Android is influenced and maintained by Google. 


## What is an APK?

To understand the context of the following text under this section, you require some knowledge about APKs and how they function.

APKs or .apk are Android App Packages, which include the logic, images, databases, language files, sound files, etc. are required to be able to install an app on your device. It's a compression package format specially designed for Android, just like `.zip` or `.tar.gz` for universal zip compressions.

## Android Universal App


## Android App Bundles (AAB)

Just like APKs, AABs are a type of compression package which include the actual apk file.

Hence the term "split apk". 


### Aplication Binary Interface (ABI)

The ABI instructs how the CPU interacts with the system at runtime, and this all depends on the CPU architecture e.g. arm64 or x86. This

To know more on how ABIs work, read this [guide](https://developer.android.com/ndk/guides/abis).

### Localization resources (Languages)

Localizing an application essentially means creating different string translations for each language the application should be in. When the application was shipped as a single APK using the old approach, it contained all localizations at once, even though there was hardly a need for that. App bundles optimize this process by delivering only the language resources that match the device’s system locales. However, if the user decides to change the system locale after the app is already installed, resources for missing languages will be automatically downloaded. For some applications, the localization case might go even further and include locale-specific videos or imagery. As a result, those applications will benefit even more from optimized bundle delivery.

### Screen density resources (DPI)

An Android application should be able to run on a variety of different screen sizes and pixel densities. Android usually performs basic scaling and resizing to adapt a UI to different screens, but to ensure a better UX, additional work must be done.

This usually includes the following:

UI layouts depending on the screen configuration — for example, layouts specifically designed for watch, phone, tablet, or TV.

Bitmaps to match each screen density.

Icon drawables for each screen density if they are too complex for a mipmap drawable.

Again, the older strategy with the single APK would’ve delivered all those resources at once, even though a device would not have had much use for most of them. But app bundles ensure that only those resources that correspond to a device’s screen size and density will be delivered.


For more information about AABs, read the official guide on [Android Developers](https://developer.android.com/guide/app-bundle).

## Android Legacy Expansions (OBBs)


## Play Asset Delivery (PAD)





We hope we did our best to break it down for you so that you have understood the fundamentals on how the Android app file packaging structure looks like and the .