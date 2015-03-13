var homeCtrl = angular.module('HomeCtrl',['ui.sortable']);

homeCtrl.controller('HomeMain', function($scope){
  $scope.images = [
    'source/img/background/splash-01.jpg'
  ];

  $scope.items = [
    {name: 'item 1'}
  ];

  $scope.sortableOptions = {
    containment: '#sortable-container'
  };

});

homeCtrl.directive('myDirective', function($compile) {
  return {
    restrict: 'E',
    //scope: {
    //  item: '='
    //},
    template: '<div><p data-ng-bind="item.name"></p></div>',
    replace: true,
  };
});