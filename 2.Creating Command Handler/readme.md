# How to make a command handler

### Setting Up The Handler
```js
const aoijs =  require("aoi.js")  
  
const bot =  new  aoijs.AoiClient({  
token:  "DISCORD BOT TOKEN",  
prefix:  "DISCORD BOT PREFIX",  
intents:  ["GUILDS",  "GUILD_MESSAGES"]  
})  
  
bot.onMessage()  //Allows to execute Commands  
  
const loader =  new  aoijs.LoadCommands(bot)  
loader.load(bot.cmd,"./commands/")  
  
/*  
bot.cmd is object of Collections where the command data will be stored  
"./commands/" is the path of folder where all the commands' code will be present  
*/
```
- After Setting up the handler in your main file, create a folder with the name **`commands`**

![Creating the folder](https://media.discordapp.net/attachments/987115248853078019/1045112745869197382/unknown.png)

- After creating the commands folder, **create a new sub folder** (for example: **`moderation`**)

![Subfolder could be used as a category like a discord category](https://media.discordapp.net/attachments/987115248853078019/1045112789330575441/unknown.png)

-   After,  **Create a JavaScript file**  (for example selfKick.js)

-   Add the following code onto your new file (`selfkick.js`  in this example)

```js
module.exports  ={  
name:"selfkick",  
aliases:["kickmyself"],  
code:`  
$kick[$authorID]`  
}
```

-   LoadCommands.load() accepts arrays in module.exports, which allows to add multiple Commands in same file.
    
-   LoadCommands has a reserved property named  **"type"**  which determines the type of the command. (not needed always)

### Example

-   Right now we have two files  **`deletelog.js`**  and  **`selfkick.js`**

> deletelog.js is a new command file, it can be anything you want

Lets Combine Them!

```js
 module.exports = [{
    channel: "$channeLID",
    name: "deleteLog", // name property is not necessary it's just for logging the command (if this is not present channel property will be used for logging)
    type: "messageDelete",
    code:`
    A message was deleted!!
    Message: "$message"`
    },
    {
  name: "selfkick",
  aliases:["kickmyself"],
  code:`
  $kick[$authorID]`
}]
```
### Update commands

- Using LoadCommands class also enables a special function:  **`$updateCommands`**.

- This function updates all the new changes to the commands without restarting the Client.
