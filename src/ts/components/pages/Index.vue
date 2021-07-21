<template lang="pug">
.washing-preview
  .widget
  .widget
  .widget
  .widget
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Index = defineComponent({})

export default Index
</script>

<style lang="sass">
@import "src/sass/variables"

.washing-preview
  display: flex
  overflow-x: scroll
  min-height: 250px
  border: 2px solid $bb-gray
  border-radius: $border-radius
  background: #fff
  margin-bottom: $vertical-margin
  padding: 20px
.widget
  flex-shrink: 0
  width: 250px
  height: 206px
  background: $bb-blue
  margin-right: 20px
  &:last-child
    margin-right: 0
</style>
