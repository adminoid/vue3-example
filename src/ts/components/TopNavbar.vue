<template lang="pug">
nav.navbar.navbar-fixed-top
  .container-fluid
    .navbar-left
      a.navbar__toggle-sidebar.btn-outline-dark(
        href="#"
        @click.prev="toggleSidebar"
      ) (+)
    .navbar-right Right nav
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

const TopNavbar = defineComponent({
  setup () {
    const store = useStore()
    return {
      toggleSidebar: () => store.commit('layout/toggleSidebar')
    }
  }
})

export default TopNavbar
</script>

<style lang="sass">
.navbar
  line-height: 2.5
</style>
