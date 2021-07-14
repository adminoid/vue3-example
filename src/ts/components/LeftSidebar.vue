<template lang="pug">
.left-sidebar(:class="{open: sidebarOpen}")
  .left-sidebar__header(:class="{open: sidebarOpen}")
    img.left-sidebar__close(
      src="@/assets/icons/close.svg"
      @click="closeSidebar"
    )
    img.left-sidebar__logo(src="@/assets/logo-black.svg")
  .left-sidebar__sticker(v-if="sidebarOpen" @click="togglePin")
    svg(v-if="sidebarPinned" width='17px' height='17px' xmlns='http://www.w3.org/2000/svg')
      g#pinner(transform='translate(-302.000000, -174.000000)' fill='#A9A9A9')
        path(d='M309,177 C310.198856,177 311.399393,177.284633 312.601611,177.8539 C313.135031,'
        +' 178.128816 313.476059,178.35144 313.624695,178.521774 C313.77333,178.692108 313.740769,178.922599 313.52701,'
        +' 179.213247 L313.52701,179.213247 L312.601611,182.080244 C313.771874,182.469473 314.641576,'
        +' 182.940771 315.210717,183.494139 C315.779858,184.047506 316.0412,184.675904 315.994741,'
        +' 185.379332 C314.10959,186.299008 312.224503,186.846908 310.33948,187.02303 L309.442366,'
        +' 190.840401 C309.291642,190.9468 309.144186,191 309,191 C308.855813,191 308.730394,190.9468 308.623742,'
        +' 190.840401 L307.68073,187.024886 C305.789616,186.85078 303.899684,186.302262 302.010932,'
        +' 185.379332 C301.940704,184.712206 302.20883,184.083809 302.815308,183.494139 C303.421787,'
        +' 182.904469 304.284705,182.433171 305.404062,182.080244 L305.404062,182.080244 L304.478663,'
        +' 179.213247 C304.273019,178.91227 304.238485,178.681779 304.375063,178.521774 C304.579928,'
        +' 178.281767 304.878572,178.026806 305.404062,177.8539 C305.929552,177.680994 307.201715,177 309,177 Z'
        transform='translate(309.000000, 184.100000) rotate(-315.000000) translate(-309.000000, -184.100000)')
    svg(v-else width='14px' height='14px' xmlns='http://www.w3.org/2000/svg')
      g#pinner(transform='translate(-303.000000, -176.000000)' fill='#A9A9A9')
        path(d='M310.750813,186.931111 L309.444691,193.025117 C309.294141,193.141706 309.146856,193.2 309.002837,193.2'
        +' C308.858817,193.2 308.733542,193.141706 308.627013,193.025117 L307.25486,186.931111 L310.750813,186.931111'
        +' Z M312.601611,175 C313.135031,175.116472 313.476059,175.305786 313.624695,175.567942'
        +' C313.77333,175.830098 313.740769,176.184841 313.52701,176.63217 L313.52701,176.63217 L312.601611,181.044686'
        +' C313.771874,181.643738 314.641576,182.3691 315.210717,183.220773 C315.779858,184.072446 316.0412,185.039595'
        +' 315.994741,186.122222 L315.994741,186.122222 L302.010932,186.122222'
        +' C301.940704,185.095468 302.20883,184.128318 302.815308,183.220773'
        +' C303.421787,182.313228 304.284705,181.587866 305.404062,181.044686 L305.404062,181.044686'
        +' L304.478663,176.63217 C304.273019,176.168944 304.238485,175.814201 304.375063,175.567942'
        +' 304.51164,175.321683 304.85464,175.132369 305.404062,175 L305.404062,175 Z'
        transform='translate(309.000000, 184.000000) rotate(-315.000000) translate(-309.000000, -184.000000) ')
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    const sidebarOpen = computed(_ => store.state.layout.sidebar.open)
    const sidebarPinned = computed(_ => store.state.layout.sidebar.pinned)
    return {
      sidebarOpen,
      sidebarPinned,
      closeSidebar: () => store.commit('layout/sidebarToggle'),
      togglePin: () => store.commit('layout/sidebarTogglePin')
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
  transition: left $left-sidebar-animation-speed ease-in-out
  &.open
    left: 0
    top: 0
  .left-sidebar__sticker
    position: absolute
    right: -15px
    top: 100px
    width: 30px
    height: 30px
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    background-image: linear-gradient(180deg, #EEE 0%, #C8C8C8 100%)
    cursor: pointer
    &:hover
      g#pinner
        fill: #57B2D9
  .left-sidebar__header
    position: fixed
    left: 0
    top: 0
    height: 56px
    background: #C8C8C8
    overflow: hidden
    transition: width $left-sidebar-animation-speed ease-in-out
    width: 0
    &.open
      width: $left-sidebar-width
  .left-sidebar__logo
    position: absolute
    left: 95px
    top: 9px
  .left-sidebar__close
    position: absolute
    left: 18px
    top: 13px
    cursor: pointer
    opacity: .5
</style>
