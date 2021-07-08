const Server = require("../index")
const server = new Server()
server.dir = process.env.EEHDIR || process.cwd
server.port = 5000
server.start()