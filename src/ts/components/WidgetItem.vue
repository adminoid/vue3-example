<template lang="pug">
.widget-item.text-center.px-2.py-3(
  @mouseover="onMouseover"
  @mouseleave="onMouseleave"
  :class="classes"
)
  h6.widget-item__common-header(v-if="isCommon")
    | {{ widget.name }}
  .widget-item__body.mx-auto.p-2.d-flex.justify-content-center
    component(:is="widget.type" :data="widget.data")
</template>

<script lang="ts">
import { defineComponent, PropType, watchEffect, ref, computed, defineAsyncComponent } from 'vue'
import { TWidget } from 't@/types/mainPage'
import useOver from 't@/use/main-page/useOver'
import { isEqual } from 'lodash'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    threshold: defineAsyncComponent(
      () => import('c@/widgets/Threshold.vue') as any
    ),
    warning: defineAsyncComponent(
      () => import('c@/widgets/Warning.vue') as any
    ),
    value: defineAsyncComponent(
      () => import('c@/widgets/Value.vue') as any
    )
  },

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
    // todo: think about refactor isOver for useOver using (2)
    const isOver = ref(false)
    const store = useStore()
    watchEffect(() => {
      isOver.value = isEqual(store.state.mainPage.over.widget, props.widgetIndex)
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
