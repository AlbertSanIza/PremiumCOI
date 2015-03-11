var premiumApp = angular.module('PremiumApp',['ngRoute','ui.bootstrap','PremiumControllers','ngMaterial']);

premiumApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/start', {
      templateUrl: 'partials/start/start.html',
      controller: 'CarouselDemoCtrl'
    }).
    when('/carousel', {
      templateUrl: 'partials/carousel/carousel.html',
      controller: 'CarouselDemoCtrl'
    }).
    otherwise({
      redirectTo: '/start'
    });
}]);