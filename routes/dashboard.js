var spiderdaemon = require('../modules/spiderdaemon_access.js');

exports.summary = function(req, res) {
	spiderdaemon.runTaskList(function(err, data) {
		var taskInfo = {};
		var redisInfo = {};
		if (err) {
			taskInfo.runTaskNumber = 0;
		} else {
			var jd = JSON.parse(data);
			taskInfo.runTaskNumber = jd.data.length;
			spiderdaemon.banTaskList(function(err, data) {
				if (err) {
					taskInfo.banTaskNumber = 0;
				} else {
					var jd = JSON.parse(data);
					taskInfo.banTaskNumber = jd.data.length;
				}
				res.render('spider-dashboard-summary', {
					'taskInfo' : taskInfo
				});
			});
		}
	});
};
exports.runtasklist = function(req, res) {
	
};
exports.bantasklist = function(req, res) {
	
};
