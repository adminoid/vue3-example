<template lang="pug">
main.main-content(:class="{'main-content_padding': hasPadding}")
  router-view
</template>

<script lang="ts">
import {
  computed,
  defineComponent
} from 'vue'
import { useStore } from 'vuex'

const MainContent = defineComponent({
  setup: function () {
    const store = useStore()
    const hasPadding = computed(() => store.getters['layout/hasPin'])
    return {
      hasPadding
    }
  }
})

export default MainContent
</script>
