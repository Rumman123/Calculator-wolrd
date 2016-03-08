/**
 * Created by Rumman on 3/8/2016.
 */
'use strict';
angular.module('calculatorApp').factory('CalculatorListService',function(){
  var Calculator={};
  Calculator.list=[{href:"CalcDetail",imgSrc:"images/carloan_cl.png",alt:"carloan_cl",name:"Car Loan"},
    {href:"CalcDetail",imgSrc:"images/cigarate_cl.png",alt:"carloan_cl",name:"Ciggrate Loan"},
    {href:"CalcDetail",imgSrc:"images/eatingout_cl.png",alt:"carloan_cl",name:"Eating Loan"},
    {href:"CalcDetail",imgSrc:"images/homeloan_cl.png",alt:"carloan_cl",name:"Home Loan"},
    {href:"CalcDetail",imgSrc:"images/lifeinsurance_cl.png",alt:"carloan_cl",name:"Insurance Loan"},
    {href:"CalcDetail",imgSrc:"images/personalloan_cl.png",alt:"carloan_cl",name:"Personal Loan"},
    {href:"CalcDetail",imgSrc:"images/recurring_cl.png",alt:"carloan_cl",name:"Recurring Loan"},
    {href:"CalcDetail",imgSrc:"images/taxassits_cl.png",alt:"carloan_cl",name:"Tax Loan"}
  ];
  return Calculator;
});

