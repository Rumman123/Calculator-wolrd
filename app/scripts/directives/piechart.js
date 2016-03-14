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
      link: function (scope, element) {
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
        scope.$watch('data[0].y+data[1].y', function(newValue, oldValue){
          chart = new Highcharts.Chart(dataPro);
        });


      }
    };


  });
