angular.module('shoppingCartApp')
.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'ProductFactory', '$location', function ($scope, $routeParams, ProductFactory, $location) {
	//callback for ngclick 'update product'
	$scope.updateProduct = function() {
		ProductFactory.update($scope.product);
		$location.path('/product-list');
	};

	//callback for ng-click 'cancel':
	$scope.cancel = function () {
		$location.path('/product-list');
	};
	$scope.product = ProductFactory.show({ id: $routeParams.id });
}])