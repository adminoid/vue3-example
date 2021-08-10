import { createApp } from 'vue'
import App from '@/ts/App.vue'
import store from '@/ts/store'
import router from '@/ts/router'

// import '~@/sass/app.sass'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
