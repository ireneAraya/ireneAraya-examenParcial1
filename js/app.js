angular.module('myAccountApp',[
    'ngRoute',
    'myAccountApp.services',
    'myAccountApp.controllers',
])

.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/newAccount.html',
                controller : 'NewAccountCtrl'
            })
            .when('/account', {
                templateUrl: 'views/account.html',
                controller : 'MovementCtrl'
            })
            .when('/movement', {
                templateUrl: 'views/movement.html',
                controller : 'MovementCtrl'
            })
            .when('/editMovement/:id', {
                templateUrl: 'views/editMovement.html',
                controller : 'MovementCtrl'
            })
            .when('/movementDetail/:id', {
                templateUrl: 'views/movementDetail.html',
                controller : 'MovementCtrl'
            })
            .otherwise({
        	   redirectTo: '/account'
            });
    }
])