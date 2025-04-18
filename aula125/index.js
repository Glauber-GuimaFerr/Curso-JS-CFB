const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
        const dados = {
            temperatura: Math.round(Math.random() * 10),
            nivel: Math.round(Math.random() * 10),
            pressao: Math.round(Math.random() * 10)
        };
        res.end(JSON.stringify(dados));
    } 
    
    else if (req.method === 'POST') {
        let corpo = '';
        req.on('data', chunk => corpo += chunk);
        req.on('end', () => {
            res.end(JSON.stringify(JSON.parse(corpo || '{}')));
        });
    }
}).listen(8080)
