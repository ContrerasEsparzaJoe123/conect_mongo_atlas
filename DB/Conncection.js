const mongoose = require("mongoose");

const URI = process.env.MONGO;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log();
};

module.exports = connectDB;
