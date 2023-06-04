<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
</script>

<template>
  <TopMenu />
  <RouterView />
</template>