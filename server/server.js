var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001
    bodyParser = require('body-parser')
    routes = require('./api/routes/appRoutes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

app.listen(port);

console.log('Application API server started on port ' + port);