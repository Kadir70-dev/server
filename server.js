const express = require("express");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Import the Swagger configuration

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const footballRoutes = require("./routes/footballRoutes");
const cricketRoutes = require("./routes/cricketRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routes
app.use("/", footballRoutes);
app.use("/", cricketRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
