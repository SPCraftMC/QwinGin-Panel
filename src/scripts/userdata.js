import axios from "axios";
import settings from "@/settings";
import app from "@/main";
import mdui from "mdui";

const sever_url = settings.system.server

axios.get(sever_url + "/user/info/simple")
    .then((response) => {
        console.log(response)
    })
    .then((response) => {
        window.onload = () => {
            app.provide('user_data', response)
            app.config.globalProperties.user_data = response
        }
    })
.catch((error) => {
    console.assert(error)
    mdui.snackbar({
        message: "无法请求数据，请刷新"
    })
})


export default userdata