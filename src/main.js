import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'

const myApp = createApp(App);

myApp.config.globalProperties.$http = axios

myApp.mount('#app')
