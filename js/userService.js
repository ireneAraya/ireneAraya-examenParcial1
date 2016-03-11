angular.module ('myAccountApp.services')

.service ('UserService',
	function($routeParams) {
		var saveUserKey = function (key, object) {
			localStorage.setItem(key, angular.toJson(object));
		};

		var verifyUserKey = function(key) {
			return angular. fromJson(localStorage.getItem(key));
		};

		var removeUserKey = function(otherKey) {
            localStorage.removeItem(otherKey);
        };

		/** Retorna el Id de cada cuenta (aunque estamos usando sólo 1)**/
		var getItem = function(accounts, targetID) {
			var oneAccount;

			for (var i = 0; i < accounts.length; i++) {
				if (accounts[i].id == targetID) {
					oneAccount == accounts[i];
				}
			};

			return oneAccount;
		};

		/**Retorna la posición de las cuentas*/
        var getItemIndex = function (accounts, targetID) {
            var index;

            for (var i = 0; i < accounts.length; i++) {
                if (accounts[i].id == targetID) {
                    index = i;
                }
            };

            return index;
        };

        return {
            save         	: saveUserKey,
            verify       	: verifyUserKey,
            remove       	: removeUserKey,
            getItem      	: getItem,
            getItemIndex 	: getItemIndex
        };
    }
);