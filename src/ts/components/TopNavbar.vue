<template lang="pug">
burger-button
nav.navbar.fixed-top
  .container-fluid
    .navbar-left
      router-link(to="/")
        img.navbar__logo(src="@/assets/img/logo-white.svg")
a.chat-button(href='#' @click.prevent="chatToggle")
  img(:src="require(`@/assets/icons/chat-${chatIconStatus}.svg`)")

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import BurgerButton from 'c@/BurgerButton.vue'

const TopNavbar = defineComponent({
  components: {
    BurgerButton
  },

  setup () {
    const store = useStore()
    const chatOpen = computed(_ => store.state.layout.chat.open)
    const chatIconStatus = computed(() => chatOpen.value ? 'on' : 'off')

    return {
      chatOpen,
      chatIconStatus,
      chatToggle: () => store.commit('layout/chatToggle')
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
.chat-button
  display: block
  position: fixed
  top: 7px
  right: 11px
  z-index: 1300
</style>
