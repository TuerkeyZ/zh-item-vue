import { createApp } from 'vue'
import App from './App.vue'
import bcss from './bootstrap3/css/bootstrap.min.css'
import router from './router/index'

const app=createApp(App)
app.use(router)
app.use(bcss)

app.mount('#app')
