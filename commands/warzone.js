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
    usage: '<battlenetID> <solo | duo | trio | overall> <weekly | all>',
    execute(message, args){
        console.log(`${message.author.tag} sent warzone command at ${Date(Date.now()).toString()}`);   

        args = args.map(v => { return v.toLowerCase(); })

        if(args[1] === 'duo' && args[2] === 'weekly'){
            message.channel.send(`Here are \`${args[0]} ${args[2]} ${args[1]}\'s Warzone stats.\n`);
            API.MWwz(args[0], API.platforms.battle).then((output) => {
                    message.channel.send(`\nMatches played: ${output.weekly.mode.br_brduos.properties.matchesPlayed}\n\
                    Time Played: ${output.weekly.mode.br_brduos.properties.timePlayed}\n \
                    Kills: ${output.weekly.mode.br_brduos.properties.kills}\n \
                    Kills Without A Gulag Respawn: ${output.weekly.mode.br_brduos.properties.objectiveLastStandKill}\n \
                    Deaths: ${output.weekly.mode.br_brduos.properties.deaths}\n \
                    Assists: ${output.weekly.mode.br_brduos.properties.assists}\n \
                    Teammates Revived: ${output.weekly.mode.br_brduos.properties.objectiveReviver}\n \
                    KD Ratio: ${output.weekly.mode.br_brduos.properties.kdRatio}\n \
                    Gulag Kills: ${output.weekly.mode.br_brduos.properties.gulagKills}\n \
                    Gulag Deaths: ${output.weekly.mode.br_brduos.properties.gulagDeaths}\n \
                    Average Kills Per Game: ${output.weekly.mode.br_brduos.properties.killsPerGame}\n \
                    Average Life Time: ${output.weekly.mode.br_brduos.properties.avgLifeTime}\n \
                    Kills In The First Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle1}\n \
                    Kills In The Second Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle2}\n \
                    Kills In The Third Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle3}\n \
                    Kills In The Fourth Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle4}\n \
                    Kills In The Fifth Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle5}\n \
                    Kills In The Sixth Circle: ${output.weekly.mode.br_brduos.properties.objectiveBrDownEnemyCircle6}\n \
                    Teams Wiped: ${output.weekly.mode.br_brduos.properties.objectiveTeamWiped}\n \
                    Headshots: ${output.weekly.mode.br_brduos.properties.headshots}\n \
                    Headshot Percentage: ${output.weekly.mode.br_brduos.properties.headshotPercentage}\n \
                    Damage Done: ${output.weekly.mode.br_brduos.properties.damageDone}\n \
                    Damage Taken: ${output.weekly.mode.br_brduos.properties.damageTaken}\n \
                    Executions: ${output.weekly.mode.br_brduos.properties.executions}\n \
                    Wallbangs: ${output.weekly.mode.br_brduos.properties.wallBangs}\n \
                    Near Misses: ${output.weekly.mode.br_brduos.properties.nearmisses}\n \
                    Caches Opened: ${output.weekly.mode.br_brduos.properties.objectiveBrCacheOpen}\n \
                    Contracts Picked-up: ${output.weekly.mode.br_brduos.properties.objectiveBrMissionPickupTablet}\n \
                    Purchases At A Buy Station: ${output.weekly.mode.br_brduos.properties.objectiveBrKioskBuy}\n \
                    Enemy Equipment Destroyed: ${output.weekly.mode.br_brduos.properties.objectiveDestroyedEquipment}\n \
                    Amount Of Times Using A Teammates Munition's Box: ${output.weekly.mode.br_brduos.properties.objectiveMunitionsBoxTeammateUsed}\n \
                    Distance Traveled: ${output.weekly.mode.br_brduos.properties.distanceTraveled}m\n \
                    Score: ${output.weekly.mode.br_brduos.properties.score}\n \
                    Score Per Minute: ${output.weekly.mode.br_brduos.properties.scorePerMinute}\n \
                    Score Per Game: ${output.weekly.mode.br_brduos.properties.scorePerGame}\n`)
                    //console.log(output.weekly.mode.br_brduos); 
                }).catch((err) => {
                    console.error(err);
                    message.channel.send(err);
                });
        } else if (args[1] === 'solo' && args[2] === 'weekly'){
            API.MWwz(args[0], API.platforms.battle).then((output) => {
                message.channel.send(`\nMatches played: ${output.weekly.mode.br_brsolo.properties.matchesPlayed}\n\
                Time Played: ${output.weekly.mode.br_brsolo.properties.timePlayed}\n \
                Kills: ${output.weekly.mode.br_brsolo.properties.kills}\n \
                Kills Without A Gulag Respawn: ${output.weekly.mode.br_brsolo.properties.objectiveLastStandKill}\n \
                Deaths: ${output.weekly.mode.br_brsolo.properties.deaths}\n \
                Assists: ${output.weekly.mode.br_brsolo.properties.assists}\n \
                Teammates Revived: ${output.weekly.mode.br_brsolo.properties.objectiveReviver}\n \
                KD Ratio: ${output.weekly.mode.br_brsolo.properties.kdRatio}\n \
                Gulag Kills: ${output.weekly.mode.br_brsolo.properties.gulagKills}\n \
                Gulag Deaths: ${output.weekly.mode.br_brsolo.properties.gulagDeaths}\n \
                Average Kills Per Game: ${output.weekly.mode.br_brsolo.properties.killsPerGame}\n \
                Average Life Time: ${output.weekly.mode.br_brsolo.properties.avgLifeTime}\n \
                Kills In The First Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle1}\n \
                Kills In The Second Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle2}\n \
                Kills In The Third Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle3}\n \
                Kills In The Fourth Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle4}\n \
                Kills In The Fifth Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle5}\n \
                Kills In The Sixth Circle: ${output.weekly.mode.br_brsolo.properties.objectiveBrDownEnemyCircle6}\n \
                Teams Wiped: ${output.weekly.mode.br_brsolo.properties.objectiveTeamWiped}\n \
                Headshots: ${output.weekly.mode.br_brsolo.properties.headshots}\n \
                Headshot Percentage: ${output.weekly.mode.br_brsolo.properties.headshotPercentage}\n \
                Damage Done: ${output.weekly.mode.br_brsolo.properties.damageDone}\n \
                Damage Taken: ${output.weekly.mode.br_brsolo.properties.damageTaken}\n \
                Executions: ${output.weekly.mode.br_brsolo.properties.executions}\n \
                Wallbangs: ${output.weekly.mode.br_brsolo.properties.wallBangs}\n \
                Near Misses: ${output.weekly.mode.br_brsolo.properties.nearmisses}\n \
                Caches Opened: ${output.weekly.mode.br_brsolo.properties.objectiveBrCacheOpen}\n \
                Contracts Picked-up: ${output.weekly.mode.br_brsolo.properties.objectiveBrMissionPickupTablet}\n \
                Purchases At A Buy Station: ${output.weekly.mode.br_brsolo.properties.objectiveBrKioskBuy}\n \
                Enemy Equipment Destroyed: ${output.weekly.mode.br_brsolo.properties.objectiveDestroyedEquipment}\n \
                Amount Of Times Using A Teammates Munition's Box: ${output.weekly.mode.br_brsolo.properties.objectiveMunitionsBoxTeammateUsed}\n \
                Distance Traveled: ${output.weekly.mode.br_brsolo.properties.distanceTraveled}m\n \
                Score: ${output.weekly.mode.br_brsolo.properties.score}\n \
                Score Per Minute: ${output.weekly.mode.br_brsolo.properties.scorePerMinute}\n \
                Score Per Game: ${output.weekly.mode.br_brsolo.properties.scorePerGame}\n`)
            })
            .catch((err) => {
                console.error(err);
                message.channel.send(err);
            });
        } else if (args[1] === 'trio' && args[2] === 'weekly') {
            API.MWwz(args[0], API.platforms.battle).then((output) => {
                message.channel.send(`\nMatches played: ${output.weekly.mode.br_brtrios.properties.matchesPlayed}\n\
                Time Played: ${output.weekly.mode.br_brtrios.properties.timePlayed}\n \
                Kills: ${output.weekly.mode.br_brtrios.properties.kills}\n \
                Kills Without A Gulag Respawn: ${output.weekly.mode.br_brtrios.properties.objectiveLastStandKill}\n \
                Deaths: ${output.weekly.mode.br_brtrios.properties.deaths}\n \
                Assists: ${output.weekly.mode.br_brtrios.properties.assists}\n \
                Teammates Revived: ${output.weekly.mode.br_brtrios.properties.objectiveReviver}\n \
                KD Ratio: ${output.weekly.mode.br_brtrios.properties.kdRatio}\n \
                Gulag Kills: ${output.weekly.mode.br_brtrios.properties.gulagKills}\n \
                Gulag Deaths: ${output.weekly.mode.br_brtrios.properties.gulagDeaths}\n \
                Average Kills Per Game: ${output.weekly.mode.br_brtrios.properties.killsPerGame}\n \
                Average Life Time: ${output.weekly.mode.br_brtrios.properties.avgLifeTime}\n \
                Kills In The First Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle1}\n \
                Kills In The Second Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle2}\n \
                Kills In The Third Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle3}\n \
                Kills In The Fourth Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle4}\n \
                Kills In The Fifth Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle5}\n \
                Kills In The Sixth Circle: ${output.weekly.mode.br_brtrios.properties.objectiveBrDownEnemyCircle6}\n \
                Teams Wiped: ${output.weekly.mode.br_brtrios.properties.objectiveTeamWiped}\n \
                Headshots: ${output.weekly.mode.br_brtrios.properties.headshots}\n \
                Headshot Percentage: ${output.weekly.mode.br_brtrios.properties.headshotPercentage}\n \
                Damage Done: ${output.weekly.mode.br_brtrios.properties.damageDone}\n \
                Damage Taken: ${output.weekly.mode.br_brtrios.properties.damageTaken}\n \
                Executions: ${output.weekly.mode.br_brtrios.properties.executions}\n \
                Wallbangs: ${output.weekly.mode.br_brtrios.properties.wallBangs}\n \
                Near Misses: ${output.weekly.mode.br_brtrios.properties.nearmisses}\n \
                Caches Opened: ${output.weekly.mode.br_brtrios.properties.objectiveBrCacheOpen}\n \
                Contracts Picked-up: ${output.weekly.mode.br_brtrios.properties.objectiveBrMissionPickupTablet}\n \
                Purchases At A Buy Station: ${output.weekly.mode.br_brtrios.properties.objectiveBrKioskBuy}\n \
                Enemy Equipment Destroyed: ${output.weekly.mode.br_brtrios.properties.objectiveDestroyedEquipment}\n \
                Amount Of Times Using A Teammates Munition's Box: ${output.weekly.mode.br_brtrios.properties.objectiveMunitionsBoxTeammateUsed}\n \
                Distance Traveled: ${output.weekly.mode.br_brtrios.properties.distanceTraveled}m\n \
                Score: ${output.weekly.mode.br_brtrios.properties.score}\n \
                Score Per Minute: ${output.weekly.mode.br_brtrios.properties.scorePerMinute}\n \
                Score Per Game: ${output.weekly.mode.br_brtrios.properties.scorePerGame}\n`)
            })
            .catch((err) => {
                console.error(err);
                message.channel.send(err);
            });
        } else {
            API.MWBattleData(args[0], API.platforms.battle).then((output) => {
                message.channel.send(`\n
                Playtime in days: ${output.br_all.timePlayed / 60 / 60 / 24}\n\
                Games played: ${output.br_all.gamesPlayed}\n\
                Wins: ${output.br_all.wins}\n\
                Kills: ${output.br_all.kills}\n\
                K/D ratio: ${output.br_all.kdRatio}\n\
                Players downed: ${output.br_all.downs}\n\
                Deaths: ${output.br_all.deaths}\n\
                Teammates revived: ${output.br_all.revives}\n\
                Top 25 finishes: ${output.br_all.topTwentyFive}\n\
                Top 10 finishes: ${output.br_all.topTen}\n\
                Top 5 finishes: ${output.br_all.topFive}\n\
                Contracts completed: ${output.br_all.contracts}`);
                //message.channel.send('Hmmmm, you hit the catch.')
                console.log(output); 
            })
            .catch((err) => {
                console.error(err);
                message.channel.send(err);
            });
        }
    }
}