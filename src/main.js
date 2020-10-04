import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'

const myApp = createApp(App);

myApp.config.globalProperties.$http = axios

//Directives
myApp.directive('rainbow', {
    beforeMount(el){
        el.style.color = '#'+ Math.random().toString().slice(2,8)
    }
})

myApp.directive('theme', {
    beforeMount(el,bind){
        if(bind.value == 'wide'){
            el.style.maxWidth = '1200px';
        }else if(bind.value == 'narrow'){
            el.style.maxWidth = '560px';
        }

        if(bind.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
})

myApp.mount('#app')
