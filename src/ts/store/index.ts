import { createStore, Store } from 'vuex'
import layout from './modules/layout'

type StoreType = Store<{layout: {sidebarOpen: boolean}}>

export default createStore({
  modules: {
    layout
  }
}) as StoreType
