const express = require("express");
const router = express.Router();
const UserController = require("../Controller/profile");
const authenticateToken = require("../middleware/authorization");

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Profile management
 */

/**
 * @swagger
 * /profile/{id}:
 *   put:
 *     summary: Update a user profile
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               email:
 *                 type: string
 *                 description: User's email
 *               age:
 *                 type: integer
 *                 description: User's age
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized
 */
router.put("/profile/:id", authenticateToken, UserController.updateProfile);

/**
 * @swagger
 * /profile/{id}:
 *   get:
 *     summary: Retrieve a user profile
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 age:
 *                   type: integer
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized
 */
router.get("/profile/:id", authenticateToken, UserController.getProfile);

/**
 * @swagger
 * /profile/{id}:
 *   delete:
 *     summary: Delete a user profile
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile deleted successfully
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized
 */
router.delete("/profile/:id", authenticateToken, UserController.deleteProfile);

module.exports = router;
