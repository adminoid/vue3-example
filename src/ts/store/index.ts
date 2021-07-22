import { createStore, Store } from 'vuex'
import layout from './modules/layout'
import page from './modules/page'

type StoreType = Store<{
  layout: {
    sidebar: {
      open: boolean,
      stick: boolean,
    }
  },
  page: {
    pages: []
  }
}>

export default createStore({
  modules: {
    layout,
    page
  }
}) as StoreType
