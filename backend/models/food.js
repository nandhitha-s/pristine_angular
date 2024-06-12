// import express from 'express';
// import mysql from 'mysql2';

// const app = express();
// const port = 3001;

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Aswanth2005$",
//   database: "posts"
// });
const res = require('express/lib/response');
const db = require('../util/database');

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

app.get('/api/posts', (req, res) => {
  const query = 'SELECT * FROM food';
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});