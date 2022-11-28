const express = require('express');
const cors = require('cors');
const nodemon = require('nodemon');
const CronJob = require('cron').CronJob;
const app = express();

// import chalk from 'chalk';

app.use(express.json());
app.use(cors({ origin: 'http://127.0.0.1:5500' }));


app.get('/', function (req, res) {
    // console.log(req.query)
    res.send('hello');
    console.log('запрос обработан');
})

let d = new Date().getTime;
var job = new CronJob(
    '* * * * *',
    function () {
        console.log('Привет, пользователь!');
        console.log(`текущее время:${d}`);
        //     console.log(chalk.blueBright('Привет, пользователь!'));
        //     console.log(chalk.bgGreen(`текущее время:${d}`));
    }
);
job.start();
app.listen(3000, console.log('Сервер запущен успешно'));