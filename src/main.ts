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
  process.env.NODE_ENV === 'development'
) {
  console.clear()
  const h = (new Date()).getHours()
  const m = (new Date()).getMinutes()
  const s = (new Date()).getSeconds()
  console.info(`reloaded: ${h}:${m}:${s}`)
}
