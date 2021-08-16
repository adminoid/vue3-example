export default {
  hasPin (state: any) {
    return state.sidebar.open &&
      state.sidebar.pinned
  }
}
