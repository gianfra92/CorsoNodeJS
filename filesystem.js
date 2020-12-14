const fs = require('fs');

// fs.writeFileSync('note.txt','Il mio primo messaggio');

// fs.appendFileSync('note.txt','\nIl mio secondo messaggio');

// const buffer = fs.readFileSync('note.txt');
// const string = buffer.toString();
// console.log(string);

// const obj = {nome:'Mario', cognome:'Rossi'};

// const JSONobj = JSON.stringify(obj);

// fs.writeFileSync('obj.json',JSONobj);
// const jsonBuffer = fs.readFileSync('obj.json');
// const jsonString = jsonBuffer.toString();
// const objFile = JSON.parse(jsonString);
// console.log(objFile)
const readFilePromise = new Promise((resolve,reject)=>{
    fs.readFile('newNote.txt',(err,data)=>{
        if (err)
            reject(err);
        resolve(data);
    })
})

readFilePromise.then((result)=>{
    const string = result.toString();
    console.log(string);
}).catch((err)=>{
    console.log('Errore:', err);
})
