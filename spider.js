/**
 * 爬虫远程调用管理接口
 */
var thrift = require('thrift');

var SpiderAcceptor = require('./spiderdaemon-interface/SpiderAcceptor.js'), ttypes = require('./spiderdaemon-interface/spider_types.js');

var connection = thrift.createConnection('localhost', 16666), client = thrift
		.createClient(SpiderAcceptor, connection);

connection.on('error', function(err) {
	console.error(err);
});

client.runTaskList(function(err, response) {
	if (err) {
		console.error(err);
	} else {
		console.log("Get run task list");
		console.log(response);
		connection.end();
	}
});