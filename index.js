const express = require("express")
const app = express()

module.exports = class Server {
    constructor() {
        this.start = function() {
            if(this.dir == "~") {
                app.use(express.static(process.cwd()))
            } else {
                app.use(express.static(this.dir))
            }
            app.listen(this.port, () => {
                console.log(`Listening on port: ${this.port}`)
            })
        }
    }
}