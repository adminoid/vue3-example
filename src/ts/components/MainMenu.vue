<template lang="pug">
ul.main-menu.list-unstyled(v-if="items.length > 0")
  li.mb-1(v-for="item in items")
    router-link(:to="item.uri") {{ item.title }}
    ul.main-menu__submenu.list-unstyled(v-if="item.children?.length > 0")
      li.mb-1(v-for="subItem in item.children")
        router-link(:to="subItem.uri") {{ subItem.title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { items, TItems } from '@/ts/includes/main-menu'

const MainMenu = defineComponent({
  setup () {
    return {
      items
    } as {items: TItems}
  }
})
export default MainMenu
</script>

<style lang="sass">
@import "src/sass/variables"

.main-menu
  > li a
    color: black
    &:hover
      color: darken($bb-blue, 30%)
  .main-menu__submenu
    padding: 4px 0 1px 8px
    > li a
      font-size: 15px
</style>
