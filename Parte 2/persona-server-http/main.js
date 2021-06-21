// Creare un server per la gestione di Persona  ('nome', 'cognome')
// GET  /lista  restituisce la lista di persone create
// POST /       inserisca una nuova persona {nome, cognome}
// GET  /       ritorni l'ultima persona inserita
const http = require('http');
const { getLastPersona, getPersonaList, newPersona } = require('./persona-manager.js');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    if (url === '/lista') {
        if (method === 'GET') {
            const personaList = getPersonaList();
            const jsonList = JSON.stringify(personaList);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(jsonList);
        } else {
            res.writeHead(404);
            res.end('Path not found');
        }
    } else if (url === '/') {
        if (method === 'GET') {
            const lastPersona = getLastPersona();
            const jsonPersona = JSON.stringify(lastPersona);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(jsonPersona);
        } else if (method === 'POST') {
            if (headers['content-type'] != 'application/json') {
                res.writeHead(400);
                return res.end('Data type error');
            }
            let body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                const { nome, cognome } = JSON.parse(body);
                newPersona(nome, cognome);
                res.writeHead(200);
                res.end('Insert successful');
            })
        } else {
            res.writeHead(404);
            res.end('Path not found');
        }
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})