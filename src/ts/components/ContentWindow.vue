<template lang="pug">
.content-window
  transition(name="delay")
    .content-window__overlap(v-show="isWindowOpen" @click.self="windowClose")
      .content-window__modal(:style="wStyle")
        a.window__close(href='#' @click.prevent="windowClose")
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
        transition(name="appear")
          .content-window__content(v-if="data.id")
            .d-flex.flex-column.align-content-center.flex-wrap.justify-content-center
              h1 {{ data.name }}
              h2.d-flex.mt-3.justify-content-center Id: {{ data.id }}
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
