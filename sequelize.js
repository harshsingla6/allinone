const express = require("express")
const sequelize = require("sequelize")

const app = express()
const port = 8000;

const connection = new sequelize('cartDB','root','root' , {
  dialect :'mysql'
})
const User = connection.define('User' , { 
 uuid : {
     type : sequelize.UUID,
     primaryKey : true,
     defaultValue : sequelize.UUIDV4
 },
     name : sequelize.STRING,
     bio : sequelize.TEXT
});

connection
.sync({
    logging: console.log ,
    force : true
}).then(()=>{
    console.log("connection to database succesfully established..!")
})
.catch(err =>{
    console.log("unable to connect to database", err)
})

app.listen(port , ()=>{
    console.log("server is running...!")
} )