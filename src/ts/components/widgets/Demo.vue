<template lang="pug">
.demo
  p.d-flex.mt-3.justify-content-center ...
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const Demo = defineComponent({
  props: {
    data: Object
  }
})
export default Demo
</script>
