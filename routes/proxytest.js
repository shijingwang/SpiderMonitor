var format = require('date-format');

exports.index = function(req, res) {
	var message = '当前时间：' + format.asString('yyyy-MM-dd hh:mm:ss');
	res.writeHead(200, {
		"Content-Type" : "text/html; charset=utf-8"
	});
	message = message + '&nbsp;&nbsp;&nbsp;&nbsp;客户端地址:' + req.ip + '&nbsp;&nbsp;&nbsp;&nbsp;Proxy地址:' + req.ips;
	console.log('返回的数据:' + message);
	res.end(message);
};