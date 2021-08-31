<template lang="pug">
.washer-preview.mb-3.p-2
  .row
    .col-3
      .washer-preview__common Common
    .col-9
      widget-list(:widgets="widgets" :is-common="isCommon")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TInfoSummary, TInfoWasher, TWidget } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'

export default defineComponent({
  components: { WidgetList },
  props: {
    info: Object as PropType<TInfoSummary | TInfoWasher>,
    widgets: Array as PropType<TWidget[]>,
    isCommon: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>
