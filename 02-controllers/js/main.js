
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
 * Method controller.
 */
function MethodCtrl($scope) {

  /**
   * Return the inverse of a string.
   */
  $scope.reverse = function (text) {
    return (text || '').split('').reverse().join('');
  }
}


/**
 * Inherited controller.
 */
function InheritedCtrl($scope) {

  $scope.multiply = 2;

}