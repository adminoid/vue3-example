import { createStore } from 'vuex'
import layout from './modules/layout'
import mainPage from './modules/main-page'

export default createStore({
  modules: {
    layout,
    mainPage
  }
})
