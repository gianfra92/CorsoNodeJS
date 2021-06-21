const prom1 = new Promise((resolve,reject)=>{
    console.log('calcolo prima promise...');
    setTimeout(()=> {
        resolve('Risultato prima promise dopo 3000ms...')
    },3000)
})

const prom2 = new Promise((resolve,reject)=>{
    console.log('calcolo seconda promise...');
    setTimeout(()=> {
        resolve('Risultato seconda promise dopo 1000ms...')
    },1000)
})

Promise.race([
    prom1,
    prom2
]).then((result)=>{
    console.log('Risultato :' , result);
})
.catch((err)=>{
    // Catch di errori gestibili
    console.log('Errore catturato: ',err);
})