const util = require('util');
const Discord = require('discord.js');
const http = require('http');
const fs = require('fs');
const { prefix, token, reaction_message, ctf_role, dev_role } = require('./config.json');
const { rf_reaction_add, rf_reaction_remove } = require('./functions');

//create a connector to call
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION'] //partials for reaction functions are required
}); 
client.commands = new Discord.Collection(); //command collection
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //set our commands location

//loop through the commands directory and set commands names
for(const file of commandFiles){ 
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

//Connection validation
client.once('ready', () => {
    console.log('Connected!')
    console.log('Waiting for commands...')
});

//Welcome new members
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');//Send the message to a designated channel on a server:
    if (!channel) return; //Do nothing if the channel wasn't found on this server
    channel.send(`Welcome to the server, ${member}. Type \`!help\` for a list of commands.`); //Send the message, mentioning the member
    console.log(`${member} has joined the server on ${Date(Date.now()).toString()}`);  
});

client.on('message', message => {
    //message.member.roles.cache.has
    if(!message.content.startsWith(prefix) || message.author.bot) return; //if we don't start with the prefix or the bot sent the command die

    const args = message.content.slice(prefix.length).split(/ +/); //support spaces in the bot command
    const commandName = args.shift().toLowerCase();

    //dynamically call our commands vs stupid if statmemnts
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName); //shorten the length of the call by making it a variable

    //check to see if it is sent in a DM 
    if (command.guildOnly && message.channel.type === 'dm') {
        console.log(`${message.author.tag} sent ${command.name} command (denied) from a DM at ${Date(Date.now()).toString()}`);
        return message.reply('I can\'t execute that command inside DMs!');        
    }    

    //check for arguments to a command
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguements, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            console.log(`${message.author.tag} tried to use a command without an arg at ${Date(Date.now()).toString()}`);
        }

        return message.channel.send(reply);
    }

    //check for spam abuse
    if (!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name); //get the triggered command 
    const cooldownAmount = (command.command || 3) * 1000 //get the cooldown set in the function or default to 3

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) befure using the \`${command.name}\` command again.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    //do the things!
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error, TypeError);
        message.reply('Fuck. Error. Check the logs.');
    }
});

//add reaction based roles
client.on('messageReactionAdd', (reaction, user) => {
    console.log(`${reaction.message.guild.members.cache.get(user.id)} reacted to set a role at ${Date(Date.now()).toString()}`);
    rf_reaction_add(reaction, user);
});

//remove reaction based roles
client.on('messageReactionRemove', (reaction, user) => {
    console.log(`${reaction.message.guild.members.cache.get(user.id)} un-reacted to set a role at ${Date(Date.now()).toString()}`);
    rf_reaction_remove(reaction, user);
});

client.login(token); //this must be the last line in