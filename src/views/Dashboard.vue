<script setup>
import store from "@/scripts/vuex/store";
</script>

<template>
    <div class="qwingin-table-margin dashboard mdui-container">
        <h1 class="qwingin-left-line qwingin-font-teal">仪表板</h1>

        <!-- 用户信息（简易） -->
        <div class="mdui-card mdui-col-xs-4" style="height: 220px">
            <i class="mdui-card-header-avatar mdui-icon material-icons">account_circle</i>
            <div class="qwingin-font-teal mdui-card-header-title">用户信息</div>
            <div class="mdui-card-header-subtitle">您的基本信息</div>
            <div class="mdui-card-content">
                <span>
                    用户名: <span>{{ store.getters.__user.name }}</span>
                </span><br>
                <span>
                    邮箱: <span>{{ store.getters.__user.mail }}</span>
                </span>
            </div>
            <router-link to="/account"><button style="margin-right: 15px;" class="mdui-float-right button">查看完整信息</button></router-link>
        </div>

        <!-- 公告 -->
        <div class="mdui-card mdui-row-xs-6" style="height: 220px">
            <i class="mdui-card-header-avatar mdui-icon material-icons">announcement</i>
            <div class="qwingin-font-teal mdui-card-header-title">公告</div>
            <div class="mdui-card-content">
                {{ store.getters.__config.announcement }}
            </div>
        </div>
    </div>
</template>