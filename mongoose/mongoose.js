const mongoose = require("mongoose");
const Location = require("./location.model");

//mongoose.set("useFindAndModify", false);

module.exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports.Location = Location;
