<template lang="pug">
h4 Здравствуйте, {{ user.name }}!
.common-info.mb-5.p-3.container-fluid
  .col Всего моек: {{ summary.total }}
  .col Клиенты: {{ summary.clients }}
  .col Выручка: {{ summary.revenue }}
  .col Касса: {{ summary.cash }}
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
</style>
