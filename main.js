const discord = require('discord.js');
const bot = new discord.Client();

const token = "CENSORED";

const prefix = "!";

bot.on('ready', () => {
    console.log('Yes ma brudda!');
    let onlineguild = bot.guilds.cache.get('726408655775334430')
    let onlinechannel = onlineguild.channels.cache.get('767141355361009684')
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
            if (args[1] === 'Four') {
                message.channel.send('Correct! You probably know this song from your childhood!')
                let questionthreeembed = new discord.MessageEmbed()
                    .setTitle('Question Three')
                    .setDescription('When was the song \"Big Rich Town\" by 50 Cent officially released?\n```1: 2016```\n```2: 2013```\n```3: 2018```\n```4: 2014```\n```5: 2019```')
                    .setTimestamp()
                message.channel.send(questionthreeembed)
            } else {
                message.channel.send('I\'m so disappointed right now...')
            }
        break;
        case '3':
            if (args[1] === 'Four') {
                message.channel.send('Correct! It was released as the theme song for the show Power on Netflix!')
                let questionfourembed = new discord.MessageEmbed()
                    .setTitle('Question Four')
                    .setDescription('In what year did World War One end?\n```1: 1918```\n```2: 1916```\n```3: 1917```\n```4: 1919```\n```5: 1920```')
                    .setTimestamp()
                message.channel.send(questionfourembed)
            } else {
                message.channel.send('Cmon, even I know this!')
            }
        break;
        case '4':
            if (args[1] === 'One') {
                message.channel.send('Correct! World War One began in 1914 and ended in 1918.')
                let questionfiveembed = new discord.MessageEmbed()
                    .setTitle('Question Five')
                    .setDescription('In what year did Pear Harbour happen?\n```1: 1941```\n```2: 1942```\n```3: 1940```\n```4: 1943```\n```5: 1944```')
                message.channel.send(questionfiveembed)
            } else {
                message.channel.send('Nein...')
            }
        break;
        case '5':
            if (args[1] === 'One') {
                message.channel.send('Correct. You have reached the end of the questionaire... for now at least. More questions coming soon!')
            } else {
                message.channel.send('Incorrect. Try again.')
            }
        break;
    }
})

bot.login(token)
