type tSidebar = {
  sidebar: {
    open: boolean,
    pinned: boolean,
  }
}

export default {
  sidebarToggle (state: tSidebar) {
    state.sidebar.open = !state.sidebar.open
  },
  sidebarTogglePin (state: tSidebar) {
    state.sidebar.pinned = !state.sidebar.pinned
  }
}
