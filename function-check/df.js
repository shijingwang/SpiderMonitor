var format = require('date-format');

console.log(format.asString('yyyy-MM-dd', new Date()));
var d = new Date();
d.setTime(d.getTime() - 1000 * 60 * 60 * 24);
console.log(format.asString('yyyy-MM-dd', d));
var fs;
if(!fs){
	console.log('abcdefg');
}else{
	console.log('12345678');
}

s = '1302927765288';
d1 = new Date();
d1.setTime(s);
console.log(format.asString('yyyy-MM-dd', d1));
s = '2214993920';
n = new Number(s);
console.log('M:' + parseInt((n/1024/1024)));
