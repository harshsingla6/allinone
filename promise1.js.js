// const fs = require("fs")

// console.log("this ia async/await process")

// async function a(){
//     console.log("inside function")
//     const filess = await fs.readFile("text1.text" , "utf-8" , (err,data)=>{
//         console.log(data)
//     })
//     console.log("before response")
//     const mssg = await filess;
//     console.log("mssg print")
//     return mssg;
// }



// console.log("before calling function")
// let ind = a();
// console.log("after calling function")
// console.log(ind);
// a().then(data => console.log(data))
// console.log("last line")

// async function display(){
//     let mypromise = new Promise(function(myresolve,myreject){
//         setTimeout(()=>{
//             myresolve("this is aysnc/await example")
//         },3000)

//         console.log("asyn/await")
//     })

//      console.log("before await")
//     const user = await mypromise
//     console.log(user)
//     console.log("ending")
// }

// display()

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const display = async () => {
  console.log(await a())
}

console.log('Before')
display()
console.log('After')

