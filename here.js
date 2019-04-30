const { getInfoFromName } = require('myanimelists');//require myanimelists package


          client.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'anime')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: !anime dragon ball')
            getInfoFromName(anime)  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)   
                .setColor('#0a0000')
                message.channel.sendEmbed(embed) 
                })
                .catch(error => console.log(error));
            }})
