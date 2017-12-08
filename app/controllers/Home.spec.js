'use strict';

describe('Home Controller', function() {
  	var controller, $controller, $scope, vm, userService;
  	beforeEach(module('demo.controllers', 'demo.services'));

  	beforeEach(inject(function (_$controller_, _$httpBackend_, $rootScope, _userService_) {
	    $controller = _$controller_;
	    userService = _userService_;
	    $scope = $rootScope.$new();

	    sinon.spy(userService, 'getUserData');
	    // passing permission value which could be true or false
	    controller = function () {
	        return $controller('HomeCtrl', { $scope: $scope });
	    };
    }));

	describe('Home controller', function(){
	  	beforeEach(function () {
	  		vm = controller();
	  	});

	    it('should have expected characterLimit values', function() {
	    	expect(vm.characterLimit).to.be.eql(30);
	    });

	    it('should have called userService.getUserData', function() {
	    	expect(userService.getUserData.calledOnce).to.be.true;
		});
	    it('should have expected sortedColumn values', function() {
	    	expect(vm.sortedColumn).to.be.eql('userId');
	    });

	    it('should have expected headerKeys length', function() {
	    	expect(vm.headerKeys.length).to.be.eql(4);
	    });

	    it('should have expected userHeader length', function() {
	    	expect(vm.userHeader.length).to.be.eql(4);
	    });

	    it('should have expected changes on calling sortColumn', function() {
	    	vm.sortColumn('id');
	    	expect(vm.sortedColumn).to.be.eql('id');
	    });
  	});
});