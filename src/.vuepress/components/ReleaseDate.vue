<template>
	<div v-if="store" class="buildTime">
		<ElTooltip :content="storePublishExact" placement="top" :open-delay="250">
			<span>{{ storePublishRelative }}</span>
		</ElTooltip>
	</div>
	<div v-else-if="droid" class="buildTime">
		<ElTooltip :content="droidPublishExact" placement="top" :open-delay="250">
			<span>{{ droidPublishRelative }}</span>
		</ElTooltip>
	</div>
	<span v-else>You need to specify props.</span>
</template>

<script>
/**
 * Code example: <ReleaseDate preview />
 */
export default {
	props: {
		store: {
			type: Boolean,
			default: false,
		},
		droid: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			storePublishRelative: "at an unknown time",
			storePublishExact: "Can't connect to GitHub.",
			droidPublishRelative: "at an unknown time",
			droidPublishExact: "Can't connect to GitHub.",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStoreReleaseData");
			this.$data.storePublishRelative = this.$moment(data.published_at).fromNow();
			this.$data.storePublishExact = this.$moment(data.published_at).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getDroidReleaseData");
			this.$data.droidPublishRelative = this.$moment(data.published_at).fromNow();
			this.$data.droidPublishExact = this.$moment(data.published_at).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
	},
};
</script>

<style lang="stylus" scoped>
.buildTime
	font-weight bold
	display inline-block
</style>