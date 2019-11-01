var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// Websocket server
var ws = require('ws')
// create new websocket server on port 3000, endpoint ws
wsServer = new ws.Server({port:3333, path:'/ws'})
wsServer.on('connection',function connection(ws){
    ws.on('message',function incoming(msg){
        //broadcast incoming message to all clients
        wsServer.clients.forEach(function each(client){
            client.send(msg)
        })
    })
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

var messagesRouter = require('./routes/messages')
app.use('/messages', messagesRouter);

module.exports = app;
