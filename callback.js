function server(a,b, callback){
    // Elaborazione risultato
    setTimeout(() => {
        callback(a+b);
    },3000);
    return `L'operazione è stata lanciata...`;
}

server(3,5,(result)=>{
    console.log(`L'operazione è risultata: ` + result);
    setTimeout(() => {
        console.log('Seconda elaborazione...');
        setTimeout(() => {
            
        }, 3000);
    }, 3000);
});