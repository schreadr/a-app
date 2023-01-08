const mongoose = require("mongoose");

const hashsSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Hashs", hashsSchema);
