---
title: Roadmap
description: Timeline of Aurora Apps.
lang: en-GB
meta:
  - property: og:title
    content: Anonymous Logins
  - property: og:description
    content: Timeline of Aurora Apps.
  - property: og:image
    content: /assets/undraw_roadmap.png
  - property: og:image:alt
    content: Roadmap Banner Image
  - property: og:url
    content: /guides/roadmap
  - property: og:locale
    content: en-GB
  - property: twitter:card
    content: summary_large_image
sidebar: true
---

# Roadmap

![Roadmap](/assets/undraw_roadmap.svg)

Legend: **✅ Completed | ⏳ Work In Progress | ❓ Unknown Stage**

## <img class="headerLogo" :src="$withBase('/icons/aurora_store.png')"> Aurora Store

The goal of Aurora Store is to provide users an alternative to the Google Play Store that works well, packed with important privacy features as well as stunning and pleasant-looking UI. Here is a list of the important stuff of what we've achieved and changed so far.

### version 4

#### ✅ Adding session and native installer to Aurora Store

With the arrival of Session installer, users are now able to install apps seamlessly if Aurora Store is installed as a system application while selecting this installation method. If Aurora Store is not a system app, it will act like the native package installer, but merging split apks and apk bundles together into a single apks first.

Native is the native package installer that Android comes with by default. This may help users with OEM roms like MIUI if the other installtion methods do not work. Note that split and bundled apks will not work on this installation method.

#### ✅ New UI

Exciting new UI changes for the new version 😉

#### ✅ Major Token Dispenser API changes and exclusive use for Aurora Store only!

We have seen major issues while observing the main server, and it seems like it has been overloaded with high CPU usages during version 3 recently. Thus, the developer has been trying to counter this with a solution.

After this build has been released, we will remove the dispenser for v3 completely, which is to help reduce the workload of the new server. The main dispenser server will also now be available for Aurora Store only. 

In addition to that, a rate-limiting function has been added. Spammers will be kept out from our server and this should help lower the chances of server downsides and faster loading times.

#### ✅ Add new device configurations for spoofing

In this build, a few more device configs with newer versions of Android will be added for device spoofing, as some are rather outdated. This gives users the opportunity to install e.g. apps with features exclusively for Android 11, but not for your device. (Note that you have to have the same Android version for those features to work!)

#### ✅ Support for Android 4.4+ (KitKat)

For Android TV there will most likely be a Web App version built and for Android Kitkat another seperate version, could also possibly be merged to the current alpha version.

#### ⏳ Support for Android TV 

Android TV is on the todo list

#### ✅ Other new features!

1. You can browse streams similar to Play Store, ie For You, Editor's Choice, Early Access. EC & EA is not available on anonymous logins
2. App Library, so you can track your app install history.
3. App-on-Sale, uses a 3rd party API for index, but app data is fetched from Google's servers
4. A dedicated section for Games
5. A new improved App UI
6. A lot of under the hood improvements.
7. Rewritten in Kotlin

#### ✅ Stuff that's changed

Here are few things that will no longer be available or has changed:

1. Geo-spoof, would provide a companion app to facilitate the same, if required.
2. Favourite app, will add something called similar to WishList, limited to google login only.
3. Anonymous logins now use your device-config to create session, so your device-config is sent to my dispenser server. It may sound scary but it is not, here is a [sample](https://gitlab.com/AuroraOSS/gplayapi/-/blob/master/src/main/resources/op_8_pro.properties) of what I send to my dispenser in order to create a anonymous session.

### version 3

#### ✅ Rewrite from scratch

#### ✅ Add support for Aurora Services

#### ✅ Add support for Split APKs

#### ✅ Add in-app Download Manager

#### ✅ New UI based on latest MD Guidelines

#### ✅ Deploy dedicated token-dispenser

#### ✅ Add Favourite Apps Manager

#### ✅ Enforce proxy network on download requests

#### ✅ Add support for AndroidTV

#### ✅ Add translations

#### ✅ Add option to use custom token dispensers (Settings->Network)

#### ✅ Add option to install apps directly to work profile (only rooted users)

### version 2

#### ✅ Add Device/Language/Country Spoof Option to allow accessing GeoRestricted Apps

#### ✅ Add Filter to exclude Non-Market, F-Droid & Guardian Project Apps

#### ✅ Refactor complete project to AndroidX
