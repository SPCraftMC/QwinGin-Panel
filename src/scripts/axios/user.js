import axios from "axios";
import settings from "@/settings";
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
      const blackListUsers = response.data;
      store.commit('updateBlacklist', blackListUsers);
  })
}

const user = {
  getBlackListUsers: getBlackListUsers
}

export default user
