var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// bodyParser.json() returns a function that will be the middleware for express in our app.
// With this in place, we can now send JSON to our express application.
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	//console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});