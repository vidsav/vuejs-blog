import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'

const myApp = createApp(App);

myApp.use(VueRouter);

const router = new VueRouter({
    routes: Routes
})

myApp.config.globalProperties.$http = axios

myApp.mount('#app')
myApp.router = router;
