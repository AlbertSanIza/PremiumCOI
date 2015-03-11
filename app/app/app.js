var PremiumToolkit = angular.module('PremiumApp',['ngRoute','ui.bootstrap']);

PremiumToolkit.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'partials/start.html',
        controller: 'CarouselDemoCtrl'
      }).
      otherwise({
        redirectTo: '/start'
      });
  }]);

PremiumToolkit.controller('CarouselDemoCtrl', function($scope){
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});