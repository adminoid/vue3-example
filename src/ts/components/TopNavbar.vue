<template lang="pug">
burger-button
nav.navbar.fixed-top
  .container-fluid
    .navbar-left
      router-link(to="/")
        img.navbar__logo(src="@/assets/logo-white.svg")
    .navbar-right
      a.navbar__toggle-chat(href @click.prevent="toggleChat")
        img.navbar__chat-icon(src="@/assets/icons/chat-off.svg")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'
import BurgerButton from 'c@/BurgerButton.vue'

const TopNavbar = defineComponent({
  components: {
    BurgerButton
  },

  setup () {
    // const store = useStore()
    const toggleChat = () => {
      console.info('toggleChat')
    }

    return {
      toggleChat
    }
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
  .navbar__toggle-chat
    display: block
</style>
