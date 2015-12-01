'use strict';

var net = require('net');

var client = net.connect({
	port: 4002
});

process.stdin.pipe(client);
client.pipe(process.stdout);
