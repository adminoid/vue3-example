<template lang="pug">
ul.main-menu(v-if="items.length > 0")
  li.main-menu__fi.mb-1(v-for="item in items" :key="item.id")
    a.main-menu__expand(href='#' @click.prevent="expand")
      svg(width='12px' height='12px' xmlns='http://www.w3.org/2000/svg')
        g#expand(fill='#000')
          rect#Rectangle(x='0' y='5' width='12' height='2' rx='1')
          rect#Rectangle(x='5' y='0' width='2' height='12' rx='1')
    router-link(:to="item.uri") {{ item.title }}
    ul.main-menu__submenu.list-unstyled(v-if="item.children?.length > 0")
      li.main-menu__si.mb-1(v-for="subItem in item.children" :key="item.id")
        router-link(:to="subItem.uri") {{ subItem.title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { items, TItems } from '@/ts/includes/main-menu'

const MainMenu = defineComponent({
  setup () {
    // const
    // const expand = () => {
    //
    // }

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
  padding-left: 0
  list-style: none
  .main-menu__fi // main menu first level item
    position: relative
    a
      color: black
      transition: color $animation-speed-fast ease
      #expand
        transition: fill $animation-speed-fast ease
      &:hover
        color: $bb-blue-darken
        #expand
          fill: $bb-blue-darken
  .main-menu__si // main menu second level item
    a
      font-size: 15px
  .main-menu__submenu
    padding: 4px 0 1px 8px
  .main-menu__expand
    display: block
    position: absolute
    left: -17px
    top: -1px
</style>
