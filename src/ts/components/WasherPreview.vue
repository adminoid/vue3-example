<template lang="pug">
.washer-preview.mb-3.container-fluid(
  @mouseover="onMouseover"
  @mouseleave="onMouseleave"
  :class="{'washer-preview_over': isOver}"
)
  .row
    .washer-preview__common.col-3.position-relative.align-self-stretch.p-2
      | Common info
      washer-preview-expander(
        v-if="!isCommon"
        :over="isOver"
        :washer="washer"
      )
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
import { TWasher, TWidget } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'
import WasherPreviewExpander from 'c@/WasherPreviewExpander.vue'
import { useStore } from 'vuex'
import useOver from 't@/use/main-page/useOver.ts'
import { isEqual } from 'lodash'

// todo: i can add right box shadow for common block
export default defineComponent({
  components: { WidgetList, WasherPreviewExpander },
  props: {
    washer: Object as PropType<TWasher>,
    widgets: Array as PropType<TWidget[]>,
    isCommon: {
      type: Boolean,
      default: false,
      required: false
    },
    washerIndex: {
      type: Number as PropType<number>,
      default: -1
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
    // todo: think about refactor isOver for useOver using (1)
    const isOver = ref(false)
    watchEffect(() => {
      isOver.value = isEqual(store.state.mainPage.over.washer, props.washerIndex)
    })

    return {
      onScroll,
      scrollableEl,
      onMouseover,
      onMouseleave,
      isOver
    }
  }
})
</script>
