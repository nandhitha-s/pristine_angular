// food.js
const router = require('express').Router();
const db = require('../util/database');

router.get('/', async(req, res, next) => {
  const string = 'SELECT name FROM food';
  const result = await db.query(string);

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
