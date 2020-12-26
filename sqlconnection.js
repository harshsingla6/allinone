const express = require("express")
const mysql = require("mysql")
var app = express()
var connection = mysql.createConnection({
 host: "localhost",
 user : "root",
 password : "root", 
 database : "sampleDB",
 port : "3306"
});

 connection.connect((error)=>{
    if(error){
        console.log("error")
        console.log(error)
    }
    else {
        console.log("connected")
    }
})

// connection.query("CREATE TABLE sampletable(name varchar(55), age int)", (error,rows,fields)=>{
//             if(error){
//                 console.log("Error in the query" , error)
//             }
//             else{
//                 console.log("Sucessful query sent...!")
//                 // console.log(rows)
//                 insertdata()
//             } 
//         })
        
        connection.query("Insert into sampletable(name, age) values('arif','22')", (error,rows,fields)=>{
            if(error){
                console.log("Error in the query" , error)
            }
            else{
                console.log("1 entry added...!")
                console.log(rows)
            } 
        })        

        // function insertdata(){
        //     var sql = "Insert into sampletable(name, age) values('arif','22')" ;
        //     connection.query(sql, (err,result)=>{
        //         if(err) throw err;
        //         console.log("inserted..!")
        //     })
        // }



// app.get("/", (req,res)=>{
//     connection.query("Select * from sampleDB", function(error,rows,fields){
//         if(error){
//             console.log("Error in the query")
//         }
//         else{
//             console.log("Sucessful query..!")
//         }
//     })
// })

app.listen(8000,()=>{
    console.log("server is running...!")
})