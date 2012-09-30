
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


var io = require('socket.io').listen(server);

// app.js
app.get('/', function(req,res){
	res.render('index', { title: 'Mice.js'});
});

//socket
var sockets = [];

io.sockets.on('connection', function (socket) {
	
	//bid
	socket.on('pos',function(data){
		console.log(data);
		io.sockets.emit('move',{x:data.x,y:data.y});
	});
	
	console.log("Someone connected");
	
  sockets.push(socket);

  io.sockets.emit('nusers',{val:sockets.length});
  console.log('total user: '+sockets.length);

  socket.on('disconnect', function () {
	
		var index = sockets.indexOf(socket);
		sockets.splice(index,1);
		io.sockets.emit('nusers',{val:sockets.length});
	
    io.sockets.emit('user disconnected');
		console.log('total user: '+sockets.length);
  });

});