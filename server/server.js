var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001
    bodyParser = require('body-parser')
    routes = require('./api/routes/appRoutes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('Application API server started on port ' + port);