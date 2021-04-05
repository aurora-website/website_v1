---
title: Installing system apps 
description: This is a short guide on how to install apps to the system.
lang: de
meta:
  - property: og:title
    content: Installing system applications
  - property: og:description
    content: This is a short guide on how to install apps to the system.
  - property: og:image
    content: /assets/undraw_android.png
  - property: og:image:alt
    content: System Banner Image
  - property: og:url
    content: /de/guides/system-app
  - property: og:locale
    content: de
  - property: twitter:card
    content: summary_large_image
sidebar: true
---

# Installing system apps

There are a few ways to "install" apps into the system. Before that, there are some things to clarify before starting off:

1. Android apps come in a few kinds. Some are usual apps you use in your daily life, like Aurora Store or Aurora Droid, to download applications where the user can interact with the app. If given extra privileges, they can install apps seamlessly like Aurora Services does.
2. Do not try this on any app you do not trust, as by doing so they will have system permissions that could be a potential security threat.
3. This is a guide written for Aurora Apps, but can be applied on other apps as well.

_**DISCLAIMER**: You do this at your own risk and don't blame the AuroraOSS team if you f*ck up. It's all on you._

## Installing apps into system files <Badge text="TWRP" type="default-indicator"/> <Badge text="ROOT" type="error" />

There are two ways of installing apps using TWRP-based recoveries. Essentially they both do the same thing: writing the apk & xml files into the system.

### The easy way <Badge text="TWRP" type="default-indicator"/> <Badge text="ROOT" type="error" />

The most common way to install an application to the system for TWRP users is by flashing a flashable zip file. Examples include: [Gapps](https://wiki.lineageos.org/gapps.html) for Google apps, [MicroG](https://microg.org/) for GMS replacement, [Magisk](https://github.com/topjohnwu/Magisk) for root management. 

TWRP-flashable zip files usually have a META-INF folder with a base structure of the following:

```
.
├── META-INF
└── system
    ├── etc
    │   └── permissions
    │       ├── com.aurora.services.xml
    │       ├── com.aurora.store.xml
    │       └── com.aurora.droid.xml
    └── priv-app
        ├── AuroraServices
        │   └── AuroraServices.apk
        ├── AuroraStore
        │   └── AuroraStore.apk
        └── AuroraDroid
            └── AuroraDroid.apk
```

Users with devices running Android Oreo (8.0) or above, every app in `system/priv-app/` requires an xml file to go with it in `system/etc/permissions/`, otherwise you will experience some problems:

> Starting in Android 8.0, manufacturers must explicitly grant privileged permissions in the system configuration XML files in the /etc/permissions directory.
>As of Android 9, implementors must explicitly grant or deny all privileged permissions or the device won’t boot.
>  
> ~ Source: [source.android.com](https://source.android.com/devices/tech/config/perms-allowlist)

The code below is an example of `com.aurora.store.xml`. These permissions are needed for **Aurora Store** to be able to install apps background:

```xml{3}
<?xml version="1.0" encoding="utf-8"?>
<permissions>
    <privapp-permissions package="com.aurora.store">
        <permission name="android.permission.DELETE_PACKAGES"/>
        <permission name="android.permission.INSTALL_PACKAGES"/>
    </privapp-permissions>
</permissions>
```

As you can probably assume in line 3, `com.aurora.store` is Aurora Store's package name, all you have to do is copy paste the same code in a new xml file & change the package name to `com.aurora.services` for **Aurora Services** or `com.aurora.droid` for **Aurora Droid**.

::: c-warning Be careful!
Remember that these apps need to be in `system/priv-app/`, _not_ `system/app/`. 
:::

We provide readily available flashable zip packages with the [Unity](https://github.com/Zackptg5/Unity) template (even if deprecated, it works) for each application or as a whole package. You can flash it via TWRP-like recoveries or via Magisk. Download them [here]().

To install zip packages, follow three simple steps: Locate it, Select it, Flash it. 

To uninstall the system apps you installed via the zip file, just flash the zip again & reboot the device. You can also make your own zips by following the guide on **Zackptg5**'s GitHub repo [wiki](https://github.com/Zackptg5/Unity/wiki).

### Step-by-step method <Badge text="TWRP" type="default-indicator"/> <Badge text="ROOT" type="error" />

You can either use the TWRP terminal or if root access is present, then you may use a terminal of your choice that supports `su` (Superuser) with bash commands.

This is a little bit more complicated for the average user and requires a bit of bash/Linux knowledge. Well if you flashed TWRP before you already aren't the usual kind anyway, so follow these steps:

1. Locate to the apk and xml files:

  ```sh
  # First mount the system partition if in TWRP
  mount /system # or enable from the mounting page
  # If using terminal with root access
  su
  # If you downloaded the zip in the Download folder within internal storage
  cd /sdcard/Download/
  # if you haven't unzipped the folder then do the following
  unzip AuroraStore-magisk-unity.zip
  # to check if you have the folders in /system/priv-app/
  ls /system/priv-app/
  # output:
  AuroraDroid
  AuroraServices
  AuroraStore
  # to check if you have the files in /system/etc/permissions/
  ls /system/etc/permissions/
  # output:
  com.aurora.droid.xml
  com.aurora.services.xml
  com.aurora.store.xml
  ```
2. Copy and paste the app folders to system using `cp -R /path/to/appFolder /system/priv-app/`:

  ```sh
  # If the .apk file is located in the internal storage Download folder 
  cp -R /sdcard/Download/system/priv-app/AuroraStore /system/priv-app/
  # If you are currently accessing the Download folder in internal storage
  cd /sdcard/Download/system/priv-app/
  mkdir /system/priv-app/AuroraStore/
  cp AuroraStore.apk /system/priv-app/
  ```
3. Copy and paste the xml files to system using `cp /path/to/xmlFile /system/etc/permissions/`:

  ```sh
  # If the .xml file is located in the internal storage Download folder 
  cp /sdcard/Download/system/etc/permissions/com.aurora.store.xml /system/etc/permissions/
  # If you are currently accessing the Download folder in internal storage
  cd /sdcard/Download/system/etc/permissions/
  cp com.aurora.store.xml /system/etc/permissions/
  ```
4. Reboot your device.

You should now see Aurora Store installed as a system app within **Settings** → **Apps** → **App info**.

## User app → System app <Badge text="TWRP" type="default-indicator"/> <Badge text="ROOT" type="error" />

Converting a user app into a system is a simple process. Finding the files however, may be challenge. You will need to locate the folder containing the base apk as well as an xml file to go with it for setting permissions.

1. Go into `/data/app/` and find the folder containing the package name in either one of the generic named folders starting with `~~` and ending with `==`. You should do this using the GUI on TWRP or with root access, a file manager with root functionality.

2. Once located, copy the folder containing the package name and paste it in `/system/priv-app/`.

3. Paste the xml file into `/system/etc/permissions/`.

4. Reboot your device.

Other advanced recoveries like [OrangeFox](https://wiki.orangefox.tech/en/home) have graphical user interfaces that allow users to easily modify files and directories without the need of the terminal. It is recommended for users with **no knowledge about Linux and bash** to use these recoveries if there is a build for your device. In addition to that, try to make sure that the recovery you want to install is  stable, or else prepare the consequences (hard bricking, bootloops, internal issues, system corruption, etc.). 

::: c-tip Tip!
Stable != Unofficial. Some unofficial recoveries work like a charm, the maintainers just have reasons to why their builds aren't official. Check out [xda-developers](https://www.xda-developers.com/) forums and see if there are builds for you device.
:::

With that, we hope you for your success!

