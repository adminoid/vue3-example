<template lang="pug">
main(:class="{ padding: hasPadding }")
  .container-fluid
    | Page name is:
    strong {{ page }}
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const MainContent = defineComponent({
  setup () {
    const store = useStore()
    const route = useRoute()
    console.log(route.params.page)
    const page = computed(_ => route.params.page)
    const hasPadding = computed(
      _ => store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned)
    return {
      hasPadding,
      page
    }
  }
})

export default MainContent
</script>

<style lang="sass">
@import "src/sass/variables"
main
  float: right
  width: 100%
  transition: width $left-sidebar-animation-speed ease-in-out
  &.padding
    width: calc(100% - #{$left-sidebar-width})
</style>
