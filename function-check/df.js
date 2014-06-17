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