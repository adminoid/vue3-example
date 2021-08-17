<template lang="pug">
.main-page-common
  .main-page-common__info.row.p-1.text-center
    .col Моек: {{ summary.total }}
    .col Клиентов: {{ summary.clients }}
    .col Выручка: {{ summary.revenue }}
    .col Касса: {{ summary.cash }}
  .main-page-common__widgets
    .wg-col.p-2
      .widget.mx-auto asdfasd
        br
        | asdfasd
        br
        | asdfasd
        br
        | asdfasd
        br
        | asdfasd
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
    .p-2
      .widget.mx-auto Empty
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TSummary } from 't@/types/mainPage'

export default defineComponent({
  props: {
    summary: Object as PropType<TSummary>
  }
})
</script>

<style lang="sass" scoped>
// temporary debug styles
.widget
  height: 100%
  min-height: 3rem
  background: rgba(255, 242, 36, 0.55)
  max-width: 3.4375rem
</style>
