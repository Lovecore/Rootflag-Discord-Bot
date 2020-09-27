module.exports = {
    name: 'bunkers',
    description: 'This command will list the bunker codes for Warzone as of Season 5',
    args: false,
    guildOnly: false,
    cooldown: 5,
    usage: '',
    execute(message, args){
        message.channel.send('Warzone Prison shack code - 72948531 \rWarzone Farmland code - 49285163 \rSouth Junkyard - 97264138 \rNorth Junkyard - 87624851 \rPark (nuke) - 60274513 \rTV Station - 27495810 \rhttps://cdn.mos.cms.futurecdn.net/b95y3BVXo9Z9VGycjYrkVo-650-80.jpg');
        console.log(`${message.author.tag} sent bunker  command at ${Date(Date.now()).toString()}`);    
    }
}