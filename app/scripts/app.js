'use strict';

/**
 * @ngdoc overview
 * @name calculatorApp
 * @description
 * # calculatorApp
 *
 * Main module of the application.
 */
angular
  .module('calculatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/landing');
    $stateProvider
      .state('landing', {
        url:'/landing',
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .state('main', {
        url:'/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('homeLoan', {
        url:'/homeLoan',
        templateUrl: 'views/home-loan.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('carLoan', {
        url:'/carLoan',
        templateUrl: 'views/car-loan.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .state('personalLoan', {
        url:'/personalLoan',
        templateUrl: 'views/personal-loan.html',
        controller: 'PersonalCtrl',
        controllerAs: 'personal'
      })
      .state('propertyLoan', {
        url:'/propertyLoan',
        templateUrl: 'views/property-loan.html',
        controller: 'propertyCtrl',
        controllerAs: 'property'
      })
   /* $locationProvider.html5Mode(true);*/
  }).directive("slider", function() {

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
