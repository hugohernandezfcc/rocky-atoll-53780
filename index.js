const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;




var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});

app.get('/',function(req, res){
	res.status(200).send("Hola mundos! :::::" + PORT);
});

var counter = 0;

io.on('connection', (socket) => {
  console.log('Client connected');
  counter++;
  io.emit('notice', "Client connected: " + counter);
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);


server.listen(PORT, function() {
	console.log('listing PORT port and server running');
});

