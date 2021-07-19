<template lang="pug">
.left-sidebar(:class="{open: sidebarOpen}")
  .left-sidebar__header(:class="{open: sidebarOpen}")
    img.left-sidebar__logo(src="@/assets/logo-black.svg")
  a.left-sidebar__sticker(v-if="sidebarOpen" @click.prevent="togglePin")
    svg(v-if="sidebarPinned" width='17px' height='17px' xmlns='http://www.w3.org/2000/svg')
      g#pin(transform='translate(-302.000000, -174.000000)' fill='#A9A9A9')
        path(:d="pinnedIconD"
        transform='translate(309.000000, 184.100000) rotate(-315.000000) translate(-309.000000, -184.100000)')
    svg(v-else width='14px' height='14px' xmlns='http://www.w3.org/2000/svg')
      g#pin(transform='translate(-303.000000, -176.000000)' fill='#A9A9A9')
        path(:d="unpinnedIconD"
        transform='translate(309.000000, 184.000000) rotate(-315.000000) translate(-309.000000, -184.000000) ')
  .left-sidebar__body
    ul.left-sidebar__main-menu.list-unstyled
      li.mb-1
        a(href) An item
      li.mb-1
        a(href) A second item

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { pinnedIconD, unpinnedIconD } from '@/ts/includes/svg'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    return {
      sidebarOpen: computed(_ => store.state.layout.sidebar.open),
      sidebarPinned: computed(_ => store.state.layout.sidebar.pinned),
      closeSidebar: () => store.commit('layout/sidebarToggle'),
      togglePin: () => store.commit('layout/sidebarTogglePin'),
      pinnedIconD,
      unpinnedIconD
    }
  }
})

export default LeftSidebar
</script>

<style lang="sass">
@import "LeftSidebar"
</style>
