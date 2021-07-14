<template lang="pug">
.left-sidebar(:class="{open: sidebarOpen}")
  .left-sidebar__header
    img.left-sidebar__close(src="/icons/close.svg")
    img.left-sidebar__logo(src="/logo-black.svg")
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
  background: $left-sidebar-bg
  min-height: 100%
  width: $left-sidebar-width
  left: -$left-sidebar-width
  transition: left 100ms ease-in-out
  &.open
    left: 0
    top: 0
  .left-sidebar__sticker
    position: absolute
    right: 0
    top: 100px
    width: 30px
    height: 30px
  .left-sidebar__header
    position: fixed
    left: 0
    top: 0
    height: 56px
    width: 150px
    background: #C8C8C8
    overflow: hidden
    //opacity: .5
  .left-sidebar__logo
    position: absolute
    left: 95px
    top: 9px
  .left-sidebar__close
    position: absolute
    left: 18px
    top: 13px
</style>
