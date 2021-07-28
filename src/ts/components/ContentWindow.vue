<template lang="pug">
transition(name="delay")
  .overlap(v-show="isWindowOpen" @click.self="windowClose")
    .overlap__window(:style="wStyle") {{ wStyle }}
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

.overlap
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 1400
  background: rgba(41, 163, 184, 0.31) // todo: change to actual
  .overlap__window
    position: absolute
    background: #0237d7
    transition: all $animation-speed ease-in-out
</style>
