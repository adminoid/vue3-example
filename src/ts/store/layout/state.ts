export default () => ({
  // The variable animationEnabled prevented animation when the page is loaded.
  // Animation works only after the first click.
  animationEnabled: false,
  sidebar: {
    open: true,
    pinned: true
  },
  chat: {
    open: false
  },
  window: {
    open: false,
    start: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    element: HTMLElement,
    data: {}
  }
})
