import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/fontawesome-4.7/css/font-awesome.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



// eslint-disable-next-line no-undef


createApp(App).use(store,AOS.init()).use(router).mount('#app')
