var app =  require('./config/custom-express.js')();

//var config = require('./server/config/config');
//var app = server.routesConfig();
//var config = require('./config/config.js');
//require('./config/database.js')(config.databaseDev);

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function(){
    console.log('Server');
});