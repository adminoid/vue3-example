<template lang="pug">
.widget-item.text-center.px-2.py-3.rounded-3(
  @mouseover="onMouseover"
  @mouseleave="onMouseleave"
)
  h6.widget-item__common-header(v-if="isCommon") {{ widget.name }}
  a.widget-item__body.mx-auto.p-2.d-block(href="#" @click.prevent)
    i.bi(:class="widget.icon")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWidget } from 't@/types/mainPage'
import useOver from 't@/use/main-page/useOver'
// import { useStore } from 'vuex'
// import { isEqual } from 'lodash'

export default defineComponent({
  props: {
    widget: Object as PropType<TWidget>,
    isCommon: {
      type: Boolean,
      required: false
    },
    widgetIndex: Number
  },

  setup (props) {
    const { onMouseover, onMouseleave } = useOver('widget', props.widgetIndex)
    // const isOver = ref(false)
    // watchEffect(() => {
    //   isOver.value = isEqual(over.value.widget, props.position?.widget)
    // })
    // const classes = computed(() => ({
    //   'widget-item_over': isOver.value
    // }))

    return {
      onMouseover,
      onMouseleave
      // classes
    }
  }
})
</script>
