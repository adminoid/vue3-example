<template lang="pug">
nav.navbar.navbar-fixed-top
  .container-fluid
    .navbar-left
      svg.navbar__sidebar-open(
        @click="toggle"
        width='45px' height='32px'
        viewBox='0 0 45 32'
        :class="{open: sidebarOpen, ready: animationAvailable}"
      )
        g#lines(fill='#FFF')
          rect#line-1(x='0' y='0' width='32' height='4' rx='2')
          rect#line-2(x='0' y='14' width='32' height='4' rx='2')
          rect#line-3(x='0' y='28' width='45' height='4' rx='2')
      img.logo(src="@/assets/logo-white.svg")
    .navbar-right Right nav
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

const TopNavbar = defineComponent({
  setup () {
    const store = useStore()
    const animationAvailable = ref(false)
    const toggle = () => {
      /**
       * Var animationAvailable prevented animation when the page is loaded.
       * Animation works only after the first click
       */
      animationAvailable.value = true
      store.commit('layout/sidebarToggle')
    }
    return {
      sidebarOpen: computed(_ => store.state.layout.sidebar.open),
      animationAvailable,
      toggle
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
    &:hover
      rect#line-2
        width: 45px
    &.ready
      rect#line-1
        animation-name: to-open-line-1
        animation-duration: $left-sidebar-animation-speed
        animation-fill-mode: forwards
        width: 32px
      rect#line-2
        animation-name: to-open-line-2
        animation-duration: $left-sidebar-animation-speed
        animation-fill-mode: forwards
      rect#line-3
        animation-name: to-open-line-3
        animation-duration: $left-sidebar-animation-speed
        animation-fill-mode: forwards

      &.open
        g#lines
          fill: #000
        rect#line-1
          animation-name: to-close-line-1
          animation-duration: $left-sidebar-animation-speed
          animation-fill-mode: forwards
          width: 41px
        rect#line-2
          animation-name: to-close-line-2
          animation-duration: $left-sidebar-animation-speed
          animation-fill-mode: forwards
        rect#line-3
          animation-name: to-close-line-3
          animation-duration: $left-sidebar-animation-speed
          animation-fill-mode: forwards
          width: 41px

@keyframes to-close-line-1
  0%
    transform: translate(0) rotate(0deg)
  100%
    transform: translate(9px, 0px) rotate(45deg)
@keyframes to-open-line-1
  0%
    transform: translate(9px, 0px) rotate(45deg)
  100%
    transform: translate(0) rotate(0deg)

@keyframes to-close-line-2
  0%
    opacity: 1
  100%
    opacity: 0

@keyframes to-open-line-2
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes to-close-line-3
  0%
    transform: translate(0) rotate(0deg)
  100%
    transform: translate(-14px, 9px) rotate(-45deg)
@keyframes to-open-line-3
  0%
    transform: translate(-14px, 9px) rotate(-45deg)
  100%
    transform: translate(0) rotate(0deg)

</style>
