<script setup>
import store from "@/scripts/vuex/store";
import '@/assets/subs/dashboard.css'

//console.log(store.getters.mcskinToken)
</script>

<template>
    <div class="qwingin-table-margin dashboard mdui-container-fluid">
        <h1 class="qwingin-left-line qwingin-font-teal">仪表板</h1>

        <!-- 用户信息（简易） -->
        <div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-5 mdui-col-lg-4 mdui-col-xl-3">
            <div class="mdui-card main-card">
                <i class="mdui-card-header-avatar mdui-icon material-icons">account_circle</i>
                <div class="qwingin-font-teal mdui-card-header-title">用户信息</div>
                <div class="mdui-card-header-subtitle">您的基本信息</div>
                <div class="mdui-card-content">
          <span>
            用户名: <span>{{ store.getters.userData.name }}</span>
          </span><br>
                    <span>
            邮箱: <span>{{ store.getters.userData.mail }}</span>
          </span>
                </div>
                <router-link to="/account">
                    <button style="margin-right: 15px;" class="mdui-float-right button">查看完整信息</button>
                </router-link>
            </div>
        </div>

        <!-- 公告 -->
        <div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-6.5 mdui-col-lg-7.5 mdui-col-xl-8">
            <div class="mdui-card main-card">
                <i class="mdui-card-header-avatar mdui-icon material-icons">announcement</i>
                <div class="qwingin-font-teal mdui-card-header-title">公告</div>
                <div class="mdui-card-content">
                    <!--{{ store.getters.serverInfo.announcement }}-->
                </div>
            </div>
        </div>

        <!-- 服务器状态 -->
        <div class="mdui-col-xs-12 mdui-col-md-12 mdui-col-lg-7.5 mdui-col-xl-8">
            <div class="mdui-card">
                <div class="qwingin-font-teal mdui-card-header-title">服务器状态</div>
                <div class="mdui-card-content">
                    <!--{{ store.getters.__config }}-->
                </div>
            </div>
        </div>

    </div>
</template>