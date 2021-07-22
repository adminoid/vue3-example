<template lang="pug">
washing-preview
washing-preview
washing-preview
washing-preview
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import WashingPreview from 'c@/WashingPreview.vue'

const MainPage = defineComponent({
  components: { WashingPreview },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
  }
})

export default MainPage
</script>
