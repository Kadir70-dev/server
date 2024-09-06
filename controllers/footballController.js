// server/controllers/footballController.js
const axios = require("axios");
const { formatDate } = require("../models/football");

const getLiveMatches = async (req, res) => {
  console.log("Received request for /api/live-matches");

  // Dynamic date range: today and 7 days from today
  const today = new Date();
  const sevenDaysFromToday = new Date();
  sevenDaysFromToday.setDate(today.getDate() + 7);

  const dateFrom = formatDate(today);
  const dateTo = formatDate(sevenDaysFromToday);

  console.log(`Fetching live matches from ${dateFrom} to ${dateTo}`);

  try {
    const response = await axios.get("https://api.football-data.org/v4/matches", {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
      },
      params: {
        dateFrom: dateFrom,
        dateTo: dateTo,
        status: "SCHEDULED", // Fetch only scheduled matches
      },
    });

    console.log("Successfully fetched live matches data:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching live matches data:", error);
    res.status(500).json({ error: "Failed to fetch live matches data" });
  }
};

module.exports = { getLiveMatches };
