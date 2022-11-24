const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
