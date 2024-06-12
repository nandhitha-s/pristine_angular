// food.js

const express = require('express');
const router = express.Router();
const db = require('../util/database');

router.get('/api/food', (req, res, next) => {
  const query = 'SELECT * FROM food';
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log(results);
    res.json(results);
  });
});

module.exports = router;
