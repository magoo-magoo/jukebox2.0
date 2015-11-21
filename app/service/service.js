'use strict'

var Device = require('../models/device.js');
var express = require('express');

var jukeboxService = {}

jukeboxService.deviceList = [];


jukeboxService.udpListen = function() {
    var PORT = 33333;

    var dgram = require('dgram');
    var server = dgram.createSocket('udp4');
    
    server.on('listening', function () {
	var address = server.address();
	console.log('UDP Server listening on ' + address.address + ":" + address.port);
    });

    server.on('message', function (message, remote) {
	console.log(remote.address + ':' + remote.port +' - ' + message);

	messageJSON = JSON.parse(message);
	var emittingDevice = new Device(remote.address, messageJSON.id);
	emittingDevice.foo();
	jukeboxService.deviceList.push(emittingDevice);
	console.log(jukeboxService.deviceList);
	
    });


    server.bind(PORT);
}

jukeboxService.httpListen = function() {
    var app = express();

    app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes à l\'accueil');
    });

    app.listen(8080);
    console.log(app);
};


module.exports = jukeboxService
	       
