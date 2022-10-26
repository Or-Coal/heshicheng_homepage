import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import './assets/main.css'
// 引入Varlet组件库
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Varlet)
app.mount('#app')
