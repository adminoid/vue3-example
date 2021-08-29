<template lang="pug">
.widget-list.d-flex.flex-wrap(
  :class="{'widget-list_common': isCommon}"
)
  widget-item(
    v-for="widget of widgets"
    :widget="widget"
    :is-common="isCommon"
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
    }
  }
})
</script>
