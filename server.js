const express = require('express');
const fs = require('fs');
const useLRU = require('./LRU');
const { join } = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();

const Port = process.env.PORT || 4000;
const publicFolder = join(__dirname, 'build');

app.listen(Port, () => {
    console.log(
        '\x1b[32m\x1b[1m\nSERVER STARTED!\n     ProcessID:',
        process.pid,
        '\x1b[0m',
        '\x1b[1m',
        `\n     URL: http://localhost:${Port} \n`,
        '\x1b[0m'
    );
});

app.get('/LRU', (req, res) => {
    const states = JSON.parse(
        fs.readFileSync('./LRU-cache.json').toString()
    ).map((value) => {
        return value.state;
    });
    res.send(states);
});

app.get('/api/state/:Id/:Name', (req, res) => {
    res.header('*', 'Access-Control-Allow-Origin');
    console.log(req.params);
    const { Id, Name } = req.params;
    res.send(useLRU('state', Name));
});

app.use(
    '/',
    expressStaticGzip(publicFolder, {
        enableBrotli: true,
        orderPreference: ['br', 'gz']
    })
);

app.use('/*', (req, res) => {
    res.sendFile(join(publicFolder, 'index.html'));
});
