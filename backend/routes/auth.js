const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const user = require("../models/user");
const authController = require("../controllers/auth");
router.post(
  "/signup",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom(async (email) => {
        const user = await user.find(email);
        if (user[0].length > 0) {
          return Promise.reject("Email already exists");
        }
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 7 })
      .withMessage("Password must be at least 7 characters"),
  ],
  authController.signup
);

module.exports = router;
