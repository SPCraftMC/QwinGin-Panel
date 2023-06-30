<script setup>
import {ref} from 'vue'
import qvar from "@/scripts/qvar"
import store from "@/scripts/vuex/store";
import mdui from "mdui";
import status from "@/scripts/vuex/status";
import clogin from "@/scripts/core/login";

let params = ref({
    code: qvar("code"),
    error: {
        orgin: qvar("error"),
        decoded: decodeURI(qvar("error"))
    }
})

let data = ref({
    name: "",
    password: ""
})

//let auth_url = store.getters.__config.settings.system.yggdrasil_root + "/oauth/authorize?client_id=67&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/auth/login&response_type=code&scope="
if (status.getters.isSiteLoaded && store.getters.getCaptchaInfo.enable) {
    setTimeout(() => {
        try {
            // if using synchronous loading, will be called once the DOM is ready
            turnstile.ready(function () {
                turnstile.render('turnstile-container', {
                    sitekey: store.getters.getCaptchaInfo.site_key,
                    callback: function (token) {
                        data.cpatchaCode = token;
                        console.log(`人机验证通过，Token： ${token}`);
                    },
                });
            });
        } catch (e) {
            mdui.snackbar({
                "message": "无法加载人机验证：" + e.message
            })
        }
    }, 1000)
}
</script>

<template>
    <div class="qwingin-auth-card authlogin mdui-container">
        <h1 class="qwingin-font-teal qwingin-left-line">验证</h1>

        <div class="mdui-text-center">
            <div class="mdui-card mdui-center" v-if="params.code !== null">
                <h1>正在授权...</h1>
            </div>

            <div class="mdui-card mdui-center" v-else-if="params.error.orgin !== null">
                <h1>授权错误</h1>
                <p class="mdui-card-content mdui-text-truncate">{{ params.error.decoded }}</p>
            </div>

            <div class="mdui-card mdui-center" v-else>

                <!--常规登录-->
                <div class="common">
                    <h1>您好，请登录！</h1>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.name class="mdui-textfield-input" type="text" placeholder="用户名"
                               style="margin-bottom: 10px;">
                    </div>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.password class="mdui-textfield-input" type="text" placeholder="密码" style="margin-bottom: 10px;">
                    </div>
                    <div class="turnsile" v-if="store.getters.getCaptchaInfo.enable">
                        <turnstile-container />
                    </div>
                    <input @click=clogin.login(data) class="button" type="button" value="登录">
                </div>

                <!--皮肤站-->
                <div></div>
            </div>
        </div>
    </div>
</template>
