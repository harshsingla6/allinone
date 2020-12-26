// const express = require("express");

// const app = express();
// Port = 8000;
// app.get('/', (req, res) => {
    // const wrtfile = ()=>{
    //     const promise = new Promise((resolve,reject)=>{

   const alrt = ()=> {
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
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
            }, 3000);
            resolve("dono")
        },1000)
     }).then(result => console.log(result))
   }
    alrt()

    // let promise = new Promise(function(resolve, reject) {
    //     setTimeout(() => resolve("done!"), 1000);
    //   });
      
    //   // resolve runs the first function in .then
    //   promise.then(
    //     result => alert(result), // shows "done!" after 1 second
    //     error => alert(error) // doesn't run
    //   );
        
    // })
    // app.listen(Port, () => {
    //     console.log("server is created")
    // })

    // function print() {
    //     const promise = new Promise((resolve, reject) => { 
    //         setTimeout(() => resolve('DONE'), 3000); 
    //     }).then(x => console.log('Result: '+x));
    // }
    //  print()
    