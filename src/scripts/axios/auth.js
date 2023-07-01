import axios from "axios";
import settings from "@/settings";
import authinfo from "@/scripts/vuex/authinfo";
import {sha256} from "js-sha256";
import status from "@/scripts/vuex/status";
import mdui from "mdui";
import router from "@/router";

const instance = axios.create({
    baseURL: settings.server + "/auth",
    timeout: 10000
});

const auth = {
    login: (data) => {
        if (data.name === "") {
            mdui.snackbar({
                message: "请输入用户名"
            })
        } else if (data.password === "") {
            mdui.snackbar({
                message: "请输入密码"
            })
        } else {
            status.commit("loading", true)
            instance.post("/login", {
                name: data.name,
                password: sha256(data.password),
                captchaCode: data.captchaCode
            })
                .then((response) => {
                    if (response.data.status) {
                        authinfo.commit("setToken", response.data.data.token)
                        router.push(data.push)
                        mdui.snackbar({
                            message: "鉴权成功，欢迎回来！"
                        })
                        console.log("鉴权成功")
                    } else {
                        mdui.snackbar({
                            message: "无法鉴权: " + response.data.message
                        })
                    }
                })
                .catch((error) => {
                    mdui.snackbar({
                        message: "无法鉴权: " + error.message
                    })
                })
            status.commit("loading", false)
        }
    }
}

export default auth