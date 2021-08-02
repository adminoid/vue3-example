<template lang="pug">
.preview-widget.col(ref="widgetEl" @click="windowOpen")
  .d-flex.flex-column.align-content-center.flex-wrap.justify-content-center
    h6 {{ widget.name }} => {{ total }} = {{ scaleStyle }}
    p.d-flex.mt-3.justify-content-center Id: {{ widget.id }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

const WasherPreview = defineComponent({
  props: {
    widget: Object,
    total: {
      type: Number,
      default: 1
    }
  },

  setup (props) {
    const widgetEl = ref()
    const store = useStore()
    const scaleStyle = computed(() => ({
      '--scale': `scale(${1 / props.total})`
    }))
    const windowOpen = () => {
      store.commit('layout/windowOpen', {
        el: widgetEl.value,
        data: props.widget
      })
    }

    return {
      widgetEl,
      windowOpen,
      scaleStyle
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
  transition: transform $animation-speed-fast ease-in-out
  &:hover
    box-shadow: 0 0 5px $bb-dark-gray
    transform: var(--scale)
  @include window
  &:last-child
    margin-right: 0
</style>
