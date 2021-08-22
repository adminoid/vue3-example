export default () => ({
  // The variable animationEnabled prevented animation when the page is loaded.
  // Animation works only after the first click.
  animationEnabled: false,
  sidebar: {
    open: true,
    pinned: false
  },
  chat: {
    open: false
  },
  window: {
    open: false,
    start: {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    element: false,
    data: {}
  }
})
