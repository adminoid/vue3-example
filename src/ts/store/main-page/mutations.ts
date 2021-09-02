import { TMainPage } from 't@/types/mainPage'

export default {
  setPageData (state: any, data: TMainPage) {
    state.user = data.user
    state.summary = data.summary
    state.washers = data.washers
  },

  setScrollLeft (state: any, x: number) {
    state.scrollLeft = x
  },

  setOver (state: any, payload: { is: string, index: number | undefined }) {
    const { is, index } = payload
    state.over[is] = index
  },

  unsetOver (state: any) {
    state.over = {
      washer: undefined,
      widget: undefined
    }
  },

  toggleExpanded (state: any, washerId: string = '') {
    if (washerId) {
      state.expanded = washerId
    } else {
      state.expanded = false
    }
  }
}
