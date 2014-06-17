/**
 * Redis访问操作代码
 */
var redis = require("redis");
var tasktype = require('../tasktype.js')

var biz_redis_status = function(callback) {
	var client = redis.createClient();
	client.on("error", function(err) {
		return callback(err);
	});
	var redis_info = {};
	client.info(function(err, replies) {
		console.log(typeof (replies));
		var pl = replies.split('\r\n');
		for (i in pl) {
			var reply = pl[i];
			if (reply.charAt(0) == '#' || reply.trim().length == 0) {

			} else {
				var name = reply.substring(0, reply.indexOf(':'));
				var value = reply.substring(reply.indexOf(':') + 1);
				value = value.replace('\r', '');
				// console.log(name + ':' + value);
				// 当前使用内存
				if (name == 'used_memory_human') {
					redis_info.used_memory_human = value;
				}
				// 峰值使用内存
				if (name == 'used_memory_peak_human') {
					redis_info.used_memory_peak_human = value;
				}
				// Redis分配的内存
				if (name == 'used_memory_rss') {
					redis_info.used_memory_rss = value;
				}
				// 客户端连接数
				if (name == 'connected_clients') {
					redis_info.connected_clients = value;
				}
			}
		}
		client.dbsize(function(err, dbsizev) {
			if (err) {
				redis_info.dbsize = '0';
			} else {
				redis_info.dbsize = dbsizev;
			}
			client.quit();
			return callback(err, redis_info);
		});
	});
};
exports.biz_redis_status = biz_redis_status;
var run_task_list = function(callback) {
	var client = redis.createClient();
	client.on("error", function(err) {
		return callback(err);
	});
	client.smembers('spider_task_list', function(err, resdata) {
		if (err) {
			return callback(err, []);
		} else {
			var task_info_list = [];
			var task_lists = resdata;
			for (i in task_lists) {
				task = task_lists[i];
				client.hgetall('task_meta:' + task, function(err, resdata) {
					var task_meta = {};
					task_meta.create_time = resdata.createTime;
					task_meta.total_task_num = resdata.totalTaskNum;
					if (task_meta.hasOwnProperty('finishTime')) {
						task_meta.finish_time = resdata.finishTime;
					} else {
						task_meta.finish_time = '';
					}
					if (task_meta.hasOwnProperty('finishTaskNum')) {
						task_meta.finish_task_num = resdata.finishTaskNum;
					} else {
						task_meta.finish_task_num = '';
					}
					task_info_list.push(task_meta);
					console.log(task_meta);
				});
			}
			client.quit();
			console.log(task_info_list);
			return callback(null, task_info_list);
		}
	});
};
run_task_list(function(err, data) {
	console.log('Return Data:' + data);
});
