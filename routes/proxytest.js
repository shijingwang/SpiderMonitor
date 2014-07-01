var format = require('date-format');
var cookieparser = require('cookieparser');

exports.index = function(req, res) {
	var message = '当前时间：' + format.asString('yyyy-MM-dd hh:mm:ss');
	var cookies = req.cookies;
	for(i in cookies){
		console.log('name:' + i + ' value:' + cookies[i]);
	}
	res.cookie('user_id', '12345');
	res.cookie('shop_id', 's001');
	res.writeHead(200, {
		"Content-Type" : "text/html; charset=utf-8"
	});
	message = message + '&nbsp;&nbsp;客户端地址:' + req.ip + '&nbsp;&nbsp;Proxy地址:' + req.ips + '&nbsp;&nbsp;Cookies:' + JSON.stringify(cookies);
	console.log('返回的数据:' + message);
	res.end(message);
};