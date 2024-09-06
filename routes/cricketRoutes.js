// server/routes/cricketRoutes.js
const express = require("express");
const { getCricketData } = require("../controllers/cricketController");

const router = express.Router();

/**
 * @swagger
 * /api/cricket-countries:
 *   get:
 *     summary: Get cricket data
 *     description: Fetch cricket data from the model.
 *     responses:
 *       200:
 *         description: Successfully fetched cricket data
 *       500:
 *         description: Failed to fetch cricket data
 */
router.get("/api/cricket-countries", getCricketData);

module.exports = router;
