import axios from "axios";
import authinfo from "@/scripts/vuex/authinfo";
import { sha256 } from "js-sha256";
import status from "@/scripts/vuex/status";
import router from "@/router";
import config from "@/config";

import Toastify from 'toastify-js'
import "@/assets/css/toastify.css"

const instance = axios.create({
  baseURL: config.server + "/auth",
  timeout: 10000,
});

/*Toastify({
    text: "请输入密码",
    duration: 1145000,
    position: "custom",
    close: true,
    style: {background: "#F44336"},
}).showToast()*/

function login(data) {
  //status.commit("loading", true);
  instance
    .post("/login", {
      name: data.name,
      password: sha256(data.password),
    })
    .then((response) => {
      if (response.data.status) {
        authinfo.commit("setToken", response.data.data.token);
        Toastify({
          text: "登陆成功，欢迎回来 " + data.name,
          duration: 5000,
          position: "custom",
          close: true,
        }).showToast()
        console.log("鉴权成功");
      } else {
        Toastify({
          text: "登陆失败",
          duration: 5000,
          position: "custom",
          style: { background: "#F44336" },
          close: true,
        }).showToast()
      }
    })
    .catch((error) => {
      Toastify({
        text: "错误" + error.message,
        duration: 5000,
        position: "custom",
        close: true,
      }).showToast()
    })
    .finally(() => {
      status.commit("loading", false);
    });
}

function register(data) {
  status.commit("loading", true);
  instance
    .post("/register", {
      name: data.name,
      password: data.password,
      email: data.email,
    })
    .then((response) => {
      if (response.data.status) {
        router.push(data.push);
        vuetify.framework.snackbar.show({
          message: "注册成功，请登录！",
          color: "success",
        });
        console.log("注册成功");
      } else {
        vuetify.framework.snackbar.show({
          message: "无法注册: " + response.data.message,
          color: "error",
        });
      }
    })
    .catch((error) => {
      vuetify.framework.snackbar.show({
        message: "请求错误: " + error.message,
        color: "error",
      });
    })
    .finally(() => {
      status.commit("loading", false);
    });
}

const auth = {
  login: login,
  register: register,
};

export default auth;
