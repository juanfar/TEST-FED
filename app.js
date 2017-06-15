var app = angular.module('appDemo', ['ngRoute','inicioControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/listado.html',
        controller: 'InicioCtrl'
      }).

      when('/indicadores', {
        templateUrl: 'views/indicadores.html',
        controller: 'indicadoresCtrl'
      }).

      when('/incidentes/:id?', {
        templateUrl: 'views/incidentes.html',
        controller: 'incidentesCtrl'
      }).

      when('/accidentes/:id?', {
        templateUrl: 'views/accidentes.html',
        controller: 'accidentesCtrl'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);