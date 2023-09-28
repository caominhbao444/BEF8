const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/f8_learn");
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting", error);
  }
}
module.exports = { connect };
