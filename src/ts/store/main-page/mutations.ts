import { TMainPage } from 't@/types/mainPage'

export default {
  setPageData (state: any, data: TMainPage) {
    state.user = data.user
    state.summary = data.summary
    state.washers = data.washers
  },

  setScrollLeft (state: any, x: number) {
    state.scrollLeft = x
  }
}
