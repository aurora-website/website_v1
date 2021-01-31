<template>
	<div id="DownloadButtonsDroid">
		<ElButton type="success" @click="downloadStable" @keyup.enter="downloadStable">
      		<cloud-download-icon size="19"/>
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.tagName }}</span>
		</ElButton>
		<span class="versionNotice">
			Requires
			<strong>Android 5.0</strong>
			or higher.
		</span>
	</div>
</template>

<script>
import { GITHUB_STABLE_RELEASE_DROID } from "../constants";

export default {
	data() {
		return {
			tagName: "0.0.0",
			browserDownloadUrl: "",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getDroidReleaseData");
			const apkAsset = data.assets.find(a => a.name.includes(".apk"));
			this.$data.tagName = data.tag_name;
			this.$data.browserDownloadUrl = apkAsset.browser_download_url;
		} catch (e) {
			console.error(e);
		}
	},

	methods: {
		downloadStable() {
			this.$swal({
				title: "Downloading",
				html: `Started downloading <strong>Aurora Droid Stable</strong>`,
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 3000,
				timerProgressBar: true,
				showClass: {
					popup: "animate__animated animate__faster animate__pulse",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
			});
			window.location.assign(this.$data.browserDownloadUrl || GITHUB_STABLE_RELEASE_DROID);
			window.ga("send", "event", "Action", "Download", "AuroraDroid");
		},
	},
};
</script>

<style lang="stylus">
#DownloadButtonsDroid
	text-align center
	.el-button
		border-radius 6px
		font-size 1.125rem
		margin 0.1em !important
		padding 12px 32px
		width 10em
		&:focus
			box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
			outline none
		&--success
			background-color $accentColor
			border-color $accentColor
			&:hover
				background-color lighten($accentColor, 10%)
				border-color lighten($accentColor, 10%)
			.downloadTag
				color lighten($accentColor, 75%)
		.spacing
			margin-right 16px
		.downloadTag
			font-size .75em
			font-weight bold
			margin-top 2px
	.versionNotice
		display block
		font-size .9rem
	@media (max-width: $MQMobile)
		.el-button
			width 8.2em
			padding 12px 28px
</style>
