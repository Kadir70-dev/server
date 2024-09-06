// server/routes/footballRoutes.js
const express = require("express");
const { getLiveMatches } = require("../controllers/footballController");

const router = express.Router();

/**
 * @swagger
 * /api/live-matches:
 *   get:
 *     summary: Get live football matches
 *     description: Fetch live football matches scheduled within the next 7 days.
 *     responses:
 *       200:
 *         description: Successfully fetched live football matches
 *       500:
 *         description: Failed to fetch live matches data
 */
router.get("/api/live-matches", getLiveMatches);

module.exports = router;
