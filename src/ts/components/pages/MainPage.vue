<template lang="pug">
h2 Здравствуйте, {{ user.name }}!
.common-info.mb-5
  pre {{ summary }}
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
import { TWashers, TUser, TSummary } from '@/ts/types/mainPage'

const MainPage = defineComponent({
  components: { WasherPreview },

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
@import "src/sass/variables"

.common-info
  min-height: 200px
  @include window
</style>
