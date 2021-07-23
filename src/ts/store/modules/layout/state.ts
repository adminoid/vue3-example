export type stateType = {
  sidebar: {
    open: boolean,
    pinned: boolean
  },
  chat: {
    open: boolean
  }
}

export default () => ({
  sidebar: {
    open: true,
    pinned: true
  },
  chat: {
    open: false
  }
})
