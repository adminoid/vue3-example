<template lang="pug">
nav.navbar.navbar-fixed-top
  .container-fluid
    .navbar-left
      svg.navbar__sidebar-open(
        @click="sidebarToggle"
        width='45px' height='32px'
        viewBox='0 0 45 32'
        :class="{open: sidebarOpen}"
      )
        g#lines(fill='#FFF')
          rect#line-1(x='0' y='0' width='32' height='4' rx='2')
          rect.hovered(x='0' y='14' width='32' height='4' rx='2')
          rect#line-3(x='0' y='28' width='45' height='4' rx='2')
      img.logo(src="@/assets/logo-white.svg")
    .navbar-right Right nav
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const TopNavbar = defineComponent({
  setup () {
    const store = useStore()
    return {
      sidebarToggle: () => store.commit('layout/sidebarToggle'),
      sidebarOpen: computed(_ => store.state.layout.sidebar.open)
    }
  }
})

export default TopNavbar
</script>

<style lang="sass">
@import "src/sass/variables"
.navbar
  line-height: 2.5
  height: 56px
  .logo
    margin-left: 38px
  .navbar__sidebar-open
    cursor: pointer
    position: relative
    z-index: 100
    rect, g#lines
      transition: all $left-sidebar-animation-speed ease-in-out
    rect#line-1
      animation-name: to-open
      animation-duration: $left-sidebar-animation-speed
      animation-fill-mode: forwards
      width: 32px
    &:hover
      rect.hovered
        width: 45px
    &.open
      g#lines
        fill: #000
      rect#line-1
        animation-name: to-close
        animation-duration: $left-sidebar-animation-speed
        animation-fill-mode: forwards
        width: 40px
@keyframes to-close
  0%
    transform: translate(0) rotate(0deg)
  100%
    transform: translate(10px) rotate(45deg)
@keyframes to-open
  0%
    transform: translate(10px) rotate(45deg)
  100%
    transform: translate(0) rotate(0deg)
</style>
