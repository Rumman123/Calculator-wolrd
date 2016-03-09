/**
 * Created by Rumman on 3/8/2016.
 */

angular.module('calculatorApp').controller('CarCtrl',function(EMIService,$timeout){
  var vm=this;
  vm.calcData={};
  vm.payment=0;
var firstTimeLoad=true;
  vm.monthlyPayment=function(){
    if(vm.calcData.principal && vm.calcData.rate && vm.calcData.time){
      vm.payment=EMIService.calculate(vm.calcData.principal,vm.calcData.rate,vm.calcData.time);
      return vm.payment;
    }
  }

  if(firstTimeLoad){
    $timeout(function(){
      firstTimeLoad=false;
      loadJQuery();
    },50);
  }

  function loadJQuery(){
    $(".slider").slider().slider("pips").slider("float");
  }

});
