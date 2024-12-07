const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const Authentication = require("./Router/authentification");
const Profile = require("./Router/profile");

const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const swaggerSpec = require("./config/swaggerConfig");
const swaggerUi = require("swagger-ui-express");


const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
dotenv.config();


connectDB();

app.use("/api/auth", Authentication);
app.use("/api/profile", Profile);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

