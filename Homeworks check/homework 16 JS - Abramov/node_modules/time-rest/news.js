const fetch = require('node-fetch');
const smile = require('./smiles')

async function news(req) {
    const getMainNews = await fetch(
        req,
        {
            headers: {
                'Content-Type': 'application/text; charset=utf-8',
            },
            method: 'GET',
        });
    const result = await getMainNews.json();
    for (let i = 0; i < result.articles.length; i++) {
        console.log(`Новость № ${i + 1}: `, '\n', "Источник: ", result.articles[i].source.id, '\n', result.articles[i].title, '\n', result.articles[i].description, '\n', result.articles[i].url, '\n');
    }
}

function help() {
    console.log("Команда 'новости' (или команда 'news') - основные новости" + '\n'
        + "Команда бизнесс (или команда 'business news') - новости бизнесса" + '\n'
        + "Команда 'всякое' (или команда 'rest news') - желтая пресса" + '\n'
        + "Команда 'медицина' (или команда 'health news') - новости медицины" + '\n'
        + "Команда 'наука' (или команда 'science news') - новости науки" + '\n'
        + "Команда 'спорт' (или команда 'sports news') - новости медицины" + '\n'
        + "Команда 'техно' (или команда 'technology news') - новости медицины" + '\n'
        + 'Команда smile - smile :)');
}

if (process.argv[2] === 'news' || process.argv[2] === 'новости') {
    news('https://newsapi.org/v2/top-headlines?country=ru&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if (process.argv[2] === 'smile') {
    smile()
} else if (process.argv[2] === 'help' || process.argv[2] === 'гид') {
    help()
} else if ((process.argv[2] === 'business' && process.argv[3] === 'news') || process.argv[2] === 'бизнес') {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if ((process.argv[2] === 'rest' && process.argv[3] === 'news') || process.argv[2] === 'желтая пресса') {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if ((process.argv[2] === 'health' && process.argv[3] === 'news') || process.argv[2] === 'медицина') {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if ((process.argv[2] === 'science' && process.argv[3] === 'news') || process.argv[2] === 'наука') {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if ((process.argv[2] === 'sports' && process.argv[3] === 'news') || process.argv[2] === 'спорт') {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=e8d9ae5fb014438d9297a26d3477523b')
} else if ((process.argv[2] === 'technology' && process.argv[3] === 'news') || process.argv[2] === "техно") {
    news('https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=e8d9ae5fb014438d9297a26d3477523b')
}


