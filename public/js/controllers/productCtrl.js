angular.module('shoppingCartApp')
	.controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'ProductFactory', function($scope, $routeParams, $location, ProductFactory) {
		
		$scope.product = ProductFactory.show({ id: $routeParams.id });

		$scope.updateProduct = function() {
			ProductFactory.edit($scope.product);
			$location.path('/product-edit.html' + $routeParams.id);
		};

		$scope.deleteProduct = function() {
			ProductFactory.delete({ id: $routeParams.id });
			$location.path('/');
		};
		// editing
		// deleting
		// showing

	}]);