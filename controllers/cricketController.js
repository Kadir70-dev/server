const cricketModel = require('../models/cricket');

// Controller function to handle fetching cricket data
async function getCricketData(req, res) {
  console.log("Received request for /api/cricket-countries");

  try {
    console.log("Attempting to fetch cricket data from model...");
    const data = await cricketModel.fetchFromOffset(0);
    console.log("Successfully fetched cricket data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching cricket data:", error);
    res.status(500).json({ error: "Failed to fetch cricket data" });
  }
}

module.exports = { getCricketData };
