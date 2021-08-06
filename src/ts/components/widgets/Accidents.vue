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

<style lang="sass" scoped>
@import "src/sass/app"

.accidents
  display: flex
  flex: 1
  position: relative
  @extend .fs-1, .fw-bold
  .accidents__critical
    @extend .bg-danger
    flex: 1
    display: flex
  .accidents__warnings
    flex: 1
    clip-path: polygon(0 100%, 100% 0, 100% 100%)
    @extend .bg-warning
  .accidents__critical-value
    position: absolute
    top: -.5 * $spacer
    left: $spacer * .25
    color: white
  .accidents__warnings-value
    position: absolute
    bottom: -.5 * $spacer
    right: $spacer * .25
    color: black
</style>
