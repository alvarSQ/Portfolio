import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from '../node_modules/pinia-plugin-persistedstate/dist'

import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')