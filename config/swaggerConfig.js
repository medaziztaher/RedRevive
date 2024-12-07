
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 5000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'My API Documentation RedRevive' ,
      version: '1.0.0',
      description: 'API documentation for my RedRevive project',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/`,
      },
    ],
  },
  apis: ['./Router/*.js'], 
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
