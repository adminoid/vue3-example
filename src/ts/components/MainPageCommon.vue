<template lang="pug">
.my-3
  .row.fw-bold.mb-2
    .col-2 Всего моек
    .col-2 {{ summary.total }}

  .row.fw-bold.mb-2
    .col-2 Клиенты
    .col-2 {{ summary.clients }}

  .row.fw-bold.mb-2
    .col-2 Выручка
    .col-2 {{ summary.revenue }}

  .row.fw-bold.mb-2
    .col-2 Касса
    .col-2 {{ summary.cash }}

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
.icon
  width: 20px
  height: 20px
</style>
