<template lang="pug">
top-navbar
left-sidebar
main-content
right-chat
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from 'c@/TopNavbar.vue'
import LeftSidebar from 'c@/LeftSidebar.vue'
import MainContent from 'c@/MainContent.vue'
import RightChat from 'c@/RightChat.vue'

export default defineComponent({
  name: 'DashboardLayout',
  components: {
    LeftSidebar,
    TopNavbar,
    MainContent,
    RightChat
  }
})
</script>
