import { createApp } from 'vue'
import App from './App.vue'

// 引入插件
import router from '@/router'
import pinia from '@/stores'

// 初始化样式
import "normalize.css"
import "@/assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
