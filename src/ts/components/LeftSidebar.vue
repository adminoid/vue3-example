<template lang="pug">
.left-sidebar(:class="{open: sidebarOpen}") {{ width }}
  .left-sidebar__sticker
    img(src="/icons/pin-off.svg")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    const sidebarOpen = computed(_ => store.state.layout.sidebar.open)
    return {
      sidebarOpen
    }
  }
})

export default LeftSidebar
</script>

<style lang="sass">

@import "src/sass/variables"

.left-sidebar
  position: fixed
  background: #c5dce5
  min-height: 100%
  width: $left-sidebar-width
  left: -$left-sidebar-width
  transition: left 100ms ease-in-out
  &.open
    left: 0
  .left-sidebar__sticker
    position: absolute
    right: 0
    top: 100px
    width: 30px
    height: 30px
</style>
