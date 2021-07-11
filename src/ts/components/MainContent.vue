<template lang="pug">
main.with-sidebar
  .container-fluid Main content
</template>

<style lang="sass">
@import "src/sass/variables"

main
  float: right
  width: 100%
  &.with-sidebar
    width: calc(100% - #{$left-sidebar-width})
</style>
