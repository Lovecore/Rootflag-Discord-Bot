const Imgflipper = require("imgflipper");
const { imgflip_account, imgflip_pass } = require('../config.json');
//const meme_json = require('../meme.json');

//meme ID's from imgflip
const meme = {
	"brace": 61546,
	"mostinteresting": 61532,
	"fry": 61520,
	"onedoesnot": 61579,
	"yuno": 61527,
	"success": 61544,
	"allthethings": 61533,
	"doge": 8072285,
	"drevil": 40945639,
	"skeptical": 101711,
	"notime": 442575,
	"yodawg": 101716,
    "awkwardpenguin": 61584,
    "changemymind": 129242436,
    "distractedbf": 112126428,
    "drake": 181913649
}
var all_meme_types = () => {
    let desc = 'Use this command to generate a meme! Here are the current meme\s:\n';
    for (var i in meme) {
        desc += "\t\t" + i + "\n";
    }
    return desc;
}

module.exports = {
    name: 'meme',
    description: all_meme_types(),
    args: true,
    guildOnly: false,
    cooldown: 5,
    usage: '<meme type> <"top text"> <"bottom text">',
    execute(message, args){
        junk = message.content.split('"');
        meme_type = junk[0].split(" ")[1]
        //console.log(junk);
        //console.log(meme_type);
        var imgflipper = new Imgflipper(imgflip_account, imgflip_pass);
        imgflipper.generateMeme(meme[meme_type], junk[1]?junk[1]:"", junk[3]?junk[3]:"", function(err, image){
            console.log(`Meme URL: ${image}`);
            if(image){
                message.channel.send(image);
            } else {
                message.channel.send(`${message.author.tag}, check the usage command.`)
            }
        });
        console.log(`${message.author.tag} sent meme command at ${Date(Date.now()).toString()}`);    
    }
}