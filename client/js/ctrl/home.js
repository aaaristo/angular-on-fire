app.controller('home',['$scope','$rootScope','$location','growl','sync',
function ($scope,$rootScope,$location,growl,sync)
{
   $scope.colors= sync('colors').$asArray();

   sync('data').$asObject().$bindTo($scope,'data');

}]);
