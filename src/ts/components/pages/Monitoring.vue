<template lang="pug">
h1.text-info(v-if="fullPath === '/monitoring'") Мониторинг
router-view(v-else)
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const Monitoring = defineComponent({
  setup () {
    const router = useRouter()
    const fullPath = computed(() => router.currentRoute.value.fullPath)

    return {
      fullPath
    }
  }
})

export default Monitoring
</script>
