'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
  .controller('MainCtrl',function (CalculatorListService) {
     var vm=this;
    vm.CalculatorThings=CalculatorListService.list;
  });

