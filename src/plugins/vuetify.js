/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

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
          primary: colors.teal,
          secondary: colors.teal.darken4,
        },
      },
      dark: {
        colors: {
          primary: colors.teal.accent3,
          secondary:colors.teal.lighten4,
        },
      },
    },
  },
})
