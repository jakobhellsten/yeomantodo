'use strict';

/**
 * @ngdoc function
 * @name yeomantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomantodoApp
 */
angular.module('yeomantodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item1',
      'Item2',
      'Item3',
      'WTF'
    ];
    
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
