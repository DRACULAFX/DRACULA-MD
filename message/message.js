

module.exports = async (senderNumber, prefix,command, setReply) => {


global.mess = {
    wait: '*_Please wait a moment._*',
    game: 'The game feature is not active in this group. Inform the admin to activate the game feature using\n.game on',
    
    nsfw: 'NSFW is not active in this chat. Inform the admin to activate NSFW.',
    query: 'Please enter a query.',
    search: 'Searching...',
    scrap: '*Scraping...*',
    success: 'Success!',
    limit: `[❕] Your limit has run out.\nIf you want unlimited access, you can purchase premium. Only $10 for unlimited access for 3 months.\nType ${prefix}owner to contact the bot owner and proceed with payment. Thank you for using this bot!`,
    claimOn: `You have already claimed before. Please claim again at `,
    wrongFormat: 'Wrong format, please check the menu again.',

    error: {
        stick: 'That is not a sticker :v',
        api: 'API error or the link might be broken.',
        Iv: 'The link is invalid :v',
        link: "The link is broken!"
    },

    block: {
        Bowner: `Sorry, the command 「 *${command}* 」has been blocked by the owner.`,
        Bsystem: `The command 「 *${command}* 」has been blocked by the system due to an error.`
    },

    only: {
        prem: 'This feature is for Premium Users only. Type .buyprem to purchase.',
        group: 'This feature can only be used in Groups!',
        ownerB: 'This feature is exclusive to the Bot Owner!',
        owner: 'This feature is exclusive to the Bot Owner!',
        admin: 'This feature is for Group Admins only!',
        Badmin: 'This feature can be used once the bot becomes an ADMIN!'
    }
}
  
global.dfail = (type) => {
    let msg = {
        
        rowner: "*Owner Only* - This command is only for the bot owner!",
        owner: "*Owner Only* - This command is only for the bot owner!",
        mods: "*Owner Only* - This command is only for the bot owner!",
        premium: "*Premium Only* - This command is only for premium members!",
        group: "*Group Only* - This command can only be used in groups!",
        private: "*Private Only* - This command can only be used in private chats!",
        admin: "*Admin Only* - This command is only for group admins!",
        botAdmin: "Please make the bot an admin to use this command.",
        onlyprem: "Only *premium* users can use this feature in *private chat*!",
        nsfw: "The admin has disabled the *NSFW* feature in this group!",
        rpg: "The admin has disabled the *RPG Game* feature in this group!",
        game: "The admin has disabled the *Game* feature in this group!",
        limitExp: "Your limit has run out! Some commands cannot be accessed.\n\nYou can buy more limit by typing: *.buy limit 5*",
        restrict: "This feature cannot be used!",
        unreg: "Please register to the bot's *database* first to use this feature!\n\nType:\n#register yourname.yourage\nExample: #register Teguh.15\n",

}[type];

if (msg)
return setReply(msg)
};
 

}





const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})