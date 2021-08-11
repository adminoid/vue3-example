import { createApp } from 'vue'
import App from 't@/App.vue'
import store from 't@/store'
import router from 't@/router'

import '@/sass/app.sass'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
