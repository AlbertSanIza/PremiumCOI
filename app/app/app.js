var premiumApp = angular.module('PremiumApp',['ngRoute','PremiumControllers','ng-backstretch']);

premiumApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/splash', {
      templateUrl: 'partials/splash/splash.html',
      controller: 'SplashMain'
    }).
    when('/login', {
      templateUrl: 'partials/login/login.html',
      controller: 'LoginMain'
    }).
    otherwise({
      redirectTo: '/splash'
    });

}]);

premiumApp.controller('NavCtrl', function($scope, $window){
  $scope.ReloadApp = function(){
    $window.location.reload();
  };

  $scope.images = [
    'source/img/backgorund.jpg'
  ];

});