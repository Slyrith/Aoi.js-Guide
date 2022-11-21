const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["guilds", "guildMessages", "MessageContent"]
})

//Events
bot.onMessage()
bot.onInteractionCreate()

//Status
bot.status({
    	text: "TEXT",
    	type: "PLAYING",
        })

//Variable
bot.variables({
variable: "value"
})

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "CHANNEL ID",
    code: `$log[Ready on $userTag[$clientID]]`
})
