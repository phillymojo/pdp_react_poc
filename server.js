var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes')

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', routes.index);

app.use("/", express.static(__dirname + '/public/'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//Start up the server and listen on the PORT supplied (or the default)
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Catalogger server listening on port ' + app.get('port'));
});