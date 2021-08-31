<template lang="pug">
.main-page(:class="classes")
  .main-page__fixed.container-fluid
    .row
      washer-preview(
        :info="summary.info"
        :widgets="summary.widgets"
        :is-common="true"
      )
    .row
      widget-filters
  .main-page__scrollable
    washer-preview(
      v-for="washer in washers"
      :key="washer.info.id"
      :info="washer.info"
      :widgets="washer.widgets"
    )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import WasherPreview from 'c@/WasherPreview.vue'
import { TWasher, TUser, TSummary } from 't@/types/mainPage'
import WidgetFilters from 'c@/WidgetFilters.vue'

const MainPage = defineComponent({
  components: { WasherPreview, WidgetFilters },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('mainPage/getPageData')
    })
    const classes = computed(() => ({
      'main-page_with-sidebar': store.getters['layout/hasPin']
      // 'main-page_is-mobile': store.getters.isMobileContent
    }))
    return {
      washers: computed<TWasher[]>(() => store.state.mainPage.washers),
      user: computed<TUser>(() => store.state.mainPage.user),
      summary: computed<TSummary>(() => store.state.mainPage.summary),
      classes
    }
  }
})

export default MainPage
</script>
