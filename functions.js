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

    // loadout function
    wz_loadout: function(input){
        let defaultInput = "DEFAULT";
        let loadoutMap = {
            "KILO": "https://lootshare.io/kilo-141:mp5/49387605-2618-47d8-8213-9522711e80eb",
            "KILO2": "https://lootshare.io/kilo-141:as-val/1af5e0f6-e3d0-4632-aa87-b82ade34969e",
            "M4": "https://lootshare.io/m4a1:mp5/b2213260-1f77-47b5-ab2f-89612adb5b7a",
            "M42": "https://lootshare.io/m4a1:as-val/9141ecd5-33e2-402c-ac77-6de639b1ace1",
            "GRAU": "https://lootshare.io/grau-556:mp5/1e76a5a9-6ae5-4050-93c9-73fab9c83338",
            "PKM": "https://lootshare.io/pkm:as-val/4fb1b2f9-0df9-4468-9714-ad8f3bf7096c",
            "208": "https://lootshare.io/sp-r-208:kilo-141/8d9a20a7-aad5-4130-afcd-9bdea80ad396",
            "DEFAULT": "You can choose: Kilo, M4, Grau, PKM or 208"
        };
        if (input === 'KILO') {
            return [loadoutMap['KILO'] + "\n" + loadoutMap['KILO2']];
        } else if (input === 'M4') {
            return [loadoutMap['M4'] + "\n" + loadoutMap['M42']];
        } else if (input === 'GRAU'){
            return loadoutMap['GRAU'];
        } else if (input === 'PKM'){
            return loadoutMap['PKM'];
        } else if (input === '208'){
            return loadoutMap['208'];
        } else {
            return defaultInput
        }
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