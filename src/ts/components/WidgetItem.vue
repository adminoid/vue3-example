<template lang="pug">
.widget-item.mx-auto.text-center
  span {{ widget.name }}
  p {{ widget.data.demo }}

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWidget } from 't@/types/mainPage'

export default defineComponent({
  props: {
    widget: Object as PropType<TWidget>,
    isCommon: {
      type: Boolean,
      required: false
    }
  }
})
</script>
