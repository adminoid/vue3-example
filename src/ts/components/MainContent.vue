<template lang="pug">
main(:class="{ padding: hasPadding }")
  .container-fluid
    pre {{ pageComponent }}
    component(:is="pageComponent")
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  resolveComponent
} from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { pascalCase } from 'change-case'
import { mainContent as config } from '@/config'

import MainPage from 'c@/pages/MainPage.vue'
import Page404 from 'c@/pages/Page404.vue'
import ExampleOne from 'c@/pages/ExampleOne.vue'
import ExampleTwo from 'c@/pages/ExampleTwo.vue'

const MainContent = defineComponent({
  components: {
    MainPage,
    Page404,
    ExampleOne,
    ExampleTwo
  },

  setup: function () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const hasPadding = computed(
      _ => store.state.layout.sidebar.open &&
        store.state.layout.sidebar.pinned)

    const getUriUppercase = (uri: string|string[]) => pascalCase(String(uri)) || ''

    const pageComponent = computed(() => {
      if (route.path === '/') return 'MainPage'
      // check if component by uri (upper cased) exist
      const uriUppercase = getUriUppercase(route.params.page)
      const isComponentExist = (uriUppercase: string) => typeof resolveComponent(uriUppercase) !== 'string'
      console.log(uriUppercase, isComponentExist(uriUppercase))
      if (isComponentExist(uriUppercase)) {
        return uriUppercase
      }
      return 'Page404'
    })

    const isNeedToGetPageData = computed(() => config.exclude_pages.includes(pageComponent.value))

    router.afterEach(() => {
      if (isNeedToGetPageData.value) store.dispatch('page/getPageData', route.params.page)
    })

    const pageData = computed((): any => {
      return store.state.page.pages['example-two']
    })

    return {
      hasPadding,
      pageComponent,
      pageData
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
