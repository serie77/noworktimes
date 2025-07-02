const fs = require('fs');

// Your articles with the info needed for social sharing
const articles = {
    'pump-token-delayed-alon-cohen-headquarters': {
        title: 'BREAKING: Pump.fun\'s $PUMP Token Launch Delayed Until July 4th Amid Alon Cohen\'s Headquarters Being Nuked',
        description: 'The highly anticipated $1B token sale faces unexpected delays as Pump.fun\'s headquarters experiences disruption from ongoing regional conflicts.',
        image: 'alon.jpg'
    },
    'ray-snipes-rakai-5am-drowning-prank': {
        title: 'BREAKING: Ray SNIPED RaKai in Back of Head After 5AM Drowning Wake-Up Call Goes Wrong',
        description: 'The AMP affiliate\'s revenge plot escalated beyond all expectations when RaKai\'s pool prank backfired spectacularly.',
        image: 'rakai.jpg'
    },
    'lexapro-trader-eye-stolen-insider-shill': {
        title: 'BREAKING: LexaproTrader\'s Eye Stolen By Disgruntled Trader After Thread Exposed As Insider Shill',
        description: 'The prolific X analyst, known for his extensive "alpha" threads, lost his eye in what investigators are calling "the most degenerate case of revenge trading" they\'ve ever seen.',
        image: 'lexaproo.jpg'
    },
    'ishowspeed-bailar-song-kai-cenat-gay-rumors': {
        title: 'IShowSpeed Releases New Song "Bailar", Fans Speculate About Subliminal Lyrics Related to Having Gay Sex With Kai Cenat',
        description: 'The YouTube sensation\'s latest track has fans theorizing about secret signals to his streaming rival-turned-possible love interest.',
        image: 'fighttowin.png'
    },
    'marlon-veneers-exposed-brother-cozmo-twerk-response': {
        title: 'BREAKING: Marlon OUTED for wearing veneers by his older brother, Marlon claps back with twerk video',
        description: 'The Swedish-born Twitch streamer\'s perfect smile exposed as artificial by brother Cozmo, responds with unprecedented Just Chatting stream.',
        image: 'marlon.jpg'
    },
    'orcas-salmon-hats-fashion-comeback-37-years': {
        title: 'BREAKING: Orcas Start Wearing Dead Salmon Hats Again After Ditching The Trend For 37 Years',
        description: 'In what marine biologists are calling "the most unexpected fashion comeback since cargo shorts," Pacific Northwest orcas have revived their 1980s trend.',
        image: 'orcas.jpg'
    },
    'gambling-gooning-life-quality-improvement-study': {
        title: 'Gambling and Gooning Linked to Global Life Quality Improvement?',
        description: 'A controversial study suggests that combining high-stakes gambling with extended gooning sessions may lead to unprecedented improvements in personal satisfaction.',
        image: 'gambling.jpeg'
    },
    'mang0-cloud9-kicked-ludwig-enablement-valkyrae': {
        title: 'BREAKING: Mang0 Kicked From Cloud9 For Harassment After Ludwig Cheered On His Drinking Behavior',
        description: 'The Melee legend\'s departure from C9 comes after Ludwig\'s enabling behavior during streams gets called out by Valkyrae.',
        image: 'ludwig.jpg'
    },
    'kai-cenat-shot-by-drake-conspiracy-theory': {
        title: 'Was Kai Cenat Actually Shot By Drake? A Deep Dive Into What Exactly Happened',
        description: 'Social media erupts in chaos as fans speculate about Drake\'s involvement in latest Kai Cenat swatting incident.',
        image: 'kai.jpg'
    }
};

// Create articles folder
if (!fs.existsSync('articles')) {
    fs.mkdirSync('articles');
}

// Generate an HTML file for each article
Object.keys(articles).forEach(articleId => {
    const article = articles[articleId];
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} - The No Work Times</title>
    
    <!-- Open Graph meta tags for social media -->
    <meta property="og:site_name" content="The No Work Times">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://serie77.github.io/noworktimes/articles/${articleId}.html">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.description}">
    <meta property="og:image" content="https://serie77.github.io/noworktimes/${article.image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card meta tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@NoWorkTimes">
    <meta name="twitter:title" content="${article.title}">
    <meta name="twitter:description" content="${article.description}">
    <meta name="twitter:image" content="https://serie77.github.io/noworktimes/${article.image}">
    
    <!-- Auto-redirect to main site -->
    <script>
        setTimeout(function() {
            window.location.href = '../#${articleId}';
        }, 100);
    </script>
</head>
<body>
    <h1>Loading article...</h1>
    <p>If you're not redirected automatically, <a href="../#${articleId}">click here</a>.</p>
</body>
</html>`;

    fs.writeFileSync(`articles/${articleId}.html`, html);
    console.log(`✅ Generated: articles/${articleId}.html`);
});

console.log('\n🎉 All article pages generated successfully!');
console.log('\nNow run these commands:');
console.log('git add articles/');
console.log('git commit -m "Add article pages for social sharing"');
console.log('git push origin main');