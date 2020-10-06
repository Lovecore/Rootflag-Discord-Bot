module.exports = {
    name: 'source',
    description: 'This command will give you info on how I was written.',
    args: false,
    guildOnly: false,
    cooldown: 5,
    usage: '',
    execute(message, args){
        message.channel.send('Rootflag Bot was written in Javascript \'cause we all love Node.js. You can view my source here: https://github.com/Lovecore/Rootflag-Discord-Bot/tree/master');
        console.log(`${message.author.tag} sent source command at ${Date(Date.now()).toString()}`);    
    }
}