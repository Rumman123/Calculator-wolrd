/**
 * Created by Rumman on 3/8/2016.
 */

angular.module('calculatorApp').controller('CarCtrl',function(EMIService){
  var car=this;
  car.calcData={};
  car.payment=0;
  car.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  car.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  car.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};
  car.monthlyPayment=function(){
    if(car.amountConfig.value && car.rateConfig.value && car.timeConfig.value){
      car.payment=EMIService.calculate(car.amountConfig.value,car.rateConfig.value,car.timeConfig.value);
      return car.payment;
      console.log("runservice");
    }
    console.log("without condition runservice");
  }

});
