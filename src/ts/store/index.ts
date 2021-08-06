import { createStore, Store } from 'vuex'
import layout from './layout'
import mainPage from './main-page'
import state from './state'
import mutations from './mutations'
import getters from './getters'

export default createStore({
  state,
  mutations,
  getters,
  modules: {
    layout,
    mainPage
  }
}) as Store<any>
