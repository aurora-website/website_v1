<template>
	<div role="group" class="toggle__wrapper dark-theme-switcher">
		<input 
			type="checkbox" 
			id="theme-toggle" 
			v-model="darkTheme" 
			class="toggle" 
		/>
		<span class="toggler">
			<SunIcon v-if="darkTheme==false" size="24px"/>
			<MoonIcon v-if="darkTheme==true" size="24px"/>
		</span>
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

<style lang="stylus">
.toggle__wrapper {
	display: inline-block;
	line-height $navbarHeight - 1.4rem
}

.toggle__wrapper input {
	position relative
	cursor pointer
	opacity: 0;
	width: 0;
	height: 0;
}

.toggler {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}


</style>