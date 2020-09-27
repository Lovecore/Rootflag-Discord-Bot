module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName);

        if (!command) return message.channel.send(`There is no command with the name \`${command.name}\`.`);

        delete require.cache[require.resolve(`./${command.name}.js`)]; //JS caches our requirements

        //load the requirement again
        if(message.member.roles.cache.some(role => role.name === 'Server Admin')){ //permission logic
            try {
                const newCommand = require(`./${command.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(`Command \`${command.name}\` was reloaded!`);
                console.log(`${message.author.tag} sent reload command for ${command.name} at ${Date(Date.now()).toString()}`);
            } catch (error) {
                console.log(error);
                message.channel.send(`Error when reloading \`${command.name}\`:\n\`${error.message}\``);
            }
        }else {
            message.channel.send("You don't have permissions to reload commands.");
            console.log('[-] reload failed failed.')
            console.log(`${message.author.tag} tried to reload commands at ${Date(Date.now()).toString()}`); 
        }  
    },
};