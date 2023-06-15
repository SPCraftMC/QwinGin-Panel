<script setup>
import { RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
import LeftBar from '@/components/LeftBar.vue'
import Footer from "@/components/Footer.vue";
</script>

<template>
  <TopMenu />
  <LeftBar />
  <RouterView />
  <Footer />
</template>