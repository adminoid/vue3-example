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
    state.window.element = element
    state.window.start = getAttrs(element)
    state.window.open = true
  },
  windowClose (state: any) {
    state.window.start = getAttrs(state.window.element)
    state.window.open = false
    state.window.element = HTMLElement
  }
}
