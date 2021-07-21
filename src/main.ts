import { createApp } from 'vue'
import App from '@/ts/App.vue'
import store from '@/ts/store'
import router from '@/ts/router'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

// start demo backend for axios queries
async function render () {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('@/backend/rest-mock')
    await worker.start()
  }
}
render()
