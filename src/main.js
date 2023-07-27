/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Server
import server from "@/scripts/axios/server"

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

server.init()
