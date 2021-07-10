<template lang="pug">
.container
  h1.text-success Dashboard layout
  p.black.text-success Dashboard layout
  p.soft-black Dashboard layout
  p.bold Dashboard layout
  p.medium Dashboard layout
  p.light Dashboard layout
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard'
})
</script>

<style lang="sass" scoped>
h1
  font-size: 3em
p.black
  font-weight: 900
p.soft-black
  font-weight: 800
p.bold
  font-weight: bold
p.medium
  font-weight: 500
p.light
  font-weight: 300
</style>
