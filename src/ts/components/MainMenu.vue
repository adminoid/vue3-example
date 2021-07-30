<template lang="pug">
ul.main-menu(v-if="items.length > 0")
  li.main-menu__fi.mb-1(v-for="item in items" :key="item.id")
    a.main-menu__expand(href='#' @click.prevent="expand(item.id)")
      svg(width='12px' height='12px' xmlns='http://www.w3.org/2000/svg')
        g#expand(
          fill='#000'
          :class="{ expanded: isExpanded(item) }"
        )
          rect#horizontal(x='0' y='5' width='12' height='2' rx='1')
          rect#vertical(x='5' y='0' width='2' height='12' rx='1')
    router-link(:to="item.uri") {{ item.title }}
    transition(name="expand")
      ul.main-menu__submenu.list-unstyled(v-if="isExpanded(item)")
        li.main-menu__si.mb-1(v-for="subItem in item.children" :key="item.id")
          router-link(:to="subItem.uri") {{ subItem.title }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { items } from '@/ts/includes/main-menu'

const MainMenu = defineComponent({
  setup () {
    const expandedRef = ref<number[]>([])
    const expand = (id: number) => {
      if (expandedRef.value.includes(id)) {
        expandedRef.value.splice(expandedRef.value.indexOf(id), 1)
      } else {
        if (!expandedRef.value.includes(id)) expandedRef.value.push(id)
      }
    }
    const isExpanded = (item: any) => {
      return item.children?.length > 0 && expandedRef.value.includes(item.id)
    }

    return {
      items,
      expand,
      expandedRef,
      isExpanded
    }
  }
})
export default MainMenu
</script>

<style lang="sass">
@import "src/sass/variables"

.expand-enter-active,
.expand-leave-active
  transition: all $animation-speed-fast ease
.expand-enter-from,
.expand-leave-to
  max-height: 0
  opacity: 0
.expand-enter-to,
.expand-leave-from
  max-height: 5000px
  opacity: 1

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
    overflow: hidden
    display: block
    position: absolute
    left: -17px
    top: -1px
</style>
