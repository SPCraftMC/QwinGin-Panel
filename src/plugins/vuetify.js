/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { ref } from 'vue';

import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

let defTheme = "light"; 

let themeMedia = ref(window.matchMedia("(prefers-color-scheme: light)"));
if (themeMedia.matches) {
  defTheme = "light";
} else {
  defTheme = "dark";
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: defTheme,
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
