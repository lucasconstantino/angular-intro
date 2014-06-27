
var myApp = angular.module('myApp', []);

/**
 * Simple data service.
 */
myApp.factory('Data', function () {
  
  // Load from server, web storage, whatever...
  
  var data = {
    message: 'Whoooow!'
  }

  return data;
});

/**
 * Sample controller.
 */
function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

/**
 * Sample controller.
 */
function SecondCtrl($scope, Data) {
  $scope.data = Data;
}
