<template>
    <h1 class="qwingin-title">{{ store.getters.serverInfo.panel_info.title.site }}</h1>

    <div class="qwingin-float-right">
        <el-avatar size="64" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
    </div>
</template>

<script setup>
import store from '@/src/script/vuex/store'
</script>