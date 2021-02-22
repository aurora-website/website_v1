<template>
	<div id="ContactCards">
		<ElRow>
			<ElCol v-for="person in team" :key="person.name">
				<ElCard :body-style="{ padding: '0px' }" width="100%" shadow="hover">
					<img class="image" :src="$withBase(person.image)" />

					<div style="padding: 14px">
						<div class="title">
							{{ person.name }}
						</div>

						<div class="role">
							{{ person.role }}
						</div>

						<div class="motto">
							{{ person.motto }}
						</div>

						<div class="buttons">
							<ElButton
								v-if="person.facebook != 0"
								circle
								small
								type="facebook"
								@click="openFacebook(person)"
								@keyup.enter="openFacebook(person)"
							>
								<BrandFacebookIcon />
							</ElButton>
							<ElButton
								v-if="person.instagram != 0"
								circle
								small
								type="instagram"
								@click="openInstagram(person)"
								@keyup.enter="openInstagram(person)"
							>
								<BrandInstagramIcon />
							</ElButton>
							<ElButton
								v-if="person.telegram != 0"
								circle
								small
								type="telegram"
								@click="openTelegram(person)"
								@keyup.enter="openTelegram(person)"
							>
								<BrandTelegramIcon />
							</ElButton>
							<ElButton
								v-if="person.email != 0"
								circle
								small
								type="email"
								@click="openEmail(person)"
								@keyup.enter="openEmail(person)"
							>
								<AtIcon />
							</ElButton>
							<ElButton
								v-if="person.gitlab != 0"
								circle
								small
								type="gitlab"
								@click="openGitlab(person)"
								@keyup.enter="openGitlab(person)"
							>
								<BrandGitlabIcon />
							</ElButton>
							<ElButton
								v-if="person.github != 0"
								circle
								small
								type="github"
								@click="openGithub(person)"
								@keyup.enter="openGithub(person)"
							>
								<BrandGithubIcon />
							</ElButton>
						</div>

						<ElCollapse accordion>
							<ElCollapseItem title="About" :name="person.name">
								<span class="about">
									{{ person.about }}
								</span>
							</ElCollapseItem>
						</ElCollapse>
					</div>
				</ElCard>
			</ElCol>
		</ElRow>
	</div>
</template>

<script>
export default {
	data: () => ({
		team: [
			{
				name: "Rahul Kumar Patel",
				role: "@whyorean | Lead Dev",
				image: "/assets/whyorean.jpg",
				facebook: "",
				instagram: "https://instagram.com/whyorean",
				telegram: "https://t.me/whyorean",
				email: "mailto:auroraoss.dev@gmail.com",
				gitlab: "https://gitlab.com/whyorean",
				github: "https://github.com/whyorean",
				motto: "To be my true self.",
				about: "I'm the project founder of AuroraOSS.",
			},
			{
				name: "Disuq3Mirroir",
				role: "@Disqu3mirroir | Server Backend Dev",
				image: "/assets/Disqu3mirroir.png",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/Disqu3mirroir ",
				email: "",
				gitlab: "",
				github: "",
				motto: "French croissant for life.",
				about: "I'm the guy who does the server stuff behind Aurora Store.",
			},
			{
				name: "Austin Hornhead",
				image: "/assets/austin.jpg",
				role: "@marchingon12 | Hobby Dev & Designer",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/austinhornhead_12",
				email: "mailto:augustthegreat.cool@outlook.com",
				gitlab: "https://gitlab.com/marchingon12",
				github: "https://github.com/marchingon12",
				motto: "Anime & Manga is life.",
				about: "I write docs and created the website.",
			},
			{
				name: "Iacob Ionut",
				role: "@iacobionut | Android UI/UX Dev",
				image: "/assets/iacobionut.jpg",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/iacobionut",
				email: "",
				gitlab: "https://gitlab.com/IacobIonut01",
				github: "https://github.com/IacobIonut01",
				motto: "A.I. is kicking my ass out of the Earth.",
				about: "Trying to make stuff pretty.",
			},
			{
				name: "Sunny Raj",
				role: "@CheDuckevara | Privacy Enthusiast",
				image: "/assets/sunny.jpg",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/sunnyraj",
				email: "",
				gitlab: "",
				github: "",
				motto: "Quid est veritas?",
				about: "OpenSource enthusiast and net political shiptoaster :D",
			},
			{
				name: "ℂ𝕐𝕃Δℕℂ€ ✪",
				image: "/assets/cylance.jpg",
				role: "@CYLANC | Contributor & Moderator",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/cylanc",
				email: "",
				gitlab: "",
				github: "",
				motto: "...🐣",
				about: "Moi have nothing 2 say.",
			},
			{
				name: "Æïý€€ =ęę",
				image: "/assets/shanetheawesome.jpg",
				role: "@shanetheawesome | Contributor",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/shanetheawesome",
				email: "",
				gitlab: "",
				github: "",
				motto: "Sleep is all u need.",
				about: "I'm part of the reason why Aurora Store exists.",
			},
			{
				name: "Radek Błędowski",
				image: "/assets/radek.jpg",
				role: "@RKBDI | Designer",
				instagram: "https://instagram.com/rkbdi",
				facebook: "",
				telegram: "https://t.me/RKBDI",
				email: "",
				gitlab: "https://gitlab.com/RKBDI",
				github: "",
				motto: "Make stuff for yourself and don't care about others' opinion.",
				about: "I design app icons and cool stuff.",
			},
			{
				name: "Matt Murdock",
				image: "/assets/matt.jpg",
				role: "@mattmurdock86 | Telegram Moderator",
				facebook: "",
				instagram: "",
				telegram: "https://t.me/mattmurdock86",
				email: "",
				gitlab: "",
				github: "",
				motto: "Never Stop Trying.",
				about: "If possible, please support your favorite FOSS apps & Linux Distro(s).",
			},
			{
				name: "Marcel Alexandru Nitan",
				image: "/assets/snoopalex.jpg",
				role: "@snoopalex | Telegram Bot Dev",
				facebook: "https://www.facebook.com/marcel.alexandru.3939/",
				instagram: "https://www.instagram.com/nitan.alexandru/",
				telegram: "https://t.me/whyorean",
				email: "mailto:nitan.marcel@gmail.com",
				gitlab: "https://gitlab.com/whyorean",
				github: "https://github.com/nitanmarcel",
				motto:
					"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. ~ Mary Kay Ash",
				about: "Created the bots for our Telegram support chat, keeping humans in check!",
			},
		],
	}),

	methods: {
		openFacebook(person) {
			window.open(person.facebook, "__blank");
		},
		openInstagram(person) {
			window.open(person.instagram, "__blank");
		},
		openTelegram(person) {
			window.open(person.telegram, "__blank");
		},
		openEmail(person) {
			window.open(person.email, "__blank");
		},
		openGitlab(person) {
			window.open(person.gitlab, "__blank");
		},
		openGithub(person) {
			window.open(person.github, "__blank");
		},
	},
};
</script>

<style lang="stylus">
#ContactCards
	display grid

	.el-card
		width 100%
		background-color $backgroundColorSecondary
		border none

	.el-row
		display grid
		grid-template-columns repeat(2, 1fr)
		grid-auto-rows minmax(100px, auto)
		gap 10px
		grid-column-start initial

	.el-row::after,
	.el-row::before
		display none

	.el-progress-bar__inner::after,
	.el-row::after,
	.el-row::before,
	.el-slider::after,
	.el-slider::before,
	.el-slider__button-wrapper::after,
	.el-upload-cover::after
		content none

	.el-col
		display inline-block
		grid-column-start inherit

	.el-button
		background-color transparent
		font-size .875rem
		margin 0.1em !important
		padding 0.3rem 0.3rem
		border none
		&--facebook
			color $facebookAccentColor
			&:hover
				background-color transparentify(lighten($facebookAccentColor, 80%))
		&--instagram
			color $instagramAccentColor
			&:hover
				background-color transparentify(lighten($instagramAccentColor, 80%))
		&--telegram
			color $telegramAccentColor
			&:hover
				background-color transparentify(lighten($telegramAccentColor, 80%))
		&--email
			color $emailAccentColor
			&:hover
				background-color transparentify(lighten($emailAccentColor, 80%))
		&--gitlab
			color $gitlabAccentColor
			&:hover
				background-color transparentify(lighten($gitlabAccentColor, 80%))
		&--github
			color $githubAccentColor
			&:hover
				background-color transparentify(lighten($githubAccentColor, 80%))

	@media (max-width: $MQMobileNarrow)
		.el-button
			padding 0.2rem 0.2rem
		.el-row
			grid-template-columns repeat(1, 1fr)

	.title
		font-size 1.125rem
		font-weight bold
		padding 0.1rem 0.1rem
		color $textColor

	.role
		font-size 0.9rem
		color lighten(grey, 5%)
		padding 0.3rem 0.1rem

	.buttons
		align-items left
		background-color $backgroundColorSecondary
		margin 0.5rem 0.1rem
		padding 0.1rem 0.1rem

	.image
		width 100%
		height 100%
		display block

	.motto
		font-size 16px
		padding 0.7rem 0.1rem
		color $textColor

	.about
		font-size .875rem
		color $textColor
</style>
