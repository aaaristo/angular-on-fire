app.config(['$routeProvider',
function ($routeProvider)
{
  $routeProvider
     .when('/home', {controller: 'home', templateUrl:'/views/home.html' })
     .otherwise({redirectTo:'/home'});
}]);
