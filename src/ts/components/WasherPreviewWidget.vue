<template lang="pug">
.widget {{ widget }}
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
  &:hover
    background: #000
.widget
  flex-shrink: 0
  width: 250px
  height: 206px
  background: $bb-blue
  margin-right: 20px
  &:last-child
    margin-right: 0
</style>
