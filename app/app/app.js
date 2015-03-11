var premiumApp = angular.module('PremiumApp',['ngRoute','PremiumControllers']);

premiumApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/splash', {
      templateUrl: 'partials/splash/splash.html',
      controller: 'SplashMain'
    }).
    when('/start', {
      templateUrl: 'partials/start/start.html',
      controller: 'BottomSheet'
    }).
    when('/carousel', {
      templateUrl: 'partials/carousel/carousel.html',
      controller: 'BottomSheet'
    }).
    when('/aerial', {
      templateUrl: 'partials/aerial/aerial.html',
      controller: 'BottomSheet'
    }).
    otherwise({
      redirectTo: '/splash'
    });

}]);