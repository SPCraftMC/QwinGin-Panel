<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
import LeftBar from '@/components/LeftBar.vue'
</script>

<template>
  <TopMenu />
  <LeftBar />
  <RouterView />
</template>