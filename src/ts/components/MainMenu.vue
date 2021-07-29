<template lang="pug">
ul.main-menu.list-unstyled

  li.mb-1
    router-link(to="/metrics") Метрики

  li.mb-1
    router-link(to="/monitoring") Мониторинг

  li.mb-1
    router-link(to="/settings") Настройки
    ul.main-menu__submenu.list-unstyled
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
import { defineComponent } from 'vue'
const MainMenu = defineComponent({})
export default MainMenu
</script>

<style lang="sass">
@import "src/sass/variables"

.main-menu
  li a
    color: black
    &:hover
      color: darken($bb-blue, 30%)
  .main-menu__submenu
    padding-left: 10px
</style>
