import { TMainPage, TOver } from 't@/types/mainPage'

export default {
  setPageData (state: any, data: TMainPage) {
    state.user = data.user
    state.summary = data.summary
    state.washers = data.washers
  },

  setOver (state: any, over: TOver) {
    state.over.washer = over.washer
    state.over.widget = over.widget
  },

  unsetOver (state: any) {
    state.over = {
      washer: false,
      widget: false
    }
  }
}
