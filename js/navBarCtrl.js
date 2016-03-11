angular.module ( 'myAccountApp.controllers' )

.controller( 'NavBarCtrl',[
	'$scope',
	'$routeParams',
	'$location',
	'UserService',
    function( $scope, $routeParams, $location, UserService ) {
    	var localStorageKey = 'oneAccount';
    	var currentID = $routeParams.id;

        //Busca en localStorage las llaves 

        $scope.accounts = UserService.verify(localStorageKey) || [];
        $scope.lastID = UserService.verify('oneAccountLastID') || 0;

        //Llama a la función getItem
        $scope.oneAccount = UserService.getItem($scope.accounts, currentID);

    	$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
    	
    }
]);