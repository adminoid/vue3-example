<template lang="pug">
a.burger(href='#' @click.prevent="toggle")
  svg.burger__sidebar_open(
    width='45px' height='32px'
    viewBox='0 0 45 32'
    :class="{open: sidebarOpen, ready: animationEnabled}"
  )
    g#lines(fill='#FFF')
      rect#line-1(x='0' y='0' width='32' height='4' rx='2')
      rect#line-2(x='0' y='14' width='32' height='4' rx='2')
      rect#line-3(x='0' y='28' width='45' height='4' rx='2')
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const BurgerButton = defineComponent({
  setup () {
    const store = useStore()
    const toggle = () => {
      store.commit('layout/sidebarToggle')
    }
    return {
      sidebarOpen: computed(() => store.state.layout.sidebar.open),
      animationEnabled: computed(() => store.state.layout.animationEnabled),
      toggle
    }
  }
})

export default BurgerButton
</script>

<style lang="sass" scoped>
.burger
  display: block
  position: fixed
  top: 12px
  left: 12px
  z-index: 1300
  .burger__sidebar_open
    @mixin animation
      animation-duration: var(--al-duration)
      animation-fill-mode: forwards
    position: relative
    rect#line-2
      transition: width var(--al-duration) ease-in-out
    &:hover
      rect#line-2
        width: 45px
    &.left-sidebar_open
      g#lines
        fill: #000
      rect#line-1
        transform: translate(9px, 0px) rotate(45deg)
        width: 41px
      rect#line-2
        opacity: 0
      rect#line-3
        transform: translate(-14px, 9px) rotate(-45deg)
        width: 41px
    &.ready
      g#lines
        animation-name: to-open-color
        @include animation
      rect#line-1
        animation-name: to-open-line-1
        @include animation
        width: 32px
      rect#line-2
        animation-name: to-open-line-2
        @include animation
      rect#line-3
        animation-name: to-open-line-3
        @include animation
      &.open
        g#lines
          animation-name: to-close-color
          @include animation
        rect#line-1
          animation-name: to-close-line-1
          @include animation
          width: 41px
        rect#line-2
          animation-name: to-close-line-2
          @include animation
        rect#line-3
          animation-name: to-close-line-3
          @include animation
          width: 41px

// before rotation
$r0: translate(0) rotate(0deg)
// after rotation line-1
$r1: translate(9px, 0px) rotate(45deg)
// after rotation line-3
$r3: translate(-14px, 9px) rotate(-45deg)

@keyframes to-close-line-1
  0%
    transform: $r0
  100%
    transform: $r1
@keyframes to-open-line-1
  0%
    transform: $r1
  100%
    transform: $r0

@keyframes to-close-line-2
  0%
    opacity: 1
  100%
    opacity: 0

@keyframes to-open-line-2
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes to-close-line-3
  0%
    transform: $r0
  100%
    transform: $r3
@keyframes to-open-line-3
  0%
    transform: $r3
  100%
    transform: $r0

@keyframes to-close-color
  0%
    fill: #fff
  100%
    fill: #000
@keyframes to-open-color
  0%
    fill: #000
  100%
    fill: #fff

</style>
