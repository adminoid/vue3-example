import { createStore, Store } from 'vuex'
import layout from './layout'
import mainPage from './main-page'

export default createStore({
  modules: {
    layout,
    mainPage
  }
}) as Store<any>
