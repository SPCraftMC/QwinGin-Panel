/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: "#00BFA5",
          secondary: "#1DE9B6",
        },
      },
      dark: {
        colors: {
          primary: "#00BFA5",
          secondary: "#1DE9B6",
        },
      },
    },
  },
})
