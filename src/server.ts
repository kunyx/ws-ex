/*
/// <reference path='../declarations/node.d.ts' />
/// <reference path='../declarations/ws.d.ts' />
*/
'use strict';

import WebSocket = require('ws');
import model = require('./models');

//var port: number = process.env.PORT || 3000;
var port: number = 3000;
var wsServer = WebSocket.Server;
var server = new wsServer({ port: port });

server.on('connection', ws => {
	ws.on('message', pos_msg => {
		try {
            var msg: string = pos_msg.toString();
			var posKijelzo: model.PosKijelzo = new model.PosKijelzo(msg);
			broadcast(JSON.stringify(posKijelzo));
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});	
};

console.log('Server is running on port', port);

/*
import * as http from 'http';
import * as WebSocket from 'ws';
import * as express from 'express';

const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {  
    //connection is up, let's add a simple simple event
    //---
    //ws.on('message', (message: string) => {
    //    //log the received message and send it back to the client
    //    console.log('received: %s', message);
    //    ws.send(`Hello, you sent -> ${message}`);
    //});
    //---
    ws.on('message', (message: string) => {
        //log the received message and send it back to the client
        console.log('received: %s', message);
        const broadcastRegex = /^broadcast\:/;
        if (broadcastRegex.test(message)) {
            message = message.replace(broadcastRegex, '');
            //send back the message to the other clients
            wss.clients
            .forEach(client => {
                if (client != ws) {
                    client.send(`Hello, broadcast message -> ${message}`);
                }    
            });       
        } else {
            ws.send(`Hello, you sent -> ${message}`);
        }
    });
    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
*/