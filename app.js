var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();


app.use(function(req, res, next) {
	res.send('<h1> Hello</h1><p>This is the response!</p>');
	// res.send('You asked for: ' + req.method + ' ' + req.path);
	// console.log('Heard a request!');
	// res.end();
});


var port = 1337;
app.listen(port, function() {
	console.log("Listening to port", port);
});