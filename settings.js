const version = require("@whiskeysockets/baileys/package.json").version


global.language = "en-NG"
//connecting 
global.sessionName = "session"
global.pairingCode = true // true / false
global.pairingNumber = "2349060853189" // masukin nomor bot
global.runWith = "pterodactyl"
global.newsletterJid = "120363336212129369@newsletter"
global.newsletterName = "© 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳"
//owner
global.ownerName = "𝙳𝚁𝙰𝙲𝚄𝙻𝙰"
global.nomerOwner = ["2349060853189"]
//sosmed
global.syt = 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
global.sgc = 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
global.sig = 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
global.web = 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
//setbot
global.botName = "𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳" 
global.wm = "© 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 "
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.public = false
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = true
global.copyright = `𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`
global.authorName = "wa : 2349060853189"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.anticall = true; // Default state for the anticall feature
global.autoLevel = true
global.autoSticker = true
global.autoBio = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
//hiasan
global.gris = '`' // Jangan di ubah
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.fotoRandom = [
"https://files.catbox.moe/8nw0q2.jpg",
"https://files.catbox.moe/ewwath.jpg"]


//Apikey Nya
global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'


// AZA
global.accno = "9060853189"
global.accname = "ℙ𝔸𝕋ℝ𝕀ℂ𝕀𝔸"
global.bankname = "𝕆ℙ𝔸𝕐"


global.autoread = false
global.autotype = false
global.online = false

global.autoremove = false
global.autowelcome = false

    
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
let locale = "en-NG"; // Nigerian English locale
let gmt = new Date(0).getTime() - new Date("1 January 2021").getTime();
let week = d.toLocaleDateString(locale, { weekday: "long" });
const calender = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






