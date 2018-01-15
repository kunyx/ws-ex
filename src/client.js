var $ = require('jquery');
var http = require('http');
var WebSocket = require("ws");
//var path = require('path');
//var filePath = path.join(__dirname, './client.js');
alert('KIOSK ws-ugyfel elinditva');
console.log('KIOSK ws-ugyfel elinditva');
$(function () {
  var content = $('#content');
  var mac = $('#mac')
  var connection = new WebSocket('ws://localhost:3000');
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  if (!window.WebSocket) {
    content.html($('<p>',
      { text:'Sorry, but your browser doesn\'t support WebSocket.'}
    ));
  }
  connection.onopen = function () {
    mac.text('Mac:example: 00:00:00:00');
  };
  connection.onerror = function (error) {
    // just in there were some problems with connection...
    content.html($('<p>', {
      text: 'Sorry, but there\'s some problem with your '
         + 'connection or the server is down.'
    }));
  };
  // most important part - incoming messages
  connection.onmessage = function (message) {
    try {
      var json = JSON.parse(message.data);
      console.log(message.data);
      console.log(json);
      console.log('mac_cim', json.data.mac_cim, 'kijelez', json.data.kijelez );
      content.text('kijelez', json.data.kijelez);
      mac.text('mac_cim', json.data.mac_cim);
    } catch (e) {
      console.log('Invalid JSON: ', message.data);
      return;
    }
  } 
});