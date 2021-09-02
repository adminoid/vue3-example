<template lang="pug">
.washer-preview-expander(
  @click.prevent="toggle"
  class="position-absolute align-items-center d-flex"
  :class="classes"
)
  i.bi.bi-box-arrow-down-right.m-auto
  .washer-preview-expander__window.position-absolute(v-if="open")
    .window-expand__body
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { TWasher } from 't@/types/mainPage'

export default defineComponent({
  props: {
    over: {
      type: Boolean,
      default: false
    },
    washer: {
      type: Object as PropType<TWasher>
    }
  },
  setup (props) {
    const open = ref(false)
    const store = useStore()
    watchEffect(() => {
      open.value = store.state.mainPage.expanded === props.washer?.info.id
    })
    const toggle = () => {
      if (open.value) {
        store.commit('mainPage/toggleExpanded')
      } else {
        store.commit('mainPage/toggleExpanded', props.washer?.info.id)
      }
    }
    const classes = computed(() => ({
      'washer-preview-expander_over': props.over,
      'washer-preview-expander_open': open.value
    }))

    return {
      open,
      toggle,
      classes
    }
  }
})
</script>
