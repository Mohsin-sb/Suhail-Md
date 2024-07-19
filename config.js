const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923037459084";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/6d52208fa569cbc4a237f.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_26_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkc2SFp0QkdIWjBnYzdlTU1ITGkwcVh6WVBzUm5xK1kzQlRickUzRnEwZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3VHNVhMQU5RZXVMWF8tUDBZbVhfQVwiLFxuICBcInBob25lSWRcIjogXCIyZmJlOWFkOC1hZGQ5LTQ3MTUtOTQwNi0yNzdhNTQyZTU2NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgMTk3LFxuICAgICAgNTgsXG4gICAgICAxNTAsXG4gICAgICA0NCxcbiAgICAgIDIzMCxcbiAgICAgIDUyLFxuICAgICAgNjcsXG4gICAgICA4OSxcbiAgICAgIDEwMCxcbiAgICAgIDU5LFxuICAgICAgMTM2LFxuICAgICAgMjMxLFxuICAgICAgNzMsXG4gICAgICAyMTksXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgMjIxLFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTksXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDE0MyxcbiAgICAgIDEzOCxcbiAgICAgIDYwLFxuICAgICAgMTI1LFxuICAgICAgMyxcbiAgICAgIDEzMyxcbiAgICAgIDEwNyxcbiAgICAgIDUzLFxuICAgICAgMjI0LFxuICAgICAgMTMyLFxuICAgICAgODAsXG4gICAgICAxNjUsXG4gICAgICAxNjQsXG4gICAgICAxOTksXG4gICAgICAxMjUsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzhBWk1SNjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzNzQ1OTA4NDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0NjkzMzYwMzQ5NDMyOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqdHN5NFF4b0hudEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN2tzWmpVRElKRElaTTJxVGtlQ2hCVi8xZ0x3TUtTRTlkeXVWcU1CcWsyMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCUXo4d0xOcWQ2Zk0zNUhWQ3B6Z0o1Y0J6ZHBYUG1VUFU5N0h2eXJ2MlFrZFVOSGc0WTd1NjdZZ2lvN2szcEVMaHBEWjhadm53R0pSVzI2RjU0WXRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5RnZLUXZpeFhaMTNWbzZYWUlrYkdpNXQ5aExGSFVMNUtQMGxiSjc5RDYxQmR5cVd6QkRpdVNtSE1JQmdxTGhDSXJEeHZreUd6d2huZmdkeTNqSUlpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzc0NTkwODQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNTIzOTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJczFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlzMS5qc29uIjogIntcImtleURhdGFcIjpcIllxa1N4SGR0MzZ5bGlhdExmaEs1Q0F5M2RLdWlrTStpdy8xMkJjanNQNlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTczMTg2NDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "By Mohsin sb" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Mohsin sb😇",
  packname: process.env.PACK_NAME || "Mohsin sb😇",
  botname : process.env.BOT_NAME  || "MOHSIN_SB",
  ownername:process.env.OWNER_NAME|| "Mohsin sb",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
