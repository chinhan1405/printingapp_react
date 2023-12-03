const configs = {
    baseAPI: "http://localhost:8080",
    //baseAPI: "https://ssps-api.onrender.com",
    getAllDocAPI: "/documents/",
    createDocAPI: "/documents/create/",
    getSelectedDocAPI: "/documents/selected/",
    updateDocByIdAPI: "/documents/update/",
    downloadDocAPI: "/documents/download/",
    createPrtConfigAPI: "/printconfig/create/",
    getPrtConfigByIdAPI: "/printconfig/",
    delPrtConfigByIdAPI: "/printconfig/delete/",
    createHistoryAPI: '/history/create/',
    getHisByStatusAPI: '/history/status/',
    getHisByIdAPI: '/history/',
    delHisByIdAPI: "/history/delete/",


}
module.exports = configs