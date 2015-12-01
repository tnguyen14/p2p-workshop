'use strict';

var net = require('net');

var server = net.createServer(function (c) {
	c.on('data', function (data) {
		console.log('got data ' + data);
		c.write(data);
	});
});

server.listen(4002, function () {
	console.log('server on port 4002');
});
