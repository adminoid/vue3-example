import { getAttrs } from '@/ts/helpers/dom'
import { TWindow } from '@/ts/types/mainPage'

export default {
  sidebarToggle (state: any) {
    if (!state.animationEnabled) state.animationEnabled = true
    state.sidebar.open = !state.sidebar.open
    if (this.getters.isMobile && state.sidebar.open) state.chat.open = false
  },
  sidebarTogglePin (state: any) {
    if (this.getters.isMobile) state.sidebar.pinned = !state.sidebar.pinned
  },
  chatToggle (state: any) {
    if (!state.animationEnabled) state.animationEnabled = true
    state.chat.open = !state.chat.open
    if (this.getters.isMobile && state.chat.open) state.sidebar.open = false
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
} as any
