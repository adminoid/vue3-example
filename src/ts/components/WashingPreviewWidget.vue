<template lang="pug">
.widget
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const WashingPreview = defineComponent({})

export default WashingPreview
</script>

<style lang="sass">
@import "src/sass/variables"

.washing-preview
  display: flex
  overflow-x: scroll
  min-height: 250px
  border: 2px solid $bb-gray
  background: #fff
  margin-bottom: $vertical-margin
  padding: 20px
  &:hover
    background: #000
.widget
  flex-shrink: 0
  width: 250px
  height: 206px
  background: $bb-blue
  margin-right: 20px
  &:last-child
    margin-right: 0
</style>
