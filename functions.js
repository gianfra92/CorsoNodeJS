// Function vs Arrow
const myFunction = function (a, b) {
    return a + b;
}
let myArrow = (a, b) => a + b;

// let arr = [1,2,3];
// arr.forEach(function(value,index,array){
//     console.log(value + 3);
// })
// const stampaElemento = (el, index) => console.log(el+3);


// 'This' example 
const myObj = {
    a : 'bar',
    stampa: ()=>{    //Errato
        console.log('a vale: ',this.a)
    }
//     stampa(){        //Giusto
//         console.log('a vale: ',this.a)
//     }
};
myObj.stampa();