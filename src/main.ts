import { createApp } from 'vue'
import App from '@/ts/App.vue'
import store from '@/ts/store'
import router from '@/ts/router'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
