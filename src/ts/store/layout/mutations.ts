import { getAttrs } from '@/ts/helpers/dom'

export default {
  sidebarToggle (state: any) {
    if (!state.animationEnabled) state.animationEnabled = true
    state.sidebar.open = !state.sidebar.open
    if (state.sidebar.open) state.chat.open = false
  },
  sidebarTogglePin (state: any) {
    state.sidebar.pinned = !state.sidebar.pinned
  },
  chatToggle (state: any) {
    if (!state.animationEnabled) state.animationEnabled = true
    state.chat.open = !state.chat.open
    if (state.chat.open) state.sidebar.open = false
  },
  windowOpen (state: any, element: HTMLElement) {
    // todo: get element and calculate css attrs
    state.window.element = element
    const attrs = getAttrs(element)
    console.log(attrs)
    // console.log(this.commit)

    state.window.start = attrs
    state.window.open = true
  },
  windowClose (state: any) {
    const attrs = getAttrs(state.window.element)
    console.log(attrs)
    state.window.element = HTMLElement
    state.window.start = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
    state.window.open = false
  }
}
