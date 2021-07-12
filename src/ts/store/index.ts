import { createStore, Store } from 'vuex'
import layout from './modules/layout'

type StoreType = Store<{
  layout: {
    sidebar: {
      open: boolean,
      stick: boolean,
    }
  }
}>

export default createStore({
  modules: {
    layout
  }
}) as StoreType
