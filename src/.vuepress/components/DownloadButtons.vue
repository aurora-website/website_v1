<template>
	<div id="DownloadButtons">
		<ElButton v-if="storeStable" type="success" @click="downloadStoreStable" @keyup.enter="downloadStoreStable">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.astoreTagNameStable }}</span>
		</ElButton>
		<ElButton v-if="storeNightly" type="warning" @click="downloadStoreNightly" @keyup.enter="downloadStoreNightly">
			<RocketIcon size="19" />
			<span class="spacing">Nightly</span>
			<br />
			<span class="downloadTag">{{ this.$data.astoreTagNameNightly }}</span>
		</ElButton>
		<ElButton v-if="droidStable" type="success" @click="downloadDroidStable" @keyup.enter="downloadDroidStable">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.adroidTagNameStable }}</span>
		</ElButton>
		<ElButton v-if="droidNightly" type="warning" @click="downloadDroidNightly" @keyup.enter="downloadDroidNightly">
			<RocketIcon size="19" />
			<span class="spacing">Nightly</span>
			<br />
			<span class="downloadTag">{{ this.$data.adroidTagNameNightly }}</span>
		</ElButton>
		<ElButton v-if="warden" type="success" @click="downloadWarden" @keyup.enter="downloadWarden">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.awardenTagName }}</span>
		</ElButton>
		<ElButton v-if="walls" type="success" @click="downloadWalls" @keyup.enter="downloadWalls">
			<CloudDownloadIcon size="19" />
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.awallsTagName }}</span>
		</ElButton>
		<span v-if="storeStable || storeNightly" class="versionNotice">
			Requires
			<strong class="versionNumber">Android 4.4</strong>
			or higher.
		</span>
		<span v-else class="versionNotice">
			Requires
			<strong class="versionNumber">Android 5.0</strong>
			or higher.
		</span>
	</div>
</template>

<script>
export default {
	props: {
		storeStable: {
			type: Boolean,
			default: false,
		},
		storeNightly: {
			type: Boolean,
			default: false,
		},
		droidStable: {
			type: Boolean,
			default: false,
		},
		droidNightly: {
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
			astoreTagNameStable: "0.0.0",
			storeStableDownloadUrl: "",

			astoreTagNameNightly: "YYYYDDMMHHMM",
			storeNightlyDownloadUrl: "",

			adroidTagNameStable: "0.0.0",
			droidStableDownloadUrl: "",

			adroidTagNameNightly: "YYYYDDMMHHMM",
			droidNightlyDownloadUrl: "",

			awardenTagName: "0.0.0",
			wardenDownloadUrl: "",

			awallsTagName: "0.0.0",
			wallsDownloadUrl: "",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStoreStableReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.astoreTagNameStable = data.tag_name;
			this.$data.storeStableDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getStoreNightlyReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.astoreTagNameNightly = data.tag_name;
			this.$data.storeNightlyDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getDroidStableReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.adroidTagNameStable = data.tag_name;
			this.$data.droidStableDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getDroidNightlyReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.adroidTagNameNightly = data.tag_name;
			this.$data.droidNightlyDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getWardenReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.awardenTagName = data.tag_name;
			this.$data.wardenDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getWallsReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.awallsTagName = data.tag_name;
			this.$data.wallsDownloadUrl = apkAsset.download_url;
		} catch (e) {
			console.error(e);
		}
	},

	methods: {
		downloadStoreStable() {
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
			window.location.assign(
				this.$data.storeStableDownloadUrl || "https://files.auroraoss.com/AuroraStore/Stable"
			);
		},
		downloadStoreNightly() {
			this.$swal({
				icon: "warning",
				title: "Are you sure?",
				html: `
					<strong>Aurora Store Nightly</strong> are daily autobuilds that include the latest dependencies and changes from the repo.
					<div class="note">
						<p>
							Read more about Nightly Autobuilds
							<a href="/faq/#what-are-nightly-autobuilds" rel="help">here</a>.
						</p>
					</div>`,
				confirmButtonText: "I am sure.",
				showCloseButton: true,
				showCancelButton: false,
				showClass: {
					popup: "animate__animated animate__headShake",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
				customClass: {
					content: "swal2-downloadPreview_content",
				},
				// eslint-disable-next-line no-shadow
			}).then((result) => {
				if (result.value) {
					this.$swal({
						icon: "success",
						title: "Downloading",
						html: `Started downloading <strong>Aurora Store Nightly</strong>`,
						confirmButtonText: "Dismiss",
						showCloseButton: false,
						showCancelButton: false,
						timer: 3000,
						timerProgressBar: true,
						showClass: {
							popup: "animate__animated animate__faster animate__pulse",
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut",
						},
					});
					window.location.assign(
						this.$data.storeNightlyDownloadUrl || "https://files.auroraoss.com/AuroraStore/Nightly"
					);
				}
			});
		},
		downloadDroidStable() {
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
			window.location.assign(
				this.$data.droidStableDownloadUrl || "https://files.auroraoss.com/AuroraDroid/Stable"
			);
		},
		downloadDroidNightly() {
			this.$swal({
				icon: "warning",
				title: "Are you sure?",
				html: `
					<strong>Aurora Droid Nightly</strong> are daily autobuilds that include the latest dependencies and changes from the repo.
					<div class="note">
						<p>
							Read more about Nightly Autobuilds
							<a href="/faq/#what-are-nightly-autobuilds" rel="help">here</a>.
						</p>
					</div>`,
				confirmButtonText: "I am sure.",
				showCloseButton: true,
				showCancelButton: false,
				showClass: {
					popup: "animate__animated animate__headShake",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
				customClass: {
					content: "swal2-downloadPreview_content",
				},
				// eslint-disable-next-line no-shadow
			}).then((result) => {
				if (result.value) {
					this.$swal({
						icon: "success",
						title: "Downloading",
						html: `Started downloading <strong>Aurora Droid Nightly</strong>`,
						confirmButtonText: "Dismiss",
						showCloseButton: false,
						showCancelButton: false,
						timer: 3000,
						timerProgressBar: true,
						showClass: {
							popup: "animate__animated animate__faster animate__pulse",
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut",
						},
					});
					window.location.assign(
						this.$data.droidNightlyDownloadUrl || "https://files.auroraoss.com/AuroraDroid/Nightly"
					);
				}
			});
		},
		downloadWarden() {
			this.$swal({
				title: "Downloading",
				html: `Started downloading <strong>App Warden Stable</strong>`,
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
			window.location.assign(this.$data.wardenDownloadUrl || "https://files.auroraoss.com/Warden/Stable");
		},
		downloadWalls() {
			this.$swal({
				title: "Downloading",
				html: `Started downloading <strong>Aurora Wallpapers Stable</strong>`,
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
			window.location.assign(this.$data.wallsDownloadUrl || "https://files.auroraoss.com/Wallpapers");
		},
	},
};
</script>

<style lang="stylus">
#DownloadButtons
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
		&--warning
			background-color $accentColorSecondary
			border-color $accentColorSecondary
			&:hover
				background-color lighten($accentColorSecondary, 10%)
				border-color  lighten($accentColorSecondary, 10%)
			.downloadTag
				color lighten($accentColorSecondary, 75%)
		.spacing
			margin-right 16px
		.downloadTag
			font-size .7em
			margin-top 2px
	.versionNotice
		display block
		font-size .9rem
		padding .1rem
		.versionNumber
			color darken($accentColor, 10%)
	@media (max-width: $MQMobile)
		.el-button
			width 8.2em
			padding 12px 28px
.swal2-
	&downloadPreview_
		&content
			.note
				text-align center
</style>
