const express = require("express")
const app = express()

module.exports = class Server {
    constructor() {
        this.start = function() {
            if(this.dir == "~") {
                this.dir = process.cwd()
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
    }
}