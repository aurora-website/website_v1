<template>
	<div>
		<vue-good-table :columns="columns" :rows="rows"/>
	</div>
</template>

<script>
export default {
	name: "ServerTable",
	data() {
		return {
			columns: [
				{
					label: "Server",
					field: "server",
					sortable: false,
					tdClass: "text-center",
				},
				{
					label: "Status",
					field: "status",
					html: true,
					width: "100px",
					sortable: false,
					tdClass: "text-center",
				},
				{
					label: "Uptime (Last 30 days)",
					field: "uptime",
					html: true,
					width: "200px",
					sortable: false,
					tdClass: "text-center",
				},
			],
			rows: [
				{
					id: 1,
					server: "auroraoss.com:8080",
					status:
						'<img src="https://img.shields.io/uptimerobot/status/m787022460-31684f2d86b568f195aaf0b5" height="20px">',
					uptime:
						'<img src="https://img.shields.io/uptimerobot/ratio/m787022460-31684f2d86b568f195aaf0b5" height="20px">',
				},
				{
					id: 2,
					server: "goolag.store:1337",
					status:
						'<img src="https://img.shields.io/uptimerobot/status/m787152791-f54549435d15088aed904bd3" height="20px">',
					uptime:
						'<img src="https://img.shields.io/uptimerobot/ratio/m787152791-f54549435d15088aed904bd3" height="20px">',
				},
			],
		};
	},
};
</script>

<style lang="stylus">
.text-center
	text-align center
</style>
