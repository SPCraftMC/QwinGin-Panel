<script setup>
import { inject } from 'vue'
import store from "@/scripts/vuex/store";
</script>

<template>
    <div class="qwingin-table-margin dashboard">
        <h1 class="qwingin-left-line qwingin-font-teal">仪表板</h1>
        <div class="mdui-card" style="max-width: 500px">
            <div class="mdui-card-header-title">用户信息</div>
            <div class="mdui-card-header-subtitle">您的基本信息</div>
            <div>
                <span>{{ __store.name }}</span>
            </div>
        </div>
    </div>
</template>