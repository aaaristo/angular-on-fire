var ref = new Firebase('https://sizzling-inferno-5668.firebaseio.com/');

app.factory('sync',['$firebase',
    function ($firebase)
    {
       return function (path)
       {
           return $firebase(ref.child(path));
       };
    }])
    .factory('authClient',['$firebaseSimpleLogin',
    function ($firebaseSimpleLogin)
    {
       return $firebaseSimpleLogin(ref);
    }])
    .factory('authRef',['sync',
    function (sync)
    {
       return ref.child('.info/authenticated');
    }]);
