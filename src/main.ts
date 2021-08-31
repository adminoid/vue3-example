import { createApp } from 'vue'
import App from 't@/App.vue'
import store from 't@/store'
import router from 't@/router'

import '@/sass/app.sass'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

// if (
//   process.env.NODE_ENV === 'development' &&
//   module.hot
// ) {
//   module.hot.accept()
//   module.hot.addStatusHandler(status => {
//     if (status === 'prepare') {
//       console.clear()
//       console.info(`reloaded: ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`)
//     }
//   })
// }
