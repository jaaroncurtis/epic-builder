var epicBuilderControllers = angular.module('epicBuilderControllers', []);

epicBuilderControllers.controller('PlotLineController', function ($scope, $routeParams) {
    $scope.model = {
        plotLineId: $routeParams.plotLineId
    };
});

epicBuilderControllers.controller('HomeController', function ($scope) {

});