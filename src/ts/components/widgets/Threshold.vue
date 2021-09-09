<template lang="pug">
.widgets-threshold
  span.widgets-threshold__value {{ data.value }}
  span.widgets-threshold__changed(:style="{color: isFall ? '#D95757' : '#198754'}")
    | {{ changedValue }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type TThreshold = {
  value: number,
  changed: number
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<TThreshold | undefined>
    }
  },

  setup (props) {
    // todo: move styling to sass

    const isFall = computed(() => props.data && props.data?.changed < 0)

    return {
      isFall,
      changedValue: isFall.value ? props.data?.changed : `+${props.data?.changed}`
    }
  }
})
</script>

<style lang="sass">
.widgets-threshold
  .widgets-threshold__value
    font-size: 12px
  .widgets-threshold__changed
    position: relative
    font-size: 7px
    top: -12px
</style>
