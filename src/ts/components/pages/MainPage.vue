<template lang="pug">
.main-page(:class="{'main-page_with-sidebar': sidebarOpen}")
  .main-page__fixed
    h4 Здравствуйте, {{ user.name }} -======= {{ sidebarOpen }}!

    main-page-common(:summary="summary")

  // todo: scrollable
  .main-page__scrollable scrollable
    .scroll-area__inside In side
      br
      | inside
    //washer-preview(
    //  v-for="washer in washers"
    //  :key="washer.id"
    //  :washer="washer"
    //)
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import WasherPreview from 'c@/WasherPreview.vue'
import MainPageCommon from 'c@/MainPageCommon.vue'
import { TWashers, TUser, TSummary } from 't@/types/mainPage'

const MainPage = defineComponent({
  components: { WasherPreview, MainPageCommon },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    const sidebarOpen = computed(() => store.state.layout.sidebar.open && store.state.layout.sidebar.pinned)
    return {
      washers: computed<TWashers>(() => store.state.mainPage.washers),
      user: computed<TUser>(() => store.state.mainPage.user),
      summary: computed<TSummary>(() => store.state.mainPage.summary),
      sidebarOpen
    }
  }
})

export default MainPage
</script>
