<template lang="pug">
a.burger(href='#' @click="toggle")
  svg.burger__sidebar-open(
    width='45px' height='32px'
    viewBox='0 0 45 32'
    :class="{open: sidebarOpen, ready: animationEnabled}"
  )
    g#lines(fill='#FFF')
      rect#line-1(x='0' y='0' width='32' height='4' rx='2')
      rect#line-2(x='0' y='14' width='32' height='4' rx='2')
      rect#line-3(x='0' y='28' width='45' height='4' rx='2')
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

const BurgerButton = defineComponent({
  setup () {
    const store = useStore()
    const toggle = () => {
      store.commit('layout/sidebarToggle')
    }
    return {
      sidebarOpen: computed(() => store.getters['layout/isShowSidebar']),
      animationEnabled: computed(() => store.state.layout.animationEnabled),
      toggle
    }
  }
})

export default BurgerButton
</script>

<style lang="sass">
@import "BurgerButton"
</style>
