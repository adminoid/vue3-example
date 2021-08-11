<template lang="pug">
.clients
  .clients__today(:class="direction")
    .clients__value {{ data.today }}
    img.clients__icon(:src="require(`@/assets/icons/arrow-${direction}.svg`)")
  .clients__yesterday Вчера: {{ data.yesterday }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TWClients } from '@/ts/types/mainPage'

const Clients = defineComponent({
  props: {
    data: {
      type: Object as PropType<TWClients>,
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
