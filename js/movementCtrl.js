angular.module ('myAccountApp.controllers')

.controller('MovementCtrl',[
    '$scope',
	'$routeParams',
    '$location',
    'UserService',
    'MovementService',
    function($scope, $routeParams, $location, UserService, MovementService) {
    	var localStorageKey = 'oneMovement';
        var currentID = $routeParams.id;

    	//Busca en localStorage las llaves
    	$scope.movements = MovementService.verify(localStorageKey) || [];
    	$scope.lastID = MovementService.verify('oneMovementLastID') || 0;

        //Llama a la función getItem
        $scope.item = MovementService.getItem($scope.movements, currentID);

    	$scope.addMovement = function() {
    		$scope.lastID++;

    		// Crea el objeto y lo agrega a los movimientos*/
    		var oneMovement = 
    			{
    				id      : $scope.lastID,
                    date    : $scope.date,
                    detail  : $scope.detail,
                    amount  : $scope.amount
    			}
    		$scope.movements.push(oneMovement);
    		
    		//Limpia el formulario	
            if ($scope.frmAddUserAcount) {
                $scope.frmAddUserAcount.$setPristine();
                $scope.frmAddUserAcount.$setUntouched();
                $scope.date = '';
                $scope.detail = '';
                $scope.amount = '';
            }
            
            $location.path('/account');
    	};

        $scope.removeMovement = function() {
            //Si sólo existe un movimiento, limpia los valores
            if ($scope.movements.length == 1) {
                $scope.movements = [];
                $scope.lastID = 0;
            }else {
                //Retorna la posición de la tarea y luego la elimina
                var target = MovementService.getItemIndex($scope.movements, currentID);
                $scope.movements.splice(target, 1);
            }
            $location.path('/account');
        };

        $scope.editMovement = function(newValue, oldValue, updated) {
            

            $location.path('/movementDetail/:id')
        };


        // Declara la variable total para los saldos
        $scope.total =0;

        $scope.setTotal = function(item) {
            //suma los valores para obtener el saldo
            $scope.total += item.amount;
        };

    	// Persiste los cambios
    	$scope.$watch('movements', function(newValue, oldValue) {
            MovementService.save(localStorageKey, newValue);
        }, true);
        $scope.$watch('lastID', function(newValue, oldValue) {
            MovementService.save('oneMovementLastID', newValue);
        }, true);    
    }
 ])