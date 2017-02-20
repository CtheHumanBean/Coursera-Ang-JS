(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller ('LunchController',LunchController);

  LunchController.$inject=['$scope'];

  function LunchController($scope)
  {
    var TippingPoint = 3;
    var StringDelimiter = ',';
    var MessageToLuncher = '';

    $scope.CountDishes = function(){
    var NumberOFItems = 0;
    var StringToCheck = $scope.LunchList;

    if (!StringToCheck || StringToCheck == undefined || StringToCheck == "" || StringToCheck.length == 0)  {
      $scope.MessageToLuncher = "Enter your comma separated list";
     } else {
       var arrayOfItems = StringToCheck.split(StringDelimiter);
       NumberOFItems = arrayOfItems.length;

      if (NumberOFItems>TippingPoint) {
        $scope.MessageToLuncher = "Too Much!";
      } else {
        $scope.MessageToLuncher = "Enjoy!";
      };
    };
    };
  };
})();
