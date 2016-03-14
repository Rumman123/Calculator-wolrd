/**
 * Created by Rumman on 3/8/2016.
 */

angular.module('calculatorApp').controller('HomeCtrl',function(EMIService,$scope){
  var home=this;
  var termInMonths=0;
  home.calcData={
    amount:{value:300000},
    rate:{value:10},
    time:{value:5}
  };
  home.payment=0;
  home.totalAmountPayment=0;
  home.interestAmount=0;
  home.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  home.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  home.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};

  home.monthlyPayment=function(){
    if(home.calcData.amount.value && home.calcData.rate.value && home.calcData.time.value){
      home.payment=EMIService.calculate(home.calcData.amount.value,home.calcData.rate.value,home.calcData.time.value);
      return home.payment;
    }
  }

  home.totalPayment=function(){
    if(home.payment){
      termInMonths=home.calcData.time.value*12;
      return home.totalAmountPayment=home.payment * termInMonths;
    }
  }

  home.interestPayment=function(){
    if(home.payment) {
      return home.interestAmount = home.totalAmountPayment - home.calcData.amount.value;
    }
  }



  home.pieData = [{
    name: "Total Interest",
    y: home.calcData.amount.value
  }, {
    name: "Principal Loan Amount",
    y: home.interestAmount
  }];

  $scope.$watch('home.interestAmount + home.calcData.amount.value', function(newValue, oldValue){
    home.pieData[0].y = home.calcData.amount.value;
    home.pieData[1].y = home.interestAmount;
  });

});
