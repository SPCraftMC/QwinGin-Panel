<script setup>
import '@/assets/components/topbar.css'
import { ref } from 'vue'
import store from "@/scripts/vuex/store";
import status from "@/scripts/vuex/status";

let avatar_src = ref("https://mcskin.cn/avatar/player/")
let serverInfo = store.getters.getServerInfo

//if (status.getters.isSiteLoaded[0] && !status.getters.isSiteLoaded[1]) avatar_src = ""
/*
function more() {
    mdui.snackbar({
        message: "点什么点，还没写完！"
    })
}
*/

function exit_login() {
    localStorage.__extend_user_token = ""
    location.reload()
}
</script>

<template>
    <div class="mdui-appbar topbar">
        <div v-if="status.getters.isLoading" class="mdui-progress">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <header class="mdui-toolbar">

            <!-- Left -->
            <i mdui-drawer="{target: '#left-bar'}" class="mdui-icon material-icons">dehaze</i>
            <router-link to="/"><h1 class="qwingin-font-teal mdui-typo-title">{{ serverInfo.panel_info.title.menu }}</h1></router-link>

            <div class="mdui-toolbar-spacer"></div>

            <!-- Right -->
            <img id="user_avatar" class="qwingin-user-avatar mdui-icon mdui-shadow-5" :src=avatar_src />
            <a mdui-menu="{target: '#top-options'}" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">more_vert</i>
            </a>
            <ul class="mdui-menu" v-if="store.getters.mcskinToken !== ''" id="top-options">
                <li class="mdui-menu-item">
                    <a href="javascript:location.reload();" class="mdui-ripple">刷新</a>
                </li>
                <li class="mdui-divider"></li>
                <li class="mdui-menu-item">
                    <a @click=exit_login() class="mdui-ripple">退出登录</a>
                </li>
            </ul>
            <ul class="mdui-menu" v-if="store.getters.mcskinToken === ''" id="top-options">
                <li class="mdui-menu-item">
                    <a href="javascript:location.reload();" class="mdui-ripple" disabled="disabled">请先登录</a>
                </li>
            </ul>
        </header>
    </div>
</template>