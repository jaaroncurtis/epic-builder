var epicBuilderApp = angular.module('epicBuilder', [
        'ngRoute',
        'epicBuilderControllers'
    ]);
    
    
epicBuilderApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/plot-line/:plotLineId', {
        templateUrl: 'partials/plot-line.html',
        controller: 'PlotLineController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);