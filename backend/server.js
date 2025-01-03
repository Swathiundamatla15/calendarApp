require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  // Import CORS
const app = require("./app");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 5000;

// Enable CORS for your frontend (replace with your Netlify frontend URL)
app.use(cors({
  origin: 'https://yourfrontend.netlify.app', // Allow requests from your frontend domain
  methods: ['GET', 'POST'], // Adjust allowed methods as necessary
  credentials: true,  // Allow cookies to be sent if needed
}));

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://calendarapp-1.onrender.com`); // Use Render's URL here
});
