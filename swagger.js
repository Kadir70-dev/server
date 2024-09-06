// server/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sports API Documentation",
      version: "1.0.0",
      description: "API documentation for Football and Cricket endpoints",
    },
  },
  apis: ["../server/routes/*.js"], // Path to your route files with Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
