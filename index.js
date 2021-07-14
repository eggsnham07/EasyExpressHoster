const express = require("express")
const fs = require("fs")
const app = express()

module.exports = class Server {
    constructor() {
        this.start = function() {
            if(this.dir == "~") {
                this.dir = process.cwd() + "/pages"
            }

            app.use(express.static(this.dir))

            app.listen(this.port, () => {
                console.log(`Listening on port: ${this.port}`)
                console.log(`Server static dir: ${this.dir}`)
            })
        }
        this.post = function(path, _callback) {
            app.post(path, _callback)
        }

        this.get = function(path, _callback) {
            app.get(path, _callback)
        }

        this.usePrettyUrls = function() {
            app.get("/*", (req, res) => {
                if(req.originalUrl == "/") {
                    res.sendFile(this.dir + "/index.html")
                }
                else if(fs.existsSync(this.dir + req.originalUrl + ".html")) {
                    res.sendFile(this.dir + req.originalUrl + ".html")
                } else if(fs.existsSync(this.dir + req.originalUrl.replace(".html", "/"))) {
                    res.redirect(req.originalUrl.replace(".html", "/"))
                } else {
                    res.sendStatus(404)
                }
            })
        }
    }
}