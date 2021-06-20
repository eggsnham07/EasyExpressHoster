#!/usr/bin/env node
const home = require("os").homedir()
const server = require("../server")
const open = require("open")
const fs = require("fs")

if(process.argv[2] == "start") {
    const html = `<!DOCTYPE html>
    <html>
        <head>
            <title>Easy Express Hoster</title>
        </head>
        <body>
            <h1>Welcome to the Home Page!</h1>
        </body>
    </html>`

    if(!fs.existsSync(home + "\\Documents\\EasyExpressHoster")) {
        console.log("First time setup starting...")
        if(!fs.existsSync(home + "\\Documents\\EasyExpressHoster\\Pages")) {
            fs.mkdirSync(home + "\\Documents\\EasyExpressHoster\\Pages")
        } else {
            fs.mkdirSync(home + "\\Documents\\EasyExpressHoster")
            fs.mkdirSync(home + "\\Documents\\EasyExpressHoster\\Pages")
        }
        fs.writeFileSync(home + "\\Documents\\EasyExpressHoster\\Pages", html)
        console.log("Setup complete!")
    }
    server(process.argv[3])
    open('http://localhost:' + process.argv[3])
}