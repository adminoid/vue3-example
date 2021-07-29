<template lang="pug">
h1.text-info(v-if="fullPath === '/metrics'") Метрики
router-view(v-else)
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const Metrics = defineComponent({
  setup () {
    const router = useRouter()
    const fullPath = computed(() => router.currentRoute.value.fullPath)

    return {
      fullPath
    }
  }
})

export default Metrics
</script>
