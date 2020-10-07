const {reaction_message, dev_role, ctf_role} = require('./config.json')
module.exports = {
    //time to kill
    ttk: function (input){
    let defaultInput = "All";
    let ttkMap = {
        "AR": "https://i.imgur.com/KUw1JxI.png",
        "AR-ADS": "https://i.imgur.com/LBiBAUN.png",
        "SMG": "https://i.imgur.com/i76TWzX.png",
        "SMG-ADS": "https://i.imgur.com/O2BrvWm.png",
        "LMG": "https://i.imgur.com/O9a6hx6.png",
        "LMG-ADS": "https://i.imgur.com/H3V9HH8.png6",
        "META": "https://i.imgur.com/baC3OZA.png",
        "META-ADS": "https://i.imgur.com/J0ph9qR.png",
        "ALL": "https://imgur.com/a/udC3YXo"
        };
    return ttkMap[input] || defaultInput;
    },

    //user role reaction function - add
    rf_reaction_add: function (reaction, user){
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id);
        if(reaction.message.id === reaction_message) {
            switch (name) {
                case '🐍':
                    member.roles.add(dev_role)
                    break;
                case '🏴‍☠️':
                    member.roles.add(ctf_role)
                    break;
            }
        }
    },

    //user role reaction function - remove
    rf_reaction_remove: function (reaction, user){
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id);
        if(reaction.message.id === reaction_message) {
            switch (name) {
                case '🐍':
                    member.roles.remove(dev_role)
                    break;
                case '🏴‍☠️':
                    member.roles.remove(ctf_role)
                    break;
            }
        }
    }
};