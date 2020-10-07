const otherFunctions = require('../functions.js');

module.exports = {
    name: 'ttk',
    description: 'This command will give you the current *T*ime *T*o *K*ill for in meta weapons for Warzone. Supported weapon types are: AR, AR-ADS, SMG, SMG-ADS, LMG, LMG-ADS, META, META-ADS',
    args: true,
    guildOnly: false,
    cooldown: 5,
    usage: '<weapon type>',
    execute(message, args){
        console.log(`${message.author.tag} sent TTK command at ${Date(Date.now()).toString()}`);
        message.channel.send(`Here is the TTK chart for ${args[0]}\'s: ${otherFunctions.ttk(args[0].toUpperCase())}`)
    }
}