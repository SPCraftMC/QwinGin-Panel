function nostatus(title, message) {
    ElNotification({
        title: title,
        message: message,
        type: null,
        offset: 20
    })
}
function success(title, message) {
    ElNotification({
        title: title,
        message: message,
        type: "success",
        offset: 20
    })
}
function info(title, message) {
    ElNotification({
        title: title,
        message: message,
        type: "info",
        offset: 20
    })
}
function warn(title, message) {
    ElNotification({
        title: title,
        message: message,
        type: "warning",
        offset: 20
    })
}
function error(title, message) {
    ElNotification({
        title: title,
        message: message,
        type: "error",
        offset: 20
    })
}

const notification = {
    nostatus: nostatus,
    success: success,
    info: info,
    warn: warn,
    error: error
}

export default notification