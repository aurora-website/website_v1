<template>
	<div id="UpiMobileButton">
		<ElButton type="success" @click="upiPayment" @keyup.enter="upiPayment">Donate via UPI</ElButton>
	</div>
</template>

<script>
export default {
	data() {
		return {
			browserDownloadUrl: "upi://pay?pa=whyorean@dbs&pn=Whyorean&tn=Aurora_OSS_Donation&am=undefined",
		};
	},

	methods: {
		upiPayment() {
			window.location.assign(this.$data.browserDownloadUrl);
		},
	},
};
</script>

<style lang="stylus">
#UpiMobileButton
	text-align center
	.el-button
		border-radius 6px
		font-size 1.125rem
		margin 0.1em !important
		padding 12px 32px
		width 10em
		height 3em
		&:focus
			box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
			outline none
		&--success
			background-color $accentColor
			border-color $accentColor
			&:hover
				background-color lighten($accentColor, 10%)
				border-color lighten($accentColor, 10%)
	@media (max-width: $MQMobile)
		.el-button
			width 8.2em
			padding 12px 28px
</style>
