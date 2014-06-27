
/**
 * Sample controller.
 */
function SampleCtrl($scope, $interval) {

  // Carneirinhos
  $scope.lambs = 1;

  $interval(function () {
    $scope.lambs++;
  }, 1500);
}


/**
 * Inherited controller.
 */
// function InheritedCtrl($scope) {

//   $scope.multiply = 2;

// }


/**
 * Overriden controller.
 */
// function OverridenCtrl($scope) {

// }
