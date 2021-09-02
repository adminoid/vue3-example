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
    console.info('unset')
    state.over = {
      washer: undefined,
      widget: undefined
    }
  }
}
