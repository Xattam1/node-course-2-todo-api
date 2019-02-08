var mongoose = require('mongoose');

// Configures mongoose.
// Below line teslls which promise library we want to use. Promises didn't always exist.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Now we are going to create a model.
// Creates a model, specifying the attributes we want Todos to have.
// NOTE: Can specify if the attribute is required.
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// // Created a new todo.
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// Save the new todo to the database.
// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// var challengeTodo = new Todo({
// 	text: 'Complete the course',
// 	completed: true,
// 	completedAt: new Date()
// });

// var challengeTodo = new Todo({
// 	text: '  Edit this video  '
// 	//text: true	// Will case the boolean true to the string 'true'.
// });


// challengeTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 4));
// }, (e) => {
// 	console.log('Unable to save', e);
// });


var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

var user = new User({
	email: 'justin@example.com  '
});

user.save().then((doc) => {
	console.log('User saved', doc);
}, (e) => {
	console.log('Unable to save user', e);
});