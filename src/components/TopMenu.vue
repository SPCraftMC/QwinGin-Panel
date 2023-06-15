<script setup>
import '@/assets/components/topbar.css'
import { ref } from 'vue'
import store from "@/scripts/vuex/store";

const __config = store.getters.__config
let avatar_src = ref(__config.settings.system.yggdrasil_root + "/avatar/player/" + store.getters.__user.name)

/*
function more() {
    mdui.snackbar({
        message: "点什么点，还没写完！"
    })
}
*/

function exit_login() {
    localStorage.__extend_mcskin_token = ""
    location.reload()
}

setInterval(() => {
    document.getElementById("user_avatar").src = store.getters.__config.settings.system.yggdrasil_root + "/avatar/player/" + store.getters.__user.name
}, 5000)
</script>

<template>
    <div class="mdui-appbar topbar">
        <div v-if="__config.loading" class="mdui-progress">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <header class="mdui-toolbar">

            <!-- Left -->
            <i mdui-drawer="{target: '#left-drawer'}" class="mdui-icon material-icons">dehaze</i>
            <router-link to="/"><h1 style="max-width: 200px" class="qwingin-font-teal mdui-typo-title">{{ __config.settings.header.title }}</h1></router-link>

            <div class="mdui-toolbar-spacer"></div>

            <!-- Right -->
            <img style="height: 35px" id="user_avatar" class="mdui-icon" :src=avatar_src />
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