//const MongoClient = require('mongodb').MongoClient;

// Object destructuring lets you pull out properties from an object creating variables.
//var user = {name: 'justin', age: 25};
// Lets say that we want to grab and create a name variable.
// We can do that with object destructuring.
// To do that, provide the name that we want to pull out within {}, which is also going to
// be the variable name (The variable name is without the {}).
// Then we set the variable equal to the object that we want to destructure.
// This pulls the name property from the user object variable.
//var {name} = user;
//console.log(name);

//const MongoClient = require('mongodb').MongoClient;
// Above line converted to object destructuring version below.
// We can pull more attributes from the object that is being destructured by seperating
// attibutes by commas within the {}.
// NOTE: even if you aren't using MongoDB, you can use the ObjectID attribute to generate random
// ObjectIDs. -> Allows us to uniquely identify things.
const {MongoClient, ObjectID} = require('mongodb');

// The line below creates a unique ObjectID.
//var obj = new ObjectID();
//console.log(obj);

// Argument 1 is a URL where the database resides.
// Argument 2 is a callback function that is fired after the connection succeded or failed,
// and then we can handle things appropriately.
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// Takes 1 argument, a string for the collection that you want to insert into.
	// like the actual database itself, you don't need to create the collection first.
	// insertOne lets you insert a new document into your collection.
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 4));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Justin Grannis',
	// 	age: 25,
	// 	location: 'USA'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('', err);
	// 	}

	// 	console.log(result.ops[0]._id);
	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	console.log(JSON.stringify(result.ops, undefined, 4));
	// })

	db.close();
});