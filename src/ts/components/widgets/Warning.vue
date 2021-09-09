<template lang="pug">
.widgets-warning(
  :style="{background: bgColor}"
  class="rounded-circle d-flex align-items-center justify-content-center"
)
  span.widgets-warning__dangers {{ data.dangers }}
  | /
  span.widgets-warnint__warnings {{ data.warnings }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

// todo: move styling to sass (2)

type TWarning = {
  dangers: number,
  warnings: number
}

export default defineComponent({
  props: {
    data: Object as PropType<TWarning | undefined>
  },

  setup (props) {
    const bgColor = computed(() => {
      if (props.data?.dangers === 0 && props.data?.warnings === 0) {
        return '#198754'
      } else {
        return (props.data?.dangers && props.data?.dangers > 0) ? '#D95757' : '#FFD36B'
      }
    })

    return {
      bgColor
    }
  }
})
</script>

<style lang="sass">
$radius: 38px
.widgets-warning
  width: $radius
  height: $radius
</style>
