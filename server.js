//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//

var http        = require('http');
var path        = require('path');
var async       = require('async');
var express     = require('express');
var bodyParser  = require('body-parser');
var controllers = require('./controllers/controllers.js');


var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, 'client')));

var router = express.Router();
controllers.initialize(router);
app.use('/api', router);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
