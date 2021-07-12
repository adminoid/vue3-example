import { createApp } from 'vue'
import App from '@/ts/App.vue'

import store from '@/ts/store'

createApp(App)
  .use(store)
  .mount('#app')
