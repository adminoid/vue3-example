import { getAttrs } from '@/ts/helpers/dom'

type TWindow = {
  el: HTMLElement,
  data: any
}

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
  windowOpen (state: any, { el, data } : TWindow) {
    state.window.element = el
    state.window.start = getAttrs(el)
    state.window.data = data
    state.window.open = true
  },
  windowClose (state: any) {
    state.window.start = getAttrs(state.window.element)
    state.window.open = false
    state.window.data = {}
    state.window.element = HTMLElement
  }
}
