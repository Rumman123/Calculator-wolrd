/**
 * Created by Rumman on 3/8/2016.
 */
'use strict';
angular.module('calculatorApp').factory('CalculatorListService',function(){
  var Calculator={};
  Calculator.list=[{href:"carLoan",imgSrc:"images/carloan_cl.png",alt:"carloan_cl",name:"Car Loan"},
    {href:"homeLoan",imgSrc:"images/homeloan_cl.png",alt:"carloan_cl",name:"Home Loan"},
    {href:"personalLoan",imgSrc:"images/personalloan_cl.png",alt:"carloan_cl",name:"Personal Loan"},
    {href:"propertyLoan",imgSrc:"images/recurring_cl.png",alt:"carloan_cl",name:"Recurring Loan"}
  ];
  return Calculator;
});

