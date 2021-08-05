<template lang="pug">
.my-3.main-page-common
  .row.fw-bold.mb-2
    .col-8.col-sm-6.col-md-4.col-lg-3.col-xl-2 Всего моек
    .col-4.col-lg-2 {{ summary.total }}

  .row.fw-bold.mb-2
    .col-8.col-sm-6.col-md-4.col-lg-3.col-xl-2 Клиенты
    .col-4.col-lg-2 {{ summary.clients }}

  .row.fw-bold.mb-2
    .col-8.col-sm-6.col-md-4.col-lg-3.col-xl-2 Выручка
    .col-4.col-lg-2 {{ summary.revenue }}

  .row.fw-bold.mb-2
    .col-8.col-sm-6.col-md-4.col-lg-3.col-xl-2 Касса
    .col-4.col-lg-2 {{ summary.cash }}

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
@import "src/sass/variables"

.main-page-common
  background: lighten($bb-soft-gray, 10%)
  padding: .5rem
  border-radius: .5rem
  border: 2px solid lighten($bb-blue, 33%)
.icon
  width: 20px
  height: 20px
</style>
