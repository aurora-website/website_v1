<template>
	<main class="home" aria-labelledby="main-title">
		<header class="hero">
			<img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'Logo'" />

			<h1 v-if="data.heroText !== null" id="main-title">
				{{ data.heroText || "AuroraOSS" }}
			</h1>

			<p v-if="data.tagline !== null" class="description">
				{{ data.tagline || "Aurora Apps Open-Source Software. Inspired by you. Built for the community." }}
			</p>

			<p v-if="data.downloadText || data.faqText" class="action">
				<a
					v-if="data.downloadText"
					class="action-button action-button__Download"
					tabindex="0"
					rel="next"
					:href="data.downloadLink"
				>
					<cloud-download-icon size="20px" />
					{{ data.downloadText }}
				</a>
				<a
					v-if="data.faqText"
					class="action-button action-button__Faqs"
					tabindex="0"
					rel="next"
					:href="data.faqLink"
				>
					<messages-icon size="20px" />
					{{ data.faqText }}
				</a>
			</p>
		</header>

		<div v-if="data.features && data.features.length" class="features">
			<div v-for="(feature, index) in data.features" :key="index" class="feature">
				<div class="feature__Details">
					<h2>{{ feature.title }}</h2>
					<p>{{ feature.details }}</p>
				</div>
			</div>
		</div>

		<Content class="theme-default-content custom" />

		<footer>
			<div v-if="data.footer" class="footer">
				{{ data.footer }}
			</div>
		</footer>
	</main>
</template>

<script>
export default {
	name: "Home",

	computed: {
		data() {
			return this.$page.frontmatter;
		},

		downloadText() {
			return {
				link: this.data.downloadLink,
				text: this.data.downloadText,
			};
		},

		faqText() {
			return {
				link: this.data.faqLink,
				text: this.data.faqText,
			};
		},
	},
};
</script>

<style lang="stylus">
.home
	display block
	margin 0px auto
	max-width $homePageWidth
	padding $navbarHeight 2rem 0
	.hero
		text-align center
		img
			display block
			margin 1rem auto
			max-height $heroImageHeight
			max-width: 100%
		h1
			font-size 3rem
		h1, .description, .action
			margin 1rem auto
		.description
			color $textColor
			font-size 1.6rem
			line-height 1.3
			margin 1rem auto
			max-width 35rem
		.action
			user-select none
			margin 2rem auto
			.action-button
				border-bottom 1px solid darken($accentColor, 10%)
				border-radius 4px
				box-sizing border-box
				color darken($textColor, 10%)
				cursor pointer
				display inline-block
				font-family $fontButton
				font-size 1.125rem
				margin 0.25rem
				padding 0.8rem
				transition background-color .1s ease
				width 10rem
				.icon.outbound
					display none
				&__Download
					background-color $accentColor
					border-bottom 1px solid darken($accentColor, 10%)
					&:hover
						background-color lighten($accentColor, 10%)
				&__Faqs
					background-color $accentColorSecondary
					border-bottom 1px solid darken($accentColorSecondary, 10%)
					&:hover
						background-color lighten($accentColorSecondary, 10%)
				&:focus
					box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
					outline none
	.features
		border-top 1px solid $borderColor
		padding 1rem 0
		margin-top 1rem
		display flex
		flex-direction row
		flex-wrap wrap
		align-items flex-start
		align-content stretch
		justify-content space-evenly
	.feature
		flex 1
		flex-basis 30%
		max-width 30%
		text-align center
		&__Details
			min-height 9rem
			h2
				font-size 1.4rem
				font-weight 500
				border-bottom none
				padding-bottom 0
				color $textColor
			p
				color $textColor
	footer
		position relative
		.footer
			padding 2.5rem
			border-top 1px solid $borderColor
			text-align center
			color $textColor

@keyframes fade
	0%
		opacity 1
	25%
		opacity 1
	75%
		opacity 0
	100%
		opacity 0

@media (max-width: $MQNarrow)
	.home
		.feature
			&__Details
				min-height 11rem !important

@media (max-width: $MQMobile)
	.home
		.features
			flex-direction column
		.feature
			max-width 100%
			padding 0 2.5rem
			&__Details
				min-height 8rem !important

@media (max-width: $MQMobileNarrow)
	.home
		padding-left 1.5rem
		padding-right 1.5rem
		.hero
			img
				max-height 6rem
				margin 2rem auto 1.2rem
			h1
				font-size 2rem
			h1, .description, .action
				margin 1.2rem auto
			.description
				font-size 1.2rem
			.action-button
				font-size 1rem
				padding 0.6rem 1.2rem
		.feature
			h2
				font-size 1.8rem
</style>
