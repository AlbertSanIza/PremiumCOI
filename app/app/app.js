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
    when('/home', {
      templateUrl: 'partials/home/home.html',
      controller: 'HomeMain'
    }).
    when('/viewer', {
      templateUrl: 'partials/viewer/viewer.html',
      controller: 'ViewerMain'
    }).
    when('/firebase', {
      templateUrl: 'partials/firebase/firebase.html',
      controller: 'FirebaseMain'
    }).
    otherwise({
      redirectTo: '/splash'
    });

}]);

premiumApp.controller('NavCtrl', function($scope, $window){
  $scope.ReloadApp = function(){
    $window.location.reload();
  };
});