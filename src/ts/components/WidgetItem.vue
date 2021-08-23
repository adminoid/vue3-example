<template lang="pug">
.widget-item.mx-auto.text-center(ref="widgetEl" @click="windowOpen")
  span {{ isCommon }} / {{ widget.name }}
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { TWidget } from 't@/types/mainPage'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    widget: Object as PropType<TWidget>,
    isCommon: {
      type: Boolean,
      required: false
    }
  },

  setup (props) {
    const widgetEl = ref()
    const store = useStore()
    const windowOpen = () => {
      store.commit('layout/windowOpen', {
        el: widgetEl.value,
        data: props.widget
      })
    }

    // in template: component(:is="componentD" :data="widget.data")
    // const componentName = computed(() => props.widget?.component)
    // const componentD = computed(
    //   () => defineAsyncComponent(
    //     () => import('./widgets/' + componentName.value + '.vue')
    //   )
    // )

    return {
      widgetEl,
      windowOpen
    }
  }
})
</script>
