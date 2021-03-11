
<template>
	<div role="group" class="toggle__wrapper dark-theme-switcher">
		<label class="toggler">
			<input 
				type="checkbox" 
				v-model="darkTheme" 
				class="toggle" 
			/>
			<div v-if="darkTheme==false">
				<SunIcon size="24px"/><span class="hidden">Light Theme</span>
			</div>
			<div v-if="darkTheme==true">
				<MoonIcon size="24px"/><span class="hidden">Dark Theme</span>
			</div>
			
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

<style lang="stylus" scoped>
[type='checkbox'] {
  display: none;
}
label {
  display: block;
  background-color: transparent;
  cursor: pointer;
}
:checked + label {
  background-color: transparent;
}
.hidden
	display none

@media (max-width: $MQMobile)
	.hidden
		display inline-block
		font-size 1.1em
		line-height 1.5
		font-weight bold
		vertical-align top
		padding-left 10px

</style>



