
"use strict";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require("./settings.js")
const {
Browsers,
DisconnectReason,
makeInMemoryStore,
makeWASocket,
MessageRetryMap,
//useSingleFileAuthState,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion,
  generateMessageTag
} = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const fs = require("fs");
const yargs = require('yargs')

const { readdirSync, readFileSync, existsSync } = fs;
const logg = require('pino')
const chokidar = require('chokidar')
const qrcode = require('qrcode')
const simple = require('./lib/simple') 
//const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const path = require('path')
const { join,dirname } = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const { fileURLToPath, pathToFileURL } = require('url')
const syntaxerror = require('syntax-error')
const { format } = require('util')
const axios = require ('axios')
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
if(runWith.includes("eplit")){
}
const connect = require("./server.js")
const PORT = process.env.PORT || 3000 
let d = new Date();
let locale = 'en-NG'; // Change to Nigerian English
let gmt = new Date(0).getTime() - new Date('1 January 2021').getTime();
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
const calender = d.toLocaleDateString("en-NG", {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

process.on('uncaughtException', console.error)
const { createRequire } = require('module');
const requireFromFile = createRequire(__filename);


global.__filename = function filename(pathURL = __filename, rmPrefix = process.platform !== 'win32') {
    return rmPrefix ? /file:\/\/\//.test(pathURL) ? 
        url.fileURLToPath(pathURL) : pathURL : url.pathToFileURL(pathURL).toString();
}; 
// Fungsi untuk mendapatkan require dari direktori yang diberikan
global.__require = function require(dir = __filename) {
    return createRequire(dir);
}

// Mengatur opsi dari yargs
global.opts = new Object(
    yargs(process.argv.slice(2))
    .exitProcess(false)
    .parse()
);

const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}
/*/Function Auto delete sampah 
setInterval(() => {
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>
item.endsWith("gif") ||
item.endsWith("png") || 
item.endsWith("mp3") ||
item.endsWith("mp4") || 
item.endsWith("jpg") ||
item.endsWith("webp") ||
item.endsWith("webm") ||
item.endsWith("zip") 
)
if(filteredArray.length > 0){
let teks =`Terdeteksi ${filteredArray.length} file sampah`
console.log(teks)
setInterval(() => {
if(filteredArray.length == 0) return console.log("File sampah telah hilang")
filteredArray.forEach(function (file) {
let sampah = fs.existsSync(file)
if(sampah) fs.unlinkSync(file)
})
}, 15_000)
}
});
}, 30_000*/

console.log(color(`⠀⠀⠀⠀⠀⠀
📍 Created By : DRACULA📍 Wa : 2349060853189 
📍From : DRACULA'S TEAM
⚠️ YOU CAN SHARE FILE TO FRIEND'S
⚠️ MAKE SURE YOU JOIN WHATSAPP CHANNEL
`,'deeppink'))
CFonts.say('DRACULA MD', {
  font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta']
})



const msgRetryCounterMap = MessageRetryMap || { }
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')

  
const connectToWhatsApp = async () => {



 //Function untuk update runtime di database
setInterval(() => {

let data = global.db.data.others['runtime']

if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime updated")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New updated runtime")
}

},60_000)
  
const {Low} = (await import("lowdb"))
//const got = (await import("got"))
const chalk =  (await import("chalk"))

const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
jadibot: {}, 
sticker: {},
audio: {},
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
kickon: {},
others: {},
respon: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()

  
const { state, saveCreds } = await useMultiFileAuthState("session")
//const store = useStore? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const { version, isLatest } = await fetchLatestBaileysVersion()
if (global.db.data) await global.db.write() 

  
  
//Function untuk update runtime di database
setInterval(() => {
let data = global.db.data.others['runtime']
if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime updated")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New updated runtime")
}

},60_000)

  
  //Funtion agar bisa pake button di bailey terbaru  
const patchMessageBeforeSending = (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.listMessage || 
message.templateMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {   
deviceListMetadataVersion: 2,  
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
  }


//Funtion agar pesan bot tidak pending 
  
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'Hello'
}
}


//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}
 
const connectionOptions = makeWASocket({
logger: logg({ level: "silent" }),
printQRInTerminal: !pairingCode,
auth,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(pairingCode && !connectionOptions.authState.creds.registered) {
        await clearConsole();
		console.log(`GENERATING PAIRING CODE FOR: ${pairingNumber}`)
		setTimeout(async () => {
        let code = await connectionOptions.requestPairingCode(pairingNumber)
          code = code?.match(/.{1,4}/g)?.join("-") || code
          console.log(`PAIRING CODE: ${code.toUpperCase()}`);
        }, 3000)

}
async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}
 
global.conn = simple.makeWASocket2(connectionOptions)
connect(conn, PORT)

store.bind(conn.ev)
conn.waVersion = version


//welcome
conn.ev.on('group-participants.update', async (anu) => {
require('./message/group.js')(conn, anu)
})


  //auto reject call
// settings.js is already imported or executed earlier in this file
conn.ev.on('call', (json) => { 
  const { id, from, status } = json[0]; 
  if (status == 'offer') {
    if (from == "2349060853189@s.whatsapp.net") return;

    if (global.anticall) { // Use global.anticall to check status
      console.log(json);
      conn.rejectCall(id, from);
      conn.sendMessage(from, { text: `HOLD ON! I'LL CALL YOU BACK.` });
    }
  }
});


  
conn.ev.on('messages.upsert', async (chatUpdate) => {
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(conn, m, store)
 
require('./message/case')(conn, m, chatUpdate,store)
  
}catch (err){
//Log("Error bro")
console.log(err)
}
  })
  
           
  

conn.ev.process(async (events) => {
  if (events['connection.update']) {
    const update = events['connection.update'];
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      let qrkode = await qrcode.toDataURL(qr, { scale: 20 });
      qrwa = Buffer.from(qrkode.split(`,`)[1], 'base64');
    }

    const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (global.db.data == null) await loadDatabase();

    if (connection === 'close') {
      qrwa = null;
      console.log(color(lastDisconnect.error, 'deeppink'));

      // Handle different disconnect reasons
      if (lastDisconnect.error == "Error: Stream Errored (unknown)") {
        process.send('reset');
      } else if (reason === DisconnectReason.badSession) {
        console.log(color(`Bad Session File, Please Delete Session and Scan Again`));
        process.send('reset');
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink'));
        process.send('reset');
      } else if (reason === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
        process.send('reset');
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        conn.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(color(`Device Logged Out, Please Scan Again And Run.`));
        conn.logout();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        connectToWhatsApp();
        process.send('reset');
      } else if (reason === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        connectToWhatsApp();
      }
    } else if (connection === 'connecting') {
      console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`);
      console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${calender}`);
      console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
      console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"data 5");
      console.log(color(`]─`,`magenta`),`「`,  color(`DRACULA`,`red`), `」`,  color(`─[`,`magenta`));
      start(`1`,`Connecting...`);
    } else if (connection === 'open') {
      qrwa = null;

      // URL of the video
      const videoUrl = 'https://raw.githubusercontent.com/DRACULAFX/Video/main/video2.mp4';

      try {
        console.log("Downloading video from GitHub...");

        // Download the video as a buffer
        const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoBuffer = Buffer.from(response.data, 'binary');

        console.log("Video downloaded. Sending video...");

        // Send the video with the caption
        await conn.sendMessage(
          `666666666718@s.whatsapp.net`, // Replace with the desired recipient ID
          {
            video: videoBuffer,
            caption: `
\`\`\`
𝕎𝔼𝕃ℂ𝕆𝕄𝔼! ✨  

🎉 𝕋ℍ𝔸ℕ𝕂 𝕐𝕆𝕌 𝔽𝕆ℝ 𝕌𝕊𝕀ℕ𝔾 𝕋ℍ𝔼 𝔹𝕆𝕋!  

➤ Join our WhatsApp channel to support us:  
👉 https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K  

⏳ ℙ𝕃𝔼𝔸𝕊𝔼 𝕎𝔸𝕀𝕋 𝟙 𝕄𝕀ℕ𝕌𝕋𝔼 𝔹𝔼𝔽𝕆ℝ𝔼 𝕌𝕊𝕀ℕ𝔾 𝕋ℍ𝔼 𝔹𝕆𝕋
\`\`\``
          }
        );

        console.log("Video sent successfully.");

        // Optionally, send a success message
        success(`1`, `[■■■■■■■■■■■■■■■] Connected`);
      } catch (error) {
        console.error('Error downloading or sending the video:', error);
        // Optionally, notify the user about the error
        setReply("An error occurred while sending the video. Please try again later.");
      }
    }

    const bot = db.data.others['restart'];
    if (bot) {
      const m = bot.m;
      const from = bot.from;
      let text = 'Bot is connected';
      await conn.sendMessage(from, { text }, { quoted: m });
      delete db.data.others['restart'];
    }
  }

  // creds updated -- save
  if (events['creds.update']) {
    await saveCreds();
  }

  // history received
  if (events['messaging-history.set']) {
    const { chats, contacts, messages, isLatest } = events['messaging-history.set'];
    console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`);
  }
}); // Properly closes the conn.ev.process function




  
const Log = (text) =>{
  console.log(text)
 }


  function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " Days, " : " Days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hours, " : " Hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "Minutes, " : " Minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Seconds" : " Seconds") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}


	
global.chalk = chalk
global.clockString = clockString
global.Log = Log

	return conn
 }

connectToWhatsApp()
    
