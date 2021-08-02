<template lang="pug">
h6 {{ data.name }}
p.d-flex.mt-3.justify-content-center Id: {{ data.id }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const Clients = defineComponent({
  props: {
    data: Object
  }
})
export default Clients
</script>
