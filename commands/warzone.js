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
            message.channel.send(`Playtime in days: ${output.br_all.timePlayed / 60 / 60 / 24}\nGames played: ${output.br_all.gamesPlayed}\nWins: ${output.br_all.wins}\nKills: ${output.br_all.kills}\nK/D ratio: ${output.br_all.kdRatio}\nPlayers downed: ${output.br_all.downs}\nDeaths: ${output.br_all.deaths}\nTeammates revived: ${output.br_all.revives}\Top 25 finishes: ${output.br_all.topTwentyFive}\nTop 10 finishes: ${output.br_all.topTen}\nTop 5 finishes: ${output.br_all.topFive}\nContracts completed: ${output.br_all.contracts}`);
            //console.log(output); 
        })
        .catch((err) => {
            console.error(err);
            message.channel.send(err);
        });
    }
}