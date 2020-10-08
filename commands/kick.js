module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    guildOnly: true,
    args: true,
    execute(message, args){
        //Server Admin ID 740920320868745337
        if(message.member.roles.cache.some(role => role.name === 'Server Admin')){ //permission logic
            message.channel.send(`${args} Has been kicked`);
            console.log(`${message.author.tag} sent kick command at ${Date(Date.now()).toString()}`);      
        } else {
            message.channel.send("Nice try, You don't have permissions to kick a user.");
            console.log('[-] Kick user failed.')
            console.log(`${message.author.tag} sent kick command at ${Date(Date.now()).toString()}`);    

        }
    }
}