<template lang="pug">
main(:class="{ padding: hasPadding }")
  .container-fluid
    component(:is="pageComponent || Page404")
</template>

<script lang="ts">
import { computed, defineComponent, resolveDynamicComponent, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import MainPage from 'c@/pages/MainPage.vue'
import Page404 from 'c@/pages/Page404.vue'
import { pascalCase } from 'change-case'

const MainContent = defineComponent({
  components: {
    MainPage,
    Page404,
    ExampleOne: defineAsyncComponent(() => import('c@/pages/ExampleOne.vue') as any),
    ExampleTwo: defineAsyncComponent(() => import('c@/pages/ExampleTwo.vue') as any)
  },

  setup () {
    const store = useStore()
    const route = useRoute()
    const pageComponent = computed(_ => {
      if (route.path === '/') {
        return 'MainPage'
      }
      const componentName: string = pascalCase(String(route.params.page))
      return typeof resolveDynamicComponent(componentName) !== 'string' ? componentName : 'Page404'
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
  padding: 88px 20px 0
  &.padding
    width: calc(100% - #{$left-sidebar-width})
</style>
