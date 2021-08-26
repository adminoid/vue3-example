<template lang="pug">
.main-page(
  :class="{'main-page_with-sidebar': hasPin}"
)
  .main-page__fixed
    main-page-common(:summary="summary")
  .main-page__scrollable
    washer-preview(
      v-for="washer in washers"
      :key="washer.id"
      :washer="washer"
    )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import WasherPreview from 'c@/WasherPreview.vue'
import MainPageCommon from 'c@/pages/MainPageCommon.vue'
import { TWasher, TUser, TSummary } from 't@/types/mainPage'

const MainPage = defineComponent({
  components: { WasherPreview, MainPageCommon },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    const hasPin = computed(() => store.getters['layout/hasPin'])
    return {
      washers: computed<TWasher[]>(() => store.state.mainPage.washers),
      user: computed<TUser>(() => store.state.mainPage.user),
      summary: computed<TSummary>(() => store.state.mainPage.summary),
      hasPin
    }
  }
})

export default MainPage
</script>
