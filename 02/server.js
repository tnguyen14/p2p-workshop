'use strict';

var net = require('net');
var streamSet = require('stream-set');

var sockets = streamSet();

var server = net.createServer(function (socket) {
	sockets.add(socket);
	socket.on('data', function (data) {
		sockets.forEach(function (s) {
			if (s !== socket) {
				s.write(data);
			}
		});
	});
});

server.listen(4002, function () {
	console.log('server on port 4002');
});
