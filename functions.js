module.exports = {
    ttk: function (input){
    let ttkMap = {
        "AR": "https://i.imgur.com/KUw1JxI.png",
        "AR ADS": "https://i.imgur.com/LBiBAUN.png",
        "SMG": "https://i.imgur.com/i76TWzX.png",
        "SMG ADS": "https://i.imgur.com/O2BrvWm.png",
        "LMG": "https://i.imgur.com/O9a6hx6.png",
        "LMG ADS": "https://i.imgur.com/H3V9HH8.png6",
        "META": "https://i.imgur.com/baC3OZA.png",
        "META ADS": "https://i.imgur.com/J0ph9qR.png",
        "ALL": "https://imgur.com/a/udC3YXo"
        };

    let defaultInput = "All";

    return ttkMap[input] || defaultInput;
    }
};