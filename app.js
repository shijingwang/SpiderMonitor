/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes'), user = require('./routes/user'), http = require('http'), path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views'); // 设置模板引擎存储的位置
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/img', express.static(__dirname + '/views/img'));
app.use('/client_js', express.static(__dirname + '/views/client_js'));
app.use('/views', express.static(__dirname + '/views'));

/*
 * app.use(express.static(path.join(__dirname, '/views/css')));
 * app.use(express.static(path.join(__dirname, '/views/js')));
 * app.use(express.static(path.join(__dirname, '/views/img')));
 * app.use(express.static(path.join(__dirname, '/views/client_js')));
 */

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/hello', routes.hello);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
