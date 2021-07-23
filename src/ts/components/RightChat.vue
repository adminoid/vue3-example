<template lang="pug">
.right-chat(:class="{open: chatOpen}")
  .right-chat__header(:class="{open: chatOpen}")
    a.right-chat__toggle-chat(href @click.prevent="closeChat")
  .right-chat__body(v-if="chatOpen")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    return {
      chatOpen: computed(_ => store.state.layout.chat.open),
      closeChat: () => store.commit('layout/chatToggle')
    }
  }
})

export default LeftSidebar
</script>

<style lang="sass">
@import "RightChat"
</style>
