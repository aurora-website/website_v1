/* eslint-disable vue/comment-directive */
<div>
	<p align="center">
		<img src="./src/.vuepress/public/icons/auroralogo.webp" height="100px">
	</p>
	<h1 align="center">AuroraOSS Website</h1>
  <p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/aurora-website/website_v1">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/aurora-website/website_v1">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/aurora-website/website_v1">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fauroraoss.com">
    <a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." /></a>
    <img alt="Actively Maintained" src="https://img.shields.io/badge/Maintenance%20Level-Actively%20Maintained-green.svg"/>
  </p>

</div>

## About

This is the main repository for the website hosted at auroraoss.com. 

## Contributing

Before doing a PR or commit, read the following documents to make sure your PR or commit is valid:

- [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
- [CONTRIBUTING](CONTRIBUTING.md)

### Translations

The way translated pages work here is (will be) by using submodules in git. This allows a repository to exist within a repository, meaning we can have many content repositories in different languages without having to edit most of the main repo itself. Please read [this](https://gist.github.com/gitaarik/8735255) very well explained git gist on Git Submodules.

Every translation repo is assigned to a team, consisting of members who maintain the repo and check the content regularly. All changes must correspond with this parent repo.

- German: 
- French:
- Russian:
- Chinese:
- Spanish:
- Italian:
- Portuguese:

## Development

Starting development server:
```bash
# Using npm 
npm run dev
# Using vuepress
vuepress dev src
```

Building static files:
```bash
# Using npm 
npm run build
# Using vuepress
vuepress build src
```


## [License](LICENSE.md)

<details><summary>View license</summary>
<p>

    MIT License

    Copyright (c) 2021-present Austin Hornhead a.k.a austinhornhead_12/marchingon12

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
</p>
</details>


## Browser compatibility

### Chrome/Chromium-based Browsers & Firefox Desktop

You should have no problem with theming or CSS breaking.

### Firefox Mobile (Fenix)

You may experience JS breaking or random reloads while scrolling through the page.

The official Firefox has tons of fixes pending and many things still don't work with the mobile version. If you wish to remain using Firefox Mobile, use [Mull](https://divestos.org/fdroid/official/us.spotco.fennec_dos) by DivestOS, which you can download from their [F-Droid repository](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467): 
- Link: https://divestos.org/fdroid/official/
- Fingerprint: E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467

Their fork has most of the fixes that make it stable and to use. Check out their source code [here](https://gitlab.com/divested-mobile/mull-fenix).

With Mull you won't experience any problems.

## Credits

Kudos to the tachiyomiorg/website team for their help.
Huge thanks to [@robsonsobral](https://github.com/robsonsobral) for helping our with theming!

<a href="https://github.com/aurora-website/website_v1/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aurora-website/website_v1" />
</a>
