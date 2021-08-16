<template lang="pug">
.main-page-common
  .main-page-common__info.row.p-1.text-center
    .col Моек: {{ summary.total }}
    .col Клиентов: {{ summary.clients }}
    .col Выручка: {{ summary.revenue }}
    .col Касса: {{ summary.cash }}
  .main-page-common__widgets.row.d-flex.flex-md-nowrap
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
    .col.p-2
      .widget.mx-auto
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TSummary } from '@/ts/types/mainPage'

export default defineComponent({
  props: {
    summary: Object as PropType<TSummary>
  }
})
</script>

<style lang="sass" scoped>
// temporary debug styles
.widget
  min-width: 3vw
  min-height: 3vw
  max-width: 5vw
  background: #000
  opacity: .6
</style>
