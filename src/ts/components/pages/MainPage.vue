<template lang="pug">
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

const MainPage = defineComponent({
  components: { WasherPreview },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    return {
      washers: computed(() => store.state.mainPage.washers.washers)
    }
  }
})

export default MainPage
</script>
