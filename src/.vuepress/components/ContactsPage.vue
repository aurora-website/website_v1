<template>
	<div id="ContactCards" align="center">
		<el-row :gutter="12">
			<el-col :span="10" v-for="person in team" :key="person.name">
				<el-card
					class="card"
					:body-style="{ padding: '0px' }"
					shadow="hover"
				>
					<img class="image" :src="$withBase(person.image)"/>

					<div style="padding: 14px;">

						<div class="title">
							{{ person.name }}
						</div>

						<div class="role">
							{{ person.role }}
						</div>

						<div class="motto">
							~ {{ person.motto }}
						</div>

						<div class="buttons">
							<ElButton circle small type="instagram" @click="openInstagram(person)" @keyup.enter="openInstagram(person)" v-if="person.instagram != 0">
								<brand-instagram-icon />
							</ElButton>
							<ElButton circle small type="telegram" @click="openTelegram(person)" @keyup.enter="openTelegram(person)" v-if="person.telegram != 0">
								<brand-telegram-icon />
							</ElButton>
							<ElButton circle small type="email" @click="openEmail(person)" @keyup.enter="openEmail(person)" v-if="person.email != 0">
								<at-icon />
							</ElButton>
							<ElButton circle small type="gitlab" @click="openGitlab(person)" @keyup.enter="openGitlab(person)" v-if="person.gitlab != 0">
								<brand-gitlab-icon />
							</ElButton>
							<ElButton circle small type="github" @click="openGithub(person)" @keyup.enter="openGithub(person)" v-if="person.github != 0">
								<brand-github-icon />
							</ElButton>
						</div>

						<el-collapse accordion>
  							<el-collapse-item title="About" :name= person.name>
								<span class="about">
									{{ person.about }}
								</span>
							</el-collapse-item>
						</el-collapse>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>

  	export default {
		data: () => ({
			team: [
				{ name: 'Rahul Kumar Patel',
					role: '@whyorean | Lead Dev',
					image: '/assets/whyorean.jpg',
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'mailto:auroraoss.dev@gmail.com', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean', 
					motto: 'To be my true self',
					about: "I'm the project founder of AuroraOSS"
				},
				{ name: 'Disuq3Mirroir',
					role: '@Disqu3mirroir | Server Backend Dev', 
					image: '/assets/Disqu3mirroir.png',
					instagram: '',
					telegram: 'https://t.me/Disqu3mirroir ', 
					email: '', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean',
					motto: 'French croissant for life',
					about: "I'm the guy who does the server stuff behind Aurora Store"
				},
				{ name: 'Austin Hornhead',
					image: '/assets/austin.jpg',
					role: '@marchingon12 | Hobby Dev & Designer', 
					telegram: 'https://t.me/austinhornhead_12', 
					email: 'mailto:augustthegreat.cool@outlook.com', 
					gitlab: 'https://gitlab.com/marchingon12', 
					github: 'https://github.com/marchingon12',
					motto: 'Anime & Manga is life',
					about: 'Created the website'
				},
				{ name: 'Sunny Raj',
					role: '@CheDuckevara | Privacy Enthusiast',
					image: '/assets/sunny.jpg',
					instagram: '',
					telegram: 'https://t.me/sunnyraj', 
					email: '', 
					gitlab: '', 
					github: '', 
					motto: 'Quid est veritas?',
					about: 'OpenSource enthusiast and net political shiptoaster :D'
				},
				{ name: 'ℂ𝕐𝕃Δℕℂ€ ✪',
					image: '/assets/cylance.jpg',
					role: '@CYLANC | Contributor',
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'https://instagram.com/whyorean', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean',
					motto: 'Quid est veritas?',
					about: 'To be my true self'
				},
				{ name: 'Æïý€€ =ęę',
					image: '/assets/shanetheawesome.jpg',
					role: '@shanetheawesome | Contributor', 
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'https://instagram.com/whyorean', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean', 
					motto: 'Anime & Manga is life',
					about: 'Created the website'
				},
				{ name: 'Radek Błędowski',
					image: '/assets/radek.jpg',
					role: '@RKBDI | Designer', 
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'https://instagram.com/whyorean', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean', 
					motto: "Make stuff for yourself and don't care about others' opinion.",
					about: 'I design app icons and cool stuff'
				},
				{ name: 'Matt Murdock',
					image: '/assets/matt.jpg',
					role: '@whyorean | Telegram Moderator', 
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'https://instagram.com/whyorean', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean',
					motto: 'Anime & Manga is life',
					about: 'If possible, please support your favorite FOSS apps & Linux Distro(s)'
				},
				{ name: 'Marcel Alexandru Nitan',
					image: '/assets/snoopalex.jpg',
					role: '@snoopalex | Telegram Bot Dev', 
					instagram: 'https://instagram.com/whyorean',
					telegram: 'https://t.me/whyorean', 
					email: 'https://instagram.com/whyorean', 
					gitlab: 'https://gitlab.com/whyorean', 
					github: 'https://github.com/whyorean', 
					motto: 'Anime & Manga is life',
					about: 'Created the website'
				}
			]
		}),

		methods: {
			openInstagram(person) {
				window.open(person.instagram, '__blank');
			},
			openTelegram(person) {
				window.open(person.telegram, '__blank');
			},
			openEmail(person) {
				window.open(person.email, '__blank');
			},
			openGitlab(person) {
				window.open(person.gitlab, '__blank');
			},
			openGithub(person) {
				window.open(person.github, '__blank');
			}
		}

	}
</script>

<style lang="stylus">
#ContactCards
	.card
		text-align left
		
	.el-button
		font-size .875rem
		margin 0.1em !important
		padding 0.3rem 0.3rem
		border none
		&--instagram
			color $instagramAccentColor
			&:hover
				background-color lighten($instagramAccentColor, 70%)
		&--telegram
			color $telegramAccentColor
			&:hover
				background-color lighten($telegramAccentColor, 70%)
		&--email
			color $emailAccentColor
			&:hover
				background-color lighten($emailAccentColor, 70%)
		&--gitlab
			color $gitlabAccentColor
			&:hover
				background-color lighten($gitlabAccentColor, 70%)
		&--github
			color $githubAccentColor
			&:hover
				background-color lighten($githubAccentColor, 70%)
		
	@media (max-width: $MQMobile)
		.el-button
			padding 0.2rem 0.2rem

	.time
		font-size 13px
		color #999
	
	.title
		font-size 1.125rem
		font-weight bold
		padding 0.1rem 0.1rem

	.role
		font-size 0.9rem
		color grey
		padding 0.3rem 0.1rem
	
	.buttons
		align-items left
		background-color white
		margin 0.5rem 0.1rem
		padding 0.1rem 0.1rem

	.image
		width 334px
		heigth 334px
		display block

	.motto
		font-size 16px
		padding 0.7rem 0.1rem

	.expand
		font-size 20px

	.about
		font-size .875rem
</style>