'use strict';

angular.module('demo.controllers', [])
.controller('HomeCtrl', function(userService, $scope) {
	var vm = this;
    vm.characterLimit = 30;
    vm.userHeader = ["userId", "Id", "Title", "Body"];
    vm.headerKeys = ["userId", "id", "title", "body"];
    vm.sortedColumn = "userId";
    vm.sortColumn = function (columnName) {
        vm.sortedColumn = columnName;
        var column = _.camelCase(columnName);
        vm.users = _.sortBy(vm.users, column);
    };

    var getUserInfo = function () {
        var userDataPromise = userService.getUserData();
        userDataPromise.then(function (response) {
        	vm.users = response.data;
        });
    };
    getUserInfo();
});