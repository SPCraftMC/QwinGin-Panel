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

作者：ybc4652
链接：https://juejin.cn/post/6966794966165094414
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

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
