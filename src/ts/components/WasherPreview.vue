<template lang="pug">
.washer-preview.mb-3
  .washer-preview__common
    h5 {{ washer.name }} &nbsp
      small.text-muted {{ washer.id }}
    .washer-preview__text
      .row
        .col.text-black-50.fst-italic Адрес
        .col.text-black-50.fst-italic Версия ПО
        .col.text-black-50.fst-italic Мокрых постов
        .col.text-black-50.fst-italic Сухих постов
      .row
        .col {{ washer.address }}
        .col {{ washer.version }}
        .col {{ washer.posts.wet }}
        .col {{ washer.posts.dry }}
  widget-list(
    :widgets="widgets"
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TWasher } from 't@/types/mainPage'
import WidgetList from 'c@/WidgetList.vue'

export default defineComponent({
  components: { WidgetList },

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
</script>
