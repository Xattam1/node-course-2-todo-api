require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

// GET /todos/1234324
// GET parameter -> colon followed by a name
app.get('/todos/:id', (req, res) => {
	//res.send(req.params);
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res) => {
	// Get the id
	var id = req.params.id;

	// Validate the ID --> not valid? return 404
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	// remove todo by id
	Todo.findByIdAndRemove(id).then((todo) => {
		// Success
		// If no doc, send 404
		if (!todo) {
			return res.status(404).send();
		}
		// If doc, send doc back with 200
		res.send({todo});
	}).catch((e) => {
		// Error
		// Send 400 with empty body
		res.status(400).send();
	});
});

app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	})
});

app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};