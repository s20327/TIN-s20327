const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.write('Witaj na stronie głównej!');
        res.end();
    } else if (url === '/produkty') {
        res.write('Oto lista naszych produktów: ...');
        res.end();
    } else if (url === '/kontakt') {
        res.write('Skontaktuj się z nami: ...');
        res.end();
    } else {
        res.write('Nie znaleziono strony o podanym adresie.');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
