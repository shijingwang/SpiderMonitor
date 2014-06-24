/**
 * Redis访问操作代码
 */
var redis = require("redis");
var task_type = require('../tasktype.js')
var format = require('date-format');
var biz_redis_status_inner = function(callback) {
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
					var n = new Number(value);
					redis_info.used_memory_rss_human = parseInt(n/1024/1024);
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
exports.biz_redis_status = biz_redis_status_inner;
var run_task_list_inner = function(callback) {
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
				client.hset('task_meta:' + task, 'task_type', task);
				client.hgetall('task_meta:' + task, function(err, resdata) {
					var task_meta = {};
					_task_type = resdata.task_type;
					//console.log('task_type:' + _task_type);
					task_meta.task_name = task_type.tasktype[_task_type];
					task_meta.create_time = resdata.createTime;
					var d = new Date();
					d.setTime(task_meta.create_time);
					task_meta._f_create_time = format.asString('yyyy-MM-dd hh:mm:ss', d);
					task_meta.total_task_num = resdata.totalTaskNum;
					if (resdata.finishTime) {
						task_meta.finish_time = resdata.finishTime;
						d.setTime(task_meta.finish_time);
						task_meta._f_finish_time = format.asString('yyyy-MM-dd hh:mm:ss', d);
					} else {
						task_meta.finish_time = '未完成';
						task_meta._f_finish_time = '未完成';
					}
					if (resdata.finishTaskNum) {
						task_meta.finish_task_num = resdata.finishTaskNum;
					} else {
						task_meta.finish_task_num = '0';
					}
					if (resdata.dispatcherNum) {
						task_meta.dispatcher_num = resdata.dispatcherNum;
					} else {
						task_meta.dispatcher_num = '0';
					}
					if (resdata.errorNum) {
						task_meta.error_num = resdata.errorNum;
					} else {
						task_meta.error_num = '0';
					}
					client.llen('task_queue:' + _task_type, function(err, resdata){
						//console.log('2task_type:' + _task_type);
						task_meta.queue_size = resdata;
						//TODO 此层数据提取有问题 _task_type的值不正确
						client.scard('task_queue_check:'+ _task_type, function(err,resdata){
							//console.log('3task_type:' + _task_type);
							task_meta.check_size = resdata;
							task_info_list.push(task_meta);
							if(task_info_list.length==task_lists.length){
								client.quit();
								return callback(err, task_info_list);
							}
							
						})
					});
				});
			}
		}
	});
};
exports.run_task_list=run_task_list_inner;
