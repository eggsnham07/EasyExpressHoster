const fs = require("fs")

module.exports = function server(port) {
    const express = require("express")
    const home = require("os").homedir + "/Documents/EasyExpressHoster/Pages"
    const app = express()

    app.use(express.static(home))

    app.get("/*", (req, res) => {
        if(req.originalUrl == "/") {
            res.sendFile(home + "/index.html")
        }
        else if(fs.existsSync(home + req.originalUrl + ".html")) {
            res.sendFile(home + req.originalUrl + ".html")
        } else if(fs.existsSync(home + req.originalUrl.replace(".html", "/"))) {
            res.redirect(req.originalUrl.replace(".html", "/"))
        } else {
            res.sendStatus(404)
        }
    })

    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port)
        console.log("Press CTRL + C to stop")
    })
}