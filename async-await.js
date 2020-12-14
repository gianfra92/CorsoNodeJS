// let myPromise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Primo risultato'); 
//      }, 1000);
// })

// let myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve('Secondo risultato'); 
//     }, 3000);
// })

// console.log('Messaggio prima della funzione');

// const myAsync = async ()=>{
//     try {
//         const result = await Promise.all([myPromise1,myPromise2]);
//         console.log('risultato prima promise: ' +result);
//         const test = await myPromise2;
//         console.log('Risultato seconda promise: ' + test);
//         return 'Operazioni concluse';
//     } catch (error) {
//         console.log('Errore: ' + error);
//         throw new Error('Errore..');
//     }
// }
// myAsync();

// console.log('messaggio dopo la funzione')
// // console.log('Stampa di prova');

console.log(process)