<script setup>
import { RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
import LeftBar from '@/components/LeftBar.vue'
import Footer from "@/components/Footer.vue";
import status from "@/scripts/vuex/status";
import FullLoading from "@/components/FullLoading.vue";
</script>

<template>
  <TopMenu />
  <LeftBar />
  <template v-if="!status.getters.isSiteLoaded[0] || status.getters.isSiteLoaded[1]">
    <FullLoading />
  </template>
  <template v-else>
    <RouterView />
    <Footer />
  </template>
</template>