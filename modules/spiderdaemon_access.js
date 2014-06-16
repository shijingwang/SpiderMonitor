/**
 * 爬虫远程调用管理接口
 */
var thrift = require('thrift');
var config = require('../config.js');
var SpiderAcceptor = require('../spiderdaemon-interface/SpiderAcceptor.js'), ttypes = require('../spiderdaemon-interface/spider_types.js');

exports.runTaskList = function(callback) {
	var connection = thrift.createConnection(config.spiderdaemon.host,
			config.spiderdaemon.port), client = thrift.createClient(
			SpiderAcceptor, connection);
	connection.on('error', function(err) {
		console.error(err);
	});
	client.runTaskList(function(err, response) {
		if (err) {
			return callback(err);
		} else {
			connection.end();
			callback(err, response);
		}
	});
};

exports.banTaskList = function(callback) {
	var connection = thrift.createConnection(config.spiderdaemon.host,
			config.spiderdaemon.port), client = thrift.createClient(
			SpiderAcceptor, connection);
	connection.on('error', function(err) {
		console.error(err);
	});
	client.banTaskList(function(err, response) {
		if (err) {
			return callback(err);
		} else {
			connection.end();
			callback(err, response);
		}
	});
};
