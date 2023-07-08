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

function login(data) {
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
            password: sha256(data.password)
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
                .finally(() => {
                    status.commit("loading", false)
                })

    }
}

function register(data) {
    if (data.name === "") {
        mdui.snackbar({
            message: "请输入用户名"
        })
    } else if (data.password === "") {
        mdui.snackbar({
            message: "请输入密码"
        })
    } else if (data.confirm_password === "") {
        mdui.snackbar({
            message: "请确认密码"
        })
    } else if (data.email === "") {
        mdui.snackbar({
            message: "请输入邮箱"
        })
    } else {
        if (data.password === data.confirm_password) {
            if (data.email.match("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$")) {

                status.commit("loading", true)
                instance.post("/register", {
                    name: data.name,
                    password: sha256(data.password),
                    email: data.email,
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
                        message: "请求错误: " + error.message
                    })
                })
                .finally(() => {
                    status.commit("loading", false)
                })

            } else {
                mdui.snackbar({
                    message: "邮箱格式不正确，请检查！"
                })
            }
        } else {
            mdui.snackbar({
                message: "两次输入的密码不一致，请检查！"
            })
        }
    }
}

const auth = {
    login: login,
    register: register
}

export default auth