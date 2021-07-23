export default {
  sidebarToggle (state: any) {
    state.sidebar.open = !state.sidebar.open
  },
  sidebarTogglePin (state: any) {
    state.sidebar.pinned = !state.sidebar.pinned
  },
  chatToggle (state: any) {
    state.chat.open = !state.chat.open
  }
}
