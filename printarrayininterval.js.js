// const express = require("express");

// const app = express();
// Port = 8000;
// app.get('/', (req, res) => {
    // res.send(" hello world ")
    
// // })

//example 1
// for (let i = 0, p = Promise.resolve(); i < 10; i++) {
//     p = p.then(_ => new Promise(resolve =>
//         setTimeout(function () {
//             console.log(i);
//             resolve();
//         }, Math.random() * 5000)
//     ));
// }

// example 2

// for (let i = 0; i < 10; i++) {
//     const promise = new Promise((resolve, reject) => {
//         const timeout = Math.random() * 4000;
//         setTimeout(() => {
//             console.log(i);
//         }, timeout);
//     });

//     // TODO: Chain this promise to the previous one (maybe without having it running?)
// }


// var arr = [3,6,5,8,9,67,98,65,45,23]
// function print() {
//     for (i = 0; i < arr.length; i++) {

//     const promise = new Promise((resolve , reject) =>{
//          setInterval((i)=>{
//          console.log(arr[i]);
//          resolve();
            
//         }, 2000)
        
//     }).then(function(){
//        console.log(arr[i])
//     })
//     .catch(function(){
//        console.log("error")
//         })
//     }
    
//     }
    

//     print()

//     })

// const arr = [1,2,3,44,5,98,45,8,65,90];
// let i=0;
// const interval = setInterval(() => {
//     if(i<=arr.length - 1){
//     console.log(arr[i]);
//     i++;
//     }
//     else{
//         clearInterval(interval);
//     }
// }, 2000);

// //   res.json(interval)
//   res.end()
// })
     
    const arr = [1,2,3,44];
let i=0;
const interval = setInterval(() => {
    if(i<=arr.length - 1){
    console.log(arr[i]);
    i++;
    }
    else{
        clearInterval(interval);
    }
}, 2000);

//     const arr = [1,2,3,44];
// let i=0;
// const timeOut = setTimeout(() => {
//     for(i<=arr.length - 1; i++;) {
//     console.log(arr[i]);
//     // i++;
//     }
//     // else{
//     //     clearTimeout(timeOut);
//     // }
// }, 2000);


  

// var arr = [3,6,5,8,9,67,98,65,45,23]
// var x=0;
// function print() {
//     for (var j = 0; j < arr.length; j++) {
//         setTimeout(
//         //  console.log(arr[i]);
//          myfunction
//         , 2000);
//         }
//     } 
//         function myfunction(){
//             console.log(arr[x]);
//             x++
//         }

// print();



// var arr = a.forEach(function f(element){
//      console.log(element)
// })
// console.log(arr)
// timeOut = setTimeout(arr
//     ,2000)
//    console.log(timeOut)

// app.listen(Port, () => {
//     console.log("server is created")
// })