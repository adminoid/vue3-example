<template lang="pug">
.widget-list.d-flex.w-100(
  :class="{'widget-list_common': isCommon}"
)
  widget-item(
    v-for="(widget, index) in widgets"
    :widget="widget"
    :is-common="isCommon"
    :position="{washer: washerIndex, widget: index}"
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWidget } from 't@/types/mainPage'
import WidgetItem from 'c@/WidgetItem.vue'

export default defineComponent({
  components: { WidgetItem },

  props: {
    widgets: Array as PropType<TWidget[]>,
    isCommon: {
      type: Boolean,
      required: false
    },
    washerIndex: {
      type: Number,
      required: false
    }
  }
})
</script>
