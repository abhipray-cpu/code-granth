import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
import store from './stores/index'
app.use(router)
app.use(Vue3Lottie)
app.use(store)
app.mount('#app')
