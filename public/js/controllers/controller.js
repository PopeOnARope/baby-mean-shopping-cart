'use strict';

angular.module('shoppingCartApp')
  .controller('ProductsCtrl', function ($scope, $location, ProductsFactory, ShoppingCartFactory) {

    $scope.createNewProduct = function() {
    	$location.path('/product-creation');
    };
    $scope.addProduct = function(product) {
    	ProductsFactory.create(product);
    	$location.path('/product-list');
    };
    $scope.addToCart = function(product){
      ShoppingCartFactory.add(product);
      // ShoppingCartFactory.query();
    };

    $scope.products = ProductsFactory.query();
  })
  .controller('ProductCtrl', function($scope, $location, $routeParams, ProductFactory) {
    $scope.checkit = $routeParams.id
  	$scope.product = ProductFactory.show({ id: $routeParams.id });
  	$scope.deleteProduct = function() { 
  		ProductFactory.delete({ id: $routeParams.id });
  		$location.path('/product-list');
  	};
  	$scope.updateProduct = function() {
  		ProductFactory.edit($scope.product);
  		$location.path('/');
  	};

  })
  .controller('ShoppingCartCtrl', function($scope, $location, ShoppingCartFactory) {
    $scope.displayInCart = function(product){
      ShoppingCartFactory.query(product);
    };
    $scope.deleteFromCart = function(){
      ShoppingCartFactory.delete($scope.product);
      $location.path('/');
    }
  });