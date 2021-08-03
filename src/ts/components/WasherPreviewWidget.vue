<template lang="pug">
.preview-widget.col(ref="widgetEl" @click="windowOpen" :style="scaleStyle")
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

    // css var for customizing style by number of siblings
    const scaleStyle = computed(() => ({
      '--scale': `scale(${1 + (props.total / 100)})`
    }))
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
      scaleStyle,
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
  margin-right: 12px
  position: relative
  padding: 6px
  transition: all $animation-speed ease-in-out
  cursor: pointer
  min-width: 100px
  @include window
  &:hover
    box-shadow: 0 0 5px $bb-blue-darken
    transform: var(--scale)
  .preview-widget__header
    color: $bb-blue
    text-align: center
    font-size: 18px
    margin: 0
  &:last-child
    margin-right: 0
</style>
