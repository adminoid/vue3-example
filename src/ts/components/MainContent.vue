<template lang="pug">
main(:class="{ padding: hasPadding }")
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
    const hasPadding = computed(
      _ => store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned
    )
    return {
      hasPadding
    }
  }
})

export default MainContent
</script>
