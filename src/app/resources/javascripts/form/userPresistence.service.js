'use strict';

angular.module('app.services.userPresistenceService',[])
.factory('userPersistenceFactory', ["$cookies", function($cookies) {
		var userName = "";

		return {
			setCookieData: function(username) {
				userName = username;
				$cookies.put("userName", username);
			},
			getCookieData: function() {
				userName = $cookies.get("userName");
				return userName;
			},
			clearCookieData: function() {
				userName = "";
				$cookies.remove("userName");
			}
		}
	}
]);