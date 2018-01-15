"use strict";

var express = require('express');
// create an express app
var kiosk = express();
// create an express route for the home page
// http://localhost:8080/
kiosk.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});
// start the server on port 8080
kiosk.listen(8080);
// send a message
console.log('KIOSK web-alkalmazas elinditva');
