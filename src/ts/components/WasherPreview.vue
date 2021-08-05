<template lang="pug">
.washer-preview.mb-5
  h1 {{ washer.name }} &nbsp
    small.text-muted {{ washer.id }}

  table.common.table-bordered.border-primary.my-3.p-3
    tbody
      tr
        th(scope="row") Постов
        td 3 сухих
        td 6 мокрых
      tr
        th(scope="row") Версия ПО
        td(colspan="2") 4.6.10
      tr
        th(scope="row") Адрес
        td(colspan="2") O.Bergolts 35

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
import { TWasher } from '@/ts/types/mainPage'

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

<style lang="sass" scoped>
@import "src/sass/variables"

.washer-preview
  border-radius: 5px
  .washer-preview__list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(112px, 1fr))
    grid-auto-rows: 1fr
    row-gap: 5px

table.common td
  padding: 10px
</style>
