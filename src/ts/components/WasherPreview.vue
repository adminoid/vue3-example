<template lang="pug">
.washer-preview.mb-3.container-fluid
  .row
    .washer-preview__common.col-3.position-relative.align-self-stretch.p-2
      | Common
      washer-preview-expander
    .washer-preview__scrollable.col-9.p-0(ref="scrollableEl" @scroll="onScroll")
      widget-list(
        :widgets="widgets"
        :is-common="isCommon"
        :washerIndex="washerIndex"
      )
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { TInfoSummary, TInfoWasher, TWidget } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'
import WasherPreviewExpander from 'c@/WasherPreviewExpander.vue'
import { useStore } from 'vuex'

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
      type: Number,
      required: false
    }
  },
  setup () {
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

    return {
      onScroll,
      scrollableEl
    }
  }
})
</script>
