//this module require the warzone module for authentication against activision api, maybe we'll change this later
const API = require('call-of-duty-api')({platform: "battle"}); //we only take battle.net 'round here!
//const { activision_account, activision_password } = require('../config.json');
module.exports = {
    name: 'cod',
    description: 'This command will give you your basic Call of Duty Modern Warfare stats.',
    args: true,
    guildOnly: false,
    cooldown: 5,
    usage: '<battlenetID>',
    execute(message, args){
        message.channel.send(`Here are some CoD stats for ${args[0]}`);
        console.log(`${message.author.tag} sent cod command at ${Date(Date.now()).toString()}`);
        API.MWstats(args[0], API.platforms.battle).then((output) => {
            // console.log(output.lifetime.itemData.weapon_marksman);
            // console.log(output.lifetime.itemData.weapon_sniper);
            // console.log(output.lifetime.itemData.weapon_lmg);
            // console.log(output.lifetime.itemData.weapon_pistol);
            // console.log(output.lifetime.itemData.weapon_launcher);
            // console.log(output.lifetime.itemData.weapon_smg);
            // //we'll loop this later
            // message.channel.send(`Wins: ${output.br_all.wins}`);
            // message.channel.send(`Kills: ${output.br_all.kills}`);
            // message.channel.send(`K/D ratio: ${output.br_all.kdRatio}`);
            // message.channel.send(`Players downed: ${output.br_all.downs}`);
            // message.channel.send(`Deaths: ${output.br_all.deaths}`);
            // message.channel.send(`Teammates revived: ${output.br_all.revives}`);
            // message.channel.send(`Top 25 finishes: ${output.br_all.topTwentyFive}`);
            // message.channel.send(`Top 10 finishes: ${output.br_all.topTen}`);
            // message.channel.send(`Top 5 finishes: ${output.br_all.topFive}`);
            // message.channel.send(`Games played: ${output.br_all.gamesPlayed}`);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}