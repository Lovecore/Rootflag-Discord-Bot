const { prefix, token } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of the commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 1,
	execute(message, args) {
        const data = [];
        const {commands} = message.client;

        if (!args.length){
            data.push('Here is a list of my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on any command.`);

            return message.author.send(data, {split: true})
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('DM with commands sent');
                    console.log(`${message.author.tag} sent help command at ${Date(Date.now()).toString()}`);
                })
                .catch(error => {
                    console.error(`Could not send help via DM to ${message.author.tag}.\n`, error);
                    message.reply('I can\'t DM you, are DM\'s disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name);

        if (!command) {
            return message.reply('That is not a valid command.');
        }

        data.push(`**Command Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
        if (command.second_usage) data.push(`**Usage:** ${prefix}${command.name} ${command.second_usage}`);
        if (command.third_usage) data.push(`**Usage:** ${prefix}${command.name} ${command.third_usage}`);
        

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
	},
};