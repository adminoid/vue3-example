<template>
  <DashboardLayout/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardLayout from 'c@/DashboardLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    DashboardLayout
  }
})
</script>

<style lang="sass">
@import "../sass/app.sass"
</style>
