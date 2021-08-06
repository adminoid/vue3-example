<template lang="pug">
main(:class="{ padding: hasPadding }")
  .container-fluid
    router-view
</template>

<script lang="ts">
import {
  computed,
  defineComponent
} from 'vue'
import { useStore } from 'vuex'

const MainContent = defineComponent({
  setup: function () {
    const store = useStore()
    const hasPadding = computed(
      _ => store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned
    )
    return {
      hasPadding
    }
  }
})

export default MainContent
</script>

<style lang="sass">
@import "src/sass/variables"
main
  float: right
  width: 100%
  transition: width $animation-speed ease-in-out
  padding: 88px 20px 0
  &.padding
    width: calc(100% - #{$left-sidebar-width})
</style>
