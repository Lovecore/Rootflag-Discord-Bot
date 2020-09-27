module.exports = {
    name: 'role',
    description: 'Assign Roles',
    args: true,
    usage: '<@user> <role>',
    execute(message, args){
        if(message.member.roles.cache.some(role => role.name === 'Server Admin')){ //permission logic
            let dev_role = message.guild.roles.cache.find(role => role.name === ("Devs"));
            let ctf_role = message.guild.roles.cache.find(role => role.name === ("CTF Junkies")); 
            console.log(role)
            //const member = message.member.mentions.members.first();

            message.member.roles.add(role).catch(console.log(error))
            console.log(`${message.author.tag} set a role for ${args[0]} at ${Date(Date.now()).toString()}`);  
            message.channel.send('Role Logic, activate!');
        }
    },
}