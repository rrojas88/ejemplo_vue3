
import { createApp } from 'vue'

import router from './config/router'

import App from './App.vue'
//import router from './router'

//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
