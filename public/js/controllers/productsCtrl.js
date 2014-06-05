angular.module('shoppingCartApp')
	.controller('ProductsCtrl', ['$scope', '$location', 'ProductsFactory', function($scope, $location, ProductsFactory) {

		$scope.products = ProductsFactory.query();
		$scope.createNewPost = function() {
			$location.path('/post-creation');
		};
		$scope.addProduct = function(product) {
			ProductsFactory.create(product);
			$location.path('/product-list');
		};
		$scope.addToCart = function(product) {
			
		}



	}]);