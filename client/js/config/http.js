app.config(['$httpProvider',
function ($httpProvider)
{
    $httpProvider.interceptors.push('errorHttpInterceptor');
}])
.factory('errorHttpInterceptor', ['$q','growl',function ($q,growl)
{
    return {
              'responseError': function(rejection)
              {
                  if (rejection.data&&rejection.data.error)
                    growl.addErrorMessage(rejection.data.error);
                  else
                    growl.addErrorMessage('Oooops, something went really wrong!');

                  return $q.reject(rejection);
              }
           };
}]);
