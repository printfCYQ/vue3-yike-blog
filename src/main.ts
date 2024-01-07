import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router' // 路由
import { createPinia } from 'pinia'
import './static/icons/iconfont/iconfont.css'    // 引入阿里云字体图标css
import './static/icons/iconfont/iconfont.js'    // 引入阿里云字体图标css

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
setupRouter(app) // 引入路由

router.isReady().then(() => {
    app.mount('#app')
})
