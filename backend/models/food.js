const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aswanth2005$",
  database: "posts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

app.get('/api/posts', (req, res) => {
  con.query("SELECT * FROM food", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
