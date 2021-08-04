<template lang="pug">
.preview-widget.col(ref="widgetEl" @click="windowOpen")
    h6.preview-widget__header {{ widget.name }}
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
        () => import('./widgets/' + componentName.value + '.vue')
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

<style lang="sass">
@import "src/sass/variables"

.preview-widget
  margin: 0 12px 12px 0
  position: relative
  padding: 6px
  transition: all $animation-speed ease-in-out
  cursor: pointer
  @include window
  &:hover
    box-shadow: 0 0 3px $bb-blue-darken
    transform: scale(1.03)
    z-index: 100
  .preview-widget__header
    color: $bb-blue
    text-align: center
    font-size: 18px
    margin: 0
</style>
