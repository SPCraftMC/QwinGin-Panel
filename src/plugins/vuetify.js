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
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

let defTheme

let themeMedia = window.matchMedia("(prefers-color-scheme: light)");
console.log(`Matches: ${themeMedia.matches}`)
console.log(themeMedia)
if (themeMedia.matches) {
  defTheme = "light";
} else {
  defTheme = "dark";
}
console.log(`Theme mode: ${defTheme}`)

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
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
  components: {
    ...components,
    ...labsComponents,
  },
})
