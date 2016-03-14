/**
 * Created by Rumman on 3/8/2016.
 */
'use strict';
angular.module('calculatorApp').factory('CalculatorListService',function(){
  var Calculator={};
  Calculator.list=[{href:"carLoan",imgSrc:"images/rimac.jpg",alt:"carloan_cl",name:"The Rimac Concept_One is the world’s fastest electric car",type:"Car Loan"},
    {href:"homeLoan",imgSrc:"images/home.jpg",alt:"homeloan_cl",name:"If you've got a spare few million lying around,Incredible places ...",type:"Home Loan"},
    {href:"personalLoan",imgSrc:"images/personal.jpg",alt:"personalloan_cl",name:"Whatever you want is lying behind you just grab it...",type:"Personal Loan"},
    {href:"propertyLoan",imgSrc:"images/business.jpg",alt:"carloan_cl",name:"Designed a package of loans to best suit  business requirements.  ...",type:"Business Loan"}
  ];
  return Calculator;
});

