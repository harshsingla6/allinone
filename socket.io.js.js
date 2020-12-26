// var express = require('express')();
// // var http = require('http').Server(app);
// var io = require('socket.io');
// const app = express();

// app.get('/', function(req, res) {
//     res.sendfile('index.html');
//  });
 
//  //Whenever someone connects this gets executed
//  io.on('connection', function(socket) {
//     console.log('A user connected');
 
//     //Whenever someone disconnects this piece of code executed
//     socket.on('disconnect', function () {
//        console.log('A user disconnected');
//     });
//  });
 
//  http.listen(3000, function() {
//     console.log('listening on *:3000');
//  });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var socket = io();
app.get('/', function(req, res) {
   // socket.on('broadcast',function(data) {
   //    // document.body.innerHTML = '';
   // //   document.write(data.description);
   // res.send(data.description)
   // });
   
   // res.send('hello world');
});

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   socket.on('disconnect', function () {
      clients--;
      io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   });
});

// socket.on('broadcast',function(data) {
//    // document.body.innerHTML = '';
//    document.write(data.description);
// });

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});