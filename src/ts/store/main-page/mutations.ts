import { TMainPage } from '@/ts/types/mainPage'

export default {
  setPageData (state: any, data: TMainPage) {
    console.log(data)
    state.washers = data.washers
  }
}
