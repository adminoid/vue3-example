export default {
  updateViewportWidth (state: any, width: number) {
    state.viewport.width = width
  },
  login (state: any) {
    state.logged = true
  }
}
