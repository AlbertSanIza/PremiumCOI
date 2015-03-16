var homeCtrl = angular.module('HomeCtrl',['ui.sortable', 'firebase']);

homeCtrl.controller('HomeMain', function($scope, $firebaseObject){

  var ref = new Firebase("https://vivid-inferno-387.firebaseio.com/");
  var obj = $firebaseObject(ref);

  obj.$loaded().then(function() {
    $scope.kanbanBoard = obj;
    obj.$bindTo($scope, "kanbanBoard");
  });

  $scope.kanbanBoard = {
    "columns": [
      {"name": "Task", "cards": []},
      {"name": "User", "cards": []}
    ]
  };

  $scope.sortableOptions = {
    containment: '#board'
  };

});