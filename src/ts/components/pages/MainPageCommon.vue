<template lang="pug">
.main-page-common
  .row
    .col-3
      .main-page-common__info COMMON
    .col-9
      widget-list(:widgets="summary.widgets" :is-common="true")
  .row
    widget-filters
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TSummary } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'
import WidgetFilters from 'c@/WidgetFilters.vue'

export default defineComponent({
  components: { WidgetList, WidgetFilters },

  props: {
    summary: Object as PropType<TSummary>,
    isCommon: {
      type: Boolean,
      required: false
    }
  }
})
</script>
