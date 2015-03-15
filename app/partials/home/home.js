var homeCtrl = angular.module('HomeCtrl',['ui.sortable', 'firebase']);

homeCtrl.controller('HomeMain', function($scope){
  $scope.items = [
    {name: 'Perro'},
    {name: 'Gato'}
  ];
  $scope.sortableOptions = {
    containment: '#sortable-container'
  };
});

homeCtrl.controller('HomeFire', function($scope, $firebaseArray){
  //var ref = new Firebase("https://vivid-inferno-387.firebaseio.com/");
  //var ref = new Firebase("https://mz3y9nv2eru.firebaseio-demo.com/");
  //$scope.messages = $firebaseArray(ref);
});

homeCtrl.directive('myDirective', function($compile) {
  return {
    restrict: 'E',
    template: '<div><p data-ng-bind="item.name"></p></div>',
    replace: true,
  };
});

