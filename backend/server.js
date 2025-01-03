require("dotenv").config();
const app = require("./app");  // Import app from app.js
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://calendarapp-1.onrender.com`); // Use Render's URL here
});
