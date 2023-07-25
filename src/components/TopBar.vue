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
<script setup>
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>
