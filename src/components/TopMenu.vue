<script setup>
import '@/assets/components/topbar.css'
import store from "@/scripts/vuex/store";
import mdui from "mdui";

const __config = store.getters.__config

function more() {
    mdui.snackbar({
        message: "点什么点，还没写完！"
    })
}
</script>

<template>
    <div class="mdui-appbar topbar">
        <div v-if="__config.loading" class="mdui-progress">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <header class="mdui-toolbar">

            <!-- Left -->
            <i mdui-drawer="{target: '#left-drawer'}" class="mdui-icon material-icons">&#xe3c7;</i>
            <router-link to="/"><span class="qwingin-font-teal mdui-typo-title">{{ __config.settings.header.title }}</span></router-link>

            <div class="mdui-toolbar-spacer"></div>

            <!-- Right -->
            <a @click=more mdui-menu="{target: '#top-options'}" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">more_vert</i>
            </a>
            <ul class="mdui-menu" id="top-options">
                <li class="mdui-menu-item">
                    <a href="javascript:location.reload();" class="mdui-ripple">刷新</a>
                </li>
                <li class="mdui-divider"></li>
                <li class="mdui-menu-item">
                    <a href="javascript:;" class="mdui-ripple"></a>
                </li>
            </ul>
        </header>
    </div>
</template>