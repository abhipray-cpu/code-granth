import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
import store from './stores/index'
import Vue3Prism from 'vue3-prism/lib/Vue3Prism.common.js'
import 'vue3-prism/lib/Vue3Prism.css'
import './registerServiceWorker'
app.use(Vue3Prism)
app.use(router)
app.use(Vue3Lottie)
app.use(store)
app.mount('#app')
