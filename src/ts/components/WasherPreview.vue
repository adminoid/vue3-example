<template lang="pug">
.washer-preview.mb-5.p-2
  h1 {{ washer.name }} &nbsp
    small.text-muted {{ washer.id }}

  h5.text-black-50 Вариант 1
  table.common.table-bordered.my-3.mb-4.align-middle.text-center
    tbody
      tr
        th Постов
        th Версия ПО
        th Адрес
      tr
        td 3 сухих
        td(rowspan="2") 4.6.10
        td(rowspan="2") O.Bergolts 35
      tr
        td 6 мокрых

  h5.text-black-50 Вариант 2
  .container.text-center.my-3.my-md-4
    .row
        .col-5
          h6 Постов
          .row
            .col 3 сухих
            .col 6 мокрых
        .col
          h6 Версия ПО
          .row
            .col 4.6.10
        .col-3
          h6 Адрес
          .row
            .col O.Bergolts 35

  h5.text-black-50 Вариант 3
  .container.text-center.my-3.my-md-4.third
    .row
      .third__col.col-5.p-1
        h6 Постов
        .row
          .col 3 сухих
          .col 6 мокрых
      .third__col.col.p-1
        h6 Версия ПО
        .row
          .col 4.6.10
      .third__col.col-3.p-1
        h6 Адрес
        .row
          .col O.Bergolts 35

  .washer-preview__list
    washer-preview-widget(
      v-for="widget in widgets"
      :key="widget.id"
      :widget="widget"
      :total="widgets.length"
    )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import WasherPreviewWidget from 'c@/WasherPreviewWidget.vue'
import { TWasher } from 't@/types/mainPage'

const WasherPreview = defineComponent({
  components: { WasherPreviewWidget },

  props: {
    washer: {
      type: Object as PropType<TWasher>
    }
  },

  setup (props) {
    return {
      widgets: props.washer?.widgets
    }
  }
})

export default WasherPreview
</script>
