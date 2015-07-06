'use strict';
/**
 * @ngdoc overview
 * @name angularGatherplotDemoApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('angularGatherplotDemoApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
