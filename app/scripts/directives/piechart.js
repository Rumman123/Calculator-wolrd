/**
 * Created by Rumman on 3/9/2016.
 */
'use strict';
angular
  .module('calculatorApp').directive("piechart", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        data: '=data'
      },
      link: function (scope, element,attrs) {
        var chart;
        var dataPro =  {
          chart: {
            renderTo: element[0],
            type: 'pie'
          },
          title: {
            text: scope.title
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
            }
          },
          series: [{
            data: scope.data
          }]
        };
        //scope.$watch('scope.data[0].y', function(newValue, oldValue){
        //  console.log(scope.data[0].y);
        //  //car.pieData[0].y = car.calcData.amount.value;
        //});

        scope.$watch('data[0].y+data[1].y', function(newValue, oldValue){
          chart = new Highcharts.Chart(dataPro);
        });


      }
    };


  });
