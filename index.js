var express = require('express');
var bodyParser = require('body-parser')

// Setup Express
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST method route
app.post('/team', function (req, res) {
  res.send('POST request on /team');
});

// GET method route
app.get('/', function (req, res) {
  res.send('GET request on /');
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
