const API = require('call-of-duty-api')({platform: "battle"}); //we only take battle.net 'round here!
const { activision_account, activision_password } = require('../config.json');
API.login(activision_account, activision_password)
.then(console.log('We did it! We connected to the Activision COD API'))
.catch((err) => {
    console.error(err);    
    });
module.exports = {
    name: 'warzone',
    description: 'This command will give you your warzone stats.',
    args: true,
    guildOnly: false,
    cooldown: 5,
    usage: '<battlenetID>',
    execute(message, args){
        message.channel.send(`Here are some Warzone Stats for ${args[0]}`);
        console.log(`${message.author.tag} sent warzone command at ${Date(Date.now()).toString()}`);            
        API.MWBattleData(args[0], API.platforms.battle).then((output) => {
            //we'll loop this later
            message.channel.send(`Wins: ${output.br_all.wins}`);
            message.channel.send(`Kills: ${output.br_all.kills}`);
            message.channel.send(`K/D ratio: ${output.br_all.kdRatio}`);
            message.channel.send(`Players downed: ${output.br_all.downs}`);
            message.channel.send(`Deaths: ${output.br_all.deaths}`);
            message.channel.send(`Teammates revived: ${output.br_all.revives}`);
            message.channel.send(`Top 25 finishes: ${output.br_all.topTwentyFive}`);
            message.channel.send(`Top 10 finishes: ${output.br_all.topTen}`);
            message.channel.send(`Top 5 finishes: ${output.br_all.topFive}`);
            message.channel.send(`Games played: ${output.br_all.gamesPlayed}`);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}