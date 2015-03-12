var premiumApp = angular.module('PremiumApp',['ngRoute','PremiumControllers']);

premiumApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/splash', {
      templateUrl: 'partials/splash/splash.html',
      controller: 'SplashMain'
    }).
    otherwise({
      redirectTo: '/splash'
    });

}]);