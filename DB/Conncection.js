const mongoose = require("mongoose");

const URI =
  "mongodb+srv://joec:that1guy2@cluster0.tlgse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log();
};

module.exports = connectDB;
