<template lang="pug">
.clients
  .clients__today(:class="direction")
    .clients__value {{ data.today }}
    img.clients__icon(:src="require(`@/assets/icons/widgets/arrow-${direction}.svg`)")
  .clients__yesterday Вчера: {{ data.yesterday }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
const Clients = defineComponent({
  props: {
    data: {
      type: Object as PropType<{
        today: number,
        yesterday: number
      }>,
      required: true
    }
  },

  setup (props) {
    const direction = computed(() => props.data.today > props.data.yesterday ? 'up' : 'down')

    return {
      direction
    }
  }
})
export default Clients
</script>

<style lang="sass" scoped>
@import "src/sass/variables"

.clients
  width: 100%
  .clients__today
    font-size: 35px
    font-weight: 500
    display: flex
    justify-content: center
    align-items: center
    &.up
      color: $bb-green
      .clients__icon
        top: -2px
    &.down
      color: $bb-red
      .clients__icon
        top: 1px
  .clients__icon
    position: relative
  .clients__yesterday
    align-items: baseline
    font-size: 16px
    color: darken($bb-dark-gray, 10%)
    font-weight: 500
    display: flex
    justify-content: space-around
    flex-direction: row
</style>
