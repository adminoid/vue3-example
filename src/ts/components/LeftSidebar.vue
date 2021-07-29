<template lang="pug">
.left-sidebar(:class="{open: sidebarOpen}")
  .left-sidebar__header(:class="{open: sidebarOpen}")
    router-link(to="/")
      img.left-sidebar__logo(src="@/assets/logo-black.svg")
  a.left-sidebar__sticker(v-if="sidebarOpen" @click.prevent="togglePin")
    svg(v-if="sidebarPinned" width='17px' height='17px' xmlns='http://www.w3.org/2000/svg')
      g#pin(transform='translate(-302.000000, -174.000000)' fill='#A9A9A9')
        path(:d="pinnedIconD"
        transform='translate(309.000000, 184.100000) rotate(-315.000000) translate(-309.000000, -184.100000)')
    svg(v-else width='14px' height='14px' xmlns='http://www.w3.org/2000/svg')
      g#pin(transform='translate(-303.000000, -176.000000)' fill='#A9A9A9')
        path(:d="unpinnedIconD"
        transform='translate(309.000000, 184.000000) rotate(-315.000000) translate(-309.000000, -184.000000) ')
  .left-sidebar__body(v-if="sidebarOpen")
    ul.left-sidebar__main-menu.list-unstyled

      li.mb-1
        router-link(to="/metrics") Метрики

      li.mb-1
        router-link(to="/monitoring") Мониторинг

      li.mb-1
        router-link(to="/settings") Настройки
        ul.list-unstyled
          li.mb-1
            router-link(to="/settings/program-cost") Стоимость программ
          li.mb-1
            router-link(to="/settings/chem-dosage") Дозация химии
          li.mb-1
            router-link(to="/settings/pressure") Настройка давления
          li.mb-1
            router-link(to="/settings/posts") Посты и пылесосы
          li.mb-1
            router-link(to="/settings/one-time") Одноразовые настройки
          li.mb-1
            router-link(to="/settings/customers") Пользователи
          li.mb-1
            router-link(to="/settings/cash") Онлайн касса
          li.mb-1
            router-link(to="/settings/options") Настройки опций объекта
          li.mb-1
            router-link(to="/settings/description") Описание объекта
      li.mb-1
        router-link(to="/statistic") Статистика
      li.mb-1
        router-link(to="/finance") Финансы
      li.mb-1
        router-link(to="/bonus") ALLES Bonus
      li.mb-1
        router-link(to="/accounting") Учет
      li.mb-1
        router-link(to="/economics") Экономика
      li.mb-1
        router-link(to="/analytics") Анализ мойки
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { pinnedIconD, unpinnedIconD } from '@/ts/includes/svg'

const LeftSidebar = defineComponent({
  setup () {
    const store = useStore()
    return {
      sidebarOpen: computed(() => store.state.layout.sidebar.open),
      sidebarPinned: computed(_ => store.state.layout.sidebar.pinned),
      closeSidebar: () => store.commit('layout/sidebarToggle'),
      togglePin: () => store.commit('layout/sidebarTogglePin'),
      pinnedIconD,
      unpinnedIconD
    }
  }
})

export default LeftSidebar
</script>

<style lang="sass">
@import "LeftSidebar"
</style>
