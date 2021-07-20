<template lang="pug">
main(:class="{ padding: hasPadding }")
  .container-fluid
    component(:is="pageComponent")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import SelectObjectExample from 'c@/pages/SelectObjectExample.vue'
import SelectTimeExample from 'c@/pages/SelectTimeExample.vue'
import { pascalCase } from 'change-case'

const MainContent = defineComponent({
  components: {
    SelectObjectExample,
    SelectTimeExample
  },

  setup () {
    const store = useStore()
    const route = useRoute()
    const pageComponent = computed(_ => {
      let componentName: string | boolean = false
      if (route.params.page) {
        componentName = pascalCase(String(route.params.page))
      }
      return componentName
    })
    const hasPadding = computed(
      _ => store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned)
    return {
      hasPadding,
      pageComponent
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
  padding: 32px 20px
  &.padding
    width: calc(100% - #{$left-sidebar-width})
</style>
