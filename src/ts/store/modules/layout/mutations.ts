export default {
  toggleSidebar (state: {sidebar: { open: boolean, }}) {
    state.sidebar.open = !state.sidebar.open
    console.log(state.sidebar.open)
  }
}
