<script setup>
import '@/assets/components/topbar.css'
import store from "@/scripts/vuex/store";

const __config = store.getters.__config

function more() {

}
</script>

<template>
    <div class="mdui-appbar topbar">
        <div v-if="__config.loading" class="mdui-progress">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div class="mdui-toolbar">
            <i mdui-drawer="{target: '#left-drawer'}" class="mdui-icon material-icons">&#xe3c7;</i>
            <router-link to="/"><span class="qwingin-font-teal mdui-typo-title">{{ __config.settings.header.title }}</span></router-link>
            <div class="mdui-toolbar-spacer"></div>
                <a @click=more() class="mdui-btn mdui-btn-icon">
                    <i class="mdui-icon material-icons">more_vert</i>
                </a>
        </div>
    </div>
</template>