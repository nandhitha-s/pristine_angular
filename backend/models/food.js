var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nandana@123",
  database: "posts"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM posts.users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
