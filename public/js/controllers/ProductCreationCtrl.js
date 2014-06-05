angular.module('shoppingCartApp')
.controller('ProductCreationCtrl', ['$scope', 'ProductsFactory', 'ProductFactory', '$location', function ($scope, ProductFactory, ProductsFactory, $location) {

	//callback for ng-click 'createNewProduct':
	$scope.createNewProduct = function() {
		ProductsFactory.create($scope.product);
		$location.path('/product-creation');
	};
}])