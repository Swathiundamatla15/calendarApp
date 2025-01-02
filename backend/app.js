const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");
const communicationRoutes = require("./routes/communicationRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/communications", communicationRoutes);
app.use("/api/auth", authRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
