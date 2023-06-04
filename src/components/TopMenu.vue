<script setup>
import settings from '@/settings.js'
</script>

<template>
    <div class="mdui-appbar">
        <div v-if="__config.loading.value" class="mdui-progress">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div class="mdui-toolbar">
            <router-link to="/"><span>{{ settings.header.title }}</span></router-link>
        </div>
    </div>
</template>