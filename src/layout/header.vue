<template>
    <h1 class="qwingin-title"><nuxt-link to="/">{{ store.getters.serverInfo.panel_info.title.site }}</nuxt-link></h1>

    <div class="qwingin-float-right">
        <el-avatar size="64" :src=store.getters.userInfo.avatar.gravatar />
        <!--<el-button type="primary" :icon="Gird" />-->
    </div>
</template>

<script setup>
import store from '@/src/script/vuex/store'

//import { Gird } from '@element-plus/icons-vue'
</script>