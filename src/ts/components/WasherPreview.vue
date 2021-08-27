<template lang="pug">
.washer-preview.mb-3
  .row
    .col-3
      .washer-preview__common Common
    .col-9
      widget-list(
        :widgets="widgets"
      )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWasher } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'

export default defineComponent({
  components: { WidgetList },

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
</script>
