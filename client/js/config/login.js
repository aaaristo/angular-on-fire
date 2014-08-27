app.run(['$rootScope','authClient','authRef',
function ($rootScope,authClient,authRef)
{
   $rootScope.login= function ()
   {
      authClient.$login('github')
                .then(function(user)
                 {
                     console.log("Logged in as: ",user);
                     $rootScope.user= user;
                 },
                 function(error)
                 {
                     console.error("Login failed: " + error);
                 });
   };

   $rootScope.logout= function ()
   {
       authClient.$logout();
   };

   authRef.on('value',function (snap)
   {
        $rootScope.authenticated= snap.val();

        if (!$rootScope.authenticated) $rootScope.user= null; 
   });

}]);
