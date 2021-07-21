<template lang="pug">
burger-button
nav.navbar.fixed-top
  .container-fluid
    .navbar-left
      router-link(to="/")
        img.navbar__logo(src="@/assets/logo-white.svg")
    .navbar-right Right nav
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BurgerButton from 'c@/BurgerButton.vue'

const TopNavbar = defineComponent({
  components: {
    BurgerButton
  }
})

export default TopNavbar
</script>

<style lang="sass">
.navbar
  background: #000
  color: #fff
  line-height: 2.5
  height: 56px
  user-select: none
  .navbar__logo
    margin-left: 83px
</style>
