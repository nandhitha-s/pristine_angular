// food.js

const express = require('express');
const router = express.Router();
const query = require('../util/database');

router.get('/api/food', async(req, res, next) => {
  const string = 'SELECT * FROM food';
  const result = await query(string);
  res.json(result);
  // query(query, (error, results) => {
  //   if (error) {
  //     console.error(error);
  //     return res.status(500).json({ error: 'Internal Server Error' });
  //   }
  //   console.log(results);
  //   res.json(results);
  // });
});

module.exports = router;
