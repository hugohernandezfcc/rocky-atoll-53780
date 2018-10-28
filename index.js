const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});

app.get('/',function(req, res){
	res.status(200).send("Hola mundos! :::::" + PORT);
});


io.on('connection', function(socket){

	console.log('Alguien se conectó con el socket!');
});


server.listen(PORT, function() {
	console.log('listing 8080 port and server running');
});

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
