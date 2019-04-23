const express       = require('express');
const helmet        = require('helmet');
const http          = require('http');
const socketio      = require('socket.io');
const Session       = require('express-session');
const sharedsession = require("express-socket.io-session");
const MongoClient   = require('mongodb').MongoClient;

var db;

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

	/* Smallest number come first */
    db.collection('chatHistory').find({}).sort({date: 1}).toArray((err, messages) => {

        messages.forEach((message) => {

            socket.emit('message', message.name, message.msg);

        });

    });

    socket.on('name', (name) => {

        socket.handshake.session.name = name;

    });

    socket.on('message', (msg) => {

        db.collection('chatHistory').insertOne({name: socket.handshake.session.name, msg: msg, date: new Date()});
        socket.broadcast.emit('message', socket.handshake.session.name, msg);

    });

});

const client = new MongoClient('mongodb://localhost:27017');

client.connect((err) => {

    if (err) {

        return;

    }

    db = client.db('chatHistory');
	
	/* Start when connection is established */
    httpServer.listen(8080);

});

