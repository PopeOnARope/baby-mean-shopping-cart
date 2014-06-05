angular.module('shoppingCartApp', [
    // 'shoppingCartApp.services',
    // 'shoppingCartApp.controllers',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/product-list', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductCtrl'
      })
      .when('/product-creation', {
        templateUrl: 'views/product-creation.html',
        controller: 'ProductsCtrl'
      })
      .when('/product-detail/:id', {
        templateUrl: 'views/product-detail.html',
        controller: 'ProductCtrl'
      })
      .when('/product-edit/:id', {
        templateUrl: 'views/product-edit.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
    });


