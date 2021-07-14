<template lang="pug">
nav.navbar.navbar-fixed-top
  .container-fluid
    .navbar-left
      svg.navbar__sidebar-open(
        @click="sidebarToggle"
        width='45px' height='32px'
        viewBox='0 0 45 32'
      )
        g(fill='#FFF')
          rect(x='0' y='0' width='32' height='4' rx='2')
          rect.hovered(x='0' y='14' width='32' height='4' rx='2')
          rect(x='0' y='28' width='45' height='4' rx='2')
      img.logo(src="@/assets/logo-white.svg")
    .navbar-right Right nav
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

const TopNavbar = defineComponent({
  setup () {
    const store = useStore()
    return {
      sidebarToggle: () => store.commit('layout/sidebarToggle')
    }
  }
})

export default TopNavbar
</script>

<style lang="sass">
.navbar
  line-height: 2.5
  height: 56px
  .logo
    margin-left: 38px
  .navbar__sidebar-open
    cursor: pointer
    rect.hovered
      transition: width 100ms ease-in-out
    &:hover
      rect.hovered
        width: 45px
</style>
