module.exports = {
    name: 'ping',
    description: 'This is the ping command',
    args: false,
    guildOnly: false,
    cooldown: 5,
    usage: '',
    execute(message, args){
        message.channel.send('pong!');
        console.log(`${message.author.tag} sent ping command at ${Date(Date.now()).toString()}`);    
    }
}