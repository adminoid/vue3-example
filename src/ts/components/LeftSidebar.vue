<template lang="pug">
.left-sidebar(:style="[{width}, styles]") {{ width }}
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { leftSidebarWidth as width } from '@/config'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    const sidebarOpen = computed(_ => store.state.layout.sidebar.open)
    const styles = computed(_ => {
      if (!sidebarOpen.value) {
        return {
          left: `-${width}`
        }
      }
      return false
    })
    return {
      width,
      styles
    }
  }
})

export default LeftSidebar
</script>

<style lang="sass">
.left-sidebar
  position: fixed
  background: #c5dce5
  min-height: 100%
</style>
