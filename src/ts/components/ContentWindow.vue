<template lang="pug">
transition(name="delay")
  .overlap(v-show="isWindowOpen" @click.self="windowClose")
    .overlap__window(:style="wStyle") {{ wStyle }}
      a.overlap__close(href='#' @click.prevent="windowClose")
        svg(width='32px' height='33px' xmlns='http://www.w3.org/2000/svg')
          g#icons(stroke='none' stroke-width='1' fill='#000')
            rect#rect(
              transform='rotate(-315.000000)'
                +'translate(15.909903, 15.909903)'
                +'translate(-15.909903, -15.909903)'
              x='13.9099026' y='-4.59009742'
              width='4' height='41' rx='2'
            )
            rect#rect(
              transform='rotate(-315.000000)'
                +'scale(-1, 1)'
                +'translate(15.909903, 15.909903)'
                +'translate(-15.909903, -15.909903)'
              x='13.9099026' y='-4.59009742' width='4' height='41' rx='2')

</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue'
import { useStore } from 'vuex'

const wOpenStyle = {
  width: 'calc(100% - 100px)',
  height: 'calc(100% - 100px)',
  left: '50px',
  top: '50px',
  right: '50px',
  bottom: '50px'
}

const ContentWindow = defineComponent({
  setup () {
    const store = useStore()
    const wStyle = ref({})
    watch(() => store.state.layout.window.open, (val) => {
      if (val) {
        wStyle.value = store.state.layout.window.start
        setTimeout(() => {
          wStyle.value = wOpenStyle
        }, 0)
      } else {
        setTimeout(() => {
          wStyle.value = store.state.layout.window.start
        }, 0)
      }
    })

    const isWindowOpen = computed(_ => store.state.layout.window.open)

    return {
      isWindowOpen,
      wStyle,
      windowClose: () => store.commit('layout/windowClose')
    }
  }
})

export default ContentWindow
</script>

<style lang="sass">
@import "src/sass/variables"

.delay-enter-active,
.delay-leave-active
  transition: all $animation-speed ease-in-out
.delay-enter-from,
.delay-leave-to
  opacity: 0

.overlap
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 1400
  background: $overlap-bg
  .overlap__window
    @include window
    position: absolute
    transition: all $animation-speed ease-in-out
    padding: 20px 70px 20px 20px
  .overlap__close
    display: block
    position: absolute
    right: 20px
    top: 20px
    g#icons
      transition: fill $animation-speed ease-in-out
    &:hover
      g#icons
        fill: $bb-blue
</style>
