angular
  .module("myApp", [])
  .controller('parentCtrl', function() {
    this.click = function(value) {
      console.log(value);
    }
  })
  .directive('container', function() {
    return {
      restrict: 'E',
      transclude: true,
      controller: 'parentCtrl',
      controllerAs: 'parent',
      templateUrl: 'container.html',
    };
  })
  .directive('myButton', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'my-button.html',
    };
});
