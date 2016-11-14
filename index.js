var express = require('express');
var bodyParser = require('body-parser')

// Setup Express
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create random teams from a list of players
app.post('/team', function (req, res) {
  // Get parameters
  var team = req.body.team;
  var players = req.body.players;
  console.log('Number of teams to create: ' + team);
  console.log('Players: ' + players);

  // Initialize variables
  var createdTeams = [];
  var i = 0;

  // If parameters are correct
  if(team && players) {
    // For each player
    while(players.length > 0) {
      // If the team is not created yet
      if(!createdTeams[i]) createdTeams[i] = [];

      // Pick a random player and add him in a team
      var id = Math.floor(Math.random() * players.length);
      createdTeams[i].push(players[id]);
      console.log(players[id] + ' is in team n°' + (i + 1));

      // Remove player from the array
      players.splice(id, 1);

      // Select next team number
      i++;
      if(i == team) i = 0;
    }
  }

  res.json(createdTeams);
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
