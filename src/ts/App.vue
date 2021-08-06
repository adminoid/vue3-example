<template lang="pug">
dashboard-layout(v-if="logged || authorized")
login(v-else)
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import DashboardLayout from 'c@/DashboardLayout.vue'
import { useStore } from 'vuex'
import Login from 'c@/pages/Auth/Login.vue'
import storage from '@/ts/modules/storage'

export default defineComponent({
  name: 'App',
  components: {
    DashboardLayout,
    Login
  },
  setup () {
    const store = useStore()
    const updateViewportWidth = () => {
      store.commit('updateViewportWidth', window.innerWidth)
    }
    onMounted(() => {
      updateViewportWidth()
      window.addEventListener('resize', updateViewportWidth)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateViewportWidth)
    })

    return {
      authorized: !!storage.token,
      logged: computed(() => store.state.logged)
    }
  }
})
</script>

<style lang="sass">
@import "../sass/app.sass"
</style>
