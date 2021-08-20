<template lang="pug">
.widget-list
  widget-item(
    v-for="widget of widgets"
    :widget="widget"
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWidget } from 't@/types/mainPage'
import WidgetItem from 'c@/WidgetItem.vue'

export default defineComponent({
  components: { WidgetItem },

  props: {
    widgets: Array as PropType<TWidget[]>
  }
})
</script>
