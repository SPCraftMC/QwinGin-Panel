<template>
  <v-app-bar
    scroll-behavior="collapse"
  >
    <v-toolbar-title class="text-right" style="margin: 1rem">「青镜」玩家管理面板</v-toolbar-title>
    <v-btn 
      @click="toggleTheme"
      icon="mdi-brightness-6"
      color="none"
    >
    </v-btn>
    <v-btn 
      @click="unsetToken"
      icon="mdi-logout"
      color="none"
    >
    </v-btn>
  </v-app-bar>
</template>
<script setup>
  import { useTheme } from 'vuetify'
  import authinfo from "@/scripts/vuex/authinfo";
  
  const theme = useTheme()
  const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  const unsetToken = () => authinfo.commit("setToken", "")
</script>
