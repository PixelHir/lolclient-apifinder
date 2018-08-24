'use strict';
var wmic = require('ms-wmic');
var token;
var port;
wmic.process.get({
    where: { name: 'LeagueClientUx.exe' },
    get: ['commandLine']
}, function (err, processes, stdOut) {
    if (err) {
        console.log('Error occured: LoL Client is not running?')
        console.error(err);
    } else {
        token = stdOut.split('--remoting-auth-token=').pop().split('"').shift();
        port = stdOut.split('--app-port=').pop().split('"').shift();
        console.log("LoL Client's API is listening on port " + port + " with token " + token);
    }
});