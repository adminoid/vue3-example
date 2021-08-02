<template lang="pug">
.preview-widget.col(ref="widgetEl" @click="windowOpen" :style="scaleStyle")
  .d-flex.flex-column.align-content-center.flex-wrap.justify-content-center
    component(:is="componentD" :data="widget")
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
$border: 12px

.preview-widget
  margin-right: 12px
  position: relative
  padding: $border
  transition: all $animation-speed ease-in-out
  &:hover
    box-shadow: 0 0 5px $bb-blue-darken
    transform: var(--scale)
  @include window
  &:last-child
    margin-right: 0
</style>
