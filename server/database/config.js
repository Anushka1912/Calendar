const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    console.log("Connecting to MongoDB with connection string:", process.env.MONGODB_CNN);
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    console.error("Database connection error:", error.message);
    console.error("Detailed error:", error);
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;
