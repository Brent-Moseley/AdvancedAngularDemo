var lib = [
    'Code is gold!!',
    'I love coding and development.  Look at all the awesome doors this has opened!',
    'This is an awesome career, perfect for me, my calling and such a huge gift from God!',
    'I want to keep getting better and better in my career, becoming a stronger and stronger dev.',
    'I keep building each day, growing, learning, making a difference in the lives of people',
    'I do great work each day, help my manager and team, and make progress as a strong team member.',
    'I work hard, sow, and will reap greatly.',
    'Love God, Love thyself, love thy neighbor.',
    'You just never know what great opportunties are right around the corner!',
    'Keep chipping away at the stone, keep cranking up the mountain, keep going and you will get there!',
    'One step backwards, two steps forwards is still progress.',
    'Determination',
    'Focus',
    'Perseverance',
    'Remember Edison and the light bulb - took hundreds of tries, but eventually, he revolutionized lighting and peoples lives.',
    'Look at how far I\'ve come!',
    'Remember my awesome mindset from 2009',
    'With God\'s help, I have conquered 2010, 2011, and 2012.  I weathered the worst recession of 70 years!',
    'Celebrate!',
    'Don\'t forget to stop and smell the flowers.',
    'Family',
    'Friends',
    'Dream Big!!',
    'I am no longer a slave to fear, I am a child of God!',
    'Earn it!  You have to desire it, and be bigger than the problems.',
    'Focus not on the problems, but on the promises of Jesus.',
    'God can carry you through any storm.',
    'We are in a war, but we have the power and the authority.',
    'Remember those who have inspired me:  Michael, Eddie, Dean, Rick, Derrek, Bruce, George.',
    'Good riding friends:  Emma, George, Mark, Scott.',
    'My hope and my confidence is in God.',
    'I can handle this!  Look at all I\'ve made it through.',
    'Productivity',
    'Brilliance',
    'Elegant Solutions',
    'Competitiveness',
    'Creativity',
    'Absorb like a sponge.',
    'I am building the golden goose.',
    'I have so many awesome resources for my use!',
    'God is taking care of me',
    'My life is in God\'s hands, which is the best place for it!',
    'I am strong, resilient, capable, smart, creative, sharp!',
    'I can help many people',
    'I am a brilliant dev!',
    'I am getting better and better each day.',
    'It is the challenges, and taking them on, that makes me so much better.',
    'Knowledge is power.',
    'I have lots of power',
    'Things are going great!',
    'I am doing so well in my career, 4 1/2 years now!',
    'I am helping many people, I am a good man, and I am in God\'s will.',
    'Dream big!',
    'Get my hopes up!',
    'God will make all things work together for my good.',
    'God is working in my life, no matter what!',
    'Sometimes, things seem the most confusing and the most bleak right before the breakthrough',
    'I am so blessed in so many ways!!',
    'I have many good friends, many good people in my life.',
    'I am getting closer and closer to family',
    'Lean not on my own understanding, but love and trust the Lord',
    'Peace',
    'Joy',
    'Grace',
    'Wisdom',
    'Understanding',
    'Prosperity',
    'Giving',
    'Mercy',
    'Kindness',
    'I love a good challenge!  I am getting stronger and stronger, like kung fu training!',
    'It is the challenge that will make you better, faster, like nothing else!',
    'Never, never, never give up',
    'Think of some of my accomplishments.',
    'Nohting is impossible with God - so dream big and plan big!',
    'Keep going, keep working, keep learning, keep repeating - this is a huge key to success',
    'No matter how bad something may seem - I can handle it!',
    'Good things are on the horizon, keep reaching for that next level, that next horizon!',
    'There are many good things of right now - enjoy!  Enjoy all the exciting potential.',
    'Keep things positive, optimistic, hopeful, forward-looking.',
    'Craft and create my dreams based on what I can do PLUS what God can do!',
    'Creativity',
    'Mental toughness',
    'Stamina',
    'Determination',
    'Clarity',
    'Focus',
    'Speed',
    'Absorb like a sponge',
    'Excellent memory',
    'Software detective',
    'Santa Cruz',
    'Rock Shox',
    'Fox',
    'Giant',
    'SRAM GX',
    'Shimano XT',
    'Tallboy C',
    'Pike',
    'Ergon',
    'Maxxis Ignitor',
    'Dropper post',
    'Raceface',
    'DT Swiss',
    'Eclypse',
    'Easton',
    'Helipad',
    'Sunrise',
    'Bursera',
    'Trail 8 / 100',
    'Templeton',
    'Hawes',
    'DC',
    'Lower Corona',
    'Water Tank',
    'Telegraph pass',
    'National',
    'Mormon',
    'Javelina',
    'Cathedral Rock Trail',
    'Broken Arrow',
    'Baldwin',
    'Pemberton',
    'Gooseneck',
    'Escondido',
    'Sport Loop',
    'Prospector',
    'Bell Pass',
    ''
];

var counter = 1;
console.log('###### Positive Message generator, Blue Mountain Web Development. #######');

var aa = setTimeout(function run () {
    var nextTime = Math.floor(Math.random() * 60000);
    console.log('--- Keep working, keep cranking and being productive.  Work day counter: ' + counter);
    counter++;
    if (Math.random() < 0.75) {
        console.log(nextTime);
        setTimeout(run, nextTime);
    }
    else {
        var msgNum = Math.floor(Math.random() * lib.length);
        console.log('*** ' + lib[msgNum] + ' ***');
        setTimeout(run, nextTime);
    }
}, 1000);
