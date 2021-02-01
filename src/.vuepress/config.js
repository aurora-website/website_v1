const navBarConfig = require("./config/navBar");
const navBarDEConfig = require("./config/navBarDE");
const sideBarConfig = require("./config/sideBar");
const pluginsConfig = require("./config/plugins");

module.exports = {
  locales: {
    '/': {
      lang: 'en-GB', // this will be set as the lang attribute on <html>
      title: 'AuroraOSS',
      description: 'An organization that aims to build applications that are easy to use & beautiful to look at. Aurora Apps Open-Source Software. Inspired by you. Built for the community.',
      // Extra tags to be injected to the page HTML `<head>`
      head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ['meta', { name: 'theme-color', content: '#f50057' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
      ],
    },
    '/de/': {
      lang: 'de',
      title: 'AuroraOSS',
      description: 'Eine Organization mit dem Ziel Apps zu erstellen die einfach zu benuzten sind und schön aussehen. Aurora Apps Open-Source-Software. Von euch inspiriert. Für die Community gebaut.',
      head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ['meta', { name: 'theme-color', content: '#f50057' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
      ],
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/icons/auroralogo.png',
    //repo: "https://gitlab.com/auroraoss/",
    editLinks: false,
    docsRepo: "/marchingon12/AuroraOSS",
    docsDir: 'src',
    lastUpdated: false,
    smoothScroll: true,
    search: true,
    searchPlaceholder: "Search...",
    locales: {
      '/': {
        // text for language dropdown
        selectText: 'Languages',
        // label for this language dropdown
        label: 'English',
        // Aria Label for locale in dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: navBarConfig,
        sidebar: {
          "/guides": sideBarConfig.guides,
          "/contact": sideBarConfig.contact,
          "/faq/": sideBarConfig.faq,
          "/contribution/": sideBarConfig.contribution,
          "/download/": sideBarConfig.download
        }
      },
      '/de/': {
        selectText: 'Sprachen',
        label: 'Deutsch',
        ariaLabel: 'Language Menu',
        editLinkText: 'Seite auf GitHub bearbeiten',
        serviceWorker: {
          updatePopup: {
            message: "Neue Inhalt verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        nav: navBarDEConfig,
        sidebar: {
          "/de/guides": sideBarConfig.guides,
          "/de/contact": sideBarConfig.contact,
          "/de/faq/": sideBarConfig.faq,
          "/de/contribution/": sideBarConfig.contribution,
          "/de/download/": sideBarConfig.download
        },
      }
    },
  },
  plugins: pluginsConfig,
  extraWatchFiles: [
    ".vuepress/config/plugins.js",
    ".vuepress/config/navBar.js",
    ".vuepress/config/navBarDE.js",
    ".vuepress/config/sideBar.js"
  ]
}
