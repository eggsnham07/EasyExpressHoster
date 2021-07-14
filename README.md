# Easy Express Hoster
## WARNING: this package is still being worked on and may not function correctly!

please feel free to make issues and pull requests on github!

installation: `npm i easyexpresshoster -g`

### Node.js: Quick start
```javascript
const Server = require("@eggsnham07/easyexpresshoster")
const server = new Server
//tip: you can replace process.cwd with "~" currentfolder/pages
server.dir = process.env.EEHDIR || process.cwd
server.port = 5000 
server.start()
```

#### Node.js: Features
You can use `server.usePrettyUrls()` to make /page.html become /page and if /page is a dir then /page.html will be redirected to /page/ 
, also `server.post` or `server.get` work like express's express().post or express.get

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

#### Terminal: Features
If you do not want to use the default pages directory then you can add '~' at the end of the command to use the terminal's current directory


all pages can found and edited in `C:\Users\you\Documents\EasyExpressHoster\Pages` or `/home/you/Documents/EasyExpressHoster/Pages`