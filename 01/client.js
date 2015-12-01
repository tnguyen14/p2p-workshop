'use strict';

var net = require('net');

var client = net.connect({
	port: 4002
});

client.on('data', function (data) {
	process.stdout.write(data);
});

process.stdin.pipe(client);
