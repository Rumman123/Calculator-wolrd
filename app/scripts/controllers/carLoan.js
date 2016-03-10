/**
 * Created by Rumman on 3/8/2016.
 */

angular.module('calculatorApp').controller('CarCtrl',function(EMIService,$scope){
  var car=this;
  var termInMonths=0;
  car.calcData={
    amount:{value:300000},
    rate:{value:10},
    time:{value:5}
  };
  car.payment=0;
  car.totalAmountPayment=0;
  car.interestAmount=0;
  car.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  car.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  car.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};

  car.monthlyPayment=function(){
    if(car.calcData.amount.value && car.calcData.rate.value && car.calcData.time.value){
      car.payment=EMIService.calculate(car.calcData.amount.value,car.calcData.rate.value,car.calcData.time.value);
      return car.payment;
    }
  }

  car.totalPayment=function(){
   if(car.payment){
     termInMonths=car.calcData.time.value*12;
     return car.totalAmountPayment=car.payment * termInMonths;
   }
  }

  car.interestPayment=function(){
    if(car.payment) {
     return car.interestAmount = car.totalAmountPayment - car.calcData.amount.value;
    }
  }



  car.pieData = [{
    name: "Total Interest",
    y: car.calcData.amount.value
  }, {
    name: "Principal Loan Amount",
    y: car.interestAmount
  }];

  $scope.$watch('car.interestAmount + car.calcData.amount.value', function(newValue, oldValue){
    car.pieData[0].y = car.calcData.amount.value;
    car.pieData[1].y = car.interestAmount;
  });

});
