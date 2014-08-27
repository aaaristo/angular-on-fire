app.filter('nvl', function()
    {
        return function (value, replacer)
        {
          return value ? value : (replacer ? replacer : '...');
        };
    })
   .filter('em', ['$sce',function ($sce)
    {
        var escapeRegExp= function (str)
        {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };

        return function (value, searchFor)
        {
            return $sce.trustAsHtml(value&&searchFor ? value.replace(new RegExp('('+escapeRegExp(searchFor)+')','g'),'<em class="filter">$1</em>') : value);
        };
    }]);
