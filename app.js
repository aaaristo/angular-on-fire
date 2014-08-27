var express= require('express'),
    path= require('path'),
    bodyParser = require('body-parser'),
    routes = require('./server/config/routes'),
    app= express();

app.use(bodyParser.json());

routes(app);

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(8080);

console.log('listening on 8080');
