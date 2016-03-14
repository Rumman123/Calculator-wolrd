/**
 * Created by Rumman on 3/8/2016.
 */


angular.module('calculatorApp').controller('PersonalCtrl',function(EMIService,$scope){
  var personal=this;
  var termInMonths=0;
  personal.calcData={
    amount:{value:300000},
    rate:{value:10},
    time:{value:5}
  };
  personal.payment=0;
  personal.totalAmountPayment=0;
  personal.interestAmount=0;
  personal.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  personal.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  personal.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};

  personal.monthlyPayment=function(){
    if(personal.calcData.amount.value && personal.calcData.rate.value && personal.calcData.time.value){
      personal.payment=EMIService.calculate(personal.calcData.amount.value,personal.calcData.rate.value,personal.calcData.time.value);
      return personal.payment;
    }
  }

  personal.totalPayment=function(){
    if(personal.payment){
      termInMonths=personal.calcData.time.value*12;
      return personal.totalAmountPayment=personal.payment * termInMonths;
    }
  }

  personal.interestPayment=function(){
    if(personal.payment) {
      return personal.interestAmount = personal.totalAmountPayment - personal.calcData.amount.value;
    }
  }



  personal.pieData = [{
    name: "Total Interest",
    y: personal.calcData.amount.value
  }, {
    name: "Principal Loan Amount",
    y: personal.interestAmount
  }];

  $scope.$watch('personal.interestAmount + personal.calcData.amount.value', function(newValue, oldValue){
    personal.pieData[0].y = personal.calcData.amount.value;
    personal.pieData[1].y = personal.interestAmount;
  });

});
