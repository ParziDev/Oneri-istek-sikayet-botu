const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

bot.onMessage({guildOnly: false})

////////// STATUS \\\\\\\\\\
bot.status({
  text:"ParzivaL İstek/Şikayet/Öneri DM Botu",
  type:"PLAYING",
  status:"dnd",
  time: 12
  })

////////// VARİABLES \\\\\\\\\\
bot.variables({
  logkanalı:""//LOG KANALI ID
  })

////////// COMMANDS \\\\\\\\\\
bot.command({
  name:"$alwaysExecute",
  code:`
  $channelSendMessage[$getServerVar[logkanalı];{newEmbed:{author:Yeni bir öneri!:$authorAvatar}{field:Öneriyi yapan:<@$authorID> - ( \`$authorID\` )}{field:Yaptığı öneri:\`\`\`js
$message\`\`\`}{footer:Developed By ParzivâL:$userAvatar[771311848993587210]}{color:RANDOM}{thumbnail:$authorAvatar}}]
✅ <@$authorID>, Öneri/İstek/Şikayet'iniz başarıyla iletildi.
  $onlyIf[$message[4]!=;❎ <@$authorID>, En az 4 kelime yazmalısın.]
  $onlyIf[$guildID==;]
  $onlyIf[$isBot[$authorID]==false;]
  `
  })
