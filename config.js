//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0g1aGJmTjBPYitWcDJXUGM2Ym1RWkZmWCt5aG45em1wdzhMamwrQ0RHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1lCTzdoUGVtT1EyeXZISGkwLzV0YnRwMnRiR2d4Q3lmRmNZc1dvTWhFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ2lSMGFMSjB3MG94VW9GMW9NRDd0cEtzQmV4RnZpOEowd2QyVWZlckZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N0dFMDg2ejh4QjVNUzZKMGdkVjR4QS91ckpNdUJRK2Rub0FhMFQ3NVhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMVlB3OUt0WGNXbTBNdm0zSmxtQjZWdHNkMnlGWmZXcEpTeWxNZ0c4MTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4R2M1Titnc2d0cDVHOHdNUng3Uit4RjUyMDFwbzFwcWRCa3p5NUtPRFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFQR1hVWXdqSGtFdVB6UXdSOXJwdHFYU29sRzhzRDNsVmV0VUdJc1BXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnRscHp4R3NaakM0RzcyOFROSHcxZU9oazFPbC9MVFFHMFF2SFB0TFVUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5rTTFBZ2hXQk0zMU43RUZHcXhSb2d2S0NDYUY5WUtyVlJ3bzlNK2YycE4xcWNRdGk5cXI3YWQ2bVBRNnRVT2dYaWxhTWZQY241SlgzcUN4UXMxUUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoicHppUXdrdmIrSGlkY1RWVXZuSXhxYVUwYUZwTVNsVWlXQjZRWjJiUy9BTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMzY5MTM2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMDEwNUQ4NDAwNUQ5M0RGQ0NBMUQ1ODg1NjU2REQ5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTE1MjUxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMzY5MTM2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNkNFRkE0OTc3MjA5QjQ4OUUwRDU1NTg0MTIwRjY2RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTE1MjUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJRm44VFBsNFM3Ty1XX2E3UkJOVElRIiwicGhvbmVJZCI6IjFjNTFjODFkLTZhMTMtNDAyMC1iMGYyLWQ2NWJkNWZkNzhlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvNUIzaHBGWjZKcVFySVBDay85QVEyUDN3cDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmpCYmNBSXkzRVYwRXZ0T0hhL0pIK3FSZktZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZLTjFOUzRKIiwibWUiOnsiaWQiOiI5NDcwMzY5MTM2MTozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJObyBOYW1l8J+RuSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFN0cG5vUXBmV3p0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRGJTT2dESUMyN1Y3dXBNWUluVlZvTW4yU0NGd294eWx4RitXc2RDanZUdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoienlWZkhCbnhQdG5KMU15MzVBTFE3R0owTkRhTSs5RHdFVnp3Q2RlYkpJNE1zWkg5d0VQRHZNK1hMK3VBNVVpc2xBT0JuanZIYktLT0JMUk5HMUFaRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InlHYUhZcFYvNUhWVUdOWVhITWdtQ0NQbXkzWDJ1ZmpsRGtoKzRvN3dldWFCaTZyTHR4a1BxRkZBejczZ2gxK2M1WGZXUUZnTmNyeFM3S2VXdXI4ZkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDM2OTEzNjE6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTIwam9BeUF0dTFlN3FUR0NKMVZhREo5a2doY0tNY3BjUmZsckhRbzcwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUxNTI0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIMloifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
