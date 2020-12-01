import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
createApp(App).use(ElementPlus).use(router).mount('#app')
