'use strict';

angular.module('calculatorApp')
  .service('EMIService',function () {
    var payment=0;
    this.calculate=function(princ,intr,term){
      intr=intr/(12*100);
      term=term*12;
     payment= (princ * intr * Math.pow((1+intr),term))/(Math.pow((1+intr),term)-1);
      return payment=parseFloat(payment).toFixed(0);
    }
  });

