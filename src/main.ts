import { createApp } from 'vue'
import App from 't@/App.vue'
import store from 't@/store'
import router from 't@/router'

import '@/sass/app.sass'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

if (
  process.env.VUE_APP_NOT_SECRET_CODE === 'development' &&
  module.hot
) {
  module.hot.accept()
  module.hot.addStatusHandler(status => {
    if (status === 'prepare') {
      console.clear()
      console.info('reloaded...')
    }
  })
}
