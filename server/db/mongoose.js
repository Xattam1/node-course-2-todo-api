var mongoose = require('mongoose');

// Configures mongoose.
// Below line teslls which promise library we want to use. Promises didn't always exist.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};