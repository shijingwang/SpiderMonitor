var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'rainzgq',
	database : 'spider'
});

connection.connect();
query(connection);
function query(connection) {
	connection.query('select * from proxy limit 3',
			function(err, res, fields) {
				console.log(res);
			});
};

connection.end();