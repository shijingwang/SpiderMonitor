/**
 * Redis访问操作代码
 */
var redis = require("redis");

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
			if(err){
				redis_info.dbsize = '0';
			}else{
				redis_info.dbsize = dbsizev;
			}
			client.quit();
			return callback(err, redis_info);
		});
	});
};
exports.biz_redis_status = biz_redis_status;
// biz_redis_status();
