import axios from "axios";
import mdui from "mdui";

const about = (fn) => {
    const instance = axios.create({
        timeout: 10000
    });

    instance.get("https://raw.githubusercontent.com/SPCraftMC/QwinGin-Panel/main/README.md")
        .then((response) => {
            console.log(response)
            const res = {
                content: response.data,
                status: false
            }
            fn(res)
        })
        .catch((error) => {
            console.error("无法请求数据：\n" + error)
            const res = {
                content: error.message,
                status: false
            }
            fn(res)
            mdui.snackbar({
                message: "无法请求数据: " + error.message
            })
        })
}

export default about