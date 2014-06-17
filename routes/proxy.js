var mysql_access = require('../modules/mysql_access.js');
var format = require('date-format');

exports.list = function(req, res) {
	mysql_access.proxy_list(function(err, proxys) {
		res.render('spider-proxy-list',{'proxys':proxys});
	});
};

exports.index = function(req, res){
	res.render('monitor-proxy-index', {});
};