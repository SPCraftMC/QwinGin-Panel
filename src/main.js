import '@/assets/main.css'
import 'mdui/dist/css/mdui.min.css'
import 'mdui/dist/js/mdui.min.js'

import { ref, createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)

const __config = ref({
    loading: false,
})
export default __config
app.provide('__config', __config)
app.config.globalProperties.__config = __config

app.mount('#app')
