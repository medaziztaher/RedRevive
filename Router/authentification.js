const express = require("express");
const router = express.Router();
const Authetification = require("../Controller/authentification");
const upload = require("../middleware/upload");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication management
 */

/**
 * @swagger
 * /reg:
 *   post:
 *     summary: Register a new user
 *     responses:
 *       200:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input
 */
router.post(
  "/reg",
  upload.fields([{ name: "image", maxCount: 1 }]),
  Authetification.createAccount
);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", Authetification.login);

module.exports = router;
