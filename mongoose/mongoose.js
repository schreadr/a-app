const mongoose = require("mongoose");
const Hashs = require("./hashs.model");

module.exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports.Hashs = Hashs;
