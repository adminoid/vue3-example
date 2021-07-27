<template lang="pug">
.widget(ref="widgetEl") {{ widget }}
  a.widget__expand-btn(href='#' @click.prevent="windowOpen")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

const WasherPreview = defineComponent({
  props: {
    widget: Object
  },

  setup () {
    const widgetEl = ref()
    const store = useStore()
    const windowOpen = () => store.commit('layout/windowOpen', widgetEl.value)

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
