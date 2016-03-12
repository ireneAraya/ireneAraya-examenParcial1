angular.module ('myAccountApp.controllers')

.controller('NewAccountCtrl',[
    '$scope',
    '$routeParams',
    '$location',
    'UserService',
    function($scope, $routeParams, $location, UserService) {
        var accountsKey = 'AccountsList';

        //Busca en localStorage las llaves 

        $scope.accounts = UserService.verify(accountsKey) || [];
        $scope.lastID = UserService.verify('accountsLastId') || 0;

        $scope.notFound = false;    

        $scope.addUser = function() {
            $scope.lastID++;

            // Crea el objeto y lo agrega a las cuentas*/
            var oneAccount = {
                id          : $scope.lastID,
                name        : $scope.name,
                email       : $scope.email,
                currency    : $scope.currency,
                type        : $scope.type,
                movements   : []
            }
            $scope.accounts.push(oneAccount);
            
            //Limpia el formulario  
            if ($scope.frmAddUserAcount) {
                $scope.frmAddUserAcount.$setPristine();
                $scope.frmAddUserAcount.$setUntouched();
                $scope.name = '';
                $scope.email = '';
                $scope.currency = '';
                $scope.type = '';
            }

            $location.path('/account');
        }
            // Persiste los cambios
            $scope.$watch('accounts', function(newValue, oldValue) {
                UserService.save(accountsKey, newValue);
            }, true);
            $scope.$watch('lastID', function(newValue, oldValue) {
                UserService.save('accountsLastId', newValue);
            }, true);    
        }
])