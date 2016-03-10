/**
 * Created by Rumman on 3/8/2016.
 */

angular.module('calculatorApp').controller('CarCtrl',function(EMIService){
  var car=this;
  car.calcData={
    amount:{value:0},
    rate:{value:0},
    time:{value:0}
  };
  car.payment=0;
  car.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  car.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  car.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};
  car.monthlyPayment=function(){
    console.log("princ",car.calcData.amount.value);
    console.log("rate",car.calcData.rate.value);
    console.log("time",car.calcData.amount.value);
    if(car.calcData.amount.value && car.calcData.rate.value && car.calcData.time.value){

      car.payment=EMIService.calculate(car.calcData.amount.value,car.calcData.rate.value,car.calcData.time.value);
      return car.payment;

    }

  }
  car.pieData = [{
    name: "Amount",
    y: car.amountConfig.value
  }, {
    name: "Interest",
    y: car.rateConfig.value,
    sliced: true,
    selected: true
  }, {
    name: "Term",
    y: car.timeConfig.value
  }]
console.log("car.piedata",car.pieData);
});
