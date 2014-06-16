var spiderdaemon = require('../modules/spiderdaemon_access.js');
var redis_access = require('../modules/redis_access.js');

exports.summary = function(req, res) {
	spiderdaemon.runTaskList(function(err, data) {
		var taskInfo = {};
		var redisInfo = {};
		if (err) {
			taskInfo.runTaskNumber = 0;
		} else {
			var jd = JSON.parse(data);
			taskInfo.runTaskNumber = jd.data.length;
		}
		spiderdaemon.banTaskList(function(err, data) {
			if (err) {
				taskInfo.banTaskNumber = 0;
			} else {
				var jd = JSON.parse(data);
				taskInfo.banTaskNumber = jd.data.length;
			}
			redis_access.biz_redis_status(function(err, data) {
				var redisInfo = {};
				if(err){
					
				}else{
					redisInfo = data;
				}
				res.render('spider-dashboard-summary', {
					'taskInfo' : taskInfo,
					'redisInfo' : redisInfo
				});
			});
		});
	});
};
exports.runtasklist = function(req, res) {

};
exports.bantasklist = function(req, res) {

};
