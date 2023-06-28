<script setup>
import { ref } from 'vue'
import store from "@/scripts/vuex/store";
import router from "@/router";
import mdui from "mdui";

//let auth_url = store.getters.__config.settings.system.yggdrasil_root + "/oauth/authorize?client_id=67&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/auth/login&response_type=code&scope="

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (null);
}

let params = ref({
    code: getQueryVariable("code"),
    error: getQueryVariable("error")
})
/*
if (params.value.code !== null) {
    userdata.getToken()
} else if (store.getters.mcskinToken !== "") {
    router.push("/")
    mdui.snackbar({
        message: "授权成功，欢迎回来！"
    })
}
*/
</script>
<template>
    <div class="qwingin-auth-card authlogin mdui-container">

        <h1 class="qwingin-font-teal qwingin-left-line">验证</h1>    

        <div class="mdui-card mdui-center" v-if="params.code!==null">
            <h1 class="mdui-card-header-title">正在授权...</h1>
        </div>

        <div class="mdui-card mdui-center" v-else-if="params.error!==null">
            <h1 class="mdui-card-header-title">授权错误</h1>
            <p class="mdui-card-content mdui-text-truncate">{{ params.error }}</p>
        </div>

        <div class="mdui-card mdui-center" v-else>
            <h1 class="mdui-card-header-title">您好，请登录！</h1>

        </div>

    </div>
</template>
