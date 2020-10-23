const otherFunctions = require('../functions.js');

module.exports = {
    name: 'loadout',
    description: 'This command will give you the current meta loadout for the weapon requested',
    args: true,
    guildOnly: false,
    cooldown: 5,
    usage: '<weapon>',
    execute(message, args){
        message.channel.send(`Here is a loadout for the ${args[0]}:\n${otherFunctions.wz_loadout(args[0].toUpperCase())}`)
        console.log(`${message.author.tag} sent loadout command for ${args[0]} at ${Date(Date.now()).toString()}`);    
    }
}