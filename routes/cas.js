var mysql_access = require('../modules/mysql_access.js');
var format = require('date-format');

exports.list = function(req, res) {
	mysql_access.cas_site_list(function(err, sites) {
		res.render('spider-cas-site-list', {
			'sites' : sites
		});
	});
};

exports.index = function(req, res) {
	res.render('monitor-cas-index', {});
};

exports.insert = function(req, res) {
	var name = req.query.name;
	var v_id = req.query.v_id;
	var url = req.query.url;
	res.writeHead(200, {
		"Content-Type" : "text/html; charset=utf-8"
	});
	if (name && url) {
		url = url.toLowerCase();
		if (url.length<12){
			message = '输入的URL地址不正确';
			res.end(message);
		}else if (url.substring(0, 4) != 'http') {
			message = '输入的URL地址不是以http开头';
			res.end(message);
		} else {
			mysql_access.site_insert(v_id, name, url, function(err, result) {
				if (err) {
					message = '网站已经添加，不能重复添加';
				} else {
					message = '数据写入成功';
				}
				res.end(JSON.stringify(message));
			});
		}
	} else {
		message = '未输入名称或者URL地址';
		res.end(message);
	}
};

exports.refresh = function(req, res) {
	var id = req.query.id;
	mysql_access.site_cas_update(id);
	res.writeHead(200, {
		"Content-Type" : "text/html; charset=utf-8"
	});
	message = '刷新成功，CAS数据即将重新刷新';
	res.end(message);
};

exports.detail = function(req, res) {
	var site_id = req.query.site_id;
	if (!site_id) {
		site_id = 1;
	}
	mysql_access.site_cas_data_list(site_id, function(err, cass) {
		res.render('spider-site-cas-data-list-new', {
			'cass' : cass
		});
	});
};