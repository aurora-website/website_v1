const navBarConfig = require("./config/navBar");
const navBarDEConfig = require("./config/navBarDE");
const sideBarConfig = require("./config/sideBar");
const sideBarConfigDE = require("./config/sideBarDE");
const pluginsConfig = require("./config/plugins");

module.exports = {
	locales: {
		"/": {
			lang: "en-GB", // this will be set as the lang attribute on <html>
			title: "AuroraOSS",
			description:
				"An organization that aims to build applications that are easy to use & beautiful to look at. Aurora Apps Open-Source Software. Inspired by you. Built for the community.",
		},
		"/de/": {
			lang: "de",
			title: "AuroraOSS",
			description:
				"Eine Organization mit dem Ziel Apps zu erstellen die einfach zu benuzten sind und schön aussehen. Aurora Apps Open-Source-Software. Von euch inspiriert. Für die Community gebaut.",
		},
	},

	// Extra tags to be injected to the page HTML `<head>`
	head: [
		// required headers
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
		// important headers for metadata
		["meta", { property: "og:site_name", content: "AuroraOSS" }],
		// custom headers for PWA
		["link", { rel: "manifest", href: "/manifest.json" }],
		["meta", { name: "theme-color", content: "#b071e3" }],
		["meta", { name: "mobile-web-app-capable", content : "yes"}],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.webp" }],
		["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#3eaf7c" }],
		["meta", { name: "msapplication-TileImage", content: "/icons/msapplication-icon-144x144.webp" }],
		["meta", { name: "msapplication-TileColor", content: "#000000" }],
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		logo: "/icons/auroralogo.webp",
		// repo: "https://gitlab.com/marchingon12/AuroraOSS",
		// repo: "https://github.com/marchingon12/AuroraOSS",
		editLinks: false,
		docsRepo: "aurora-website/website_v1",
		docsDir: "src",
		docsBranch: "source",
		editLinks: true,
		editLinkText: "Help us improve this page",
		lastUpdated: "Last updated",
		smoothScroll: true,
		search: true,
		searchPlaceholder: "Search...",
		locales: {
			"/": {
				// text for language dropdown
				selectText: "Languages",
				// label for this language dropdown
				label: "English",
				// Aria Label for locale in dropdown
				ariaLabel: "Languages",
				// text for the edit-on-github link
				editLinkText: "Edit this page on GitHub",
				nav: navBarConfig,
				sidebar: {
					"/guides/": sideBarConfig.guides,
					"/contact/": sideBarConfig.contact,
					"/faq/": sideBarConfig.faq,
					"/contribution/": sideBarConfig.contribution,
					"/download/": sideBarConfig.download,
				},
			},
			"/de/": {
				selectText: "Sprachen",
				label: "Deutsch",
				ariaLabel: "Language Menu",
				editLinkText: "Seite auf GitHub bearbeiten",
				nav: navBarDEConfig,
				sidebar: {
					"/de/guides/": sideBarConfigDE.guides,
					"/de/contact/": sideBarConfigDE.contact,
					"/de/faq/": sideBarConfigDE.faq,
					"/de/contribution/": sideBarConfigDE.contribution,
					"/de/download/": sideBarConfigDE.download,
				},
			},
		},
	},
	plugins: pluginsConfig,
	extraWatchFiles: [
		".vuepress/config/plugins.js",
		".vuepress/config/navBar.js",
		".vuepress/config/navBarDE.js",
		".vuepress/config/sideBar.js",
		".vuepress/config/sideBarDE.js",
	],
	markdown: {
		lineNumbers: true
	}
};
