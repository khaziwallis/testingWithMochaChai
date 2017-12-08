'use strict';

angular.module('demo.services', [])

.factory('userService', function ($http, $q) {
    var userData = {};
    /** get User Data  function Starts **/
    userData.getUserData = function() {
      //return $http.get("http://jsonplaceholder.typicode.com/posts").then(getDataSuccess).catch(getDataFailed);
      var deferred = $q.defer();
       $http.get('http://jsonplaceholder.typicode.com/posts')
         .then(function(data) { 
            deferred.resolve(data);
         }).catch(function(msg, code) {
            deferred.reject(msg);
            
         });
       return deferred.promise;
    };

    /** get User Data Success function Ends **/ 

    /** Data Success function Starts **/

    function getDataSuccess(response){
        return response;
    };

    /** Data Error function Starts **/
    function getDataFailed(error) {
        return error;
    };

    return userData;
});