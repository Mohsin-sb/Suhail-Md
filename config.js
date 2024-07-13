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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNBL09CTW5aVk5RRlFBcDB0WDhGMnpiTU51SGx3VkJ2Q1dRWUZaWlptRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM3NDU5MDg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOUJBRjFDM0EwQzhFOUQzRUYyQjA4Q0Y5QTAwRkRBRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4ODUxOThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWlZmNDUtT1RRSGlXMjZxU2JwNmVxZ1wiLFxuICBcInBob25lSWRcIjogXCJhZTFmZmJiOC1mYmIwLTQ5NzUtYmZlOS0yMzlmYjJjYjYyYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgNjcsXG4gICAgICAyMjMsXG4gICAgICAxODIsXG4gICAgICA4MSxcbiAgICAgIDEyOSxcbiAgICAgIDIxNSxcbiAgICAgIDI2LFxuICAgICAgMTcsXG4gICAgICA1MSxcbiAgICAgIDEsXG4gICAgICA3MCxcbiAgICAgIDMyLFxuICAgICAgMTMzLFxuICAgICAgNTksXG4gICAgICAyMTQsXG4gICAgICA0MixcbiAgICAgIDE4NCxcbiAgICAgIDIxMSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxMTMsXG4gICAgICA1MixcbiAgICAgIDIzNCxcbiAgICAgIDE2NCxcbiAgICAgIDQ4LFxuICAgICAgMTM1LFxuICAgICAgMTkwLFxuICAgICAgMTksXG4gICAgICAyNDEsXG4gICAgICAyMTAsXG4gICAgICAyMDgsXG4gICAgICAxOTksXG4gICAgICAxNDYsXG4gICAgICAyNDAsXG4gICAgICAxNjcsXG4gICAgICAxNixcbiAgICAgIDQsXG4gICAgICAzMixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDMzhKQVZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzc0NTkwODQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDY5MzM2MDM0OTQzMjoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZnRzeTRReEwvS3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdrc1pqVURJSkRJWk0ycVRrZUNoQlYvMWdMd01LU0U5ZHl1VnFNQnFrMjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGlFZFFhUWd0WmgwZFg0VGVxTXYrU1dYT1V0ZnBhUCtLR2hNeUZXajlMRUFaN1hRTlplY0IvdC8wUUc0UVp3RXhiNGZuc0xBTWFLWElIY0lWWS9DQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkJxNnVjd3pRNmh6dWU0T0FmcmFldlFyMm1pbzVJMmZMR1RReVVXWFYwWExYVE9DNGZwTWNPdXNITlM1NE9ybFNiZW5hNkJUYURaVVVjTzZHa04vaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM3NDU5MDg0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODg1MTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXMxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJczEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZcWtTeEhkdDM2eWxpYXRMZmhLNUNBeTNkS3Vpa00raXcvMTJCY2pzUDZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MzE4NjQ2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
