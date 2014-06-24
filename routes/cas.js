var mysql_access = require('../modules/mysql_access.js');
var format = require('date-format');

exports.list = function(req, res) {
	mysql_access.cas_site_list(function(err, sites) {
		res.render('spider-cas-site-list',{'sites':sites});
	});
};

exports.index = function(req, res){
	res.render('monitor-cas-index', {});
};

exports.detail = function(req, res){
	res.render('', {});
};