import axios from "axios";

const instance = axios.create({
    baseURL: settings.server + "/user",
    timeout: 10000
});

function init() {
    instance.get("/information", {
        
    }).then()
}