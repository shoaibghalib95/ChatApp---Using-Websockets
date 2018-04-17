var express = require('express');
var socket = require('socket.io');

//App setup

var app = express();

var server = app.listen(3000, function() {
    console.log('listening server on port 3000 :)');
});

//Static files

app.use(express.static('public'));

//Implementing Sockets

var io = socket(server);

io.on('connection', function(socket) {
    console.log('Socket Connection Created');
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data)
    });
});