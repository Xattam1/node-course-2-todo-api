var mongoose = require('mongoose');

// Configures mongoose.
// Below line teslls which promise library we want to use. Promises didn't always exist.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};