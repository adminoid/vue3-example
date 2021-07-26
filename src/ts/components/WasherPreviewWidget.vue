<template lang="pug">
.widget(ref="widgetEl") {{ widget }}
  a.widget__expand-btn(href='#' @click.prevent="createWindow")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getDistances } from '@/ts/helpers/dom'

const WasherPreview = defineComponent({
  props: {
    widget: Object
  },

  setup (props) {
    const widgetEl = ref()
    onMounted(() => {
      if (props.widget?.id === 0) {
        console.log(getDistances(widgetEl.value))
        setTimeout(() => {
          console.log(getDistances(widgetEl.value))
        }, 3000)
      }
    })
    const createWindow = () => console.info('createWindow()')
    return {
      widgetData: props.widget,
      widgetEl,
      createWindow
    }
  }
})

export default WasherPreview
</script>

<style lang="sass">
@import "src/sass/variables"

.washer-preview
  display: flex
  overflow-x: scroll
  min-height: 250px
  border: 2px solid $bb-gray
  background: #fff
  margin-bottom: $vertical-margin
  padding: 20px
.widget
  flex-shrink: 0
  width: 250px
  height: 206px
  background: $bb-blue
  margin-right: 20px
  position: relative
  .widget__expand-btn
    display: none
    position: absolute
    background: #555
    width: 20px
    height: 20px
    bottom: 10px
    right: 10px
  &:hover
    .widget__expand-btn
      display: block
  &:last-child
    margin-right: 0
</style>
