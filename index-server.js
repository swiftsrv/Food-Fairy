var app = require('./server/server.js');

var port = process.env.PORT || 3000;

var SPOONTACULAR_API_KEY = SPOONTACULAR_API_KEY || process.env.SPOONTACULAR_API_KEY;

app.listen(port);

console.log('Server now listening on port ' + port);
