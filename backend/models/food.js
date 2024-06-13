// // food.js
// /*const router = require('express').Router();
// const db = require('../util/database');

// router.get('/', async(req, res, next) => {
//   const string = 'SELECT * FROM food';
//   const result = await db.query(string);

//   res.json(result);
//   // query(query, (error, results) => {
//   //   if (error) {
//   //     console.error(error);
//   //     return res.status(500).json({ error: 'Internal Server Error' });
//   //   }
//   //   console.log(results);
//   //   res.json(results);
//   // });
// });

// module.exports = router;*/
// // food.js

// const router = require('express').Router();
// const db = require('../util/database');

// router.get('/', async(req, res, next) => {
//   try {
//     const string = 'SELECT * FROM food';
//     const result = await db.query(string);
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../util/database');

router.get('/', async (req, res, next) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM food');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
