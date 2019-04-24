const express       = require('express');
const helmet        = require('helmet');
const http          = require('http');
const socketio      = require('socket.io');
const Session       = require('express-session');
const sharedsession = require("express-socket.io-session");

var messages = [];

const app = express();
app.use(helmet());

const session = Session({secret: "mySecret"});
app.use(session);

const httpServer = http.Server(app);
const io         = socketio(httpServer);

io.use(sharedsession(session, {autoSave:true}));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.use('/assets', express.static('assets'));

io.on('connection', (socket) => {

    messages.forEach((message) => {

        socket.emit('message', message.name, message.msg);

    });

    socket.on('name', (name) => {

        socket.handshake.session.name = name;

    });

    socket.on('message', (msg) => {

        messages.push({name: socket.handshake.session.name, msg: msg});
        socket.broadcast.emit('message', socket.handshake.session.name, msg);

    });

});

httpServer.listen(8080);