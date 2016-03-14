/**
 * Created by Rumman on 3/8/2016.
 */


angular.module('calculatorApp').controller('propertyCtrl',function(EMIService,$scope){
  var property=this;
  var termInMonths=0;
  property.calcData={
    amount:{value:300000},
    rate:{value:10},
    time:{value:5}
  };
  property.payment=0;
  property.totalAmountPayment=0;
  property.interestAmount=0;
  property.amountConfig= {min:0, max: 10000000, range: "min", step: 250000, value: 0, pipStep: 50};
  property.rateConfig= {min:0, max: 100, range: "min", step: 1, value: 0, pipStep: 20};
  property.timeConfig= {min:0, max: 50, range: "min", step: 1, value: 0, pipStep: 10};

  property.monthlyPayment=function(){
    if(property.calcData.amount.value && property.calcData.rate.value && property.calcData.time.value){
      property.payment=EMIService.calculate(property.calcData.amount.value,property.calcData.rate.value,property.calcData.time.value);
      return property.payment;
    }
  }

  property.totalPayment=function(){
    if(property.payment){
      termInMonths=property.calcData.time.value*12;
      return property.totalAmountPayment=property.payment * termInMonths;
    }
  }

  property.interestPayment=function(){
    if(property.payment) {
      return property.interestAmount = property.totalAmountPayment - property.calcData.amount.value;
    }
  }



  property.pieData = [{
    name: "Total Interest",
    y: property.calcData.amount.value
  }, {
    name: "Principal Loan Amount",
    y: property.interestAmount
  }];

  $scope.$watch('property.interestAmount + property.calcData.amount.value', function(newValue, oldValue){
    property.pieData[0].y = property.calcData.amount.value;
    property.pieData[1].y = property.interestAmount;
  });

});
