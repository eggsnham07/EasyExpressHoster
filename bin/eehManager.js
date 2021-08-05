#!/usr/bin/env node
const home = require("os").homedir()
const server = require("../server")
const betaServer = require("../serverBeta")
const fs = require("fs")

const html = `<!DOCTYPE html>
<html>
    <head>
        <title>Easy Express Hoster</title>
    </head>
    <body>
        <h1>Welcome to the Home Page!</h1>
    </body>
</html>`

function begin() {
    return new Promise(resolve => {
        fs.mkdirSync(home + "/Documents/EasyExpressHoster")
        fs.mkdirSync(home + "/Documents/EasyExpressHoster/Pages")
        fs.writeFileSync(home + "/Documents/EasyExpressHoster/Pages/index.html", html)
        resolve('Completed!\n')
    })
}

if(process.argv[2] == "start") {
    if(process.argv[4] == "current") {
        betaServer(process.argv[3], process.cwd())
    } else {
        if(!fs.existsSync(home + "/Documents/EasyExpressHoster")) {
            async function setup() {
                console.log("First time setup starting...\n")
                console.log(await begin())
                server(process.argv[3])
            }
            setup()
        } else {
            server(process.argv[3])
        }
    }
    console.log(process.argv.join(", "))
}