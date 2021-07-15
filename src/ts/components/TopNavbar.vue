<template lang="pug">
nav.navbar.navbar-fixed-top
  .container-fluid
    a.navbar-left(@click="toggle")
      svg.navbar__sidebar-open(
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
@import "TopNavbar"
</style>
