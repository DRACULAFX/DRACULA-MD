const version = require("@whiskeysockets/baileys/package.json").version;
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk');
const { color, bgcolor } = require('../lib/color');
const { kyun } = require("../lib/myfunc");

// Nigerian Time Zones
const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss'); // West African Time
const timeWit = moment().tz('Africa/Lagos').format('HH:mm:ss'); // Same Nigerian Time
const timeWita = moment().tz('Africa/Lagos').format('HH:mm:ss'); // Same Nigerian Time

// Function to apply custom text style
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
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // Keep uppercase letters as is
      output.push(v);
    } else {
      // Convert lowercase or other characters
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

// Nigerian Calendar Information
let d = new Date();
let locale = 'en-NG'; // Nigerian English
let gmt = new Date(0).getTime() - new Date('1 January 2021').getTime();
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
const calender = d.toLocaleDateString("en-NG", {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

// Total Features Function
const totalFitur = () => {
  var mytext = fs.readFileSync("./message/case.js").toString();
  var numUpper = (mytext.match(/case/g) || []).length;
  return numUpper;
};

// Read More and Additional Formatting
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// Nigerian Greeting Based on Time
let dt = moment(Date.now()).tz('Africa/Lagos').locale('en-NG').format('a');
const ucapanWaktu = "Good " + dt.charAt(0).toUpperCase() + dt.slice(1);

// Islamic Date for Nigeria




/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu = (limitCount, isPremium, thisHit, publik, sender, prefix, pushname) => {
    let saldo = "0"; // Default balance
    try {
        // Check if the user data exists and has a balance
        if (db.data.users[sender] && db.data.users[sender].balance != null) {
            saldo = db.data.users[sender].balance.toLocaleString();
        }
    } catch (error) {
        console.error("Error accessing user balance:", error);
    }

    return Ehztext(`
> *𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾* :
> *𝙽𝙰𝙼𝙴* : ${pushname}
> *𝚂𝚃𝙰𝚃𝚄𝚂* : ${isPremium ? 'Premium' : 'Free'}
> *𝙱𝙰𝙻𝙰𝙽𝙲𝙴* : ${saldo}

> *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* :
> *𝙱𝙾𝚃𝙽𝙰𝙼𝙴* : ${botName}
> *𝙼𝙾𝙳𝙴* : ${publik ? "Public" : "Self"}
> *𝚁𝚄𝙽 𝙾𝙽* : ${runWith} 

> *𝙳𝙰𝚃𝙴/𝚃𝙸𝙼𝙴 :*
> *${calender}*
> *${timeWib}*

]––––––『 *𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* 』––––––[
${readmore}

⨳ *𝙸𝙽𝙵𝙾* ⨳
➢ runtime
➢ speed
➢ ping
➢ owner

⨳ *𝙶𝚁𝙾𝚄𝙿* ⨳
➢ gcinfo
➢ linkgc
➢ resetlinkgc
➢ add
➢ kick
➢ promote
➢ demote
➢ tagadmin
➢ hidetag
➢ tagall
➢ jid
➢ setppgc
➢ delppgc
➢ getppgc
➢ setnamegc
➢ setdescgc

⨳ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳* ⨳
➢ play
➢ instagram
➢ tiktok
➢ tiktokaudio
➢ mediafire
➢ gdrive
➢ githubdl

⨳ *𝙰𝙸* ⨳
➢ gemini
➢ gemini-pro
➢ chat
➢ ask

⨳ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁* ⨳
➢ sticker
➢ take
➢ qc
➢ emojimix
➢ smeme
➢ textsticker
➢ stickersearch

⨳ *𝙵𝚄𝙽* ⨳
➢ react
➢ sound1-161
➢ rps (rock/paper/scissors)
➢ truth
➢ dare
➢ joke

⨳ *𝚃𝙾𝙾𝙻𝚂* ⨳
➢ tourl
➢ ssweb
➢ trackip
➢ google
➢ shorten
➢ nobg
➢ gimage
➢ pinterest
➢ gitstalk
➢ elements

⨳ *𝙴𝙿𝙷𝙾𝚃𝙾* ⨳
➢ glitchtext
➢ writetext
➢ advancedglow
➢ typographytext
➢ pixelglitch
➢ neonglitch
➢ flagtext
➢ flag3dtext
➢ deletingtext
➢ blackpinkstyle
➢ glowingtext
➢ underwatertext
➢ logomaker
➢ cartoonstyle
➢ papercutstyle
➢ watercolortext
➢ effectclouds
➢ blackpinklogo
➢ gradienttext
➢ summerbeach
➢ luxurygold
➢ multicoloredneon
➢ sandsummer
➢ galaxywallpaper
➢ 1917style
➢ makingneon
➢ royaltext
➢ freecreate
➢ galaxystyle
➢ lighteffects

⨳ *𝙽𝚂𝙵𝚆* ⨳
➢ nsfw
➢ trap
➢ hneko
➢ nwaifu
➢ animespank
➢ spank
➢ gifblowjob
➢ blowjob
➢ cuckold
➢ eba
➢ pussy
➢ yuri
➢ zettai
➢ hentavid
➢ paptt

⨳ *𝙰𝙽𝙸𝙼𝙴* ⨳
➢ txt2img
➢ randomanime
➢ loli
➢ cosplay
➢ milf
➢ wallml
➢ ppcp

⨳ *𝙱𝚄𝙶𝚂* ⨳
➢ spectre
➢ drac
➢ ui-freeze
➢ lord

⨳ *𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂* ⨳
➢ restart
➢ autobio
➢ blockcmd
➢ unblockcmd
➢ listblockcmd
➢ adderror
➢ delerror
➢ listerror
➢ clearsession
➢ setbio
➢ setppbot
➢ delppbot
➢ clearalluser
➢ clearallerror

⨳ *𝙾𝚆𝙽𝙴𝚁* ⨳
➢ listcase
➢ aza
➢ vv
➢ vv2
➢ reportbug
➢ autotype
➢ antical
➢ listgc
➢ addowner
➢ delowner
➢ listowner
➢ addprem
➢ delprem
➢ listprem
➢ ban
➢ unban
➢ listban
➢ clearallban
➢ block
➢ unblock
➢ clearallblock
➢ blocklist
➢ onlinelist
➢ bcgc
➢ join
➢ out
➢ public
➢ self
➢ $
`);
};
 



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
