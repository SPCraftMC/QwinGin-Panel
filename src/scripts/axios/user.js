import axios from "axios";
import settings from "@/settings";
import store from "@/scripts/vuex/store";
//import { getOwnPropertySymbols } from "core-js/core/object";

const instance = axios.create({
    baseURL: settings.server + "/user",
    timeout: 10000
});

function init() {
    instance.get("/information", {

    }).then()
}

function getBlackListUsers()
{
  instance.get('/blacklist')
    .then(response => {
      store.commit('updateBlackListUsers', response.data.data);
  })
}

const user = {
  getBlackListUsers: getBlackListUsers
}

export default user
