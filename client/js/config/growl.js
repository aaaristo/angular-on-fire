app.config(['growlProvider',
function (growlProvider)
{
    growlProvider.globalTimeToLive(5000);
    growlProvider.onlyUniqueMessages(false);
}]);
