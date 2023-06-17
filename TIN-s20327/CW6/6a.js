const express = require('express');
const app = express();

app.get('/url1', (req, res) => {
    res.send('Odpowiedź dla url1');
});

app.get('/url2', (req, res) => {
    res.send('Odpowiedź dla url2');
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});