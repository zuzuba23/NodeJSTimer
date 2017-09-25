var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/audio', express.static(__dirname + '/public/audio'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/views/timer.html');
});

var server_port = 3000;//process.env.PORT || 8080;
var server = app.listen(server_port, function(){
	console.log("Listening on " 
           + ", server_port " + server_port);
});

