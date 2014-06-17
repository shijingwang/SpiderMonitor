var mysql_access = require('../modules/mysql_access.js');
var format = require('date-format');

var _start_date = format.asString('yyyy-MM-dd', new Date());
var d = new Date();
d.setTime(d.getTime() + 1000 * 60 * 60 * 24);
var _stop_date = format.asString('yyyy-MM-dd', d);
exports.spider_task_list_info = function(req, res) {
	var start_date = req.query.start_date;
	var stop_date = req.query.stop_date;
	if(!start_date){
		start_date = _start_date;
		stop_date = _stop_date;
	}
	console.log('start_date:' + start_date);
	console.log('stop_date:' + stop_date);
	mysql_access.query_spider_data(start_date, stop_date, function(err,	taskinfo, downinfo) {
		if (err) {
			err_msg = '获取数据时出错!';
			res.render('spider-task-spider-info', {
				'err_msg' : err_msg,
				'start_date' : start_date,
				'stop_date' : stop_date,
			});
		} else {
			res.render('spider-task-spider-info', {
				'task_info' : taskinfo,
				'down_info' : downinfo,
				'start_date' : start_date,
				'stop_date' : stop_date,
			});
		}
	});
};

exports.index = function(req, res) {
	res.render('monitor-task-index', {
		'start_date' : _start_date,
		'stop_date' : _stop_date
	});
};