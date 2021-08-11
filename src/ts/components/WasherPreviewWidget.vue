<template lang="pug">
.preview-widget.col(ref="widgetEl" @click="windowOpen")
    h6.preview-widget__header.m-0.mb-2 {{ widget.name }}
    component(:is="componentD" :data="widget.data")
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

const WasherPreview = defineComponent({
  props: {
    widget: Object,
    total: {
      type: Number,
      required: true,
      default: 1
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
    const componentName = computed(() => props.widget?.component)
    const componentD = computed(
      () => defineAsyncComponent(
        () => import('c@/widgets/' + componentName.value + '.vue')
      )
    )

    return {
      widgetEl,
      windowOpen,
      componentName,
      componentD // dynamic component
    }
  }
})

export default WasherPreview
</script>
