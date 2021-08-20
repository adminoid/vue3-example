<template lang="pug">
.widget-list
  widget-item(
    v-for="widget of widgets"
    :widget="widget"
  )
</template>

<script lang="ts">
import WidgetItem from 'c@/WidgetItem.vue'
import { defineComponent, PropType } from 'vue'
import { TWidget } from 't@/types/mainPage'

export default defineComponent({
  components: { WidgetItem },

  props: {
    widgets: Array as PropType<TWidget[]>
  }
})
</script>
