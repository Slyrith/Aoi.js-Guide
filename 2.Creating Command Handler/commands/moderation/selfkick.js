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
