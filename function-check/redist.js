var redis = require("redis"), client = redis.createClient();
client.on("error", function(err) {
	console.log("Error " + err);
});
client.set("a", "user");
/*
 * var v = ''; client.get("a",function(err,replies){ v = replies;
 * console.log(replies); client.quit(); }); console.log('----' + v);
 */
/*
 * client.dbsize(function(err,replies){ console.log(replies); client.quit(); });
 */
client.info(function(err, replies) {
	// console.log(replies);
	var pl = replies.split("\n");
	console.log(typeof (pl));
	pl.forEach(function(reply, i) {
		if (reply.charAt(0) == '#' || reply.trim().length == 0) {

		} else {
			var name = reply.substring(0,reply.indexOf(':'));
			var value = reply.substring(reply.indexOf(':')+1);
			//console.log(name + ':' + value);
			// 当前使用内存
			if(name=='used_memory_human'){
				
			}
			// 峰值使用内存
			if(name=='used_memory_peak_human'){
				
			}
			// Redis分配的内存
			if(name=='used_memory_rss'){
				
			}
			// 客户端连接数
			if(name=='connected_clients'){
				
			}
			
		}
	});
	client.quit();
});
console.log('Over');