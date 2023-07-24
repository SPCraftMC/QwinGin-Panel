<template>
  <v-app-bar 
    title="「青镜」"
    scroll-behavior="collapse"
  >
    <v-btn 
      @click="toggleTheme"
      icon="mdi-brightness-6"
    ></v-btn>
  </v-app-bar>
</template>
<script>
  import { useTheme } from 'vuetify'

  export default {
    setup () {
      const theme = useTheme()

      return {
        theme,
        toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    },
  }
</script>