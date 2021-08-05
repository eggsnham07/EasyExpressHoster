module.exports = function betaServer(port, path) {
    const express = require("express")
    const app = express()

    app.use(express.static(path))

    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port)
        console.log("Press CTRL + C to stop")
    })
}