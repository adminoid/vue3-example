<template lang="pug">
.accidents
  .accidents__critical
    .accidents__critical-value {{ data.critical }}
    .accidents__warnings
      .accidents__warnings-value {{ data.warnings }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWAccidents } from '@/ts/types/mainPage'

const Accidents = defineComponent({
  props: {
    data: {
      type: Object as PropType<TWAccidents>,
      required: true
    }
  }
})
export default Accidents
</script>
