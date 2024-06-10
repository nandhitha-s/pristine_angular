var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nandana@123",
  database: "posts"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM posts.food", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
