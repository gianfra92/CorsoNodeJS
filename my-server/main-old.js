const http = require('http');
const PORT = 3000;

// Creare un server per la gestione di Persona  ('nome', 'cognome')
// GET  /lista  restituisce la lista di persone create
// POST /       inserisca una nuova persona {nome, cognome}
// GET  /       ritorni l'ultima persona inserita

const server = http.createServer((request,response)=>{
    const {headers,method,url} = request;
    let body = [];

    if (method==='GET'){
        response.writeHead(200);
        response.end('Hai effettuato una chiamata GET!');
    } else if (method === 'POST'){
        if (headers['content-type']==='application/json'){
            request.on('data',(chunk)=>{
                body.push(chunk);
            }).on('end',()=>{
                body = Buffer.concat(body).toString();
                const bodyJson = JSON.parse(body);
                response.setHeader('Content-Type','application/json');
                response.writeHead(200);
                response.end(JSON.stringify(bodyJson));
            })
        }else{
            request.on('data',(chunk)=>{
                body.push(chunk);
            }).on('end',()=>{
                body = Buffer.concat(body).toString();
                response.writeHead(200);
                response.end(body);
            })
        }
    } else {
        response.writeHead(400);
        response.end('Chiamata non riconosciuta');
    }
})

server.listen(PORT,()=>{
    console.log(`Server in ascolto sulla porta ${PORT}`);
});


