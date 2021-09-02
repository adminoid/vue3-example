<template lang="pug">
a.washer-preview-expander(
  href="#"
  @click.prevent="toggle"
  class="position-absolute align-items-center d-flex"
)
  i.bi.bi-box-arrow-down-right.m-auto
  .window-expand.position-absolute(v-if="open")
    .window-expand__body
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const open = ref(false)
    const toggle = () => {
      open.value = !open.value
    }

    return {
      open,
      toggle
    }
  }
})
</script>

<style lang="sass">
.window-expand
  z-index: 1000
  left: 0
  top: 0
  width: 500px
  height: 400px
  padding-left: 30px
  .window-expand__body
    background: rgba(164, 7, 225, 0.56)
    width: 100%
    height: 100%
</style>
