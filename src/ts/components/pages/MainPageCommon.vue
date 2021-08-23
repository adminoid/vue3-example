<template lang="pug">
.main-page-common
  .main-page-common__info.row.pb-3.text-center
    .col Моек: {{ summary.total }}
    .col Клиентов: {{ summary.clients }}
    .col Выручка: {{ summary.revenue }}
    .col Касса: {{ summary.cash }}
  widget-list(:widgets="summary.widgets" :is-common="true")
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
