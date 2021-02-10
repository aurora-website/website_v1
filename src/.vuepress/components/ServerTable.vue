<template>
	<div>
		<vue-good-table :columns="columns" :rows="rows" />
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
				},
				{
					label: "Status",
					field: "status",
					html: true,
					width: "83px",
					sortable: false,
				},
				{
					label: "Uptime (Last 30 days)",
					field: "uptime",
					html: true,
					width: "160px",
					sortable: false,
				},
			],
			rows: [
				{
					id: 1,
					server: "auroraoss.com:8080",
					status:
						'<img src="https://img.shields.io/uptimerobot/status/m786651508-fad67a53ecfca2d106edc6d0" width="82px" height="20px">',
					uptime:
						'<img src="https://img.shields.io/uptimerobot/ratio/m786651508-fad67a53ecfca2d106edc6d0" width="110px" height="20px">',
				},
				{
					id: 2,
					server: "auroraoss.in:8080",
					status:
						'<img src="https://img.shields.io/uptimerobot/status/m786651524-7fd4fe056ae1389d3157b60d" width="82px" height="20px">',
					uptime:
						'<img src="https://img.shields.io/uptimerobot/ratio/m786651524-7fd4fe056ae1389d3157b60d" width="110px" height="20px">',
				},
			],
		};
	},
};
</script>
