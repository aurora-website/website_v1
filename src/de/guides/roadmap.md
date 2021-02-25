---
title: Roadmap
description: Timeline of Aurora Store.
lang: de
meta:
    - property: og:image
      content: /icons/aurora_store.png
sidebar: true
---

# Roadmap

![Roadmap](https://telegra.ph/file/732c1e50d8c7febfe8c63.png)

The goal of Aurora Store is to provide users an alternative to the Google Play Store that works well, packed with important privacy features as well as stunning and pleasant-looking UI. Here is a list of the important stuff of what we've achieved and changed so far.

✅ = Completed

⏳ = Work In Progress

❓ = Unknown Stage

## version 4

#### ⏳ Potential support removal for Aurora Services

There may no longer be support for Aurora Services. The reason for this is because there is no point for the continuation of its existence, since the installation method is replaced by Aurora Store:

1. Install Aurora Store as a **system app**. This has the same effect as if you were to install Aurora Services as a system application. This method does not require root but you will need an unlocked bootloader with a custom recovery like TWRP installed. This installation method is called "Session".

2. Install Aurora Store as a **user app**. If you have root access you can give Aurora Store the permissions for "Root" installation method. There is no point to use Aurora Services with root since you can give Aurora Store root permissions already.

3. If you have no root access available, the default installation method will be "Native".

However, after the recent release of the public alpha of Aurora Store v4, we have come to realize some people will still want to use Aurora Services. We are now considering whether or not we should still maintain support for Aurora Services.

#### ⏳ New UI

Exciting new UI changes for the new version 😉

#### ❓ Location spoofing to be removed from Aurora Store and separate solution for spoofing

[Info has been closed for internal discussion for now.]

#### ⏳ Major Token Dispenser API changes and exclusive use for Aurora Store only!

We have seen major issues while observing the main server, and it seems like it has been overloaded with high CPU usages during version 3 recently. Thus, the developer has been trying to counter this with a solution.

After this build has been released, the way token dispensers work will be much different than it is now, which is to help reduce the workload of the main server. The main dispenser server will also now be available for Aurora Store only. This should help lower the chances of server downsides and faster loading times.

#### ⏳ Add new device configurations for spoofing

In this build, a few more device configs with newer versions of Android will be added for device spoofing, as some are rather outdated. This gives users the opportunity to install e.g. apps with features exclusively for Android 11, but not for your device. (Note that you have to have the same Android version for those features to work!)

#### ⏳ Support for Android TV and Android 4.4+ (KitKat)

For Android TV there will most likely be a Web App version built and for Android Kitkat another seperate version, could also possibly be merged to the current alpha version.

---

#### ✅ Completed stuff

1. You can browse streams similar to Play Store, ie For You, Editor's Choice, Early Access. EC & EA is not available on anonymous logins
2. App Library, so you can track your app install history.
3. App-on-Sale, uses a 3rd party API for index, but app data is fetched from Google's servers
4. A dedicated section for Games
5. A new improved App UI
6. A lot of under the hood improvements.
7. Rewritten in Kotlin

---

#### ✅ Stuff that's changed

Here are few things that will no longer be available or has changed:

1. Geo-spoof, would provide a companion app to facilitate the same, if required.
2. Favourite app, will add something called similar to WishList, limited to google login only.
3. Anonymous logins now use your device-config to create session, so your device-config is sent to my dispenser server. It may sound scary but it is not, here is a [sample](https://gitlab.com/AuroraOSS/gplayapi/-/blob/master/src/main/resources/op_8_pro.properties) of what I send to my dispenser in order to create a anonymous session.

## version 3

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

## version 2

#### ✅ Add Device/Language/Country Spoof Option to allow accessing GeoRestricted Apps

#### ✅ Add Filter to exclude Non-Market, F-Droid & Guardian Project Apps

#### ✅ Refactor complete project to AndroidX
