/**
 * 数据库访问操作代码
 */
var mysql = require('mysql');
var config = require('../config.js');
var task_type = require('../tasktype.js');
var format = require('date-format');
var util = require('util');
//var db_spider = mysql.createConnection(config.spider_db_server);

// 查询任务抓取情况和文件下载情况
var query_spider_data_inner = function(start_date, stop_date, callback) {
	var sql = "SELECT type,count(*) as number FROM `compound_product` WHERE create_time>='%s' and create_time<'%s' group by type;";
	sql = util.format(sql, start_date, stop_date);
	console.log('sql:' + sql);
	var db_spider_data = mysql.createConnection(config.spider_data_db_server);
	db_spider_data.connect();
	db_spider_data.query(sql,function(err, taskinfo, fields) {
		for (i in taskinfo) {
			var v = taskinfo[i];
			v.type = task_type.tasktype[v.type];
		}
		var downsql = "SELECT task_type,count(*) as number FROM `file_download` WHERE create_time>='%s' and create_time<'%s' group by task_type;";
		downsql = util.format(downsql, start_date, stop_date);
		console.log('downsql:' + downsql);
		db_spider_data.query(downsql, function(err, downinfo, fields) {
			for (i in downinfo) {
				var v = downinfo[i];
				v.task_type = task_type.tasktype[v.task_type];
			}
			db_spider_data.end();
			console.log(taskinfo);
			console.log(downinfo);
			return callback(err, taskinfo, downinfo);
		});
	});

};
exports.query_spider_data = query_spider_data_inner;
var proxy_list_inner = function(callback) {
	var sql = "SELECT * FROM `proxy` WHERE use_flag=1 order by use_times asc";
	var db_spider = mysql.createConnection(config.spider_db_server);
	db_spider.connect();
	db_spider.query(sql, function(err, proxys, fields){
		for(i in proxys){
			proxy = proxys[i];
			proxy._f_last_use_time = format.asString('yyyy-MM-dd hh:mm:ss',proxy.last_use_time);
			proxy._f_get_time = format.asString('yyyy-MM-dd hh:mm:ss',proxy.get_time);
		}
		db_spider.end();
		return callback(err, proxys);
	});
};
exports.proxy_list = proxy_list_inner;
//proxy_list_inner();
