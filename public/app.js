angular.module('teamizer', []).controller('TeamizerController', function($scope, $http) {
  $scope.player = '';
  $scope.error = null;
  $scope.players = [];
  $scope.teamCount = '2';
  $scope.createdTeams = [];

  $scope.addPlayer = function() {
    if(!$scope.playerPresent()) {
      $scope.players.push($scope.player);
      $scope.player = '';
    }
  };

  $scope.removePlayer = function(index) {
    if($scope.players[index]) $scope.players.splice(index, 1);
  };

  $scope.playerPresent = function() {
    if(!$scope.player) return true;
    else if($scope.players.indexOf($scope.player) == -1) return false;
    else return true;
  };

  $scope.getTeams = function() {
    $http({
        url: '/team',
        method: "POST",
        data: {'team': $scope.teamCount, 'players': $scope.players}
    })
    .then(function(response) {
      $scope.createdTeams = response.data;
    },
    function(response) { // optional
      $scope.error = 'La requête a échouée';
    });
  };
});
