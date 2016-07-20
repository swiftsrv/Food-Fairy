var mongoose = require('mongoose');

//connect to monglab for production or localhost for dev
mongoURI = 'mongodb://foodfairy:12345@ds023425.mlab.com:23425/heroku_xnp0xnxj' ||
           'mongodb://localhost/HRR17-Jigglypuff';

mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
 console.log('Mongodb connection open!');
});

module.exports = db;