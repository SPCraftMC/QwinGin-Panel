<script setup>
import "@/assets/subs/load.css"
import status from "@/scripts/vuex/status";
</script>

<template>
    <div class="loading">
        <div class="mdui-progress mdui-center" v-if="!status.getters.isSiteLoaded[1]">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <i class="mdui-icon material-icons" v-else>error</i>
        <h1 v-if="status.getters.isSiteLoaded[1]">发生错误，请刷新重试。</h1><h1 v-else>加载中......</h1>
    </div>
</template>