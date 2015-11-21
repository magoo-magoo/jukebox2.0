'use strict';

var path = require('path');
global.appRoot = path.resolve(__dirname);

var jukeboxService = require('./app/service/service.js');

jukeboxService.udpListen();
jukeboxService.httpListen();

console.log('listen broadcast messages...');



var monitor = require('./app/monitor/index.js');

monitor.start();
