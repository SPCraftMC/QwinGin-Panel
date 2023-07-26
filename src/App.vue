<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        expand-on-hover
        rail
        floating
        permanent
      >
        <left-bar/>
      </v-navigation-drawer>
      <top-bar/>

      <v-main class="d-flex align-center justify-center">
        <router-view />
      </v-main>
    </v-layout>
    <Footer/>
  </v-app>
</template>

<script setup>
  import Footer from '@/components/Footer.vue'
  import TopBar from '@/components/TopBar.vue'
  import LeftBar from '@/components/LeftBar.vue'
  import { RouterView } from 'vue-router'
</script>

