const express = require('express');
const router = express.Router();
const db = require('../util/database');

router.post('/add', async (req, res, next) => {
    try {
        const { food_id, quantity } = req.body;
        const user_id = 1; // Dummy user_id

        const [rows] = await db.query('SELECT * FROM cart WHERE user_id = ? AND food_id = ?', [user_id, food_id]);

        if (rows.length > 0) {
            await db.query('UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND food_id = ?', [quantity, user_id, food_id]);
        } else {
            await db.query('INSERT INTO cart (user_id, food_id, quantity) VALUES (?, ?, ?)', [user_id, food_id, quantity]);
        }

        res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/items', async (req, res, next) => {
    try {
      const user_id = 1; // Dummy user_id for demonstration
      const [rows] = await db.query(`
        SELECT f.id, f.name, f.preptime, f.image, f.cost, c.quantity
        FROM cart c
        JOIN food f ON c.food_id = f.id
        WHERE c.user_id = ?
      `, [user_id]);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
