import '@/assets/main.css'
import '@/assets/extra-settings.css'
import 'mdui/dist/css/mdui.min.css'
import mdui from 'mdui'

import {ref, createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)

/*
app.provide('__config', __config)
app.config.globalProperties.__config = __config
*/

app.mount('#app')
export default app

mdui.mutation()