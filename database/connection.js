const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/imageUpload");
    console.log("database connected");
  } catch (error) {
    console.log(err);
  }
};

module.exports = connection;
