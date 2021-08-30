<template lang="pug">
.widget-item.text-center.mb-3.mx-1(@mouseover="onMouseover")
  h6(v-if="isCommon") {{ widget.name }}
  a.widget-item__body.mx-auto.mt-2.p-2.d-block
    pre {{ position }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
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

    // const widgetEl = ref()
    // const windowOpen = () => {
    //   store.commit('layout/windowOpen', {
    //     el: widgetEl.value,
    //     data: props.widget
    //   })
    // }

    // in template: component(:is="componentD" :data="widget.data")
    // const componentName = computed(() => props.widget?.component)
    // const componentD = computed(
    //   () => defineAsyncComponent(
    //     () => import('./widgets/' + componentName.value + '.vue')
    //   )
    // )

    const over = computed(() => store.state.mainPage.over)

    const onMouseover = () => {
      if (!props.isCommon && !isEqual(props.position, over.value)) {
        store.commit('mainPage/setOver', props.position)
      }
    }

    return {
      onMouseover
    }
  }
})
</script>
