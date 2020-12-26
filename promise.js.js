const fs = require("fs")

const wrtfile = ()=>{
    const promise = new Promise((resolve,reject)=>{
     fs.writeFile("text1.text","this is an example of promises.", (err,data)=>{
          
            if(err){
            reject(err)
            console.log("err");
            }
           resolve(data)
         console.log("data");
        
         }) 
    }).then((data)=>{
        console.log(data)
         })
      .catch((err)=>{
         console.log(err)
     })
}

 wrtfile()
//  .then(data => console.log(data))
//  .catch(err => console.error(err))