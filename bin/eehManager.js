#!/usr/bin/env node
const server = require("../server")

if(process.argv[2] == "start") {
    server(process.argv[3])
}