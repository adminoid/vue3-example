<template lang="pug">
p V:{{ data }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    data: Object as PropType<any>
  }
})
</script>
