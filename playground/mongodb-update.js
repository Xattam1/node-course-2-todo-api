const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c5dbf10712f21b6e21cdd52')
	// }, {
	// 	$set: {					// MongoDB update operators -> needed to work correctly.
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c5cf0d345a1dc29067bdf76')
	}, {
		$set: {
			name: 'Justin Grannis'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})

	//db.close();
});
