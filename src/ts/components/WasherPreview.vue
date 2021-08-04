<template lang="pug">
.washer-preview.mb-5
  h1 {{ washer.name }} &nbsp
    small.text-muted {{ washer.id }}
  p - название (ALLES), идентификатор (234ADE456) — не значки
  p - количество постов сухих (3) и мокрых (6)
  p - номер версии по (4.6.10)
  p - ~~ Адрес (O.Bergolts 35)

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

<style lang="sass">
@import "src/sass/variables"

.washer-preview
  border-radius: 5px
  .washer-preview__list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(108px, 1fr))
</style>
