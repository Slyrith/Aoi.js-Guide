# Creating the main file

[Node.js](https://nodejs.org/ "Node.js") 16.6.0 or newer is required. 

## Installing Aoi.js

```shell
npm install aoi.js
```

### Setup

```js
const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
```
will be updated soon
