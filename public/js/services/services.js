'use strict';
angular.module('shoppingCartApp')
	.factory('ProductsFactory', function($resource) {
		return $resource('api/collections/demotiy',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('ProductFactory', function($resource) {
		return $resource('api/collections/demotiy/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})
	.factory('ShoppingCartFactory', function($resource){
		return $resource('api/collections/shoppingcart',
			{},
			{
				query: {method: 'GET', isArray: true},
				add: {method: 'POST'},
				delete: {method: 'DELETE'}
				//PUT THE REST O THAT SHTUFF HERE WHEN YOU FIGURE OUT WHAT DO DO
			}
			)
	});