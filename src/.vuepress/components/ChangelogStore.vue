<template>
	<div class="guide changelogStore">
		<p class="title">
			<notes-icon />
			Changelog
		</p>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-html="changelogStore"></div>
		<div class="note">
			<p>
				View the full release
				<a href="https://github.com/marchingon12/AuroraStore/releases/latest" target="_blank" rel="noopener">here</a>
			</p>
		</div>
	</div>
</template>

<script>
import marked from "marked";

export default {
	data() {
		return {
			changelogStore: "Failed to load data from GitHub.",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStoreReleaseData");
			this.$data.changelogStore = marked(data.body).replace(
				/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g,
				"<a href='https://github.com/$2' target='_blank' rel='noopener'>@$2</a>"
			);
		} catch (e) {
			console.error(e);
		}
	},
};
</script>

<style lang="stylus">
.changelogStore
	.title
		text-align center
	div
		white-space
		h3
			font-size 1.1rem
</style>
