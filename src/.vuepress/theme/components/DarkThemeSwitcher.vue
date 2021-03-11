
<template>
	<div role="group" class="toggle__wrapper dark-theme-switcher">
		<input 
			type="checkbox" 
			id="theme-toggle" 
			v-model="darkTheme" 
			class="toggle" 
		/>
		<label for="theme-toggle" class="toggler">
			<SunIcon v-if="darkTheme==false" size="24px"/>
			<MoonIcon v-if="darkTheme==true" size="24px"/>
		</label>
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

<style scoped>
[type='checkbox'] {
  display: none;
}
label {
  display: block;
  background-color: transparent;
  cursor: pointer;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
:checked + label {
  background-color: transparent;
}
</style>



