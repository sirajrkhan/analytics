'use strict';

/**
 * @ngdoc function
 * @name analyticsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the analyticsApp
 */
angular.module('analyticsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
