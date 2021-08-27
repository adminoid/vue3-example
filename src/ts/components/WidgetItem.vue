<template lang="pug">
.widget-item.text-center.mb-3.mx-1
  h6(v-if="isCommon") {{ widget.name }}
  a.widget-item__body.mx-auto.mt-2.p-2.d-block(href="#" ref="widgetEl" @click="windowOpen")
    i.bi(:class="widget.icon")
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
