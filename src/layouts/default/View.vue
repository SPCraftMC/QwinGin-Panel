<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
      expand-on-hover
      rail
    >
    <left-bar/>
    </v-navigation-drawer>
    <top-bar/>
  

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      
    </v-main>
  </v-layout>
  <Footer/>
</template>

<script setup>
  import Footer from './Footer.vue'
  import TopBar from './TopBar.vue'
  import LeftBar from './LeftBar.vue'
</script>

