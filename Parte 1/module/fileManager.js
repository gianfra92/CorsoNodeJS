const fs = require('fs');

const creaFile = (data)=>{
    const dataJSON = JSON.stringify(data);
    return new Promise ((resolve, reject)=>{
        fs.writeFile('persona.json',dataJSON,(err)=>{
            if (err)
                reject(err)
            resolve();
        })
    })
}

const modificaFile = (data)=>{
    const dataJSON = JSON.stringify(data);
    return new Promise ((resolve,reject)=>{
        fs.readFile('persona.json',(err,data)=>{
            if (err)
                reject('File non trovato');
            fs.writeFile('persona.json',dataJSON,(err)=>{
                if (err)
                    reject(err)
                resolve();
            })
        })
    })
}

const leggiFile = () => {
    return new Promise ((resolve,reject)=>{
        fs.readFile('persona.json',(err,data)=>{
            if (err)
                reject(err)
            const dataObj = JSON.parse(data.toString())
            resolve(dataObj);
        })
    })
}

module.exports = {
    creaFile,
    modificaFile,
    leggiFile
}