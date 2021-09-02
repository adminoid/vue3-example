<template lang="pug">
a.washer-preview-expander(
  href="#"
  @click.stop="toggle"
  class="position-absolute align-items-center d-flex"
  :class="classes"
)
  i.bi.m-auto(
    :class="iconClass"
  )
  .washer-preview-expander__window.position-absolute(v-if="open")
    a.window-preview-expander__close.h2.float-end.link-danger(
      href="#"
      @click.prevent.stop="closeWindow"
    )
      i.bi.bi-x
    .window-preview-expander__body
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
      console.log(store.state.mainPage.expanded)
      open.value =
        store.state.mainPage.expanded &&
        store.state.mainPage.expanded === props.washer?.info.id
    })
    const toggle = () => {
      console.info('toggle', open.value)
      if (open.value) {
        store.commit('mainPage/toggleExpanded')
      } else {
        store.commit('mainPage/toggleExpanded', props.washer?.info.id)
      }
    }
    const closeWindow = () => {
      console.info('closeWindow')
      if (open.value) store.commit('mainPage/toggleExpanded', false)
    }
    const classes = computed(() => ({
      'washer-preview-expander_over': props.over,
      'washer-preview-expander_open': open.value
    }))
    const iconClass = computed(() => {
      return open.value ? 'bi-box-arrow-up-left' : 'bi-box-arrow-down-right'
    })

    return {
      open,
      toggle,
      closeWindow,
      classes,
      iconClass
    }
  }
})
</script>
