<template lang="pug">
main.main-content(:class="classes")
  .container-fluid
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
    const classes = computed(() => ({
      'main-content_padding': store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned,
      'main-content_with-pin': store.state.layout.sidebar.pinned
    }))
    return {
      classes
    }
  }
})

export default MainContent
</script>
