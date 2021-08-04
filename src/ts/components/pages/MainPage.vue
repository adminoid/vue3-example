<template lang="pug">
h1 Common information
.common-info.mb-5 Some info
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
import { TWashers } from '@/ts/types/mainPage'

const MainPage = defineComponent({
  components: { WasherPreview },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    return {
      washers: computed<TWashers>(() => store.state.mainPage.washers)
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
