
var Device = require('../models/device.js');


jukeboxService = {}

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

module.exports = jukeboxService
