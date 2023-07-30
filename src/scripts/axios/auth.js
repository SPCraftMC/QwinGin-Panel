import axios from "axios";
import authinfo from "@/scripts/vuex/authinfo";
import { sha256 } from "js-sha256";
import status from "@/scripts/vuex/status";
import router from "@/router";
import config from "@/config";

//import Vuetify from "vuetify";

//const vuetify = new Vuetify();

const instance = axios.create({
  baseURL: config.server + "/auth",
  timeout: 10000,
});

function login(data) {
  if (data.name === "") {
    this.$snackbar('114514')
  } else if (data.password === "") {
    vuetify.framework.snackbar.show({
      message: "请输入密码",
      color: "error",
    });
  } else {
    status.commit("loading", true);
    instance
      .post("/login", {
        name: data.name,
        password: sha256(data.password),
      })
      .then((response) => {
        if (response.data.status) {
          authinfo.commit("setToken", response.data.data.token);
          vuetify.framework.snackbar.show({
            message: "鉴权成功，欢迎回来！",
            color: "success",
          });
          console.log("鉴权成功");
        } else {
          vuetify.framework.snackbar.show({
            message: "无法鉴权: " + response.data.message,
            color: "error",
          });
        }
      })
      .catch((error) => {
        vuetify.framework.snackbar.show({
          message: "无法鉴权: " + error.message,
          color: "error",
        });
      })
      .finally(() => {
        status.commit("loading", false);
      });
  }
}

function register(data) {
  if (data.name === "") {
    vuetify.framework.snackbar.show({
      message: "请输入用户名",
      color: "error",
    });
  } else if (data.password === "") {
    vuetify.framework.snackbar.show({
      message: "请输入密码",
      color: "error",
    });
  } else if (data.confirm_password === "") {
    vuetify.framework.snackbar.show({
      message: "请确认密码",
      color: "error",
    });
  } else if (data.email === "") {
    vuetify.framework.snackbar.show({
      message: "请输入邮箱",
      color: "error",
    });
  } else {
    if (data.password === data.confirm_password) {
      if (
        data.email.match(
          "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
        )
      ) {
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
      } else {
        vuetify.framework.snackbar.show({
          message: "邮箱格式不正确，请检查！",
          color: "error",
        });
      }
    } else {
      vuetify.framework.snackbar.show({
        message: "两次输入的密码不一致，请检查！",
        color: "error",
      });
    }
  }
}

const auth = {
  login: login,
  register: register,
};

export default auth;
