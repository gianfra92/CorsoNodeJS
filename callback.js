function server(a,b, callback){
    // Elaborazione risultato
    setTimeout(() => {
        callback(a+b);
    },3000);
}

server(3,5,(result)=>{
    console.log(`L'operazione è risultata: ` + result);
});