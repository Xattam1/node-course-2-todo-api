const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// find() returns a cursor to the database.
	// Empty argument to find() will return all results (no filter through query)
	// Pass an object argument {} to find() to filter results (filter thorugh query).
	// The {} is known as the query.
	// Put attributes within the {}; can be one or more attributes.
	// You do not need to pass every attribute in the {} to filter.
	// The toArray() function following the .find() function returns every document in the
	// collection as an array.
	// toArray() returns a promise; that means we can tack on a then() call.
	// db.collection('Todos').find({
	// 	//completed: false,
	// 	_id: new ObjectID('5c5cef820dac8c28d35fb41b')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 4));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Justin Grannis'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//db.close();
});