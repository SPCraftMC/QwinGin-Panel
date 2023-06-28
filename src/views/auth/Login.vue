<script setup>
import { ref } from 'vue'
import store from "@/scripts/vuex/store";
import userdata from "@/scripts/axios/userdata";
import router from "@/router";
import mdui from "mdui";

let auth_url = store.getters.__config.settings.system.yggdrasil_root + "/oauth/authorize?client_id=67&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/auth/login&response_type=code&scope="

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

if (params.value.code !== null) {
    store.commit("mcskin", params.value.code)
    console.log("储存OAuth2.0 Code")
    userdata.getToken()
} else if (store.getters.mcskinToken !== "") {
    router.push("/")
    mdui.snackbar({
        message: "授权成功，欢迎回来！"
    })
}
</script>
<template>
    <div class="qwingin-auth-card authlogin mdui-container">

        <div class="mdui-card mdui-center" v-if="params.code!==null">
            <h3 class="mdui-card-header-title">正在授权...</h3>
        </div>

        <div class="mdui-card mdui-center" v-else-if="params.error!==null">
            <h3 class="mdui-card-header-title">授权错误</h3>
            <p class="mdui-card-content mdui-text-truncate">{{ params.error }}</p>
        </div>

        <div class="mdui-card mdui-center" v-else>
            <h3 class="mdui-card-header-title">请授权</h3>
            <a :href=auth_url class="button">点击授权</a>
        </div>

    </div>
</template>
