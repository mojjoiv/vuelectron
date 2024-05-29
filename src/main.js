import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'  // Make sure the import path is correct

createApp(App)
   .use(router)
   .mount('#app')
