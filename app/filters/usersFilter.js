'use strict';

angular.module('demo.filters', [])
.filter('usersFilter', [function () {
    return function (users, enteredData, headerKeys) {
    	if (users) {
	    	if (!users.length || !enteredData) {
	    		return users;
	    	} else {
	    		var tempUsers = [];
	    		_.each(headerKeys, function (key) {
	    			var temp = _.filter(users,  function (user) {
	    				return _.includes(_.toString(user[key]), enteredData);
	    			});
	    			tempUsers = _.union(tempUsers, temp)
	    		});
	    		return tempUsers;
	    	}
	    }
    };
}]);