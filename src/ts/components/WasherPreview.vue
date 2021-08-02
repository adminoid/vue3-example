<template lang="pug">
.washer-preview.container
  h1 Мойка {{ washer.name }}
  .washer-preview__list.row
    washer-preview-widget(
      v-for="widget in widgets"
      :key="widget.id"
      :widget="widget"
      :total="widgets.length"
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
  border-radius: 5px
  padding: 20px
  .washer-preview__list
    display: flex

</style>
