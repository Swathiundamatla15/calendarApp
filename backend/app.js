const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS
const companyRoutes = require("./routes/companyRoutes");
const communicationRoutes = require("./routes/communicationRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Enable CORS for your frontend (replace with your Netlify frontend URL)
app.use(
  cors({
    origin: "https://swathi-calendar-app1.netlify.app", // Allow only this frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow required methods

    credentials: true, // Allow cookies to be sent if needed
  })
);

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/communications", communicationRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app; // Export app for use in server.js
