import axios from "axios";
import settings from "@/settings";
import store from "@/scripts/vuex/store";
import authinfo from "@/scripts/vuex/authinfo.js"
//import { getOwnPropertySymbols } from "core-js/core/object";

const instance = axios.create({
    baseURL: settings.server + "/user",
    timeout: 10000
});

function init() {
    token: authinfo.getters.token
    instance.get("/information", {

    }).then()
}

function getBlackList() {
  instance.get("/blacklist", {
    token: authinfo.commit("setToken", token)
  })
  .then((response) => {
    store.commit('updateBlackList', response.data.data);
  })
}

const user = {
  getBlackList: getBlackList
}

export default user
