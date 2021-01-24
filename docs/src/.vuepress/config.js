const navBarConfig = require("./config/navBar");
const sideBarConfig = require("./config/sideBar");
const pluginsConfig = require("./config/plugins");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'AuroraOSS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "An organization that aims to build applications that are easy to use & beautiful to look at. Aurora Apps Open-Source Software. Inspired by you. Built for the community.",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#f50057' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/sample.jpg',
    repo: '',
    editLinks: false,
    docsRepo: "AuroraOSS/docs",
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
          "/help/guides": sideBarConfig.guides
        }
      },
      'lang/de/': {
        selectText: 'Sprachen',
        lable: 'Deutsch',
        ariaLabel: 'Sprachen',
        editLinkText: 'Seite auf GitHub bearbeiten',
        serviceWorker: {
          updatePopup: {
            message: "Neue Inhalt verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        nav: navBarConfig,
        sidebar: sideBarConfig,
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: pluginsConfig
}
