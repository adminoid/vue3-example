<template>
  <Dashboard msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from 'l@/Dashboard.vue'

export default defineComponent({
  name: 'App',
  components: {
    Dashboard
  }
})
</script>
