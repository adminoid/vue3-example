<template lang="pug">
transition(name="delay")
  .content-window(v-show="isWindowOpen")
    transition(name="fade")
      .content-window__overlap(@click.self="windowClose" v-show="isWindowOpen")
    transition(name="delay")
      .content-window__modal(:style="wStyle")
        .content-window__entire(v-if="data && Object.keys(data).length > 0")
          a.content-window__close(href='#' @click.prevent="windowClose")
            svg(width='32px' height='33px' xmlns='http://www.w3.org/2000/svg')
              g#icons(stroke='none' stroke-width='1' fill='#000')
                rect#rect(
                  transform='translate(15.909903, 15.909903) rotate(-315.000000) translate(-15.909903, -15.909903)'
                  x='13.9099026' y='-4.59009742'
                  width='4' height='41' rx='2'
                )
                rect#rect(
                  transform='translate(15.909903, 15.909903) scale(-1, 1) rotate(-315.000000) translate(-15.909903, -15.909903)'
                  x='13.9099026' y='-4.59009742'
                  width='4' height='41' rx='2'
                )
          .d-flex.flex-column.align-content-center.flex-wrap.justify-content-center
            h1 {{ data.name }}
            h2.d-flex.mt-3.justify-content-center {{ data }}
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
export default defineComponent({
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
        wStyle.value = store.state.layout.window.start
      }
    })
    const isWindowOpen = computed(_ => store.state.layout.window.open)

    return {
      isWindowOpen,
      wStyle,
      windowClose: () => store.commit('layout/windowClose'),
      data: computed(_ => store.state.layout.window.data) as any
    }
  }
})
</script>

<style lang="sass" scoped>
.delay-enter-active,
.delay-leave-active
  transition: all calc(var(--al-duration) * 2) ease

.content-window__entire
  animation: calc(var(--al-duration) * 2) delayed
  animation-fill-mode: forwards
  visibility: hidden

.fade-enter-active
  animation: fade calc(var(--al-duration) * 2)
.fade-leave-active
  animation: fade calc(var(--al-duration) * 2) reverse

@keyframes delayed
  99%
    visibility: hidden
  100%
    visibility: visible

@keyframes fade
  0%
    opacity: 0
  100%
    opacity: 1

</style>
