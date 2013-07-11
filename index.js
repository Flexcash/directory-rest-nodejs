var express = require('express')
  , app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000)
console.log('Listening on port 3000...');


// var express = require('express'),
//     wines = require('./routes/mysql');
 
// var app = express();

// app.get('/users/:id/reports', wines.findByManager);
// app.get('/users/:id', wines.findById);
// app.get('/users', wines.findAll);

// app.listen(3000);
// console.log('Listening on port 3000...');