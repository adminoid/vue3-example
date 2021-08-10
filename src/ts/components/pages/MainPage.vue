<template lang="pug">
.main-page main page
  h4 Здравствуйте, {{ user.name }}!

  main-page-common(:summary="summary")

  // todo: scrollable
  .main-page__scrollable scrollable
    .main-page__inside In side
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
import { TWashers, TUser, TSummary } from '@/ts/types/mainPage'

const MainPage = defineComponent({
  components: { WasherPreview, MainPageCommon },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    return {
      washers: computed<TWashers>(() => store.state.mainPage.washers),
      user: computed<TUser>(() => store.state.mainPage.user),
      summary: computed<TSummary>(() => store.state.mainPage.summary)
    }
  }
})

export default MainPage
</script>

<style lang="sass">
.main-page
  background: rgba(56, 206, 131, 0.75)
  height: $mc-height
  .main-page__scrollable
    background: rgba(168, 144, 46, 0.65)
  //.main-page__inside
    //height: $spacer

</style>
