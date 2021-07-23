type typeState = {
  sidebar: {
    open: boolean,
    pinned: boolean,
  },
  chat: {
    open: boolean
  }
}

export default {
  sidebarToggle (state: typeState) {
    state.sidebar.open = !state.sidebar.open
  },
  sidebarTogglePin (state: typeState) {
    state.sidebar.pinned = !state.sidebar.pinned
  },
  chatToggle (state: typeState) {
    state.chat.open = !state.chat.open
  }
}
