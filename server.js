module.exports = function server(port) {
    const express = require("express")
    const home = require("os").homedir
    const app = express()

    app.use(express.static(home + "\\Documents\\EasyExpressHosting\\Pages"))

    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port)
    })
}