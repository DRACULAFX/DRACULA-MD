const settings = require('./settings.js');
const moment = require("moment-timezone")
const chalk = require("chalk")
const fs = require('fs-extra')
const util = require("util")
const { getBuffer, getRandom, getGroupAdmins,sleep} = require("../lib/myfunc");
const bg = "https://tinyurl.com/y23xrfhu";

//Function update member
module.exports = async  (conn, anu) => {
var jeda = false;
if (jeda) return console.log("spam welcome active");
jeda = true;
try {
const { id, participants, action } = anu;


if(action === "demote"){
let members = conn.chats[id].metadata.participants
await members.forEach(participant => {
if (participant.id === participants[0]) {
participant.admin = null;
}
});
let nana = members.filter(v => v.id === participants[0])
console.log(nana)
} else if(action === "promote") {
let members = conn.chats[id].metadata.participants
await members.forEach(participant => {
if (participant.id === participants[0]) {
participant.admin = 'admin'
}
});    
let nana = members.filter(v => v.id === participants[0])
console.log(nana)    
} 
    


if(anu.participants[0].includes('@lid')) return console.log(chalk.magenta('log 1'))
if ((action == "remove" || action == "promote" || action == "demote") &&
anu.participants[0].split("@")[0].includes(conn.user.id.split(":")[0])
)
return console.log(chalk.magenta('log 2'))
const myGroup = Object.keys(db.data.chats);
const from = anu.id
const botNumber = conn.user.jid;
const groupMetadata = ((conn.chats[from] || {}).metadata || await conn.groupMetadata(from).catch(_ => null))  || {}

const groupName = groupMetadata.subject || [];
const groupLength = groupMetadata.participants.length;
const sender = conn.decodeJid(anu.participants[0])//132345273258041_1@s.whatsapp.net
if(sender.includes('_')) return log('log 3')
const senderNumber = sender.split("@")[0];
const groupMembers = groupMetadata.participants || [];
const groupAdmins = getGroupAdmins(groupMembers) || [];
const groupDesc = groupMetadata.desc || [];
const groupOwner = groupMetadata.owner || [];
const user =
groupMembers.find((u) => conn.decodeJid(u.id) === sender) || {};
const bot =
groupMembers.find((u) => conn.decodeJid(u.id) == conn.user.jid) || {};

const isRAdmin = (user && user.admin == "superadmin") || false;
const isAdmin = isRAdmin || (user && user.admin == "admin") || false;
const isBotAdmin = (bot && bot.admin == "admin") || false; // Are you Admin?
const pushname = await conn.getName(sender);
const oneMem = anu.participants.length === 1;
const itsMe = sender === botNumber;
const timeWib = moment.tz("Africa/Lagos").format("HH:mm");
const chat = global.db.data.chats[id];
const add = action == "add";
const remove = action == "remove";
const memb = groupMetadata.participants.length
const isBanchat = myGroup.includes(from)
? db.data.chats[from].banchat
: false;
if (isBanchat) {
return console.log(chalk.magenta('log 4'))
}
let m = {
chat: from,
pushname: pushname,
sender: sender,
};

if (!chat) return console.log(chalk.magenta('log 5'))
//if (!chat.welcome) return log('log 6')
let sBye = chat.sBye;
let sWelcome = chat.sWelcome;



//Group Update Console.log
if (add && oneMem)
console.log(
  chalk.magenta("[GROUP UPDATE]"),
  chalk.green(`${pushname} has joined the group chat`),
  chalk.magenta(`${groupName}`)
);
if (remove && oneMem)
console.log(
  chalk.magenta("[GROUP UPDATE]"),
  chalk.green(`${pushname} has left the group chat`),
  chalk.magenta(`${groupName}`)
);


let kickon = db.data.kickon[from];
if (add && kickon && kickon.includes(senderNumber)) {
let teks = `@user is not allowed to enter
because he has left this group before,
and has also been marked as a bad user`;
let text = teks.replace("user", await conn.getName(sender));

await conn.sendMessage(
from,
{ text,
mentions: [sender],
contextInfo: { mentionedJid: [sender] }
},

);
if (!isBotAdmin)
return conn.sendMessage(
from,
{
text: `Failed to remove @${senderNumber} from group because bot is not admin`,
contextInfo: { mentionedJid: [sender] },
},

);
if (isBotAdmin)
return conn.groupParticipantsUpdate(from, [sender], "remove");
}



let welcome ='https://telegra.ph/file/e90a359b95411b120c635.jpg'
let goodbye = 'https://telegra.ph/file/57355c93403c36dbf2ca4.jpg' 

if (action == "add") {
    var link = welcome;
} else {
    var link = goodbye;
}

const botRun = global.db.data.others['runtime'];
const botTime = botRun ? (new Date() - botRun.runtime) : "Not detected";
const runTime = clockString(botTime);

let mimetype = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

let contextInfo = {
    forwardingScore: 1,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName
    },
    externalAdReply: {
        showAdAttribution: false,
        title: `${action == "add" ? 'W E L C O M E' : 'G O O D  B Y E'}`,
        body: `Runtime ${runTime} `,
        sourceUrl: "https://whatsapp.com/channel/0029Vap32qXLikg91i4TmH3K",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: link,
    }
};

switch (action) {
    case "add": {
        try {
            
            if (!chat.welcome || !global.autowelcome) return;
            let teks = `Hello @user
welcome to: ${groupName}
Member To: ${memb}
Description: \n@desc
${sWelcome}`;
            const welcomeText = (chat.sWelcome || teks)
                .replace("user", await conn.getName(sender))
                .replace("@desc", groupDesc.toString() || "unknow")
                .replace("@subject", groupName);
            if (chat.welcome && !itsMe && oneMem) {
                conn.sendMessage(
                    from,
                    {
                        document: fs.readFileSync('./package.json'),
                        caption: welcomeText,
                        fileName: copyright,
                        mimetype,
                        pageCount: 100,
                        fileLength: 999999999999,
                        contextInfo
                    }
                );
            }
        } catch (err) {
            console.error("Error in 'add' case:", err);
        }
        break;
    }

    case "remove": {
        try {
            // Check both chat-specific and global auto-remove settings
            if (!chat.welcome || !global.autoremove) return;
            let teks = `Goodbye @user
${sBye}`;
            const byeText = (chat.sBye || teks)
                .replace("user", await conn.getName(sender))
                .replace("@desc", groupDesc.toString() || "unknow")
                .replace("@subject", groupName);
            if (chat.welcome && !itsMe && oneMem) {
                conn.sendMessage(
                    from,
                    {
                        document: fs.readFileSync('./package.json'),
                        caption: byeText,
                        fileName: copyright,
                        mimetype,
                        pageCount: 100,
                        fileLength: 999999999999,
                        contextInfo
                    }
                );
            }
        } catch (err) {
            console.error("Error in 'remove' case:", err);
        }
        break;
    }
} // Akhir dari swith action

await sleep(5000);
jeda = false;
} catch (err) {

jeda = false;
console.log(err);
let e = String(err);
if (e.includes("this.isZero")) {
return;
}
if (e.includes("rate-overlimit")) {
return;
}
if (e.includes("Connection Closed")) {
return;
}
if (e.includes("Timed Out")) {
return;
}
console.log(chalk.white("GROUP :"), chalk.green(e));

let text =`${util.format(anu)}

${util.format(groupMetadata)}

${util.format(err)}`
conn.sendMessage(ownerBot,{text})

}
};





