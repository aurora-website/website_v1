<template>
	<aside class="sidebar">
		<NavLinks />

		<slot name="top" />

		<SidebarLinks :depth="0" :items="items" />
    <ClientOnly>
      <DarkThemeSwitcher class="toggleSide can-hide"/>
    </ClientOnly>
		<slot name="bottom" />
    
	</aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import DarkThemeSwitcher from "@theme/components/DarkThemeSwitcher.vue";
export default {
	name: "Sidebar",
	components: { SidebarLinks, NavLinks, DarkThemeSwitcher },
	props: ["items"],
};
</script>

<style lang="stylus">
.sidebar
  transition 0.2s ease-in-out
  background-color var(--navbarColor)
  border-right 1px solid var(--borderColor)
  .can-hide
    display none
  .sidebar-link
    color var(--textColor)
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid var(--borderColor)
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem
@media (max-width: $MQMobile)
  .sidebar
    .can-hide
      display block
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0

.toggleSide
  padding 1rem 1rem 1rem 1.25rem
</style>
