/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var dashboard = require('./routes/dashboard');
var task = require('./routes/task');
var proxy = require('./routes/proxy');
var cas = require('./routes/cas');
var http = require('http');
var path = require('path');

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

// 解决某些页面的css无法从根页面读取的问题
app.use('/task/css', express.static(__dirname + '/views/css'));
app.use('/task/img', express.static(__dirname + '/views/img'));
app.use('/proxy/css', express.static(__dirname + '/views/css'));
app.use('/proxy/img', express.static(__dirname + '/views/img'));
app.use('/cas/css', express.static(__dirname + '/views/css'));
app.use('/cas/img', express.static(__dirname + '/views/img'));
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
app.get('/dashboard/summary', dashboard.summary);
app.get('/task/index', task.index);
app.get('/task/list', task.spider_task_list_info);
app.get('/proxy/index', proxy.index);
app.get('/proxy/list', proxy.list);
app.get('/cas/index', cas.index);
app.get('/cas/list', cas.list);
app.get('/cas/detail', cas.detail);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
