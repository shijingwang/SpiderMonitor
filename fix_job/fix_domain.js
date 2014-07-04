/**
 * 数据库访问操作代码
 */
var URL = require('url');
var mysql = require('mysql');
var crypto = require('crypto');
var config = require('../config.js');
var task_type = require('../tasktype.js');
var format = require('date-format');
var util = require('util');
// var db_spider = mysql.createConnection(config.spider_db_server);

exports.fix_site_data = fix_site_data_inner;
var fix_site_data_inner = function() {
	console.log("开始修正数据");
	var sql = "SELECT * FROM `cas_extract_site` order by id desc";
	var db_spider_data = mysql.createConnection(config.spider_data_db_server);
	db_spider_data.connect();
	db_spider_data.query(sql, function(err, sites, fields) {
		for (i in sites) {
			site = sites[i];
			url = site.url.toLowerCase();
			console.log(url);
			var p = URL.parse(url); 
			var md5 = crypto.createHash('md5');
			md5.update(p.hostname);
			var key = md5.digest('hex').toUpperCase();
			var domain = p.hostname;
			usql = "update cas_extract_site set domain='%s',_key='%s' where id=%s";
			usql = util.format(usql, domain, key, site.id);
			//usql = "update cas_extract_site set domain='%s' where id=%s";
			//usql = util.format(usql, domain, site.id);
			db_spider_data.query(usql);
		}
		db_spider_data.end();
		console.log("数据修正完成");
	});
};
fix_site_data_inner();
