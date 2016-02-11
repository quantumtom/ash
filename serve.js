var http = require('http');
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/src'));
app.listen(process.env.PORT || 5000, function() { console.log('listening')});
