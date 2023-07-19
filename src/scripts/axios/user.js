import axios from "axios";
import settings from "@/settings";
import store from "@/scripts/vuex/store";
import authinfo from "@/scripts/vuex/authinfo.js"
import mdui from "mdui";

const instance = axios.create({
    baseURL: settings.server + "/user",
    timeout: 10000
});

function init() {
    instance.get("/information", {

    }).then()
}

function getBlackList() {
    instance.get(
      '/blacklist',
      {
        params: {
          token: authinfo.getters.token
        }
      })
    .then((response) => {
      store.commit('updateBlackList', response.data.data);
    }).catch((error) => {
        mdui.snackbar({
            message: "无法请求数据：" + error.message
        })
    })
}

const user = {
  getBlackList: getBlackList
}

export default user
