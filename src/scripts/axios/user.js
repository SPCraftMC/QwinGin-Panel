import axios from "axios";
import store from "@/scripts/vuex/store";
import authinfo from "@/scripts/vuex/authinfo.js"
import config from "@/config";

const instance = axios.create({
    baseURL: config.server + "/user",
    timeout: 10000
});

function init() {
    instance.get("/information", {

    }).then()
}

function getBlackList() {
    instance.get('/blacklist', {})
        .then((response) => {
        store.commit('blackList', response.data.data);
    }).catch((error) => {
        /*mdui.snackbar({
            message: "无法请求数据：" + error.message
        })*/
    })
}

const user = {
  getBlackList: getBlackList
}

export default user
