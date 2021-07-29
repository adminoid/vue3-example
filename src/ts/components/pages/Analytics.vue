<template lang="pug">
h1.text-info(v-if="fullPath === '/analytics'") Анализ мойки
router-view(v-else)
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const Analytics = defineComponent({
  setup () {
    const router = useRouter()
    const fullPath = computed(() => router.currentRoute.value.fullPath)

    return {
      fullPath
    }
  }
})

export default Analytics
</script>
