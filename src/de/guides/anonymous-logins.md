---
title: Anonymous Logins
description: A short explantion on how Anonymous Logins work.
lang: de
meta:
  - property: og:image
    content: /icons/aurora_store.png
sidebar: true
---

# Anonymous Logins
![Anonymous Logins](/assets/undraw_authentication.svg)

## How does it work?

**Anonymous login feature is great for privacy enthusiasts however there are certain things you should know.**

1. **What is a Token Dispenser?**

	A token dispenser is a web client, that has around 150 real google accounts (inclusive of all servers), it distributes the AuthToken[2] for anyone how makes a request to it in a defined format.

	So basically all dispensers have the email-password (now aas tokens) pairs on the server, when a user makes a request, the server logs in to google using provided dummy accounts, generates authentication token and this token is given to the user.

	All the dispensers are configured to use dummy device profiles, default : Xiaomi Mi5.

	(Why Xiaomi ? Because I had this device when I first started android developement, nothing else. China has nothing to do with it. Chill !)

2. **What is an AuthToken?**

	In simple terms its a token that lets you access PlayStore service.

	There are other complementary tokens required to make the api work, but that's done via Aurora Store and not related to Dispensers, so I would prefer avoiding it.  

3. **Why do Aurora Store always say "Session-expired"?**

	There are multiple things that may cause it:

	1. Multiple users are logged in using same dummy account provide by the dispenser, in different geographic locations.

	2. There is a limit for concurrent active login sessions, post that limit, Google invalidates all sessions.

	3. Recently google started putting a "rate-limit" on the usage of api, so if it detects overuse of the api, it just invalidates the authentication token.

	How does Aurora reach the rate-limit ? The search logic I use now is just stupid greedy approach, but it works, so !

	I will improve it and try to match how exactly Play Store does it.

4. Why am I not able to login anonymously [OR] I'm able to login on device A and not on device B ?

	Again there can be multiple reasons:

	1. Network configuration, make sure Aurora Store has access to internet.

	2. Network filter, make sure you haven't blacklisted "Cloud Flare" all the dispenser are behind Cloud Flare, so if its DNS is blocked, you cant reach dispensers.

	3. Tor connections [OR] Orbot setup, again Cloud Flare has some weird issues with TOR setup, I'm looking into it.

5. **What all data is sent to Google if I'm logged in as Anonymous.**

	I won't lie, this is what and why I send these data to Google.

	a. Your complete build.prop

	Why ? Play Store is a chaos, the hierarchy of apis, abis, locale, geo so very complex in Android. A single app has multiple versions, for different sdk levels (K,L..O), architecture x86,x64,ARM,ARM64, then locales, then different OEM specific library support. These all together are used to make a decision as what exact app version Aurora Store should download. So its mandatory I cant avoid. However you may choose to spoof it with build prop of someone else, or with a device that has same configuration as yours.

	b. A list of your installed apps

	WTF ! Why ?

	Umm, quite obvious, if I need to download updates then I should tell Google that these are the apps I want to check updates for. Google's repo is very large, I can not afford to maintain a separate centralized server to maintain metadata.

	Recently I thought of an idea to tackle this other way, like when we send our app list, we would dope it with some random apps that we haven't even installed. Then check for updates and parse only the required app data. Smart ? No ! Google is way too smart. I'm open to discuss about it and may implement it, if it turns out to be useful.

Join Aurora's Support Group on Telegram for more on this: [@AuroraSupport](tg://resolve?domain=AuroraSupport)

Written by Rahul Patel, original article can be found [here](https://telegra.ph/Aurora-Store---Anonymous-Login-12-20-2).
