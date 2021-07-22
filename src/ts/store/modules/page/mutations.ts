export default {
  setPageData (state: any, payload: {data: object, page: string}) {
    state.pages[payload.page] = payload.data
  }
}
