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
	<div v-else-if="warden" class="buildTime">
		<ElTooltip :content="wardenPublishExact" placement="top" :open-delay="250">
			<span>{{ wardenPublishRelative }}</span>
		</ElTooltip>
	</div>
	<div v-else-if="walls" class="buildTime">
		<ElTooltip :content="wallsPublishExact" placement="top" :open-delay="250">
			<span>{{ wallsPublishRelative }}</span>
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
		warden: {
			type: Boolean,
			default: false,
		},
		walls: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			storePublishRelative: "at an unknown time",
			storePublishExact: "Can't connect to server.",

			droidPublishRelative: "at an unknown time",
			droidPublishExact: "Can't connect to server.",

			wardenPublishRelative: "at an unknown time",
			wardenPublishExact: "Can't connect to server.",

			wallsPublishRelative: "at an unknown time",
			wallsPublishExact: "Can't connect to server.",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStoreStableReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.storePublishRelative = this.$moment(apkAsset.datetime).fromNow();
			this.$data.storePublishExact = this.$moment(apkAsset.datetime).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getDroidStableReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.droidPublishRelative = this.$moment(apkAsset.datetime).fromNow();
			this.$data.droidPublishExact = this.$moment(apkAsset.datetime).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getWardenReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.wardenPublishRelative = this.$moment(apkAsset.datetime).fromNow();
			this.$data.wardenPublishExact = this.$moment(apkAsset.datetime).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getWallsReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.wallsPublishRelative = this.$moment(apkAsset.datetime).fromNow();
			this.$data.wallsPublishExact = this.$moment(apkAsset.datetime).format("dddd, MMMM Do YYYY [at] HH:mm");
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
