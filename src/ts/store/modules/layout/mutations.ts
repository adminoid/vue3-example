// importing state type of module
import { stateType as ST } from './state'

export default {
  sidebarToggle (state: ST) {
    state.sidebar.open = !state.sidebar.open
  },
  sidebarTogglePin (state: ST) {
    state.sidebar.pinned = !state.sidebar.pinned
  },
  chatToggle (state: ST) {
    state.chat.open = !state.chat.open
  }
}
