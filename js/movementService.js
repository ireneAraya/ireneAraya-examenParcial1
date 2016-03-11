angular.module ('myAccountApp.services')

.service ('MovementService',
	function($routeParams) {

        var saveOtherKey = function (otherKey, object) {
            localStorage.setItem(otherKey, angular.toJson(object)); 
        };

        var verifyOtherKey = function(otherKey) {
            return angular.fromJson(localStorage.getItem(otherKey));
        };

        var removeOtherKey = function(otherKey) {
            localStorage.removeItem(otherKey);
        };

        /**Retorna el Id de cada tarea*/
        var getItem = function(movements, targetID) {
            var item;

            for (var i = 0; i < movements.length; i++) {
                if (movements[i].id == targetID) {
                    item = movements[i];
                }
            };

            return item;
        };

        /**Retorna la posición de los movimientos*/
        var getItemIndex = function (movements, targetID) {
            var index;

            for (var i = 0; i < movements.length; i++) {
                if (movements[i].id == targetID) {
                    index = i;
                }
            };

            return index;
        };

        return {
            save         	: saveOtherKey,
            verify       	: verifyOtherKey,
            remove       	: removeOtherKey,
            getItem      	: getItem,
            getItemIndex 	: getItemIndex
        };
    }
);