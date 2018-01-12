'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = require("ws");
var model = require("./models");
var port = 3000;
var wsServer = WebSocket.Server;
var server = new wsServer({ port: port });
server.on('connection', function (ws) {
    ws.on('message', function (pos_msg) {
        try {
            var msg = pos_msg.toString();
            var posKijelzo = new model.PosKijelzo(msg);
            broadcast(JSON.stringify(posKijelzo));
        }
        catch (e) {
            console.error(e.message);
        }
    });
});
function broadcast(data) {
    server.clients.forEach(function (client) {
        client.send(data);
    });
}
;
console.log('Server is running on port', port);
