import { createStore, Store } from 'vuex'
import layout from './layout'
import mainPage from './main-page'
import state from './state'
import mutations from './mutations'

export default createStore({
  state,
  mutations,
  modules: {
    layout,
    mainPage
  }
}) as Store<any>
