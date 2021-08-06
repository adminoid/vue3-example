<template lang="pug">
dashboard-layout
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import DashboardLayout from 'c@/DashboardLayout.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    DashboardLayout
  },
  setup () {
    const store = useStore()
    const updateViewportWidth = () => {
      store.commit('updateViewportWidth', window.innerWidth)
    }
    const width = computed(() => store.state.viewport.width)
    onMounted(() => {
      updateViewportWidth()
      window.addEventListener('resize', updateViewportWidth)
    })

    return {
      width
    }
  }
})
</script>

<style lang="sass">
@import "../sass/app.sass"
</style>
