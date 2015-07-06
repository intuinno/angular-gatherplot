'use strict';

/**
 * @ngdoc directive
 * @name angularGatherplotApp.directive:gatherplot
 * @description
 * # gatherplot
 */
angular.module('angularGatherplotApp')
  .directive('gatherplot', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the gatherplot directive');
      }
    };
  });