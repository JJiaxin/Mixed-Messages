const message_generator = {
    horoscope:['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'],
    luckyObject:['red hat', 'silver necklace', 'green jacket', 'pink flower'],
    stayAway:['water', 'electricity', 'hot things', 'crowded places'],
}

let todayHoro = []

for (const key in message_generator){

    let randidx = Math.floor(Math.random())*message_generator[key].length;
    
    switch (key) {
        case 'horoscope':
            todayHoro.push(`The lucky sign today is ${message_generator.horoscope[randidx]}.`);
            break;
        case 'luckyObject':
            todayHoro.push(`Today's luck object is a ${message_generator.luckyObject[randidx]}.`);
            break;
        case 'stayAway':
            todayHoro.push(`It is best to stay away from ${message_generator.stayAway[randidx]}.`);
            break;
    };
}

function formatMessage(messages) {
    todayHoro.join('\n')
    console.log(todayHoro)
    console.log('Thank you for joining us today at Today\'s Horoscope. We hope to see you again tomorrow!')
}
formatMessage(todayHoro)

