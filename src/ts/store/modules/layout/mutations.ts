type typeState = {
  sidebar: {
    open: boolean,
    pinned: boolean,
  }
}

export default {
  sidebarToggle (state: typeState) {
    state.sidebar.open = !state.sidebar.open
  },
  sidebarTogglePin (state: typeState) {
    state.sidebar.pinned = !state.sidebar.pinned
  }
}
