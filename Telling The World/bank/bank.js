var bankModule = angular.module('bank',[]);

bankModule.controller('AtmController',['$scope',function($scope){
	$scope.withdraw = function(amount){
		$scope.$emit('WITHDREW',amount);
	}
}]);

bankModule.controller('RecentTransactionsController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.recent = [];
	$rootScope.$on('WITHDREW',function(amount){
		$scope.recent.push(amount);
	})
}]);