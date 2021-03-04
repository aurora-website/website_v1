<template>
	<div role="group" class="toggle__wrapper dark-theme-switcher">
		<SunIcon />
		<input type="checkbox" id="theme-toggle" v-model="darkTheme" class="toggle" />
		<label for="theme-toggle" class="toggle__label">Dark</label>
		<MoonIcon />
	</div>
</template>

<script>
export default {
	data() {
		return {
			darkTheme: false
		};
	},
	watch: {
		darkTheme(newValue) {
			if(newValue) {
				window.localStorage.setItem('theme', 'dark');
				document.documentElement.setAttribute('data-theme', 'dark');
			} else {
				window.localStorage.setItem('theme', 'light');
				document.documentElement.setAttribute('data-theme', 'light');
			}
		},
	},
	mounted() {
		this.checkPreviouslyChosenTheme();
	},
	methods: {
		checkPreviouslyChosenTheme() {
			if (window.localStorage.getItem('theme') === 'dark') {
				document.documentElement.setAttribute('data-theme', 'dark');
				this.darkTheme = true;
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
			}
		}
	}
};
</script>
