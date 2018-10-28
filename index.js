const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});

app.get('/',function(req, res){
	res.status(200).send("Hola mundos! :::::" + PORT);
});


io.on('connection', function(socket){

	console.log('Alguien se conectó con el socket!');
	socket.emit('messages', "Hola me llamo heroku y estas conectado conmigo!");
});


server.listen(PORT, function() {
	console.log('listing PORT port and server running');
});

