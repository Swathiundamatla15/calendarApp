require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
