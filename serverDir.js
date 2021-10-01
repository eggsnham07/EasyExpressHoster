const fs = require("fs")

module.exports = function betaServer(port, path) {
    const express = require("express")
    const app = express()

    app.use(express.static(path))

    app.get("/*", (req, res) => {
        const dir = path
        console.log(`Directory: ${dir}, Requested File: ${req.originalUrl}`)
        if(req.originalUrl == "/") {
            res.sendFile(dir + "/index.html")
        }
        else if(fs.existsSync(dir + req.originalUrl + ".html")) {
            res.sendFile(dir + req.originalUrl + ".html")
        } else if(fs.existsSync(dir + req.originalUrl.replace(".html", "/"))) {
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