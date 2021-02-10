<template>
	<div id="DownloadButtonsStore">
		<ElButton v-if="store" type="success" @click="downloadStore" @keyup.enter="downloadStore">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.astoreTagName }}</span>
		</ElButton>
		<ElButton v-else-if="droid" type="success" @click="downloadDroid" @keyup.enter="downloadDroid">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.adroidTagName }}</span>
		</ElButton>
		<span class="versionNotice">
			Requires
			<strong>Android 5.0</strong>
			or higher.
		</span>
	</div>
</template>

<script>
import { GITHUB_STABLE_RELEASE_STORE, GITHUB_STABLE_RELEASE_DROID } from "../constants";

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
			astoreTagName: "0.0.0",
			storeDownloadUrl: "",
			adroidTagName: "0.0.0",
			droidDownloadUrl: "",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStoreReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.astoreTagName = data.tag_name;
			this.$data.storeDownloadUrl = apkAsset.browser_download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getDroidReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.adroidTagName = data.tag_name;
			this.$data.droidDownloadUrl = apkAsset.browser_download_url;
		} catch (e) {
			console.error(e);
		}
	},

	methods: {
		downloadStore() {
			this.$swal({
				title: "Downloading",
				html: `Started downloading <strong>Aurora Store Stable</strong>`,
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 3500,
				timerProgressBar: true,
				showClass: {
					popup: "animate__animated animate__faster animate__pulse",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
			});
			window.location.assign(this.$data.storeDownloadUrl || GITHUB_STABLE_RELEASE_STORE);
		},
		downloadDroid() {
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
			window.location.assign(this.$data.droidDownloadUrl || GITHUB_STABLE_RELEASE_DROID);
		},
	},
};
</script>

<style lang="stylus">
#DownloadButtonsStore
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
			font-size .7em
			margin-top 2px
	.versionNotice
		display block
		font-size .9rem
	@media (max-width: $MQMobile)
		.el-button
			width 8.2em
			padding 12px 28px
</style>
