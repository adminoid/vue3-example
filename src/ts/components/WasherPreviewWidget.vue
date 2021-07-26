<template lang="pug">
.widget {{ widget }}
  a.widget__expand-btn(href='#')
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const WasherPreview = defineComponent({
  props: {
    widget: Object
  },

  setup (props) {
    return {
      widgetData: props.widget
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
