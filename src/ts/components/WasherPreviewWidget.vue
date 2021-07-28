<template lang="pug">
.preview-widget(ref="widgetEl")
  .d-flex.flex-column.align-content-center.flex-wrap.justify-content-center
    h1 {{ widget.name }}
    p.d-flex.mt-3.justify-content-center Id: {{ widget.id }}
  a.widget__expand-btn(href='#' @click.prevent="windowOpen")
    svg(width='37px' height='31px' xmlns='http://www.w3.org/2000/svg')
      g#icons(stroke='none' stroke-width='1' fill='#57B2D9')
        rect#vtr(x='0' y='0' width='4' height='10' rx='2')
        rect#vbl(x='0' y='20' width='4' height='10' rx='2')
        rect#vtr(x='33' y='0' width='4' height='10' rx='2')
        rect#vbr(x='33' y='21' width='4' height='10' rx='2')
        rect#htl(x='0' y='0' width='13' height='4' rx='2')
        rect#hbl(x='0' y='27' width='13' height='4' rx='2')
        rect#htr(x='24' y='0' width='13' height='4' rx='2')
        rect#hbr(x='24' y='27' width='13' height='4' rx='2')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

const WasherPreview = defineComponent({
  props: {
    widget: Object
  },

  setup (props) {
    const widgetEl = ref()
    const store = useStore()
    const windowOpen = () => {
      console.log(props)
      console.log(props.widget)
      store.commit('layout/windowOpen', {
        el: widgetEl.value,
        data: props.widget
      })
    }

    return {
      widgetEl,
      windowOpen
    }
  }
})

export default WasherPreview
</script>

<style lang="sass">
@import "src/sass/variables"
$border: 12px

.preview-widget
  flex-shrink: 0
  width: 250px
  height: 206px
  margin-right: 20px
  position: relative
  padding: $border
  @include window
  .widget__expand-btn
    display: none
    position: absolute
    width: 37px
    height: 31px
    bottom: $border
    right: $border
    g#icons
      transition: fill $animation-speed ease-in-out
    &:hover
      g#icons
        fill: #000
  &:hover
    .widget__expand-btn
      display: block
  &:last-child
    margin-right: 0
</style>
