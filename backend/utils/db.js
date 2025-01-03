const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    "mongodb+srv://swathi010:Swathi1430@cluster1.fxy6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
