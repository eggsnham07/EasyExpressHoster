module.exports = function server(port) {
    const express = require("express")
    const home = require("os").homedir
    const app = express()

    app.use(express.static(home + "/Documents/EasyExpressHoster/Pages"))

    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port)
        console.log("Press CTRL + C to stop")
    })
}