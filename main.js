const discord = require('discord.js');
const bot = new discord.Client();

const token = "NzY3MTIzNDYxMTg4MzU0MDcw.X4tVZQ.3pdEV17Z_fV6cmMC_qos5bFWGRo";

const prefix = "!";

bot.on('ready', () => {
    console.log('Yes ma brudda!');
    let onlineguild = bot.guilds.cache.get('726408655775334430')
    let onlinechannel = onlineguild.channels.cache.get('726408655775334433')
    let questiononeembed = new discord.MessageEmbed()
        .setTitle("Question One")
        .setDescription("Who was Prime Minister of the United Kingdom at the time of the Afgan war?\n```1: Tony Blair```\n```2: Theresa May```\n```3: Borris Johnson```\n```4: David Cameron```\n```5: Margret Thatcher```")
        .setTimestamp()
    onlinechannel.send(questiononeembed)
    bot.user.setActivity('with my code!', {
        type: "PLAYING"
    }).catch(console.error)
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case '1':
            if (args[1] === 'One') {
                message.channel.send('Correct! And its Blair, not Blaire!')
                let questiontwoembed = new discord.MessageEmbed()
                    .setTitle('Question Two')
                    .setDescription("When did the song \"Sandstorm\" by Darude get officially released?\n```1: 1989```\n```2: 1999```\n```3: 1989```\n```4: 2000```\n```5: 2003```")
                    .setTimestamp()
                message.channel.send(questiontwoembed)
            } else {
                message.channel.send(`Incorrect! I\'m very disappointed.`)
            }
        break;
        case '2':
            if (args[1] === 'Three') {
                message.channel.send('Correct! You probably know this song from your childhood!')
            } else {
                message.channel.send('I\'m so disappointed right now...')
            }
        break;
    }
})

bot.login(token)
