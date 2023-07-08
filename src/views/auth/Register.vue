<script setup>
import {ref} from 'vue'
import qvar from "@/scripts/qvar"
import store from "@/scripts/vuex/store";
import cregister from "@/scripts/core/register";

import '@/assets/subs/auth.css'

let data = ref({
    name: "",
    password: "",
    confirm_password: "",
    email: "",
    push: "/login"
})

if (qvar("to") != null) {
    data.push = qvar("to")
}

//let auth_url = store.getters.__config.settings.system.yggdrasil_root + "/oauth/authorize?client_id=67&redirect_uri=" + window.location.protocol + "//" + window.location.host + "/auth/login&response_type=code&scope="
/*if (status.getters.isSiteLoaded && store.getters.getCaptchaInfo.enable) {
    try {
        new Turnstile({
            publicKey: store.getters.getCaptchaInfo.site_key
        })
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
}
*/
</script>

<template>
    <div class="qwingin-auth-card authlogin mdui-container">
        <h1 class="qwingin-font-teal qwingin-left-line">验证</h1>

        <div class="mdui-text-center">

            <div class="mdui-card mdui-center">

                <!--常规登录-->
                <div class="common">
                    <h1>注册账户</h1>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.name class="mdui-textfield-input" type="text" placeholder="用户名"
                               style="margin-bottom: 10px;">
                    </div>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.password class="mdui-textfield-input" type="password" placeholder="密码"
                               style="margin-bottom: 10px;">
                    </div>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.confirm_password class="mdui-textfield-input" type="password" placeholder="确认密码"
                               style="margin-bottom: 10px;">
                    </div>
                    <div class="mdui-textfield"
                         style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input v-model=data.email class="mdui-textfield-input" type="email" placeholder="邮箱"
                               style="margin-bottom: 10px;">
                    </div>
                    <div class="turnstile" v-if="store.getters.getCaptchaInfo.enable">
                        <turnstile-container/>
                    </div>
                    <input @click=cregister.register(data) class="button" type="button" value="注册">
                </div>
                
                <div class="qwingin-auth-tip mdui-typo mdui-float-right">
                    <router-link to="/auth/login"><span>已有账户？登录</span></router-link> 
                </div>
            </div>
        </div>
    </div>
</template>
