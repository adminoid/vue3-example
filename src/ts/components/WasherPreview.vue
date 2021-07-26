<template lang="pug">
.washer-preview
  washer-preview-widget(
    v-for="widget in widgets"
    :key="widget.id"
    :widget="widget"
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import WasherPreviewWidget from 'c@/WasherPreviewWidget.vue'

interface IWasher {
  id: number,
  name: string,
  widgets: []
}

const WasherPreview = defineComponent({
  components: { WasherPreviewWidget },

  props: {
    washer: {
      type: Object as PropType<IWasher>
    }
  },

  setup (props) {
    return {
      widgets: props.washer?.widgets
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
  &:last-child
    margin-right: 0
</style>
