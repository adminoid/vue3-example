<template lang="pug">
.overlap(v-if="windowOpen" @click.self="windowClose")
  .overlap__window(:style="wStyle") {{ wStyle }}
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue'
import { useStore } from 'vuex'

const ContentWindow = defineComponent({
  setup () {
    const store = useStore()
    const wStyle = ref({})
    watch(() => store.state.layout.window.open, (val) => {
      if (val) {
        wStyle.value = {
          width: store.state.layout.window.start.width + 'px',
          height: store.state.layout.window.start.height + 'px',
          left: store.state.layout.window.start.x + 'px',
          top: store.state.layout.window.start.y + 'px'
        }

        setTimeout(() => {
          wStyle.value = {
            width: 'calc(100% - 100px)',
            height: 'calc(100% - 100px)',
            left: '50px',
            top: '50px',
            right: '50px',
            bottom: '50px'
          }
        }, 0)
      }
    })

    const windowOpen = computed(_ => store.state.layout.window.open)
    const windowClose = () => {
      store.commit('layout/windowClose')
    }

    return {
      windowOpen,
      wStyle,
      windowClose
    }
  }
})

export default ContentWindow
</script>

<style lang="sass">
@import "src/sass/variables"

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
