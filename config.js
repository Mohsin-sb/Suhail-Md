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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92310656i543";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_20_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidDFoNWlINjhvRkl2cllSUHFKL0pZdEZTMFladzZDamphMTNsN0wvMFJ3bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMDY1Njg1NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ1RTM4REMxNzZFNTlFREQ4RTJGMjkxNUM3OUMzMTNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcyMjAzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEwNjU2ODU0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjVFNkFGRkFDQkU4N0JCMEEyMTA0NkREMDI4RThEOUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzIyMDM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZPRkh2X2FIVEgyS2dGY3dwUEt3d3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGJmMzc3ZjctNjQzOC00Yzg2LWE0NWMtMjQ3MDg4ZTgyYjA2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDI0MSxcbiAgICAgIDU0LFxuICAgICAgMjQyLFxuICAgICAgMjI4LFxuICAgICAgMTg4LFxuICAgICAgMTM0LFxuICAgICAgMTkyLFxuICAgICAgMzIsXG4gICAgICAyMDEsXG4gICAgICAxMTIsXG4gICAgICAxNTQsXG4gICAgICAyNDMsXG4gICAgICAyNTIsXG4gICAgICAyMCxcbiAgICAgIDY4LFxuICAgICAgMTIyLFxuICAgICAgMTA1LFxuICAgICAgMTEyLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMjA0LFxuICAgICAgODYsXG4gICAgICA3LFxuICAgICAgMTM0LFxuICAgICAgOTgsXG4gICAgICA4MyxcbiAgICAgIDE3OCxcbiAgICAgIDU5LFxuICAgICAgOTQsXG4gICAgICAyNSxcbiAgICAgIDY5LFxuICAgICAgODAsXG4gICAgICA2LFxuICAgICAgMjI0LFxuICAgICAgMTgwLFxuICAgICAgMzcsXG4gICAgICA5NixcbiAgICAgIDc1LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzRFVlo3Q0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNjU2ODU0MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lZGljYWwuLi4uXCIsXG4gICAgXCJsaWRcIjogXCIyMDMwODc5ODE2Mjk2NjY6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSldUcyt3REVPL0V3TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhbkNsZXR4UGZ4dGs5Y1I3QzJIR1JVMG4ySmJDUllrVkdWMWg4dE1HOXpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNka2Z0SUh1RnZJTmlHRUZuZVdMNTVZUTR2R2ZDYkd3NG1hV3VndTZEZGVXeGYrWWlhS1JFOWh6eE85dFpGTFNsRG01Z09sZlRrai9GTXE0ZnpnVUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJ6a0RSUDVaVUNCUy9lWEN3VEgyYjE4Qzg2SWxWeGU0OFpySG1CZWtnRkdJN3VhL1dDQTZnQmRZL0lIREtuVDhoOENkUmowT3lwRGRyanBrMzFueGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNjU2ODU0MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcyMjAzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI0MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjQwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2pGMjNOZm5KcUx1Ukp0bm9WN3l0Qzk2THh6WkZIWnF6UzZiN1Evd3N6Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDMyNjM2ODIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MjIwMzc0MzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
