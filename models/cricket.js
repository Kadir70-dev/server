const axios = require('axios');
require('dotenv').config();

const CRICKET_API_KEY = process.env.CRICKET_API_KEY;

// Function to fetch cricket data from the API
async function fetchFromOffset(offset) {
  console.log(`Fetching cricket data from offset ${offset}`);

  try {
    const response = await axios.get(`https://api.cricapi.com/v1/countries`, {
      params: {
        apikey: CRICKET_API_KEY,
        offset: offset
      }
    });

    console.log(`API Response received: ${JSON.stringify(response.data)}`);

    const data = response.data;
    if (data.status !== "success") {
      console.error("API response indicates failure:", data);
      return [];
    }

    let datarray = data.data;
    if (!datarray) {
      console.warn("No data found for current offset.");
      return [];
    } else if (offset >= data.info.totalRows) {
      console.log("No more data to fetch. Total rows reached.");
      return datarray;
    } else {
      console.log(`Fetching next batch of data from offset ${offset + 25}`);
      const nextData = await fetchFromOffset(offset + 25);
      return datarray.concat(nextData);
    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [];
  }
}

module.exports = { fetchFromOffset };
