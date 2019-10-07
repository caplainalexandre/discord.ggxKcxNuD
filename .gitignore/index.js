const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Chaine youtube = zzraiders94")
    console.log("Le bot a bien été connecte")
});

bot.login("NjE4MzM3MzgwMzY5NDMyNTc2.XZtiaQ.MOKKgUtHN6JRBeJK_CWxJCaLTak");
