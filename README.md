# Easy Express Hoster
## WARNING: this package is still being worked on and may not function correctly!

please feel free to make issues and pull requests on github!

installation: `npm i easyexpresshoster -g`

### Node.js: Quick start
```javascript
const Server = require("easyexpresshoster")
const server = new Server
server.dir = process.env.EEHDIR || process.cwd
server.port = 5000
server.start()
```

### Terminal: Quick start
if you are using this for the first time you should see something like this:
```console
> eeh start 80
First time setup starting...

Completed!

Server listening on http://localhost:80
Press CTRL + C to stop
```
otherwise you wise you will see:
```console
> eeh start 80
Server listening on http://localhost:80
Press CTRL + C to stop
```


all pages can found and edited in `C:\Users\you\Documents\EasyExpressHoster\Pages` or `/home/you/Documents/EasyExpressHoster/Pages`