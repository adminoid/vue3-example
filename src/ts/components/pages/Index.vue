<template lang="pug">
.washing-preview
  .widget
  .widget
.washing-preview
  .widget
  .widget
  .widget
  .widget
.washing-preview
  .widget
  .widget
  .widget
  .widget
  .widget
  .widget
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Index = defineComponent({})

export default Index
</script>

<style lang="sass">
@import "src/sass/variables"

.washing-preview
  min-height: 250px
  border: 2px solid $bb-gray
  border-radius: $border-radius
  background: #fff
  margin-bottom: $vertical-margin
  display: flex
.widget
  width: 250px
  height: 100%
</style>
