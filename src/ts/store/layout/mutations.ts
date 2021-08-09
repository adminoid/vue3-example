import { getAttrs } from '@/ts/helpers/dom'
import { TWindow } from '@/ts/types/mainPage'

const enableAnimation = (state: any) => {
  if (!state.animationEnabled) state.animationEnabled = true
}

export default {
  sidebarOpen (state: any) {
    enableAnimation(state)
    state.sidebar.open = true
    if (this.getters.isMobile && state.sidebar.open) state.chat.open = false
  },
  sidebarClose (state: any) {
    enableAnimation(state)
    state.sidebar.open = false
  },
  sidebarToggle (state: any) {
    enableAnimation(state)
    state.sidebar.open = !state.sidebar.open
    if (this.getters.isMobile && state.sidebar.open) state.chat.open = false
  },
  sidebarPin (state: any) {
    enableAnimation(state)
    if (!this.getters.isMobile) state.sidebar.pinned = true
  },
  sidebarUnpin (state: any) {
    enableAnimation(state)
    state.sidebar.pinned = false
  },
  sidebarTogglePin (state: any) {
    enableAnimation(state)
    state.sidebar.pinned = !state.sidebar.pinned
  },
  chatOpen (state: any) {
    enableAnimation(state)
    state.chat.open = true
    if (this.getters.isMobile && state.chat.open) state.sidebar.open = false
  },
  chatClose (state: any) {
    enableAnimation(state)
    state.chat.open = false
  },
  chatToggle (state: any) {
    enableAnimation(state)
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
