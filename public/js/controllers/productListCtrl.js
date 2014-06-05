angular.module('shoppingCartApp')
	.controller('ProductListCtrl', ['$scope', '$routeParams', 'ProductsFactory', 'ProductFactory', '$location', function($scope, $routeParams, ProductFactory, ProductsFactory, $location) {

	//callback for ng-click 'editproduct'
	$scope.editProduct = function () {
		ProductFactory.edit(product);
		$location.path('/product-list/' + $routeParams.id);
	};

	//callback for ngclick 'deleteProduct':
	$scope.deleteProduct = function () {
		ProductFactory.delete({ id: $routeParams.id });
		$location.path('/product-list');
	};
	$scope.products = ProductsFactory.query();
}])