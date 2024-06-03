import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGates from 'vue-gates'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './plugins/axios'
import 'uno.css'
import { ErrorMessage, configure } from 'vee-validate'

const app = createApp(App)

configure({
  validateOnInput: true // Validate on input
})

app.use(createPinia())
app.use(router)
app.use(VueGates)
app.use(ElementPlus)

app.component('ErrorMessage', ErrorMessage)

app.config.globalProperties.$axios = axios

app.mount('#app')
