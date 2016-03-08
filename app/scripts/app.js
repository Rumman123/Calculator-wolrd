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
    'ngTouch'
  ])
  .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise("/landing");
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
      .state('CalcDetail', {
        url:'/CalcDetail',
        templateUrl: 'views/calculator-detail.html',
        controller: 'CalcCtrl',
        controllerAs: 'calc'
      });
    $locationProvider.html5Mode(true);
  });
