<template lang="pug">
top-navbar
left-sidebar
main-content
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from 'c@/TopNavbar.vue'
import LeftSidebar from 'c@/LeftSidebar.vue'
import MainContent from 'c@/MainContent.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    LeftSidebar,
    TopNavbar,
    MainContent
  }
})
</script>

<style lang="sass" scoped>

</style>
