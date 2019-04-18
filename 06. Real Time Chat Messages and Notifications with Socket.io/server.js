const express  = require('express');
const helmet   = require('helmet');
const http     = require('http');
const socketio = require('socket.io');

var messages = [];

const app = express();
app.use(helmet());

/*  to make sure socket.io is listening  */
const httpServer = http.Server(app);
const io         = socketio(httpServer);

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.use('/assets', express.static('assets'));

io.on('connection', (socket) => {

	/* Send all previous messages */
    messages.forEach((message) => {
		/* Emit it to this socket 
 			to send a mesasge to the current socket only (useful for sending the previous chat history)
     		 (When sending the chat history you should send each previous message as a seperate event, in chronological order)
		*/
        socket.emit('message', message.name, message.msg);

    });

    socket.on('message', (name, msg) => {

        messages.push({name: name, msg: msg});
		/* Emit message to everybody (all connected client to server): io.emit('message',msg) */

        /* Send it to everybody but the client who sent it */
        socket.broadcast.emit('message', name, msg);

    });

});

httpServer.listen(8080);