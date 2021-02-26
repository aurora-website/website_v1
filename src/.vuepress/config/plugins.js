module.exports = [
	["@vuepress/plugin-back-to-top"],
	["vuepress-plugin-element-ui"],
	[
		"@vuepress/active-header-links",
		{
			sidebarLinkSelector: ".sidebar-link",
			headerAnchorSelector: ".header-anchor",
		},
	],
	[
		"@vuepress/pwa",
		{
			serviceWorker: true,
			popupComponent: "MySWUpdatePopup",
			updatePopup: true,
		},
	],
	[
		"vuepress-plugin-clean-urls",
		{
			normalSuffix: "/",
		},
	],
	[
		"vuepress-plugin-zooming",
		{
			selector: ".theme-default-content img.zoomable",
			delay: 1000,
			options: {
				bgColor: "black",
				bgOpacity: "0.8",
			},
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-tip",
			before: (info) => `<div class="custom-block c-tip"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-warning",
			before: (info) => `<div class="custom-block c-warning"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-danger",
			before: (info) => `<div class="custom-block c-danger"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "expander",
			before: (info) => `<details class="expander"><summary class="expansion">${info}</summary>`,
			after: "</details>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide",
			before: (info) => `<div class="guide"><p class="title">${info}</p>`,
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "videolink",
			before: "<div class='videolink'>",
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide-empty",
			before: "<div class='guide g-empty'>",
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "note",
			before: "<div class='note'><p>",
			after: "</div></p>",
		},
	],
	[
		"vuepress-plugin-code-copy",
		{
			color: "#696969",
			backgroundColor: "#696969",
			staticIcon: true,
		},
	],
];
