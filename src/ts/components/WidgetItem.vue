<template lang="pug">
.widget-item.text-center.p-2.rounded-3(
  @mouseover="onMouseover"
  @mouseleave="onMouseleave"
  :class="classes"
)
  h6.widget-item__common-header(v-if="isCommon") {{ widget.name }}
  a.widget-item__body.mx-auto.p-2.d-block
    i.bi(:class="widget.icon")
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'
import { TWidget, TOver } from 't@/types/mainPage'
import { useStore } from 'vuex'
import { isEqual } from 'lodash'

export default defineComponent({
  props: {
    widget: Object as PropType<TWidget>,
    isCommon: {
      type: Boolean,
      required: false
    },
    position: Object as PropType<TOver>
  },

  setup (props) {
    const store = useStore()
    const over = computed(() => store.state.mainPage.over)
    const onMouseover = () => {
      if (!props.isCommon && !isEqual(props.position, over.value)) {
        store.commit('mainPage/setOver', props.position)
      }
    }
    const onMouseleave = () => {
      if (isEqual(props.position, over.value)) {
        store.commit('mainPage/unsetOver')
      }
    }
    const isOver = ref(false)
    watchEffect(() => {
      isOver.value = isEqual(over.value.widget, props.position?.widget)
    })
    const classes = computed(() => ({
      'widget-item_over': isOver.value
    }))

    return {
      onMouseover,
      onMouseleave,
      classes
    }
  }
})
</script>
