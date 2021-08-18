<template lang="pug">
.washer-preview
  .washer-preview__list
    washer-preview-widget(
      v-for="widget in widgets"
      :key="widget.id"
      :widget="widget"
      :total="widgets.length"
    )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// import WasherPreviewWidget from 'c@/WasherPreviewWidget.vue'
import { TWasher } from 't@/types/mainPage'

const WasherPreview = defineComponent({
  // components: { WasherPreviewWidget },

  props: {
    washer: {
      type: Object as PropType<TWasher>
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
