import { createStore, Store } from 'vuex'
import layout from './modules/layout'
import mainPage from './modules/main-page'

type StoreType = Store<{
  layout: {
    sidebar: {
      open: boolean,
      stick: boolean,
    }
  },
  pageData: {}
}>

export default createStore({
  modules: {
    layout,
    mainPage
  }
}) as StoreType
