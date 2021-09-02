<template lang="pug">
.washer-preview.mb-3.container-fluid(
  @mouseover="onMouseover"
  @mouseleave="onMouseleave"
)
  .row
    .washer-preview__common.col-3.position-relative.align-self-stretch.p-2
      | Common
      washer-preview-expander
    .washer-preview__scrollable.col-9.p-0(
      ref="scrollableEl"
      @scroll="onScroll"
    )
      widget-list(
        :widgets="widgets"
        :is-common="isCommon"
      )
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { TInfoSummary, TInfoWasher, TWidget } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'
import WasherPreviewExpander from 'c@/WasherPreviewExpander.vue'
import { useStore } from 'vuex'
import useOver from 't@/modules/main-page/over.ts'

// todo: will think about refactor useOver in the future
// todo: i can add right box shadow for common block
export default defineComponent({
  components: { WidgetList, WasherPreviewExpander },
  props: {
    info: Object as PropType<TInfoSummary | TInfoWasher>,
    widgets: Array as PropType<TWidget[]>,
    isCommon: {
      type: Boolean,
      default: false,
      required: false
    },
    washerIndex: {
      type: Number as PropType<number>,
      required: false
    }
  },
  setup (props) {
    const store = useStore()
    const onScroll = (evt: Event) => {
      const target = evt.target as HTMLElement
      store.commit('mainPage/setScrollLeft', target.scrollLeft)
    }
    const scrollableEl = ref(null)
    watchEffect(() => {
      const el = scrollableEl.value as null | HTMLElement
      if (el) el.scrollLeft = store.state.mainPage.scrollLeft
    })
    const { onMouseover, onMouseleave } = useOver('washer', props.washerIndex)

    return {
      onScroll,
      scrollableEl,
      onMouseover,
      onMouseleave
    }
  }
})
</script>
