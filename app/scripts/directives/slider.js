/**
 * Created by Rumman on 3/9/2016.
 */

'use strict';
angular
  .module('calculatorApp').directive("slider", function() {

    return {

      restrict: 'A',
      scope: {
        sliderConfig: "=config",
        value: "=model"
      },

      link: function(scope, elem, attrs) {
        $(elem).slider({
          min: scope.sliderConfig.min,
          max: scope.sliderConfig.max,
          step: scope.sliderConfig.step,
          range: "min",
          value: scope.value,
          slide: function( event, ui ) {
            scope.value = ui.value;
            scope.$apply();
          }
        })
        attrs.$observe('sliderData', function(data){
          $( elem ).slider( "value", arguments[0]).slider("float");
        });
      }

    }

  });
